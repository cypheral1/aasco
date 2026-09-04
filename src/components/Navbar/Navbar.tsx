import styles from "./Navbar.module.css";
import Link from "next/link";
import { Image } from "../../ui/Image";

export function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <header className={styles.navbarCapsule} data-framecoded-motion={"rt"}>
        {/* Left Nav Navigation Links */}
        <nav className={styles.navLeft} aria-label="Primary Navigation Left">
          <Link href="/#top" className={styles.navLink}>
            <span>Home</span>
          </Link>
          <Link href="/about#top" className={styles.navLink}>
            <span>About us</span>
          </Link>
          <Link href="/works#top" className={styles.navLink}>
            <span>Properties</span>
          </Link>
        </nav>

        {/* Centered AASCO Logo Notch */}
        <div className={styles.navCenterLogo}>
          <Link href="/#top" className={styles.notchBrandLink} aria-label="AASCO Home">
            <Image
              src="/assets/aasco-logo-a.png"
              alt="AASCO Logo"
              className={styles.notchLogo}
              width={38}
              height={38}
              priority
            />
          </Link>
        </div>

        {/* Right Nav Navigation & Redirect Button */}
        <nav className={styles.navRight} aria-label="Primary Navigation Right">
          <Link href="/news#top" className={styles.navLink}>
            <span>Insights</span>
          </Link>
          <Link href="/contact#top" className={styles.navCtaButton} data-border="true">
            <span>Contact us</span>
            <svg
              className={styles.ctaArrow}
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </Link>
        </nav>
      </header>
    </div>
  );
}
