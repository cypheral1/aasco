"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./SaiWorldCityView.module.css";

interface PlanConfig {
  type: string;
  bhk: string;
  carpetArea: string;
  price: string;
  rawPrice: number;
  tagline: string;
  features: string[];
}

const UNIT_CONFIGS: PlanConfig[] = [
  {
    type: "2 BHK Luxury",
    bhk: "2 BHK",
    carpetArea: "620 - 892 Sq.Ft.",
    price: "₹ 1.25 - 1.61 Cr*",
    rawPrice: 12500000,
    tagline: "Spacious dual-balcony luxury residence with master bedroom suite.",
    features: [
      "Vastu-compliant East-West layout",
      "Expansive sundeck with panoramic hill views",
      "Designer modular kitchen provision",
      "Premium vitrified flooring & Italian sanitaryware",
    ],
  },
  {
    type: "3 BHK Grande",
    bhk: "3 BHK",
    carpetArea: "1334 Sq.Ft.",
    price: "₹ 2.41 Cr*++",
    rawPrice: 24100000,
    tagline: "Expansive 3-bedroom residence with dedicated dining & double deck.",
    features: [
      "Separate servant & utility quarters",
      "Private foyer entrance with smart digital lock",
      "Walk-in wardrobe space in master suite",
      "Floor-to-ceiling acoustic soundproof glazing",
    ],
  },
  {
    type: "3.5 BHK Imperial",
    bhk: "3.5 BHK",
    carpetArea: "1598 Sq.Ft.",
    price: "₹ 2.89 Cr*++",
    rawPrice: 28900000,
    tagline: "Palatial 3.5 BHK with home office/study room and sunset views.",
    features: [
      "Dedicated executive work-from-home study",
      "Ultra-wide 28ft panoramic living room deck",
      "Premium imported marble finish living area",
      "High-speed private elevator access",
    ],
  },
  {
    type: "4 BHK Royal Penthouse",
    bhk: "4 BHK",
    carpetArea: "1858 Sq.Ft.",
    price: "₹ 3.34 Cr*++",
    rawPrice: 33400000,
    tagline: "The crown jewel of Panvel with 360-degree skyline and green hill vistas.",
    features: [
      "Private sky terrace with private jacuzzi provision",
      "Double-height living room with grand chandelier void",
      "4 expansive en-suite bedrooms with walk-in dressers",
      "3 dedicated covered multi-level car parking slots",
    ],
  },
];

const AMENITIES = [
  { category: "Club Vegas", title: "75,000 Sq.Ft. Club Vegas", desc: "Grand landmark multi-level clubhouse with international architecture.", icon: "🏛️" },
  { category: "Club Vegas", title: "Vegas Infinity Pool Deck", desc: "Resort-style temperature controlled lap pool with sunken aqua loungers.", icon: "🏊" },
  { category: "Club Vegas", title: "Private Cinema Theatre", desc: "32-seater Dolby Atmos luxury screening theatre for private movie premieres.", icon: "🎬" },
  { category: "Club Vegas", title: "Billiards & Cigar Lounge", desc: "Gentlemen's lounge with championship snooker and card tables.", icon: "🎱" },
  { category: "Wellness & Spa", title: "Hydrotherapy Spa & Sauna", desc: "Steam, sauna, and ayurvedic massage suites with professional therapists.", icon: "💆" },
  { category: "Wellness & Spa", title: "TechnoGym Olympic Fitness", desc: "Fully equipped cardio, strength, and CrossFit arena with personal trainers.", icon: "🏋️" },
  { category: "Wellness & Spa", title: "Zen Yoga & Meditation Deck", desc: "Open-air landscaped sunrise platform surrounded by calming water features.", icon: "🧘" },
  { category: "Sports Arena", title: "Multi-Sport Astro Turf", desc: "Floodlit turf for FIFA-standard 5-a-side football and box cricket leagues.", icon: "⚽" },
  { category: "Sports Arena", title: "Tennis & Badminton Courts", desc: "All-weather synthetic surface tennis and indoor squash courts.", icon: "🎾" },
  { category: "Sky Living", title: "Sky Observatory Deck", desc: "High-altitude telescope deck for star gazing and NMIA runway views.", icon: "🔭" },
  { category: "Nature & Gardens", title: "Central Thematic Green Park", desc: "Acres of manicured lawns, botanical gardens, and shaded gazebos.", icon: "🌳" },
  { category: "Kids & Family", title: "Kids Aqua Wonderland", desc: "Splash pads, water slides, and adventure play zones with safety flooring.", icon: "🎠" },
];

const CONNECTIVITY_ITEMS = [
  { name: "Palaspe Junction, Panvel", time: "4 Mins*", icon: "📍", type: "Junction" },
  { name: "NH 17: Mumbai–Goa Highway", time: "4 Mins*", icon: "🛣️", type: "Highway" },
  { name: "Panvel Bus Depot", time: "8 Mins*", icon: "🚌", type: "Transit" },
  { name: "Mumbai Trans Harbour Link (MTHL / Atal Setu)", time: "10 Mins*", icon: "🌉", type: "Sea Bridge" },
  { name: "Multi Modal Corridor (MMC)", time: "10 Mins*", icon: "🚇", type: "Expressway" },
  { name: "NH 4: Mumbai–Pune Highway", time: "12 Mins*", icon: "🚗", type: "Expressway" },
  { name: "Panvel Terminus Railway Station", time: "12 Mins*", icon: "🚆", type: "Rail Hub" },
  { name: "NH 4B: JNPT Expressway", time: "16 Mins*", icon: "⚓", type: "Port Link" },
  { name: "Navi Mumbai International Airport (NMIA)", time: "22 Mins*", icon: "✈️", type: "Aviation Hub" },
];

export function SaiWorldCityView() {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [amenityFilter, setAmenityFilter] = useState("All");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [siteVisitDate, setSiteVisitDate] = useState("");
  const [selectedConfigInterest, setSelectedConfigInterest] = useState("2 BHK");

  const [loanAmount, setLoanAmount] = useState(10000000); // 1 Cr
  const [tenureYears, setTenureYears] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);

  const calculateEMI = () => {
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;
    const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const selectedPlan = UNIT_CONFIGS[selectedPlanIndex];

  const filteredAmenities =
    amenityFilter === "All"
      ? AMENITIES
      : AMENITIES.filter((a) => a.category === amenityFilter);

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className={styles.propertyRoot}>
      {/* Top Floating Glass Navigation */}
      <header className={styles.topNav}>
        <div className={styles.navContainer}>
          <Link href="/works#top" className={styles.backLink}>
            <span className={styles.backArrow}>←</span> All Properties
          </Link>
          <div className={styles.brandTitleWrap}>
            <span className={styles.brandLogo}>AASCO</span>
            <span className={styles.brandDivider}>|</span>
            <span className={styles.brandSub}>LUXURY COLLECTION</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#overview">Overview</a>
            <a href="#pricing">Pricing &amp; Plans</a>
            <a href="#amenities">Club Vegas</a>
            <a href="#location">Connectivity</a>
            <a href="#booking" className={styles.navCta}>
              Book Site Visit ↗
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection} id="overview">
        <div className={styles.heroBg}>
          <img
            src="/assets/localities/panvel.jpg"
            alt="Sai World City Panvel Luxury Towers"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroVignette} />
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.launchBanner}>
            <span className={styles.liveIndicator}>
              <span className={styles.liveDot} />
              BOOKING OPEN
            </span>
            <span className={styles.phaseText}>◆ Phase 3 Launching Soon!</span>
            <span className={styles.earlyBirdText}>Avail Exclusive Early Bird Offers</span>
          </div>

          <div className={styles.titleArea}>
            <div className={styles.developerBadge}>
              <span>BY PARADISE GROUP</span>
              <span className={styles.devDot}>•</span>
              <span>AT PALASPE JUNCTION, PANVEL</span>
            </div>
            <h1 className={styles.heroHeading}>
              Sai World City <em>Panvel</em>
            </h1>
            <p className={styles.heroSubHeading}>
              A 38-Acre Global Lifestyle Integrated Mega-Township inspired by New York, Paris &amp; Dubai.
            </p>
          </div>

          <div className={styles.keyStatsGrid}>
            <div className={styles.statBox}>
              <span className={styles.statLabel}>PRICE GUIDE</span>
              <strong className={styles.statValue}>₹ 1.25 Cr* Onwards</strong>
              <span className={styles.statSub}>2, 3, 3.5 &amp; 4 BHK Luxury Homes</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statLabel}>LAND PARCEL</span>
              <strong className={styles.statValue}>38 Acres</strong>
              <span className={styles.statSub}>Integrated Global Township</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statLabel}>CLUBHOUSE</span>
              <strong className={styles.statValue}>75,000 Sq.Ft.</strong>
              <span className={styles.statSub}>Club Vegas Resort Living</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statLabel}>RERA APPROVED</span>
              <strong className={styles.statValue}>P52000006318</strong>
              <span className={styles.statSub}>Agent RERA: A51900029955</span>
            </div>
          </div>

          <div className={styles.heroActions}>
            <a href="#booking" className={styles.primaryBtn}>
              Schedule VIP Site Visit <span className={styles.btnArrow}>↗</span>
            </a>
            <button onClick={() => setIsVideoOpen(true)} className={styles.secondaryBtn}>
              <span className={styles.playIcon}>▶</span> Project Walkthrough
            </button>
            <a href="#pricing" className={styles.tertiaryBtn}>
              Floor Plans &amp; Cost Sheet ↓
            </a>
          </div>
        </div>
      </section>

      {/* About The Township Section */}
      <section className={styles.aboutTownshipSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>THE MASTER VISION</span>
            <h2>Where Everyday Living Meets <em>Global Grandeur</em></h2>
          </div>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutTextCol}>
              <p className={styles.leadPara}>
                Sai World City, Panvel is where everyday living quietly upgrades itself into something
                extraordinary. Spread across 38 acres at the strategic Palaspe junction, this integrated
                township blends global inspiration with grounded convenience.
              </p>
              <p className={styles.bodyPara}>
                Inspired by iconic cities like New York, Paris, and Dubai, it brings together thoughtfully
                designed 2, 2.5, 3, and 4 BHK homes within high-rise towers surrounded by open green spaces,
                curated landscapes, and world-class infrastructure.
              </p>
              <p className={styles.bodyPara}>
                With seamless connectivity to the upcoming Navi Mumbai International Airport, Mumbai Trans
                Harbour Link (Atal Setu), major national highways, and key educational and healthcare hubs,
                it places you right where growth, comfort, and opportunity meet without the chaos usually
                attached to it.
              </p>

              <div className={styles.highlightsChecklist}>
                <div className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>2 to 4 BHK luxury high-rise residences with panoramic balconies</span>
                </div>
                <div className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>75,000 sq. ft. Club Vegas clubhouse with 50+ lifestyle amenities</span>
                </div>
                <div className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Multi-level parking with landscaped podium recreation decks</span>
                </div>
                <div className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>High capital appreciation zone located 22 mins from NMIA International Airport</span>
                </div>
              </div>
            </div>

            <div className={styles.aboutImageCol}>
              <div className={styles.aboutImageCard}>
                <img
                  src="/assets/service-penthouse.jpg"
                  alt="Sai World City Luxury High Rise Interior"
                  className={styles.aboutImage}
                />
                <div className={styles.imageOverlayBadge}>
                  <span className={styles.badgeNumber}>38</span>
                  <span className={styles.badgeText}>Acres of Cosmopolitan Living</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pricing & Floor Plan Matrix */}
      <section className={styles.pricingSection} id="pricing">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>UNITS &amp; PRICING</span>
            <h2>Area &amp; <em>Pricing Breakdown</em></h2>
            <p className={styles.sectionDesc}>
              Select your preferred luxury configuration to view carpet areas, pricing, and unit features.
            </p>
          </div>

          <div className={styles.configTabs}>
            {UNIT_CONFIGS.map((config, index) => (
              <button
                key={config.bhk}
                className={`${styles.configTabBtn} ${selectedPlanIndex === index ? styles.activeTab : ""}`}
                onClick={() => setSelectedPlanIndex(index)}
              >
                <span className={styles.tabBhk}>{config.bhk}</span>
                <span className={styles.tabPrice}>{config.price.split(" ")[0]} {config.price.split(" ")[1]}</span>
              </button>
            ))}
          </div>

          <div className={styles.planDetailsCard}>
            <div className={styles.planInfoCol}>
              <div className={styles.planBadgeRow}>
                <span className={styles.planBhkBadge}>{selectedPlan.bhk}</span>
                <span className={styles.carpetBadge}>Carpet Area: {selectedPlan.carpetArea}</span>
              </div>
              <h3 className={styles.planTitle}>{selectedPlan.type}</h3>
              <p className={styles.planTagline}>{selectedPlan.tagline}</p>

              <div className={styles.priceHighlightBox}>
                <span className={styles.priceHighlightLabel}>SPECIAL PRICE (ONWARDS)</span>
                <strong className={styles.priceHighlightVal}>{selectedPlan.price}</strong>
                <span className={styles.priceHighlightNote}>*Government taxes &amp; registration extra</span>
              </div>

              <div className={styles.featuresList}>
                <span className={styles.featuresTitle}>SPECIFICATION HIGHLIGHTS:</span>
                <ul>
                  {selectedPlan.features.map((feat, i) => (
                    <li key={i}>
                      <span className={styles.featureDot}>◈</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.planCtaRow}>
                <a href="#booking" className={styles.planBookBtn}>
                  Request Floor Plan PDF &amp; Cost Sheet ↗
                </a>
              </div>
            </div>

            {/* Interactive EMI Estimator */}
            <div className={styles.emiCalculatorCol}>
              <div className={styles.emiCard}>
                <h4 className={styles.emiTitle}>
                  <span className={styles.emiIcon}>📊</span> EMI Estimator
                </h4>
                <div className={styles.emiResultBox}>
                  <span className={styles.emiResultLabel}>ESTIMATED MONTHLY EMI</span>
                  <strong className={styles.emiAmount}>₹ {calculateEMI().toLocaleString("en-IN")}/mo</strong>
                </div>

                <div className={styles.sliderGroup}>
                  <div className={styles.sliderHeader}>
                    <span>Loan Amount</span>
                    <strong>₹ {(loanAmount / 100000).toFixed(1)} Lakhs</strong>
                  </div>
                  <input
                    type="range"
                    min="5000000"
                    max="35000000"
                    step="500000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className={styles.rangeSlider}
                  />
                </div>

                <div className={styles.sliderGroup}>
                  <div className={styles.sliderHeader}>
                    <span>Tenure (Years)</span>
                    <strong>{tenureYears} Years</strong>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className={styles.rangeSlider}
                  />
                </div>

                <div className={styles.sliderGroup}>
                  <div className={styles.sliderHeader}>
                    <span>Interest Rate</span>
                    <strong>{interestRate}% p.a.</strong>
                  </div>
                  <input
                    type="range"
                    min="7.5"
                    max="12"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className={styles.rangeSlider}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Club Vegas 75K Amenities Section */}
      <section className={styles.amenitiesSection} id="amenities">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>RESORT-STYLE LIVING</span>
            <h2>75,000 Sq.Ft. Club Vegas &amp; <em>50+ Amenities</em></h2>
            <p className={styles.sectionDesc}>
              A world of entertainment, sports, and serenity built to exceed the finest international clubhouses.
            </p>
          </div>

          <div className={styles.amenityFilterPills}>
            {["All", "Club Vegas", "Wellness & Spa", "Sports Arena", "Sky Living", "Nature & Gardens", "Kids & Family"].map(
              (cat) => (
                <button
                  key={cat}
                  className={`${styles.filterPill} ${amenityFilter === cat ? styles.activeFilterPill : ""}`}
                  onClick={() => setAmenityFilter(cat)}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          <div className={styles.amenityGrid}>
            {filteredAmenities.map((amenity, i) => (
              <div key={i} className={styles.amenityCard}>
                <div className={styles.amenityIconWrapper}>{amenity.icon}</div>
                <div className={styles.amenityCategoryTag}>{amenity.category}</div>
                <h4 className={styles.amenityTitle}>{amenity.title}</h4>
                <p className={styles.amenityDesc}>{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Location Radar Section */}
      <section className={styles.locationSection} id="location">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>STRATEGIC CONNECTIVITY</span>
            <h2>Connected to the <em>Heart of MMR Growth</em></h2>
            <p className={styles.sectionDesc}>
              Positioned at Palaspe Junction, Panvel with ultra-fast highway and airport access.
            </p>
          </div>

          <div className={styles.connectivityGrid}>
            {CONNECTIVITY_ITEMS.map((item, idx) => (
              <div key={idx} className={styles.connectivityCard}>
                <div className={styles.connIcon}>{item.icon}</div>
                <div className={styles.connInfo}>
                  <span className={styles.connType}>{item.type}</span>
                  <h4 className={styles.connName}>{item.name}</h4>
                </div>
                <div className={styles.connTimeBadge}>{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Legacy Section */}
      <section className={styles.developerSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.developerCard}>
            <div className={styles.devHeader}>
              <span className={styles.devEyebrow}>DEVELOPER SPOTLIGHT</span>
              <h3>Paradise Group — <em>34 Years of Architectural Excellence</em></h3>
              <p className={styles.devDesc}>
                Established in 1990 by Mr. Madhu Bathija, Paradise Group is a premier real estate developer with
                over 125 landmark developments, 25,000+ satisfied families, and an extensive land bank of 12.5 million
                sq. ft. across Mumbai and Navi Mumbai.
              </p>
            </div>

            <div className={styles.devStatsRow}>
              <div className={styles.devStat}>
                <strong>1990</strong>
                <span>Year Founded</span>
              </div>
              <div className={styles.devStat}>
                <strong>125+</strong>
                <span>Completed Projects</span>
              </div>
              <div className={styles.devStat}>
                <strong>25,000+</strong>
                <span>Happy Residents</span>
              </div>
              <div className={styles.devStat}>
                <strong>12.5M</strong>
                <span>Sq.Ft. Land Bank</span>
              </div>
            </div>

            <div className={styles.reraDisclosures}>
              <div className={styles.reraBox}>
                <span>PROJECT RERA REGISTRATION</span>
                <strong>P52000006318 | P52000022708</strong>
              </div>
              <div className={styles.reraBox}>
                <span>AUTHORIZED AGENT RERA (AASCO)</span>
                <strong>A51900029955</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Booking & Consultation Section */}
      <section className={styles.bookingSection} id="booking">
        <div className={styles.sectionContainer}>
          <div className={styles.bookingWrapper}>
            <div className={styles.bookingIntro}>
              <span className={styles.bookingEyebrow}>EXCLUSIVE CONSULTATION</span>
              <h2>Schedule a <em>VIP Site Visit</em></h2>
              <p className={styles.bookingLead}>
                Experience Sai World City Panvel with an exclusive personalized guided tour, complimentary
                pickup, customized payment plans, and early bird phase 3 offers.
              </p>

              <div className={styles.bookingPerks}>
                <div className={styles.perkItem}>
                  <span className={styles.perkDot}>✓</span>
                  <span>Guaranteed best developer pricing &amp; early bird inventory</span>
                </div>
                <div className={styles.perkItem}>
                  <span className={styles.perkDot}>✓</span>
                  <span>End-to-end legal verification &amp; home loan assistance</span>
                </div>
                <div className={styles.perkItem}>
                  <span className={styles.perkDot}>✓</span>
                  <span>Zero brokerage consulting through Aasco Realty</span>
                </div>
              </div>

              <div className={styles.whatsappDirect}>
                <span>Prefer instant messaging?</span>
                <a
                  href="https://wa.me/919999999999?text=Hello%20Aasco%2C%20I%20am%20interested%20in%20Sai%20World%20City%20Panvel."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Chat on WhatsApp ↗
                </a>
              </div>
            </div>

            <div className={styles.bookingFormContainer}>
              {formSubmitted ? (
                <div className={styles.successState}>
                  <span className={styles.successCheck}>✓</span>
                  <h3>VIP Site Visit Scheduled!</h3>
                  <p>
                    Thank you! Our senior property advisor will contact you within 15 minutes to confirm your
                    exclusive site tour and dispatch the official Sai World City brochure.
                  </p>
                  <button onClick={() => setFormSubmitted(false)} className={styles.resetBtn}>
                    Book another visit
                  </button>
                </div>
              ) : (
                <form className={styles.bookingForm} onSubmit={handleBookingSubmit}>
                  <h3 className={styles.formTitle}>Request Callback &amp; Visit</h3>

                  <div className={styles.formField}>
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" required />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label>Mobile Phone</label>
                      <input type="tel" placeholder="+91 98765 43210" required />
                    </div>
                    <div className={styles.formField}>
                      <label>Email Address</label>
                      <input type="email" placeholder="name@domain.com" required />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label>Preferred Configuration</label>
                      <select
                        value={selectedConfigInterest}
                        onChange={(e) => setSelectedConfigInterest(e.target.value)}
                      >
                        <option value="2 BHK">2 BHK (620-892 Sq.Ft)</option>
                        <option value="3 BHK">3 BHK (1334 Sq.Ft)</option>
                        <option value="3.5 BHK">3.5 BHK (1598 Sq.Ft)</option>
                        <option value="4 BHK">4 BHK Penthouse (1858 Sq.Ft)</option>
                      </select>
                    </div>
                    <div className={styles.formField}>
                      <label>Preferred Visit Date</label>
                      <input
                        type="date"
                        value={siteVisitDate}
                        onChange={(e) => setSiteVisitDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={styles.checkboxGroup}>
                    <label className={styles.checkboxLabel}>
                      <input type="checkbox" defaultChecked />
                      <span>Request complimentary private pickup &amp; drop for site visit</span>
                    </label>
                  </div>

                  <button type="submit" className={styles.submitBookingBtn}>
                    Confirm VIP Site Visit ➔
                  </button>

                  <p className={styles.disclaimerText}>
                    By submitting, you authorize Aasco Realty to contact you regarding Sai World City Panvel.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Video Walkthrough Modal */}
      {isVideoOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsVideoOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h4>Sai World City Panvel — Project Walkthrough</h4>
              <button className={styles.closeModalBtn} onClick={() => setIsVideoOpen(false)}>
                ✕
              </button>
            </div>
            <div className={styles.videoEmbedWrapper}>
              <div className={styles.placeholderVideo}>
                <div className={styles.playCenter}>
                  <span className={styles.playIconBig}>▶</span>
                  <p>Sai World City Panvel — Architectural Walkthrough</p>
                  <span>Experience the 38-Acre Global Township &amp; 75K Sq.Ft Club Vegas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Footer Disclosures */}
      <footer className={styles.bottomFooter}>
        <div className={styles.footerContainer}>
          <div className={styles.footerTop}>
            <div>
              <span className={styles.footerBrand}>AASCO REALTY</span>
              <p className={styles.footerTagline}>From Dream to Reality · Curated MMR Luxury Properties</p>
            </div>
            <div className={styles.footerLinks}>
              <Link href="/works#top">All Properties</Link>
              <Link href="/about#top">About Aasco</Link>
              <Link href="/contact#top">Contact</Link>
              <Link href="/privacy-policy#top">Privacy Policy</Link>
            </div>
          </div>
          <div className={styles.footerDisclaimers}>
            <p>
              Project RERA: P52000006318 | P52000022708 · Agent RERA: A51900029955 (Aasco Realty).
            </p>
            <p>
              The content presented on this page is for informational guidance. Prices and availability are subject
              to change as per developer discretion. All trademarks and project names are properties of Paradise Group.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
