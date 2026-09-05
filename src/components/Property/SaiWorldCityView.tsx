"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./SaiWorldCityView.module.css";

interface PlanConfig {
  type: string;
  bhk: string;
  carpetArea: string;
  price: string;
  tagline: string;
  dimensions: { room: string; size: string }[];
  features: string[];
  blueprintImg: string;
  highlights: string[];
}

const HERO_BANNERS = [
  {
    url: "https://paradise-saiworldcitypanvel.com/assets/images/banner/B1.webp?v=1776947758",
    title: "Iconic Skyscraper Towers",
    tagline: "38-Acre Global Architecture Inspired by New York, Paris & Dubai",
  },
  {
    url: "https://paradise-saiworldcitypanvel.com/assets/images/banner/B2.webp?v=1776947758",
    title: "Club Vegas 75,000 Sq.Ft. Resort",
    tagline: "International Multi-Level Luxury Clubhouse & Olympic Pools",
  },
  {
    url: "https://paradise-saiworldcitypanvel.com/assets/images/banner/B3.webp?v=1776947758",
    title: "Panoramic Skyline & Hill Vistas",
    tagline: "High-Rise Residences Overlooking Scenic Panvel Hills",
  },
];

const UNIT_CONFIGS: PlanConfig[] = [
  {
    type: "2 BHK Luxury Elite",
    bhk: "2 BHK",
    carpetArea: "620 - 892 Sq.Ft.",
    price: "₹ 1.25 - 1.61 Cr*",
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
    blueprintImg: "https://paradise-saiworldcitypanvel.com/assets/images/floor-plan/UnitPlan.webp",
    highlights: ["East-West Vastu", "Dual Balconies", "Master Suite", "Dedicated Utility"],
  },
  {
    type: "3 BHK Grande Royale",
    bhk: "3 BHK",
    carpetArea: "1334 Sq.Ft.",
    price: "₹ 2.41 Cr*++",
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
    blueprintImg: "https://paradise-saiworldcitypanvel.com/assets/images/floor-plan/UnitPlan.webp",
    highlights: ["Private Foyer", "Double Deck", "Walk-in Wardrobe", "Servant Room"],
  },
  {
    type: "3.5 BHK Imperial Suite",
    bhk: "3.5 BHK",
    carpetArea: "1598 Sq.Ft.",
    price: "₹ 2.89 Cr*++",
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
    blueprintImg: "https://paradise-saiworldcitypanvel.com/assets/images/floor-plan/MasterPlan.webp",
    highlights: ["Home Office Study", "20ft Wide Deck", "Italian Marble", "2 Car Parks"],
  },
  {
    type: "4 BHK Royal Sky Penthouse",
    bhk: "4 BHK",
    carpetArea: "1858 Sq.Ft.",
    price: "₹ 3.34 Cr*++",
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
    blueprintImg: "https://paradise-saiworldcitypanvel.com/assets/images/floor-plan/MasterPlan.webp",
    highlights: ["Private Sky Terrace", "18ft High Ceiling", "4 En-Suite Beds", "3 Reserved Parks"],
  },
];

const AMENITIES = [
  { category: "Club Vegas", title: "75,000 Sq.Ft. Club Vegas", desc: "Grand landmark G+5 multi-level clubhouse with international Las Vegas-inspired architecture.", img: "https://paradise-saiworldcitypanvel.com/assets/images/amenities/Clubhouse.webp", icon: "🏛️" },
  { category: "Club Vegas", title: "Vegas Infinity Lap Pool", desc: "Resort-style temperature controlled lap pool with sunken aqua loungers & cabanas.", img: "https://paradise-saiworldcitypanvel.com/assets/images/amenities/Swimming-Pool.webp", icon: "🏊" },
  { category: "Wellness & Spa", title: "TechnoGym Olympic Fitness", desc: "Fully equipped cardio, strength, and CrossFit arena with personal training staff.", img: "https://paradise-saiworldcitypanvel.com/assets/images/amenities/Gym.webp", icon: "🏋️" },
  { category: "Sports Arena", title: "Indoor Sports Lounge", desc: "Championship snooker, table tennis, air hockey, and card gaming suites.", img: "https://paradise-saiworldcitypanvel.com/assets/images/amenities/Indoor-Games.webp", icon: "🎱" },
  { category: "Kids & Family", title: "Kids Pool & Aqua Play Area", desc: "Splash pads, water slides, and adventure play zones with safety EPDM flooring.", img: "https://paradise-saiworldcitypanvel.com/assets/images/amenities/Kids-Pool-and-Play-Area.webp", icon: "🎠" },
  { category: "Nature & Gardens", title: "Dry Mountain Courtyard", desc: "Serene zen stone courtyard with tranquil Japanese dry landscape styling.", img: "https://paradise-saiworldcitypanvel.com/assets/images/amenities/Dry-Mountain-Courtyard.webp", icon: "🪨" },
  { category: "Club Vegas", title: "Private Dolby Atmos Cinema", desc: "32-seater luxury screening theatre for private movie premieres and sporting events.", img: "https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-3.webp", icon: "🎬" },
  { category: "Sky Living", title: "Sky Observatory Deck", desc: "High-altitude telescope deck for star gazing and NMIA runway flight view vistas.", img: "https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-1.webp", icon: "🔭" },
];

const LOCATION_CATEGORIES = [
  { id: "all", name: "All Landmarks (47+)" },
  { id: "connectivity", name: "Connectivity & Transit (9)" },
  { id: "education_hub", name: "Education Hub (11)" },
  { id: "healthcare", name: "Healthcare & Hospitals (16)" },
  { id: "malls_shopping", name: "Malls & Shopping (4)" },
  { id: "tech_park", name: "Tech & Business Parks (4)" },
  { id: "rejuvenation", name: "Rejuvenation & Leisure (3)" },
];

const LOCATION_RADAR_ITEMS = [
  // Connectivity
  { name: "Palaspe Junction, Panvel", time: "4 Mins*", category: "connectivity", icon: "📍", type: "Key Junction", note: "Direct gateway intersection connecting Mumbai, Pune, and Goa" },
  { name: "NH 17: Mumbai–Goa Highway", time: "4 Mins*", category: "connectivity", icon: "🛣️", type: "National Highway", note: "Immediate access for seamless coastal connectivity" },
  { name: "Panvel Bus Depot", time: "8 Mins*", category: "connectivity", icon: "🚌", type: "State Transit Hub", note: "Central interstate transit bus terminus" },
  { name: "Mumbai Trans Harbour Link (MTHL / Atal Setu)", time: "10 Mins*", category: "connectivity", icon: "🌉", type: "Trans-Harbour Sea Bridge", note: "Direct 20-minute signal-free corridor into South Mumbai" },
  { name: "Multi Modal Corridor (MMC)", time: "10 Mins*", category: "connectivity", icon: "🚇", type: "High-Speed Ring", note: "126-km growth corridor linking Virar to Alibaug" },
  { name: "NH 4: Mumbai–Pune Highway", time: "12 Mins*", category: "connectivity", icon: "🚗", type: "Expressway", note: "Smooth connectivity to Pune and IT industrial hubs" },
  { name: "Panvel Terminus Railway Station", time: "12 Mins*", category: "connectivity", icon: "🚆", type: "Central Rail Junction", note: "Hub for Harbour, Central, and outstation Konkan trains" },
  { name: "NH 4B: JNPT Expressway", time: "16 Mins*", category: "connectivity", icon: "⚓", type: "Port Corridor", note: "Rapid freight and logistics connectivity to JNPT port" },
  { name: "Navi Mumbai Intl. Airport (NMIA)", time: "22 Mins*", category: "connectivity", icon: "✈️", type: "International Airport", note: "Upcoming greenfield international mega aviation hub" },

  // Education Hub
  { name: "MNR International School", time: "7 Mins*", category: "education_hub", icon: "🎓", type: "CBSE / IB School", note: "Premier international K-12 schooling with sports complex" },
  { name: "St. Wilfred Academy", time: "10 Mins*", category: "education_hub", icon: "🏫", type: "Higher Education", note: "Reputed engineering, arts, and management campus" },
  { name: "New Horizon Public School", time: "10 Mins*", category: "education_hub", icon: "📚", type: "CBSE School", note: "Ranked among top academic institutions in Panvel" },
  { name: "DAV Public School", time: "10 Mins*", category: "education_hub", icon: "🎓", type: "CBSE School", note: "Distinguished academic excellence center" },
  { name: "St. Joseph's High School", time: "10 Mins*", category: "education_hub", icon: "🏫", type: "High School", note: "Distinguished convent education" },
  { name: "CKT School & College", time: "10 Mins*", category: "education_hub", icon: "🎓", type: "Junior & Degree College", note: "Premier commerce, science, and arts academy" },
  { name: "Mahatma School", time: "12 Mins*", category: "education_hub", icon: "📚", type: "School & Junior College", note: "Comprehensive holistic education campus" },
  { name: "Pillai College of Engineering", time: "12 Mins*", category: "education_hub", icon: "🏛️", type: "Engineering & Architecture", note: "Top engineering, architecture & research campus" },
  { name: "Amity University Mumbai", time: "16 Mins*", category: "education_hub", icon: "🏛️", type: "Global University", note: "Sprawling university campus with global degree courses" },
  { name: "Ryan International School", time: "18 Mins*", category: "education_hub", icon: "🎓", type: "ICSE / CBSE School", note: "Global sports and academic curriculum" },
  { name: "Delhi Public School (DPS Panvel)", time: "24 Mins*", category: "education_hub", icon: "🏫", type: "CBSE School", note: "World-class education infrastructure & Olympic sports" },

  // Healthcare
  { name: "Lifeline Hospital", time: "7 Mins*", category: "healthcare", icon: "🏥", type: "Multi-Speciality", note: "24x7 emergency and trauma care centre" },
  { name: "Gandhi Super Speciality Hospital", time: "7 Mins*", category: "healthcare", icon: "🩺", type: "Super Speciality", note: "Advanced cardiology and surgical facilities" },
  { name: "Niramay Hospital", time: "7 Mins*", category: "healthcare", icon: "🏥", type: "Multi-Speciality Hospital", note: "Full critical and maternal care" },
  { name: "Sparsh Hospital", time: "7 Mins*", category: "healthcare", icon: "🩺", type: "Critical Care", note: "Specialized orthopedics and general care" },
  { name: "Paramount Hospital", time: "7 Mins*", category: "healthcare", icon: "🏥", type: "General Hospital", note: "Inpatient and outpatient healthcare" },
  { name: "Unnati Multi-Speciality Hospital", time: "7 Mins*", category: "healthcare", icon: "🩺", type: "Super Speciality", note: "Advanced surgical care" },
  { name: "Purohit Hospital", time: "8 Mins*", category: "healthcare", icon: "🏥", type: "General Hospital", note: "Comprehensive diagnostic and surgical care" },
  { name: "Sahasrabuddhe Hospital", time: "9 Mins*", category: "healthcare", icon: "🩺", type: "Speciality Clinic", note: "Pediatric & family medicine" },
  { name: "Dr. Patil's Hospital", time: "9 Mins*", category: "healthcare", icon: "🏥", type: "General & Surgery", note: "Comprehensive medical services" },
  { name: "Dr. Oza Hospital", time: "9 Mins*", category: "healthcare", icon: "🩺", type: "Medical Center", note: "Diagnostic and day-care procedures" },
  { name: "Panacea Hospital", time: "10 Mins*", category: "healthcare", icon: "🏥", type: "Multi-Speciality", note: "Specialized ICUs and surgery wards" },
  { name: "Life Care Hospital", time: "10 Mins*", category: "healthcare", icon: "🩺", type: "General Hospital", note: "Emergency and pathology services" },
  { name: "More Hospital", time: "10 Mins*", category: "healthcare", icon: "🏥", type: "Healthcare Center", note: "Family clinic and specialty doctors" },
  { name: "Arunodaya Hospital", time: "10 Mins*", category: "healthcare", icon: "🩺", type: "Speciality Hospital", note: "Maternity and orthopedic clinic" },
  { name: "Phoenix Hospital", time: "10 Mins*", category: "healthcare", icon: "🏥", type: "Emergency Care", note: "Round-the-clock ambulance and ICU" },
  { name: "MGM Hospital & Medical College", time: "12 Mins*", category: "healthcare", icon: "🏥", type: "Tertiary Care Hospital", note: "1000+ bed medical university & emergency hub" },

  // Malls & Shopping
  { name: "Orion Mall Panvel (PVR Cinemas)", time: "8 Mins*", category: "malls_shopping", icon: "🛍️", type: "Mega Mall", note: "Major retail stores, food court, and multiplex" },
  { name: "Reliance Fresh", time: "9 Mins*", category: "malls_shopping", icon: "🛒", type: "Supermarket", note: "Fresh groceries and daily essentials" },
  { name: "D-Mart Hypermarket Palaspe", time: "10 Mins*", category: "malls_shopping", icon: "🛒", type: "Hypermarket", note: "Daily grocery, apparel, and home essentials" },
  { name: "Little World Mall Kharghar", time: "18 Mins*", category: "malls_shopping", icon: "🎬", type: "Shopping Mall", note: "Multiplex cinemas, apparel brands, and casual dining" },

  // Tech & Business Parks
  { name: "CIDCO Business Zone", time: "16 Mins*", category: "tech_park", icon: "🏢", type: "Corporate Hub", note: "Modern commercial towers and office complexes" },
  { name: "Panvel Business Park", time: "22 Mins*", category: "tech_park", icon: "💼", type: "Commercial District", note: "Corporate offices and IT enterprises" },
  { name: "Kharghar Industrial Zone", time: "28 Mins*", category: "tech_park", icon: "🏭", type: "Industrial Hub", note: "Manufacturing and light industrial parks" },
  { name: "Taloja Business Park", time: "30 Mins*", category: "tech_park", icon: "🏗️", type: "Logistics Hub", note: "Logistics, pharmaceutical, and manufacturing estate" },

  // Rejuvenation & Leisure
  { name: "18-Hole Kharghar Valley Golf Course", time: "5 Mins*", category: "rejuvenation", icon: "⛳", type: "Championship Golf", note: "CIDCO international championship 18-hole golf course" },
  { name: "Kharghar Central Park (290 Acres)", time: "5 Mins*", category: "rejuvenation", icon: "🌳", type: "Thematic Mega Park", note: "Asia's largest thematic green city park" },
  { name: "Grand ISKCON Temple Kharghar", time: "5 Mins*", category: "rejuvenation", icon: "🛕", type: "Spiritual Centre", note: "Architectural masterpiece and cultural temple complex" },
];

const GALLERY_ITEMS = [
  {
    title: "Cosmopolitan Skyscraper Elevation",
    category: "Architecture",
    img: "https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-1.webp",
    desc: "Iconic global architecture inspired by New York, Paris & Dubai skylines.",
  },
  {
    title: "Club Vegas 75K Sq.Ft. Grand Entrance",
    category: "Club Vegas",
    img: "https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-2.webp",
    desc: "Multi-level G+5 clubhouse resort with luxury hospitality ambiance.",
  },
  {
    title: "Opulent Living & Dining Grand Salon",
    category: "Interiors",
    img: "https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-3.webp",
    desc: "Expansive double deck with floor-to-ceiling glass and Italian marble finishes.",
  },
  {
    title: "Presidential Master Bedroom Suite",
    category: "Interiors",
    img: "https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-4.webp",
    desc: "Spacious master suites with walk-in wardrobes and designer en-suite baths.",
  },
  {
    title: "Vegas Infinity Lap Pool & Cabanas",
    category: "Club Vegas",
    img: "https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-5.webp",
    desc: "Resort-style lap pool with sunken aqua loungers and private gazebos.",
  },
  {
    title: "38-Acre Podium Green Landscape",
    category: "Architecture",
    img: "https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-6.webp",
    desc: "Lush botanical gardens, zen alcoves, and private jogging trails.",
  },
];

export function SaiWorldCityView() {
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [activeFloorPlanTab, setActiveFloorPlanTab] = useState<"unit" | "master">("unit");
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

  // Auto banner rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBannerIndex((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevBanner = () => {
    setActiveBannerIndex((prev) => (prev - 1 + HERO_BANNERS.length) % HERO_BANNERS.length);
  };

  const handleNextBanner = () => {
    setActiveBannerIndex((prev) => (prev + 1) % HERO_BANNERS.length);
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
            <img
              src="https://paradise-saiworldcitypanvel.com/assets/images/logo/logo.png"
              alt="Sai World City Logo"
              className={styles.brandLogoImg}
              style={{ height: "34px", maxWidth: "180px", width: "auto", objectFit: "contain", display: "block" }}
            />
            <span className={styles.brandDivider}>|</span>
            <span className={styles.brandSub}>AASCO LUXURY COLLECTION</span>
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

      {/* Hero Section — Full Window Viewport with Data Overlaid on Image */}
      <section className={styles.heroSection} id="overview">
        <div className={styles.heroBg}>
          <img
            src={HERO_BANNERS[activeBannerIndex].url}
            alt={HERO_BANNERS[activeBannerIndex].title}
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroVignette} />
        </div>

        {/* Floating Image Switcher Arrows on Left and Right */}
        <button
          onClick={handlePrevBanner}
          className={styles.heroArrowLeft}
          aria-label="Previous Property View"
          title="Previous Image"
        >
          ‹
        </button>
        <button
          onClick={handleNextBanner}
          className={styles.heroArrowRight}
          aria-label="Next Property View"
          title="Next Image"
        >
          ›
        </button>

        <div className={styles.heroContainer}>
          <div className={styles.heroTopControls}>
            <div className={styles.launchBanner}>
              <span className={styles.liveIndicator}>
                <span className={styles.liveDot} />
                BOOKING OPEN
              </span>
              <span className={styles.phaseText}>◆ Phase 3 Launching Soon!</span>
              <span className={styles.earlyBirdText}>Avail Exclusive Early Bird Offers</span>
            </div>

            {/* Interactive Image Switcher Buttons */}
            <div className={styles.imageSwitcherBar}>
              <span className={styles.viewLabel}>Change View:</span>
              <div className={styles.bannerDots}>
                {HERO_BANNERS.map((banner, bIdx) => (
                  <button
                    key={bIdx}
                    className={`${styles.bannerPillBtn} ${activeBannerIndex === bIdx ? styles.activeBannerPillBtn : ""}`}
                    onClick={() => setActiveBannerIndex(bIdx)}
                  >
                    <span className={styles.pillIndex}>0{bIdx + 1}</span>
                    <span className={styles.pillText}>{banner.title.split(" ")[0]}</span>
                  </button>
                ))}
              </div>
            </div>
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
                What truly sets Sai World City apart is its lifestyle ecosystem, anchored by the grand Club Vegas—a
                75,000 sq. ft. G+5 clubhouse that feels less like an amenity and more like a destination. From infinity pools,
                sky lounges, and wellness zones to banquet spaces, sports arenas, and creative studios, every corner is designed
                to elevate how you live, unwind, and connect.
              </p>
              <p className={styles.bodyPara}>
                With seamless connectivity to the upcoming Navi Mumbai International Airport, Mumbai Trans Harbour Link (Atal Setu),
                major highways, and key educational and healthcare hubs, it places you right where growth, comfort, and opportunity meet.
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
              <div className={styles.aboutImageCard} onClick={() => setLightboxImage("https://paradise-saiworldcitypanvel.com/assets/images/about/About.webp")}>
                <img
                  src="https://paradise-saiworldcitypanvel.com/assets/images/about/About.webp"
                  alt="Sai World City Luxury High Rise Architecture"
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

      {/* Interactive Pricing & Floor Plan Matrix — Ultra-Luxury Architectural Showcase */}
      <section className={styles.pricingSection} id="pricing">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>UNITS &amp; FLOOR PLANS</span>
            <h2>Area &amp; <em>Floor Plan Breakdown</em></h2>
            <p className={styles.sectionDesc}>
              Select your preferred luxury configuration to view dimensions, carpet areas, indicative pricing, and master blueprints.
            </p>
          </div>

          {/* Master Plan vs Unit Plan Toggle */}
          <div className={styles.planTypeToggleRow}>
            <button
              className={`${styles.planTypeBtn} ${activeFloorPlanTab === "unit" ? styles.activePlanTypeBtn : ""}`}
              onClick={() => setActiveFloorPlanTab("unit")}
            >
              📐 Unit Floor Plans
            </button>
            <button
              className={`${styles.planTypeBtn} ${activeFloorPlanTab === "master" ? styles.activePlanTypeBtn : ""}`}
              onClick={() => setActiveFloorPlanTab("master")}
            >
              🗺️ 38-Acre Master Layout Plan
            </button>
          </div>

          {activeFloorPlanTab === "master" ? (
            <div className={styles.masterPlanCard}>
              <div
                className={styles.blueprintWrap}
                onClick={() => setLightboxImage("https://paradise-saiworldcitypanvel.com/assets/images/floor-plan/MasterPlan.webp")}
              >
                <img
                  src="https://paradise-saiworldcitypanvel.com/assets/images/floor-plan/MasterPlan.webp"
                  alt="Sai World City 38-Acre Master Plan"
                  className={styles.blueprintImg}
                />
                <div className={styles.blueprintZoomOverlay}>
                  <span>🔍 Click to View High-Resolution Master Plan</span>
                </div>
              </div>
              <div className={styles.masterPlanMeta}>
                <h3>Sai World City 38-Acre Master Township Layout</h3>
                <p>
                  Comprehensive layout featuring high-rise towers, 75,000 sq. ft. Club Vegas, multi-tiered security,
                  podium recreation parks, Olympic swimming lap pools, and multi-sport astro turfs.
                </p>
                <button onClick={() => setIsBrochureModalOpen(true)} className={styles.planBookBtn}>
                  Download Master Plan PDF 📥
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className={styles.configTabs}>
                {UNIT_CONFIGS.map((config, index) => (
                  <button
                    key={config.bhk}
                    className={`${styles.configTabBtn} ${selectedPlanIndex === index ? styles.activeTab : ""}`}
                    onClick={() => setSelectedPlanIndex(index)}
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

                {/* Interactive Floor Plan Architectural Preview */}
                <div className={styles.planVisualCol}>
                  <div
                    className={styles.unitPlanSchematicCard}
                    onClick={() => setLightboxImage(selectedPlan.blueprintImg)}
                  >
                    <img
                      src={selectedPlan.blueprintImg}
                      alt={`${selectedPlan.type} Floor Plan`}
                      className={styles.unitPlanImg}
                    />
                    <div className={styles.unitPlanOverlay}>
                      <span>🔍 Click to Enlarge Floor Plan</span>
                    </div>
                  </div>

                  {/* Architectural Advantages Card */}
                  <div className={styles.planHighlightsCard}>
                    <div className={styles.planHighlightsHeader}>
                      <span className={styles.planHighlightsEyebrow}>ARCHITECTURAL ADVANTAGES</span>
                      <h4 className={styles.planHighlightsTitle}>{selectedPlan.bhk} Key Advantages</h4>
                    </div>
                    <div className={styles.planBadgeChips}>
                      {selectedPlan.highlights.map((h, hIdx) => (
                        <span key={hIdx} className={styles.planChipBadge}>
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                    <div className={styles.planSummaryBox}>
                      <div className={styles.summaryRow}>
                        <span>Configuration</span>
                        <strong>{selectedPlan.type}</strong>
                      </div>
                      <div className={styles.summaryRow}>
                        <span>Carpet Area</span>
                        <strong>{selectedPlan.carpetArea}</strong>
                      </div>
                      <div className={styles.summaryRow}>
                        <span>Special Price</span>
                        <strong className={styles.goldPrice}>{selectedPlan.price}</strong>
                      </div>
                      <div className={styles.summaryRow}>
                        <span>Orientation</span>
                        <strong>Vastu Compliant (East-West)</strong>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsBrochureModalOpen(true)}
                      className={styles.requestCostSheetBtn}
                    >
                      Request Detailed Cost Sheet &amp; Floor Plan PDF ➔
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Club Vegas 75K Amenities Section with Authentic Images */}
      <section className={styles.amenitiesSection} id="amenities">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>RESORT-STYLE DESTINATION</span>
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
              <div
                key={i}
                className={styles.amenityCard}
                onClick={() => setLightboxImage(amenity.img)}
              >
                <div className={styles.amenityImgWrapper}>
                  <img src={amenity.img} alt={amenity.title} className={styles.amenityImg} />
                  <div className={styles.amenityBadgeRow}>
                    <span className={styles.amenityCategoryTag}>{amenity.category}</span>
                  </div>
                </div>
                <div className={styles.amenityContent}>
                  <div className={styles.amenityTitleRow}>
                    <span className={styles.amenityEmoji}>{amenity.icon}</span>
                    <h4 className={styles.amenityTitle}>{amenity.title}</h4>
                  </div>
                  <p className={styles.amenityDesc}>{amenity.desc}</p>
                </div>
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

      {/* Strategic Location Radar Section with Google Maps Embed */}
      <section className={styles.locationSection} id="location">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>STRATEGIC CONNECTIVITY RADAR</span>
            <h2>Connected to the <em>Heart of MMR Growth</em></h2>
            <p className={styles.sectionDesc}>
              Positioned at Palaspe Junction, Panvel with ultra-fast highway, metro, and airport access. Explore 47+ key landmarks.
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

          {/* Google Maps Live Frame */}
          <div className={styles.googleMapsFrameWrap}>
            <div className={styles.mapHeader}>
              <div>
                <span className={styles.mapEyebrow}>GEOGRAPHIC LOCATION</span>
                <h4>Palaspe Junction, Panvel, Navi Mumbai (18.9676° N, 73.1248° E)</h4>
              </div>
              <a
                href="https://maps.google.com/?q=Sai+World+City+Panvel"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapDirectionsBtn}
              >
                Get Live Directions ↗
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.180985554309!2d73.1248308!3d18.9676128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e7b1c4bf9485%3A0xde2ff6b4d8743963!2sSAI%20WORLD%20CITY!5e0!3m2!1sen!2sin!4v1776947274098!5m2!1sen!2sin"
              title="Sai World City Location Map"
              className={styles.googleMapsIframe}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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

      {/* Developer Legacy Section with Real RERA QR Codes */}
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

            <div className={styles.reraDisclosuresGrid}>
              <div className={styles.reraCard}>
                <img
                  src="https://paradise-saiworldcitypanvel.com/assets/images/qr-code/6a1e858311803-qrcode_p52000006318.webp"
                  alt="MahaRERA QR Code Phase 1 & 2"
                  className={styles.qrCodeImg}
                />
                <div className={styles.reraDetails}>
                  <span className={styles.reraTag}>PHASE 1 &amp; 2 MAHARERA</span>
                  <strong className={styles.reraNumber}>P52000006318</strong>
                  <p>MahaRERA registered residential township</p>
                </div>
              </div>

              <div className={styles.reraCard}>
                <img
                  src="https://paradise-saiworldcitypanvel.com/assets/images/qr-code/6a1e85831190b-qrcode_p52000022708.webp"
                  alt="MahaRERA QR Code Phase 3"
                  className={styles.qrCodeImg}
                />
                <div className={styles.reraDetails}>
                  <span className={styles.reraTag}>PHASE 3 MAHARERA</span>
                  <strong className={styles.reraNumber}>P52000022708</strong>
                  <p>MahaRERA registered expansion phase</p>
                </div>
              </div>

              <div className={styles.reraCard}>
                <div className={styles.agentBadgeIcon}>🛡️</div>
                <div className={styles.reraDetails}>
                  <span className={styles.reraTag}>AUTHORISED ADVISOR RERA</span>
                  <strong className={styles.reraNumber}>A51900029955</strong>
                  <p>Aasco Realty Certified Real Estate Partner</p>
                </div>
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
                  href="https://wa.me/918828112657?text=Hello%20Aasco%2C%20I%20am%20interested%20in%20Sai%20World%20City%20Panvel."
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
                      <input type="tel" placeholder="+91 88281 12657" required />
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
                    <input type="tel" placeholder="+91 88281 12657" required />
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
              href="tel:+918828112657"
              className={styles.stickyCallBtn}
            >
              📞 +91 88281 12657
            </a>
            <a
              href="https://wa.me/918828112657?text=Hello%20Aasco%2C%20I%20am%20interested%20in%20Sai%20World%20City%20Panvel."
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
              Project RERA: P52000006318 | P52000022708 · Authorized Agent RERA: A51900029955 (PropSolutions4U Pvt. Ltd. / Aasco Realty).
            </p>
            <p>
              The content presented on this website is solely for informational purposes and does not constitute a service offer.
              Prices mentioned are subject to change without prior notification, and the availability of the listed properties is not assured.
              All trademarks, project names, and developer marks belong to Paradise Group.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
