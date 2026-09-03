"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./PropertyDirectory.module.css";

type Property = {
  slug: string;
  title: string;
  location: string;
  type: string;
  status: string;
  budget: string;
  price: string;
  details: string;
  image: string;
};

const properties: Property[] = [
  { slug: "meghna-star-walk-kharghar", title: "Meghna Star Walk At Kharghar NX.", location: "Kharghar", type: "2 BHK", status: "New Launch", budget: "Under 50 Lacs", price: "23.99 Lacs* - 32.99 Lacs*", details: "360 - 600 sq. ft. · 1, 2 BHK", image: "/assets/rR3iz1wvsX1fxQ49fxhGNehO8r0-b34da70cbc.png" },
  { slug: "arihant-avanti-palace", title: "Arihant Avanti Palace", location: "Dombivli", type: "2 BHK", status: "Ready to Move", budget: "50 Lacs - 1 Cr", price: "42 Lacs* - 65 Lacs*", details: "400 - 600 sq. ft. · 1, 2 BHK", image: "/assets/cMgOK9Ll5ZGWnUhkP6BKLP58Bmc-f6efb2ec93.png" },
  { slug: "mumbai-homes", title: "Mumbai Homes", location: "Mumbai", type: "3 BHK", status: "Featured", budget: "Above 1 Cr", price: "Explore available properties", details: "Residential homes and investments", image: "/assets/service-residence.jpg" },
  { slug: "navi-mumbai-homes", title: "Navi Mumbai Properties", location: "Navi Mumbai", type: "2 BHK", status: "Featured", budget: "50 Lacs - 1 Cr", price: "Explore available properties", details: "Connected homes and investments", image: "/assets/realty-city-night.jpg" },
  { slug: "thane-residences", title: "Thane Residences", location: "Thane", type: "2 BHK", status: "New Launch", budget: "Above 1 Cr", price: "Explore available properties", details: "Residential homes and investments", image: "/assets/service-penthouse.jpg" },
  { slug: "taloja-new-homes", title: "Taloja New Homes", location: "Taloja", type: "1 BHK", status: "Ready to Move", budget: "Under 50 Lacs", price: "Explore available properties", details: "New homes and investments", image: "/assets/service-residence.jpg" },
];

const readFilter = (key: string) => new URLSearchParams(window.location.search).get(key) ?? "";

export function PropertyDirectory() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [type, setType] = useState("All Types / BHK");
  const [status, setStatus] = useState("All Statuses");
  const [budget, setBudget] = useState("All Budgets");
  const [sort, setSort] = useState("Most Relevant");
  const [shortlist, setShortlist] = useState<string[]>([]);

  useEffect(() => {
    setQuery(readFilter("search"));
    setLocation(readFilter("location") || "All Locations");
    setType(readFilter("type") || "All Types / BHK");
    setBudget(readFilter("budget") || "All Budgets");
    const saved = window.localStorage.getItem("aasco-shortlist");
    if (saved) setShortlist(JSON.parse(saved));
  }, []);

  function toggleShortlist(slug: string) {
    const next = shortlist.includes(slug) ? shortlist.filter((item) => item !== slug) : [...shortlist, slug];
    setShortlist(next);
    window.localStorage.setItem("aasco-shortlist", JSON.stringify(next));
  }

  const filtered = useMemo(() => {
    const result = properties.filter((property) => {
      const haystack = `${property.title} ${property.location}`.toLowerCase();
      return (!query || haystack.includes(query.toLowerCase())) &&
        (location === "All Locations" || property.location === location) &&
        (type === "All Types / BHK" || property.type === type) &&
        (status === "All Statuses" || property.status === status) &&
        (budget === "All Budgets" || property.budget === budget);
    });
    if (sort === "Name A-Z") result.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "Location") result.sort((a, b) => a.location.localeCompare(b.location));
    return result;
  }, [budget, location, query, sort, status, type]);

  return (
    <section className={styles.directory} aria-labelledby="property-directory-title">
      <div className={styles.directoryHeader}>
        <div><p className={styles.eyebrow}>CURATED PROPERTY DIRECTORY</p><h2 id="property-directory-title">Find your <em>ideal property</em></h2></div>
        <p className={styles.count}>{filtered.length} verified properties across Navi Mumbai</p>
      </div>
      <div className={styles.filters}>
        <label className={styles.search}><span>Search</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Locality, project or developer" /></label>
        <label><span>Location</span><select value={location} onChange={(event) => setLocation(event.target.value)}><option>All Locations</option><option>Kharghar</option><option>Dombivli</option><option>Mumbai</option><option>Navi Mumbai</option><option>Thane</option><option>Taloja</option></select></label>
        <label><span>Type</span><select value={type} onChange={(event) => setType(event.target.value)}><option>All Types / BHK</option><option>1 BHK</option><option>2 BHK</option><option>3 BHK</option></select></label>
        <label><span>Status</span><select value={status} onChange={(event) => setStatus(event.target.value)}><option>All Statuses</option><option>New Launch</option><option>Ready to Move</option><option>Featured</option></select></label>
        <label><span>Budget</span><select value={budget} onChange={(event) => setBudget(event.target.value)}><option>All Budgets</option><option>Under 50 Lacs</option><option>50 Lacs - 1 Cr</option><option>Above 1 Cr</option></select></label>
        <label><span>Sort</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option>Most Relevant</option><option>Name A-Z</option><option>Location</option></select></label>
      </div>
      <div className={styles.grid}>
        {filtered.map((property) => <article className={styles.card} key={property.slug}>
          <Link href={`/properties/${property.slug}`} className={styles.image}><img src={property.image} alt={property.title} /><span>{property.status}</span></Link>
          <div className={styles.cardBody}><div><p>{property.location}</p><h3>{property.title}</h3><small>{property.details}</small></div><button type="button" className={shortlist.includes(property.slug) ? styles.saved : styles.save} onClick={() => toggleShortlist(property.slug)} aria-label={`${shortlist.includes(property.slug) ? "Remove" : "Add"} ${property.title} ${shortlist.includes(property.slug) ? "from" : "to"} shortlist`}>{shortlist.includes(property.slug) ? "Saved" : "Save"}</button><strong>{property.price}</strong></div>
        </article>)}
      </div>
      {filtered.length === 0 && <p className={styles.empty}>No properties match those filters. Try widening your search.</p>}
      <div className={styles.directoryFooter}><span>{shortlist.length} saved for comparison</span><Link href="/contact#top">Talk to an advisor ↗</Link></div>
    </section>
  );
}
