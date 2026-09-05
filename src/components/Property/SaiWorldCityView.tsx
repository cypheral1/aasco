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
  dimensions: { room: string; size: string }[];
  features: string[];
  blueprintImg: string;
}

const UNIT_CONFIGS: PlanConfig[] = [
  {
    type: "2 BHK Luxury Elite",
    bhk: "2 BHK",
    carpetArea: "620 - 892 Sq.Ft.",
    price: "₹ 1.25 - 1.61 Cr*",
    rawPrice: 12500000,
    tagline: "Spacious dual-balcony luxury residence with master bedroom suite & expansive sunrise sundeck.",
    dimensions: [
      { room: "Grand Living & Dining", size: "18'6\" × 11'0\"" },
      { room: "Master Suite + Dresser", size: "12'0\" × 11'6\"" },
      { room: "Second Bedroom", size: "11'0\" × 10'0\"" },
      { room: "Gourmet Modular Kitchen", size: "9'6\" × 8'0\"" },
      { room: "Panoramic Sundeck", size: "11'0\" × 4'6\"" },
    ],
    features: [
      "100% Vastu-compliant East-West layout with cross ventilation",
      "Expansive sundeck with panoramic green hills & skyline views",
      "Designer modular kitchen provision with granite platform",
      "Premium imported vitrified flooring & Kohler/Grohe sanitaryware",
      "Home automation ready with smart digital video door security",
    ],
    blueprintImg: "/assets/service-penthouse.jpg",
  },
  {
    type: "3 BHK Grande Royale",
    bhk: "3 BHK",
    carpetArea: "1334 Sq.Ft.",
    price: "₹ 2.41 Cr*++",
    rawPrice: 24100000,
    tagline: "Expansive 3-bedroom residence with dedicated dining area, double deck, and private foyer entrance.",
    dimensions: [
      { room: "Living & Formal Dining", size: "22'4\" × 13'0\"" },
      { room: "Master En-Suite Bedroom", size: "14'6\" × 12'0\"" },
      { room: "Guest Bedroom 1", size: "12'0\" × 11'0\"" },
      { room: "Children's Bedroom", size: "11'6\" × 10'6\"" },
      { room: "Double Extended Balcony", size: "16'0\" × 5'0\"" },
    ],
    features: [
      "Separate servant & utility quarter provision",
      "Private foyer entrance with biometric high-security lock",
      "Walk-in wardrobe space in master suite with glass cubicle bath",
      "Floor-to-ceiling acoustic soundproof double glazing",
      "Dedicated high-speed elevator access per floor cluster",
    ],
    blueprintImg: "/assets/service-interior.jpg",
  },
  {
    type: "3.5 BHK Imperial Suite",
    bhk: "3.5 BHK",
    carpetArea: "1598 Sq.Ft.",
    price: "₹ 2.89 Cr*++",
    rawPrice: 28900000,
    tagline: "Palatial 3.5 BHK with executive home office/study room, dual master suites, and sunset deck.",
    dimensions: [
      { room: "Grand Salon & Dining Deck", size: "25'0\" × 14'6\"" },
      { room: "Presidential Master Suite", size: "16'0\" × 13'0\"" },
      { room: "Executive Study / Library", size: "10'6\" × 9'0\"" },
      { room: "Junior Suite 2", size: "13'0\" × 12'0\"" },
      { room: "Sunset Sky Balcony", size: "20'0\" × 5'6\"" },
    ],
    features: [
      "Dedicated executive work-from-home study / library room",
      "Ultra-wide 20ft panoramic living room sunrise-to-sunset deck",
      "Premium imported Italian marble finish in living & dining areas",
      "Concealed Daikin/Mitsubishi VRV air-conditioning provisions",
      "2 covered podium multi-level car parking allocations",
    ],
    blueprintImg: "/assets/service-custom.jpg",
  },
  {
    type: "4 BHK Royal Sky Penthouse",
    bhk: "4 BHK",
    carpetArea: "1858 Sq.Ft.",
    price: "₹ 3.34 Cr*++",
    rawPrice: 33400000,
    tagline: "The crown jewel of Panvel with 360-degree skyline, private sky terrace, and double-height ceiling voids.",
    dimensions: [
      { room: "Double-Height Grand Hall", size: "28'6\" × 16'0\"" },
      { room: "Master Presidential Suite", size: "18'0\" × 14'0\"" },
      { room: "En-Suite Guest Bedrooms (3)", size: "14'0\" × 12'6\" (ea.)" },
      { room: "Private Sky Jacuzzi Terrace", size: "24'0\" × 8'0\"" },
      { room: "Chef's Island Kitchen + Utility", size: "14'6\" × 10'0\"" },
    ],
    features: [
      "Private sky terrace with jacuzzi and BBQ party pavilion provision",
      "Double-height living room with grand chandelier Void (18ft ceiling)",
      "4 expansive en-suite bedrooms with walk-in designer dressers",
      "3 dedicated covered multi-level reserved car parking slots",
      "Direct express elevator access with private keycard security",
    ],
    blueprintImg: "/assets/localities/panvel.jpg",
  },
];

const AMENITIES = [
  { category: "Club Vegas", title: "75,000 Sq.Ft. Club Vegas", desc: "Grand landmark multi-level clubhouse with international Las Vegas-inspired architecture.", icon: "🏛️" },
  { category: "Club Vegas", title: "Vegas Infinity Lap Pool", desc: "Resort-style temperature controlled lap pool with sunken aqua loungers & cabanas.", icon: "🏊" },
  { category: "Club Vegas", title: "Private Dolby Atmos Cinema", desc: "32-seater luxury screening theatre for private movie premieres and sporting events.", icon: "🎬" },
  { category: "Club Vegas", title: "Billiards & Cigar Lounge", desc: "Gentlemen's clubroom with championship snooker, poker, and card tables.", icon: "🎱" },
  { category: "Wellness & Spa", title: "Hydrotherapy Spa & Sauna", desc: "Steam, sauna, and ayurvedic massage suites with professional certified therapists.", icon: "💆" },
  { category: "Wellness & Spa", title: "TechnoGym Olympic Fitness", desc: "Fully equipped cardio, strength, and CrossFit arena with personal training staff.", icon: "🏋️" },
  { category: "Wellness & Spa", title: "Zen Yoga & Meditation Deck", desc: "Open-air landscaped sunrise platform surrounded by soothing reflexology water paths.", icon: "🧘" },
  { category: "Sports Arena", title: "Multi-Sport Astro Turf", desc: "Floodlit turf for FIFA-standard 5-a-side football and box cricket leagues.", icon: "⚽" },
  { category: "Sports Arena", title: "Tennis & Squash Courts", desc: "All-weather synthetic surface tennis and indoor air-conditioned squash courts.", icon: "🎾" },
  { category: "Sky Living", title: "Sky Observatory Deck", desc: "High-altitude telescope deck for star gazing and NMIA runway flight view vistas.", icon: "🔭" },
  { category: "Nature & Gardens", title: "Central Thematic Green Park", desc: "Acres of manicured lawns, botanical flower gardens, and shaded reflexology gazebos.", icon: "🌳" },
  { category: "Kids & Family", title: "Kids Aqua Wonderland", desc: "Splash pads, interactive water slides, and adventure play zones with safety EPDM flooring.", icon: "🎠" },
];

const LOCATION_CATEGORIES = [
  { id: "all", name: "All Landmarks" },
  { id: "transit", name: "Transit & Highways" },
  { id: "education", name: "Schools & Colleges" },
  { id: "healthcare", name: "Hospitals & Medical" },
  { id: "lifestyle", name: "Shopping & Leisure" },
];

const LOCATION_RADAR_ITEMS = [
  // Transit
  { name: "Palaspe Junction, Panvel", time: "4 Mins*", category: "transit", icon: "📍", type: "Key Junction", note: "Direct gateway intersection connecting Mumbai, Pune, and Goa" },
  { name: "NH 17: Mumbai–Goa Highway", time: "4 Mins*", category: "transit", icon: "🛣️", type: "National Highway", note: "Immediate access for seamless coastal connectivity" },
  { name: "Panvel Bus Terminus", time: "8 Mins*", category: "transit", icon: "🚌", type: "State Transit Hub", note: "Central interstate transit bus depot" },
  { name: "MTHL Atal Setu (Sea Bridge)", time: "10 Mins*", category: "transit", icon: "🌉", type: "Trans-Harbour Link", note: "Direct 20-minute signal-free corridor into South Mumbai" },
  { name: "Multi Modal Corridor (MMC)", time: "10 Mins*", category: "transit", icon: "🚇", type: "High-Speed Ring", note: "126-km growth corridor linking Virar to Alibaug" },
  { name: "NH 4: Mumbai–Pune Expressway", time: "12 Mins*", category: "transit", icon: "🚗", type: "Expressway", note: "Smooth connectivity to Pune and IT industrial hubs" },
  { name: "Panvel Terminus Railway Station", time: "12 Mins*", category: "transit", icon: "🚆", type: "Central Rail Junction", note: "Hub for Harbour, Central, and outstation Konkan trains" },
  { name: "NH 4B: JNPT Expressway", time: "16 Mins*", category: "transit", icon: "⚓", type: "Port Corridor", note: "Rapid freight and logistics connectivity to JNPT port" },
  { name: "Navi Mumbai Intl. Airport (NMIA)", time: "22 Mins*", category: "transit", icon: "✈️", type: "International Aviation Hub", note: "Upcoming greenfield international mega airport" },

  // Education
  { name: "MNR International School", time: "7 Mins*", category: "education", icon: "🎓", type: "CBSE / IB School", note: "Premier international K-12 schooling with sports complex" },
  { name: "St. Wilfred's College & School", time: "10 Mins*", category: "education", icon: "🏫", type: "Higher Education", note: "Reputed engineering, arts, and management campus" },
  { name: "New Horizon Public School", time: "10 Mins*", category: "education", icon: "📚", type: "CBSE School", note: "Ranked among top academic institutions in Panvel" },
  { name: "DAV Public School, New Panvel", time: "10 Mins*", category: "education", icon: "🎓", type: "CBSE School", note: "Distinguished academic excellence center" },
  { name: "Amity University Mumbai", time: "16 Mins*", category: "education", icon: "🏛️", type: "Global University", note: "Sprawling university campus with global degree courses" },
  { name: "Delhi Public School (DPS Panvel)", time: "24 Mins*", category: "education", icon: "🏫", type: "CBSE School", note: "World-class education infrastructure & Olympic sports" },

  // Healthcare
  { name: "Lifeline Hospital Panvel", time: "7 Mins*", category: "healthcare", icon: "🏥", type: "Multi-Speciality", note: "24x7 emergency and trauma care centre" },
  { name: "Gandhi Super Speciality Hospital", time: "7 Mins*", category: "healthcare", icon: "🩺", type: "Super Speciality", note: "Advanced cardiology and surgical facilities" },
  { name: "Dr. Patil's Hospital", time: "8 Mins*", category: "healthcare", icon: "🏥", type: "General & Surgery", note: "Comprehensive outpatient and inpatient care" },
  { name: "MGM Hospital & Medical College", time: "12 Mins*", category: "healthcare", icon: "🏥", type: "Tertiary Care Hospital", note: "1000+ bed medical university & emergency hub" },
  { name: "Apollo Hospitals, CBD Belapur", time: "20 Mins*", category: "healthcare", icon: "🩺", type: "Multi-Speciality Care", note: "JCI-accredited quaternary care facility" },

  // Lifestyle & Shopping
  { name: "Orion Mall Panvel (PVR Cinemas)", time: "8 Mins*", category: "lifestyle", icon: "🛍️", type: "Premium Mall", note: "Major retail stores, food court, and multiplex" },
  { name: "D-Mart Hypermarket Palaspe", time: "10 Mins*", category: "lifestyle", icon: "🛒", type: "Hypermarket", note: "Daily grocery, apparel, and essentials" },
  { name: "Kharghar Valley Golf Course", time: "5 Mins*", category: "lifestyle", icon: "⛳", type: "18-Hole Championship", note: "CIDCO international championship public golf course" },
  { name: "Central Park Kharghar (290 Acres)", time: "5 Mins*", category: "lifestyle", icon: "🌳", type: "Mega Park", note: "Asia's largest thematic green city park" },
  { name: "Grand ISKCON Temple Kharghar", time: "5 Mins*", category: "lifestyle", icon: "🛕", type: "Spiritual Centre", note: "Architectural masterpiece and cultural temple complex" },
  { name: "Little World Mall Kharghar", time: "18 Mins*", category: "lifestyle", icon: "🎬", type: "Shopping Mall", note: "Multiplex cinemas, apparel brands, and casual dining" },
];

const GALLERY_ITEMS = [
  {
    title: "Iconic Skyscraper Facade",
    category: "Architecture",
    img: "/assets/localities/panvel.jpg",
    desc: "Cosmopolitan glass and steel architecture inspired by New York & Dubai skylines.",
  },
  {
    title: "Club Vegas 75K Sq.Ft. Resort",
    category: "Club Vegas",
    img: "/assets/service-penthouse.jpg",
    desc: "Multi-level grand lifestyle club with Las Vegas-style luxury and water features.",
  },
  {
    title: "Grand Living Room Suites",
    category: "Interiors",
    img: "/assets/service-interior.jpg",
    desc: "Expansive sundeck with floor-to-ceiling glass and Italian marble finishes.",
  },
  {
    title: "Presidential Master Bedroom",
    category: "Interiors",
    img: "/assets/service-custom.jpg",
    desc: "Spacious master suites with walk-in wardrobes and designer en-suite baths.",
  },
  {
    title: "Olympic Temperature-Controlled Pool",
    category: "Club Vegas",
    img: "/assets/localities/kharghar.jpg",
    desc: "Infinity-edge lap pool with sunken aqua loungers and private cabanas.",
  },
  {
    title: "Central Thematic Podium Greens",
    category: "Landscape",
    img: "/assets/localities/panvel.jpg",
    desc: "38 acres of landscaped podiums with multi-sport arenas and children play parks.",
  },
];

export function SaiWorldCityView() {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [amenityFilter, setAmenityFilter] = useState("All");
  const [locationTab, setLocationTab] = useState("all");
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [brochureSubmitted, setBrochureSubmitted] = useState(false);
  const [siteVisitDate, setSiteVisitDate] = useState("");
  const [selectedConfigInterest, setSelectedConfigInterest] = useState("2 BHK");

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(12500000); // 1.25 Cr
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

  const filteredLocations =
    locationTab === "all"
      ? LOCATION_RADAR_ITEMS
      : LOCATION_RADAR_ITEMS.filter((item) => item.category === locationTab);

  const filteredGallery =
    galleryFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === galleryFilter);

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleBrochureSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBrochureSubmitted(true);
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
            <a href="#pricing">Floor Plans &amp; Pricing</a>
            <a href="#amenities">Club Vegas</a>
            <a href="#walkthrough">Video Tour</a>
            <a href="#location">Connectivity</a>
            <a href="#gallery">Gallery</a>
            <a href="#booking" className={styles.navCta}>
              Book VIP Visit ↗
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
              A 38-Acre Global Lifestyle Mega-Township inspired by New York, Paris &amp; Dubai. Featuring 2, 3, 3.5 &amp; 4 BHK Luxury Residences.
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
              <span className={styles.playIcon}>▶</span> Watch Walkthrough
            </button>
            <button onClick={() => setIsBrochureModalOpen(true)} className={styles.tertiaryBtn}>
              Download Brochure PDF ↓
            </button>
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
            <h2>Area &amp; <em>Floor Plan Breakdown</em></h2>
            <p className={styles.sectionDesc}>
              Select your preferred luxury configuration to view dimensions, carpet areas, indicative pricing, and layout specifications.
            </p>
          </div>

          <div className={styles.configTabs}>
            {UNIT_CONFIGS.map((config, index) => (
              <button
                key={config.bhk}
                className={`${styles.configTabBtn} ${selectedPlanIndex === index ? styles.activeTab : ""}`}
                onClick={() => {
                  setSelectedPlanIndex(index);
                  setLoanAmount(config.rawPrice);
                }}
              >
                <span className={styles.tabBhk}>{config.bhk}</span>
                <span className={styles.tabPrice}>{config.price}</span>
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
                <span className={styles.priceHighlightNote}>*Government taxes, stamp duty &amp; registration extra</span>
              </div>

              {/* Room Dimensions Table */}
              <div className={styles.dimensionsBox}>
                <span className={styles.dimTitle}>TYPICAL ROOM DIMENSIONS:</span>
                <div className={styles.dimGrid}>
                  {selectedPlan.dimensions.map((dim, dIdx) => (
                    <div key={dIdx} className={styles.dimRow}>
                      <span className={styles.dimRoom}>{dim.room}</span>
                      <strong className={styles.dimSize}>{dim.size}</strong>
                    </div>
                  ))}
                </div>
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
                <button
                  onClick={() => setIsBrochureModalOpen(true)}
                  className={styles.planBookBtn}
                >
                  Download {selectedPlan.bhk} Blueprint PDF ↗
                </button>
                <a href="#booking" className={styles.planVisitBtn}>
                  Book Model Flat Visit ➔
                </a>
              </div>
            </div>

            {/* Interactive EMI Estimator */}
            <div className={styles.emiCalculatorCol}>
              <div className={styles.emiCard}>
                <h4 className={styles.emiTitle}>
                  <span className={styles.emiIcon}>📊</span> Real-Time EMI Estimator
                </h4>
                <div className={styles.emiResultBox}>
                  <span className={styles.emiResultLabel}>ESTIMATED MONTHLY INSTALLMENT</span>
                  <strong className={styles.emiAmount}>₹ {calculateEMI().toLocaleString("en-IN")}/mo</strong>
                  <span className={styles.emiSubNote}>Based on {tenureYears} Years @ {interestRate}% Interest</span>
                </div>

                <div className={styles.sliderGroup}>
                  <div className={styles.sliderHeader}>
                    <span>Loan Amount</span>
                    <strong>₹ {(loanAmount / 100000).toFixed(1)} Lakhs</strong>
                  </div>
                  <input
                    type="range"
                    min="5000000"
                    max="40000000"
                    step="500000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className={styles.rangeSlider}
                  />
                </div>

                <div className={styles.sliderGroup}>
                  <div className={styles.sliderHeader}>
                    <span>Loan Tenure</span>
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

                <div className={styles.loanPartnerNote}>
                  <span>Approved by SBI, HDFC, ICICI, Axis &amp; all leading financial institutions.</span>
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

      {/* Cinematic Video Walkthrough Showcase */}
      <section className={styles.walkthroughSection} id="walkthrough">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>IMMERSIVE EXPERIENCE</span>
            <h2>Architectural <em>Video Tour</em></h2>
            <p className={styles.sectionDesc}>
              Take an interactive guided 3D drone walkthrough across the 38-acre township and 75,000 sq.ft. Club Vegas.
            </p>
          </div>

          <div className={styles.videoPlayerFrame}>
            <iframe
              src="https://www.youtube.com/embed/SzbhWhcaKqg?si=KQ4I3ZBxWPkAF-bx"
              title="Sai World City Panvel Official Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles.youtubeIframe}
            />
            <div className={styles.videoPlayerFooter}>
              <div className={styles.videoInfo}>
                <h4>Sai World City Panvel Official Tour</h4>
                <p>Paradise Group Landmark Mega-Township · Palaspe Junction, Panvel</p>
              </div>
              <button onClick={() => setIsVideoOpen(true)} className={styles.fullscreenTourBtn}>
                Full-Screen Mode ↗
              </button>
            </div>
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
              Positioned at Palaspe Junction, Panvel with ultra-fast highway and airport access. Explore commute times across sectors.
            </p>
          </div>

          {/* Location Category Tabs */}
          <div className={styles.locationTabsRow}>
            {LOCATION_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.locationTabBtn} ${locationTab === cat.id ? styles.activeLocationTab : ""}`}
                onClick={() => setLocationTab(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className={styles.connectivityGrid}>
            {filteredLocations.map((item, idx) => (
              <div key={idx} className={styles.connectivityCard}>
                <div className={styles.connIcon}>{item.icon}</div>
                <div className={styles.connInfo}>
                  <div className={styles.connHeaderRow}>
                    <span className={styles.connType}>{item.type}</span>
                    <span className={styles.connTimeBadge}>{item.time}</span>
                  </div>
                  <h4 className={styles.connName}>{item.name}</h4>
                  <p className={styles.connNote}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Luxury Gallery Showcase */}
      <section className={styles.gallerySection} id="gallery">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>VISUAL PORTFOLIO</span>
            <h2>Project <em>Gallery &amp; Architecture</em></h2>
            <p className={styles.sectionDesc}>
              Witness the craftsmanship, opulent clubhouse, panoramic balconies, and manicured green podiums.
            </p>
          </div>

          <div className={styles.galleryFilterRow}>
            {["All", "Architecture", "Club Vegas", "Interiors", "Landscape"].map((gCat) => (
              <button
                key={gCat}
                className={`${styles.galleryPill} ${galleryFilter === gCat ? styles.activeGalleryPill : ""}`}
                onClick={() => setGalleryFilter(gCat)}
              >
                {gCat}
              </button>
            ))}
          </div>

          <div className={styles.galleryGrid}>
            {filteredGallery.map((item, gIdx) => (
              <div
                key={gIdx}
                className={styles.galleryCard}
                onClick={() => setLightboxImage(item.img)}
              >
                <div className={styles.galleryImgWrap}>
                  <img src={item.img} alt={item.title} className={styles.galleryImg} />
                  <div className={styles.galleryOverlay}>
                    <span className={styles.zoomIcon}>🔍 Click to Enlarge</span>
                  </div>
                </div>
                <div className={styles.galleryMeta}>
                  <span className={styles.galleryTag}>{item.category}</span>
                  <h4 className={styles.galleryTitle}>{item.title}</h4>
                  <p className={styles.galleryDesc}>{item.desc}</p>
                </div>
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
                pickup &amp; drop, customized payment plans, and early bird phase 3 offers.
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

      {/* Video Modal */}
      {isVideoOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsVideoOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h4>Sai World City Panvel — Architectural Walkthrough</h4>
              <button className={styles.closeModalBtn} onClick={() => setIsVideoOpen(false)}>
                ✕
              </button>
            </div>
            <div className={styles.videoEmbedWrapper}>
              <iframe
                src="https://www.youtube.com/embed/SzbhWhcaKqg?si=KQ4I3ZBxWPkAF-bx&autoplay=1"
                title="Sai World City Panvel Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={styles.modalIframe}
              />
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className={styles.modalBackdrop} onClick={() => setLightboxImage(null)}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeLightboxBtn} onClick={() => setLightboxImage(null)}>
              ✕
            </button>
            <img src={lightboxImage} alt="Enlarged Project View" className={styles.lightboxImg} />
          </div>
        </div>
      )}

      {/* Brochure & Cost Sheet Download Modal */}
      {isBrochureModalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsBrochureModalOpen(false)}>
          <div className={styles.brochureModalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h4>Download Official Brochure &amp; Cost Sheet</h4>
              <button className={styles.closeModalBtn} onClick={() => setIsBrochureModalOpen(false)}>
                ✕
              </button>
            </div>
            <div className={styles.brochureModalBody}>
              {brochureSubmitted ? (
                <div className={styles.brochureSuccess}>
                  <span className={styles.successCheck}>✓</span>
                  <h3>Brochure Sent to Your Email!</h3>
                  <p>
                    The official e-brochure, master layout, and floor plan cost sheet have been dispatched. Our team will also send a copy via WhatsApp.
                  </p>
                  <button
                    onClick={() => {
                      setBrochureSubmitted(false);
                      setIsBrochureModalOpen(false);
                    }}
                    className={styles.resetBtn}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form className={styles.brochureForm} onSubmit={handleBrochureSubmit}>
                  <p className={styles.brochureIntro}>
                    Enter your contact details to receive the high-resolution Sai World City Panvel brochure, master plan, and unit cost sheet.
                  </p>
                  <div className={styles.formField}>
                    <label>Your Name</label>
                    <input type="text" placeholder="Full name" required />
                  </div>
                  <div className={styles.formField}>
                    <label>WhatsApp / Mobile Number</label>
                    <input type="tel" placeholder="+91 98765 43210" required />
                  </div>
                  <div className={styles.formField}>
                    <label>Email Address</label>
                    <input type="email" placeholder="name@domain.com" required />
                  </div>
                  <button type="submit" className={styles.submitBookingBtn}>
                    Instant Download Brochure 📥
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sticky Bottom Quick Conversion Bar */}
      <aside className={styles.stickyBottomBar} aria-label="Quick Property Actions">
        <div className={styles.stickyContainer}>
          <div className={styles.stickyPropertyInfo}>
            <strong>Sai World City Panvel</strong>
            <span>2, 3, 3.5 &amp; 4 BHK from ₹ 1.25 Cr*</span>
          </div>
          <div className={styles.stickyActions}>
            <a
              href="tel:+919999999999"
              className={styles.stickyCallBtn}
            >
              📞 Call Advisor
            </a>
            <a
              href="https://wa.me/919999999999?text=Hello%20Aasco%2C%20I%20am%20interested%20in%20Sai%20World%20City%20Panvel."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.stickyWhatsappBtn}
            >
              💬 WhatsApp
            </a>
            <button
              onClick={() => setIsBrochureModalOpen(true)}
              className={styles.stickyBrochureBtn}
            >
              📥 Brochure
            </button>
            <a href="#booking" className={styles.stickyVisitBtn}>
              🗓️ Book Site Visit
            </a>
          </div>
        </div>
      </aside>

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
