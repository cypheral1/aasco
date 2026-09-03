"use client";

import styles from "./Home.module.css";
import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AboutSection } from "../AboutSection";
import { AwardSection } from "../AwardSection";
import { CertificationsService } from "../CertificationsService";
import { HeroSection } from "../HeroSection";
import { HireUsSection } from "../HireUsSection";
import { ImageSection } from "../ImageSection";
import { ProcessSection } from "../ProcessSection";
import { ProjectSection } from "../ProjectSection";

export function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  function navigateFromMenu(path: string) {
    setMenuOpen(false);
    router.push(path);
  }
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
      <section
        className={styles.norvinSection}
        data-layout-template={"true"}
        data-framecoded-state={"t0s3"}
      >
        <div className={styles.div6}>
          <div className={styles.newYorkUSA2} data-framecoded-state={"t0s5"}>
            <div className={styles.menu2} data-framecoded-motion={"rt"}>
              <div className={styles.menuTime} data-framecoded-state={"hhvt1xzs29303"}>
                <div className={styles.menu3}>
                  <div
                    className={styles.primary}
                    data-border={"true"}
                    data-highlight={"true"}
                    tabIndex={0}
                    role="button"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") setMenuOpen((open) => !open);
                    }}
                  >
                    <div
                      className={styles.hamMenu}
                      data-highlight={"true"}
                      tabIndex={0}
                      data-framecoded-trigger={"hycgpg9"}
                    >
                      <div className={styles.container}>
                        <div className={styles.topBar} data-framecoded-state={"hycgpg9s0_0"}></div>
                        <div
                          className={styles.bottomBar}
                          data-framecoded-state={"hycgpg9s0_1"}
                        ></div>
                        <div
                          className={styles.centerBar}
                          data-framecoded-state={"hycgpg9s0_2"}
                        ></div>
                      </div>
                      <div
                        className={styles.overlayFrame}
                        data-framecoded-state={"hycgpg9s1"}
                      ></div>
                    </div>
                    <div className={styles.menu}>
                      <p className={styles.menu4} dir={"auto"}>
                        Menu
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.time} data-framecoded-state={"hhvt1xzs29310"}>
                  <div className={styles.newYorkUSA}>
                    <p className={styles.newYorkUSA3} dir={"auto"}>
                      / New York, USA -{" "}
                    </p>
                  </div>
                  <div className={styles.p831Pm} data-framecoded-state={"hhvt1xzs29313"}>
                    <p className={styles.p831Pm2} data-framecoded-state={"hhvt1xzs29314"}>
                      8:31 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.addressContact}>
                <div className={styles.startProject2}>
                  <Link
                    href={"/contact#top"}
                    className={styles.primary2}
                    data-border={"true"}
                    data-framecoded-trigger={"htkzva5"}
                  >
                    <div className={styles.filler} data-framecoded-state={"htkzva5s0"}></div>
                    <div className={styles.startProject3} data-framecoded-state={"htkzva5s1"}>
                      <div className={styles.startProject} data-framecoded-state={"htkzva5s1_0"}>
                        <p className={styles.startProject4} dir={"auto"}>
                          Start Project
                        </p>
                      </div>
                      <div className={styles.startProject22} data-framecoded-state={"htkzva5s1_1"}>
                        <p className={styles.startProject5} dir={"auto"}>
                          Start Project
                        </p>
                      </div>
                    </div>
                    <div className={styles.iconBox}>
                      <div className={styles.arrowUp} aria-hidden={"true"}>
                        <div className={styles.div3}>
                          <span
                            className={styles.icon}
                            data-framecoded-svg="true"
                            aria-hidden="true"
                            dangerouslySetInnerHTML={{
                              __html:
                                '<svg style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg11542283135" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {menuOpen && (
          <nav className={styles.menuOverlay} aria-label="Main menu">
            <div className={styles.menuOverlayHeader}>
              <span>AASCO</span>
              <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">Close <span>×</span></button>
            </div>
            <p className={styles.menuOverlayIntro}>Find your place<br /><em>in the city.</em></p>
            <a href="/#top" onClick={(event) => { event.preventDefault(); navigateFromMenu("/#top"); }}>Home</a>
            <a href="/about#top" onClick={(event) => { event.preventDefault(); navigateFromMenu("/about#top"); }}>About us</a>
            <a href="/works#top" onClick={(event) => { event.preventDefault(); navigateFromMenu("/works#top"); }}>Properties</a>
            <a href="/contact#top" onClick={(event) => { event.preventDefault(); navigateFromMenu("/contact#top"); }}>Contact us</a>
          </nav>
        )}
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
            <ProcessSection />
            <CertificationsService />
            <ProjectSection />
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
