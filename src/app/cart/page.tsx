"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./cart.module.css";

const properties = [
  { slug: "meghna-star-walk-kharghar", title: "Meghna Star Walk At Kharghar NX.", location: "Kharghar", price: "23.99 Lacs* - 32.99 Lacs*", image: "/assets/rR3iz1wvsX1fxQ49fxhGNehO8r0-b34da70cbc.png" },
  { slug: "arihant-avanti-palace", title: "Arihant Avanti Palace", location: "Dombivli", price: "42 Lacs* - 65 Lacs*", image: "/assets/cMgOK9Ll5ZGWnUhkP6BKLP58Bmc-f6efb2ec93.png" },
  { slug: "mumbai-homes", title: "Mumbai Homes", location: "Mumbai", price: "Explore available properties", image: "/assets/service-residence.jpg" },
  { slug: "navi-mumbai-homes", title: "Navi Mumbai Properties", location: "Navi Mumbai", price: "Explore available properties", image: "/assets/realty-city-night.jpg" },
  { slug: "thane-residences", title: "Thane Residences", location: "Thane", price: "Explore available properties", image: "/assets/service-penthouse.jpg" },
  { slug: "taloja-new-homes", title: "Taloja New Homes", location: "Taloja", price: "Explore available properties", image: "/assets/service-residence.jpg" },
];

export default function ShortlistPage() {
  const [saved, setSaved] = useState<string[]>([]);

  useEffect(() => {
    const value = window.localStorage.getItem("aasco-shortlist");
    if (value) setSaved(JSON.parse(value));
  }, []);

  function remove(slug: string) {
    const next = saved.filter((item) => item !== slug);
    setSaved(next);
    window.localStorage.setItem("aasco-shortlist", JSON.stringify(next));
  }

  const selected = properties.filter((property) => saved.includes(property.slug));
  return <main className={styles.page}><header className={styles.header}><Link href="/works#top">← Properties</Link><Link className={styles.brand} href="/#top">Aasco Realty</Link><Link href="/contact#top">Enquire ↗</Link></header><section className={styles.content}><p className={styles.eyebrow}>YOUR SHORTLIST</p><h1>Saved <em>properties</em></h1><p className={styles.intro}>{selected.length} properties saved for your next viewing.</p>{selected.length ? <div className={styles.grid}>{selected.map((property) => <article className={styles.card} key={property.slug}><Link href={`/properties/${property.slug}`} className={styles.image}><img src={property.image} alt={property.title} /></Link><div className={styles.cardInfo}><p>{property.location}</p><h2>{property.title}</h2><strong>{property.price}</strong><button type="button" onClick={() => remove(property.slug)}>Remove</button></div></article>)}</div> : <div className={styles.empty}><p>Your shortlist is empty.</p><Link href="/works#top">Explore properties ↗</Link></div>}</section></main>;
}
