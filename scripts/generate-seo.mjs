import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const PAGE_PATHS = ["/","/contact","/about","/works/unerio-landing-page","/works/jorger-clarkson","/works/ds-freelance-developer","/works/architecture-studio","/works","/news","/privacy-policy","/works/neon-drift-studio","/works/the-canvas-theory","/news/visual-brand-and-storytelling","/news/trends-shaping-the-future","/news/big-brands-that-truly-last-long"];
const root = process.cwd();

async function readEnv(name) {
  try {
    const text = await readFile(resolve(root, name), "utf8");
    const values = {};
    for (const rawLine of text.split(/\r?\n/)) {
      const match = rawLine.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
      if (!match) continue;
      let value = match[2] || "";
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      } else {
        value = value.replace(/\s+#.*$/, "").trim();
      }
      values[match[1]] = value;
    }
    return values;
  } catch {
    return {};
  }
}

function normalizeSiteUrl(value) {
  try {
    const parsed = new URL(value);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") throw new Error("unsupported protocol");
    const normalized = parsed.toString();
    return normalized.endsWith("/") ? normalized.slice(0, -1) : normalized;
  } catch {
    throw new Error("SITE_URL must be an absolute http(s) URL, received: " + JSON.stringify(value));
  }
}

function absoluteUrl(siteUrl, path) {
  let relative = path || "/";
  while (relative.startsWith("/")) relative = relative.slice(1);
  return new URL(relative, siteUrl + "/").toString();
}

function escapeXml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const fileEnv = { ...(await readEnv(".env")), ...(await readEnv(".env.local")) };
const configuredSiteUrl = process.env.SITE_URL || fileEnv.SITE_URL;
if (!configuredSiteUrl) {
  throw new Error("SITE_URL is required. Add it to .env before running dev or build.");
}
const siteUrl = normalizeSiteUrl(configuredSiteUrl);
const urls = PAGE_PATHS.map((path) => "  <url>\n    <loc>" + escapeXml(absoluteUrl(siteUrl, path)) + "</loc>\n  </url>").join("\n");
const sitemap = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n" + urls + "\n</urlset>\n";
const robots = "User-agent: *\nAllow: /\n\nSitemap: " + absoluteUrl(siteUrl, "/sitemap.xml") + "\n";

await mkdir(resolve(root, "public"), { recursive: true });
await Promise.all([
  writeFile(resolve(root, "public", "sitemap.xml"), sitemap, "utf8"),
  writeFile(resolve(root, "public", "robots.txt"), robots, "utf8"),
]);
console.log("[framecoded] SEO files generated for " + siteUrl);
