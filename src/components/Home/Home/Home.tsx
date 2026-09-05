"use client";

import styles from "./Home.module.css";
import { useState } from "react";
import type { FormEvent } from "react";
import { Navbar } from "../../Navbar";
import { AboutSection } from "../AboutSection";
import { AwardSection } from "../AwardSection";
import { HeroSection } from "../HeroSection";
import { HireUsSection } from "../HireUsSection";
import { ImageSection } from "../ImageSection";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("All Types / BHK");
  const [searchBudget, setSearchBudget] = useState("All Budgets");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set("search", searchQuery);
    if (searchType !== "All Types / BHK") params.set("type", searchType);
    if (searchBudget !== "All Budgets") params.set("budget", searchBudget);
    window.location.href = `/works${params.toString() ? `?${params}` : ""}#top`;
  }

  return (
    <div className={styles.norvin2} id={"main"} data-framecoded-state={"t0s1"}>
      {/* Static Real Estate Fixed Background */}
      <div className={styles.fixedRealEstateBg} aria-hidden="true">
        <div className={styles.fixedRealEstateOverlay} />
      </div>

      <section
        className={styles.norvinSection}
        data-layout-template={"true"}
        data-framecoded-state={"t0s3"}
      >
        <Navbar />
        <div className={styles.norvin3}>
          <div className={styles.top} id={"top"} data-framecoded-state={"t0s31"}></div>
          <HeroSection />
          <section className={styles.propertySearch} aria-label="Property search">
            <div className={styles.searchIntro}>
              <p className={styles.searchEyebrow}>FIND YOUR NEXT ADDRESS</p>
              <h2>Search <em>properties</em></h2>
            </div>
            <form className={styles.searchBar} onSubmit={handleSearch}>
              <label className={styles.searchField}>
                <span>Search</span>
                <input type="search" placeholder="Locality, project or developer" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
              </label>
              <label className={styles.searchSelect}>
                <span>Type</span>
                <select value={searchType} onChange={(event) => setSearchType(event.target.value)}>
                  <option>All Types / BHK</option><option>1 BHK</option><option>2 BHK</option><option>3 BHK</option>
                </select>
              </label>
              <label className={styles.searchSelect}>
                <span>Budget</span>
                <select value={searchBudget} onChange={(event) => setSearchBudget(event.target.value)}>
                  <option>All Budgets</option><option>Under 50 Lacs</option><option>50 Lacs - 1 Cr</option><option>Above 1 Cr</option>
                </select>
              </label>
              <button className={styles.searchButton} type="submit">Search <span aria-hidden="true">-&gt;</span></button>
            </form>
          </section>
          <div className={styles.postHero}>
            <AboutSection />
            <AwardSection />
            <div className={styles.image221}>
              <div className={styles.image222}>
                <HireUsSection />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div509} id={"overlay"}></div>
        <div className={styles.div510}></div>
        <div className={styles.image225}>
          <div className={styles.image226}>
            <ImageSection />
          </div>
        </div>
        <div className={styles.div534}></div>
      </section>
    </div>
  );
}
