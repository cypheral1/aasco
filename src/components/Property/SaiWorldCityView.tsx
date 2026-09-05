"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
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
  { category: "Club Vegas", title: "75,000 Sq.Ft. Club Vegas", desc: "Grand landmark G+5 multi-level clubhouse with international Las Vegas-inspired architecture.", img: "https://paradise-saiworldcitypanvel.com/assets/images/amenities/Clubhouse.webp", iconKey: "clubhouse" },
  { category: "Club Vegas", title: "Vegas Infinity Lap Pool", desc: "Resort-style temperature controlled lap pool with sunken aqua loungers & cabanas.", img: "https://paradise-saiworldcitypanvel.com/assets/images/amenities/Swimming-Pool.webp", iconKey: "pool" },
  { category: "Wellness & Spa", title: "TechnoGym Olympic Fitness", desc: "Fully equipped cardio, strength, and CrossFit arena with personal training staff.", img: "https://paradise-saiworldcitypanvel.com/assets/images/amenities/Gym.webp", iconKey: "gym" },
  { category: "Sports Arena", title: "Indoor Sports Lounge", desc: "Championship snooker, table tennis, air hockey, and card gaming suites.", img: "https://paradise-saiworldcitypanvel.com/assets/images/amenities/Indoor-Games.webp", iconKey: "games" },
  { category: "Kids & Family", title: "Kids Pool & Aqua Play Area", desc: "Splash pads, water slides, and adventure play zones with safety EPDM flooring.", img: "https://paradise-saiworldcitypanvel.com/assets/images/amenities/Kids-Pool-and-Play-Area.webp", iconKey: "kids" },
  { category: "Nature & Gardens", title: "Dry Mountain Courtyard", desc: "Serene zen stone courtyard with tranquil Japanese dry landscape styling.", img: "https://paradise-saiworldcitypanvel.com/assets/images/amenities/Dry-Mountain-Courtyard.webp", iconKey: "zen" },
  { category: "Club Vegas", title: "Private Dolby Atmos Cinema", desc: "32-seater luxury screening theatre for private movie premieres and sporting events.", img: "https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-3.webp", iconKey: "cinema" },
  { category: "Sky Living", title: "Sky Observatory Deck", desc: "High-altitude telescope deck for star gazing and NMIA runway flight view vistas.", img: "https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-1.webp", iconKey: "observatory" },
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
  { name: "Palaspe Junction, Panvel", time: "4 Mins*", category: "connectivity", iconKey: "pin", type: "Key Junction", note: "Direct gateway intersection connecting Mumbai, Pune, and Goa" },
  { name: "NH 17: Mumbai–Goa Highway", time: "4 Mins*", category: "connectivity", iconKey: "highway", type: "National Highway", note: "Immediate access for seamless coastal connectivity" },
  { name: "Panvel Bus Depot", time: "8 Mins*", category: "connectivity", iconKey: "bus", type: "State Transit Hub", note: "Central interstate transit bus terminus" },
  { name: "Mumbai Trans Harbour Link (MTHL / Atal Setu)", time: "10 Mins*", category: "connectivity", iconKey: "bridge", type: "Trans-Harbour Sea Bridge", note: "Direct 20-minute signal-free corridor into South Mumbai" },
  { name: "Multi Modal Corridor (MMC)", time: "10 Mins*", category: "connectivity", iconKey: "metro", type: "High-Speed Ring", note: "126-km growth corridor linking Virar to Alibaug" },
  { name: "NH 4: Mumbai–Pune Highway", time: "12 Mins*", category: "connectivity", iconKey: "car", type: "Expressway", note: "Smooth connectivity to Pune and IT industrial hubs" },
  { name: "Panvel Terminus Railway Station", time: "12 Mins*", category: "connectivity", iconKey: "train", type: "Central Rail Junction", note: "Hub for Harbour, Central, and outstation Konkan trains" },
  { name: "NH 4B: JNPT Expressway", time: "16 Mins*", category: "connectivity", iconKey: "port", type: "Port Corridor", note: "Rapid freight and logistics connectivity to JNPT port" },
  { name: "Navi Mumbai Intl. Airport (NMIA)", time: "22 Mins*", category: "connectivity", iconKey: "flight", type: "International Airport", note: "Upcoming greenfield international mega aviation hub" },

  // Education Hub
  { name: "MNR International School", time: "7 Mins*", category: "education_hub", iconKey: "school", type: "CBSE / IB School", note: "Premier international K-12 schooling with sports complex" },
  { name: "St. Wilfred Academy", time: "10 Mins*", category: "education_hub", iconKey: "school", type: "Higher Education", note: "Reputed engineering, arts, and management campus" },
  { name: "New Horizon Public School", time: "10 Mins*", category: "education_hub", iconKey: "book", type: "CBSE School", note: "Ranked among top academic institutions in Panvel" },
  { name: "DAV Public School", time: "10 Mins*", category: "education_hub", iconKey: "school", type: "CBSE School", note: "Distinguished academic excellence center" },
  { name: "St. Joseph's High School", time: "10 Mins*", category: "education_hub", iconKey: "school", type: "High School", note: "Distinguished convent education" },
  { name: "CKT School & College", time: "10 Mins*", category: "education_hub", iconKey: "school", type: "Junior & Degree College", note: "Premier commerce, science, and arts academy" },
  { name: "Mahatma School", time: "12 Mins*", category: "education_hub", iconKey: "book", type: "School & Junior College", note: "Comprehensive holistic education campus" },
  { name: "Pillai College of Engineering", time: "12 Mins*", category: "education_hub", iconKey: "school", type: "Engineering & Architecture", note: "Top engineering, architecture & research campus" },
  { name: "Amity University Mumbai", time: "16 Mins*", category: "education_hub", iconKey: "school", type: "Global University", note: "Sprawling university campus with global degree courses" },
  { name: "Ryan International School", time: "18 Mins*", category: "education_hub", iconKey: "school", type: "ICSE / CBSE School", note: "Global sports and academic curriculum" },
  { name: "Delhi Public School (DPS Panvel)", time: "24 Mins*", category: "education_hub", iconKey: "school", type: "CBSE School", note: "World-class education infrastructure & Olympic sports" },

  // Healthcare
  { name: "Lifeline Hospital", time: "7 Mins*", category: "healthcare", iconKey: "hospital", type: "Multi-Speciality", note: "24x7 emergency and trauma care centre" },
  { name: "Gandhi Super Speciality Hospital", time: "7 Mins*", category: "healthcare", iconKey: "stethoscope", type: "Super Speciality", note: "Advanced cardiology and surgical facilities" },
  { name: "Niramay Hospital", time: "7 Mins*", category: "healthcare", iconKey: "hospital", type: "Multi-Speciality Hospital", note: "Full critical and maternal care" },
  { name: "Sparsh Hospital", time: "7 Mins*", category: "healthcare", iconKey: "stethoscope", type: "Critical Care", note: "Specialized orthopedics and general care" },
  { name: "Paramount Hospital", time: "7 Mins*", category: "healthcare", iconKey: "hospital", type: "General Hospital", note: "Inpatient and outpatient healthcare" },
  { name: "Unnati Multi-Speciality Hospital", time: "7 Mins*", category: "healthcare", iconKey: "stethoscope", type: "Super Speciality", note: "Advanced surgical care" },
  { name: "Purohit Hospital", time: "8 Mins*", category: "healthcare", iconKey: "hospital", type: "General Hospital", note: "Comprehensive diagnostic and surgical care" },
  { name: "Sahasrabuddhe Hospital", time: "9 Mins*", category: "healthcare", iconKey: "stethoscope", type: "Speciality Clinic", note: "Pediatric & family medicine" },
  { name: "Dr. Patil's Hospital", time: "9 Mins*", category: "healthcare", iconKey: "hospital", type: "General & Surgery", note: "Comprehensive medical services" },
  { name: "Dr. Oza Hospital", time: "9 Mins*", category: "healthcare", iconKey: "stethoscope", type: "Medical Center", note: "Diagnostic and day-care procedures" },
  { name: "Panacea Hospital", time: "10 Mins*", category: "healthcare", iconKey: "hospital", type: "Multi-Speciality", note: "Specialized ICUs and surgery wards" },
  { name: "Life Care Hospital", time: "10 Mins*", category: "healthcare", iconKey: "stethoscope", type: "General Hospital", note: "Emergency and pathology services" },
  { name: "More Hospital", time: "10 Mins*", category: "healthcare", iconKey: "hospital", type: "Healthcare Center", note: "Family clinic and specialty doctors" },
  { name: "Arunodaya Hospital", time: "10 Mins*", category: "healthcare", iconKey: "stethoscope", type: "Speciality Hospital", note: "Maternity and orthopedic clinic" },
  { name: "Phoenix Hospital", time: "10 Mins*", category: "healthcare", iconKey: "hospital", type: "Emergency Care", note: "Round-the-clock ambulance and ICU" },
  { name: "MGM Hospital & Medical College", time: "12 Mins*", category: "healthcare", iconKey: "hospital", type: "Tertiary Care Hospital", note: "1000+ bed medical university & emergency hub" },

  // Malls & Shopping
  { name: "Orion Mall Panvel (PVR Cinemas)", time: "8 Mins*", category: "malls_shopping", iconKey: "shopping", type: "Mega Mall", note: "Major retail stores, food court, and multiplex" },
  { name: "Reliance Fresh", time: "9 Mins*", category: "malls_shopping", iconKey: "cart", type: "Supermarket", note: "Fresh groceries and daily essentials" },
  { name: "D-Mart Hypermarket Palaspe", time: "10 Mins*", category: "malls_shopping", iconKey: "cart", type: "Hypermarket", note: "Daily grocery, apparel, and home essentials" },
  { name: "Little World Mall Kharghar", time: "18 Mins*", category: "malls_shopping", iconKey: "shopping", type: "Shopping Mall", note: "Multiplex cinemas, apparel brands, and casual dining" },

  // Tech & Business Parks
  { name: "CIDCO Business Zone", time: "16 Mins*", category: "tech_park", iconKey: "building", type: "Corporate Hub", note: "Modern commercial towers and office complexes" },
  { name: "Panvel Business Park", time: "22 Mins*", category: "tech_park", iconKey: "building", type: "Commercial District", note: "Corporate offices and IT enterprises" },
  { name: "Kharghar Industrial Zone", time: "28 Mins*", category: "tech_park", iconKey: "building", type: "Industrial Hub", note: "Manufacturing and light industrial parks" },
  { name: "Taloja Business Park", time: "30 Mins*", category: "tech_park", iconKey: "building", type: "Logistics Hub", note: "Logistics, pharmaceutical, and manufacturing estate" },

  // Rejuvenation & Leisure
  { name: "18-Hole Kharghar Valley Golf Course", time: "5 Mins*", category: "rejuvenation", iconKey: "golf", type: "Championship Golf", note: "CIDCO international championship 18-hole golf course" },
  { name: "Kharghar Central Park (290 Acres)", time: "5 Mins*", category: "rejuvenation", iconKey: "tree", type: "Thematic Mega Park", note: "Asia's largest thematic green city park" },
  { name: "Grand ISKCON Temple Kharghar", time: "5 Mins*", category: "rejuvenation", iconKey: "temple", type: "Spiritual Centre", note: "Architectural masterpiece and cultural temple complex" },
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
    category: "Landscape",
    img: "https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-6.webp",
    desc: "Lush botanical gardens, zen alcoves, and private jogging trails.",
  },
];

/* Pure Vector SVG Icons — No Emojis */
function renderSvgIcon(key: string) {
  switch (key) {
    case "pin":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "highway":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m4 19 4-14h8l4 14" /><path d="M12 5v3" /><path d="M12 11v3" /><path d="M12 17v2" />
        </svg>
      );
    case "bus":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="16" height="16" rx="2" /><path d="M4 10h16" /><circle cx="8" cy="15" r="1.5" /><circle cx="16" cy="15" r="1.5" /><path d="m6 19-2 2" /><path d="m18 19 2 2" />
        </svg>
      );
    case "bridge":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 18h20" /><path d="M4 18V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9" /><path d="M7 18V7" /><path d="M17 18V7" /><path d="M2 12h20" />
        </svg>
      );
    case "metro":
    case "train":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="16" height="16" rx="2" /><path d="M4 11h16" /><circle cx="8" cy="15" r="1.5" /><circle cx="16" cy="15" r="1.5" /><path d="M12 3v8" /><path d="m8 19-3 3" /><path d="m16 19 3 3" />
        </svg>
      );
    case "car":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.8C2.1 11.2 2 11.7 2 12.2V16c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" />
        </svg>
      );
    case "port":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" /><line x1="12" y1="8" x2="12" y2="21" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        </svg>
      );
    case "flight":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
        </svg>
      );
    case "school":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
        </svg>
      );
    case "book":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" /><path d="M6 6h10" /><path d="M6 10h10" />
        </svg>
      );
    case "hospital":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" /><path d="M12 8v8" /><path d="M8 12h8" />
        </svg>
      );
    case "stethoscope":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" /><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" /><circle cx="20" cy="10" r="2" />
        </svg>
      );
    case "shopping":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case "cart":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="21" r="1.5" /><circle cx="19" cy="21" r="1.5" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      );
    case "building":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M8 10h.01" /><path d="M12 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" />
        </svg>
      );
    case "golf":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h16" /><path d="M12 2v20" /><path d="M12 2l7 4-7 4" />
        </svg>
      );
    case "tree":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19v3" /><path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" />
        </svg>
      );
    case "temple":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" /><path d="M5 21V10l7-6 7 6v11" /><path d="M9 21v-5a3 3 0 0 1 6 0v5" />
        </svg>
      );
    case "clubhouse":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "pool":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12c1.5 0 2.5 1 4 1s2.5-1 4-1 2.5 1 4 1 2.5-1 4-1 2.5 1 4 1" /><path d="M2 18c1.5 0 2.5 1 4 1s2.5-1 4-1 2.5 1 4 1 2.5-1 4-1 2.5 1 4 1" /><path d="M7 8V3a1 1 0 0 1 1-1h1" /><path d="M15 8V3a1 1 0 0 1 1-1h1" />
        </svg>
      );
    case "gym":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6.5 6.5 11 11" /><path d="m21 21-1-1" /><path d="m3 3 1 1" /><path d="m18 22 4-4" /><path d="m2 6 4-4" /><path d="m3 10 7-7" /><path d="m14 21 7-7" />
        </svg>
      );
    case "games":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 12h4" /><path d="M8 10v4" /><circle cx="15" cy="13" r="1.5" /><circle cx="18" cy="11" r="1.5" />
        </svg>
      );
    case "kids":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      );
    case "zen":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 0 0 18" /><circle cx="12" cy="7.5" r="1.5" /><circle cx="12" cy="16.5" r="1.5" />
        </svg>
      );
    case "cinema":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="15" x="2" y="5" rx="2" /><polygon points="10 9 15 12 10 15 10 9" />
        </svg>
      );
    case "observatory":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
        </svg>
      );
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

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

  // Scroll-triggered reveal animations (IntersectionObserver)
  const revealRef = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    // Observe this node and all children with revealOnScroll class
    if (node.classList.contains(styles.revealOnScroll)) {
      observer.observe(node);
    }
    const children = node.querySelectorAll(`.${styles.revealOnScroll}`);
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
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
      : LOCATION_RADAR_ITEMS.filter((l) => l.category === locationTab);

  const filteredGallery =
    galleryFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.category === galleryFilter);

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
            />
            <span className={styles.brandDivider}>|</span>
            <span className={styles.brandSub}>AASCO LUXURY COLLECTION</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#overview" className={styles.navLinkItem}>Overview</a>
            <a href="#pricing" className={styles.navLinkItem}>Floor Plans &amp; Pricing</a>
            <a href="#amenities" className={styles.navLinkItem}>Club Vegas</a>
            <a href="#walkthrough" className={styles.navLinkItem}>Walkthrough</a>
            <a href="#location" className={styles.navLinkItem}>Connectivity</a>
            <a href="#gallery" className={styles.navLinkItem}>Gallery</a>
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

        {/* User Request: Interactive View Switcher Bar in RIGHT DOWN CORNER */}
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

      {/* Luxury Scrolling Marquee Ribbon */}
      <div className={styles.luxuryMarquee}>
        <div className={styles.marqueeTrack}>
          {[1, 2].map((set) => (
            <React.Fragment key={set}>
              <span className={`${styles.marqueeItem} ${styles.marqueeGold}`}>Sai World City Panvel</span>
              <span className={styles.marqueeDot} />
              <span className={styles.marqueeItem}>38-Acre Global Township</span>
              <span className={styles.marqueeDot} />
              <span className={`${styles.marqueeItem} ${styles.marqueeGold}`}>75,000 Sq.Ft. Club Vegas</span>
              <span className={styles.marqueeDot} />
              <span className={styles.marqueeItem}>2, 3, 3.5 & 4 BHK Luxury Residences</span>
              <span className={styles.marqueeDot} />
              <span className={`${styles.marqueeItem} ${styles.marqueeGold}`}>By Paradise Group</span>
              <span className={styles.marqueeDot} />
              <span className={styles.marqueeItem}>Navi Mumbai International Airport 20 Mins</span>
              <span className={styles.marqueeDot} />
              <span className={`${styles.marqueeItem} ${styles.marqueeGold}`}>Starting ₹ 1.25 Cr*</span>
              <span className={styles.marqueeDot} />
              <span className={styles.marqueeItem}>RERA: P52000006318</span>
              <span className={styles.marqueeDot} />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Page Content Wrapper for Overlapping Curtain Reveal Footer */}
      <div className={styles.pageContentWrapper}>
        {/* About The Township Section */}
        <section className={styles.aboutTownshipSection} ref={revealRef}>
          <div className={styles.sectionContainer}>
            <div className={`${styles.sectionHeader} ${styles.revealOnScroll}`}>
              <span className={styles.sectionEyebrow}>THE MASTER VISION</span>
              <h2>A Global Landmark in <em>Panvel, Navi Mumbai</em></h2>
              <p className={styles.sectionDesc}>
                Conceived as Mumbai Metropolitan Region’s most cosmopolitan mega-township, Sai World City brings
                together world-renowned architecture, opulent club lifestyle, and pristine nature across 38 sprawling acres.
              </p>
            </div>

            <div className={`${styles.aboutGrid} ${styles.revealOnScroll}`}>
              <div className={styles.aboutTextCol}>
                <p className={styles.aboutLead}>
                  Discover an international lifestyle where every morning begins with breathtaking Sahyadri hill views
                  and world-class resort hospitality at Club Vegas.
                </p>
                <p className={styles.aboutBody}>
                  Strategically situated at the vital Palaspe Junction, Sai World City connects you to Mumbai Trans Harbour
                  Link (Atal Setu), upcoming Navi Mumbai International Airport (NMIA), and key economic corridors within minutes.
                </p>

                <div className={styles.aboutFeatures}>
                  <div className={styles.aboutFeatureItem}>
                    <div className={styles.featureIconWrap}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <div>
                      <strong>Theme-Based Living</strong>
                      <span>Inspired by New York, Paris &amp; Dubai architectural masteries.</span>
                    </div>
                  </div>
                  <div className={styles.aboutFeatureItem}>
                    <div className={styles.featureIconWrap}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <strong>RERA Registered</strong>
                      <span>P52000006318 &amp; P52000022708 clear title township.</span>
                    </div>
                  </div>
                  <div className={styles.aboutFeatureItem}>
                    <div className={styles.featureIconWrap}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12c1.5 0 2.5 1 4 1s2.5-1 4-1 2.5 1 4 1 2.5-1 4-1 2.5 1 4 1" />
                        <path d="M7 8V3a1 1 0 0 1 1-1h1" />
                      </svg>
                    </div>
                    <div>
                      <strong>75,000 Sq.Ft. Club Vegas</strong>
                      <span>50+ international amenities with Olympic-size lap pools.</span>
                    </div>
                  </div>
                  <div className={styles.aboutFeatureItem}>
                    <div className={styles.featureIconWrap}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
                      </svg>
                    </div>
                    <div>
                      <strong>20 Mins from NMIA</strong>
                      <span>Fast-track access to airport, Atal Setu, and metro transit.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.aboutVisualCol}>
                <div className={styles.aboutImageFrame}>
                  <img
                    src="https://paradise-saiworldcitypanvel.com/assets/images/about/About.webp"
                    alt="Sai World City Township Overview"
                    className={styles.aboutMainImg}
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

        {/* Gold Section Divider */}
        <div className={styles.sectionDivider} />

        {/* Interactive Pricing & Floor Plan Matrix — Improved UI (No Emojis) */}
        <section className={styles.pricingSection} id="pricing" ref={revealRef}>
          <div className={styles.sectionContainer}>
            <div className={`${styles.sectionHeader} ${styles.revealOnScroll}`}>
              <span className={styles.sectionEyebrow}>ARCHITECTURAL BLUEPRINTS</span>
              <h2>Area &amp; <em>Floor Plan Breakdown</em></h2>
              <p className={styles.sectionDesc}>
                Select your preferred configuration to inspect dimensions, carpet areas, indicative pricing, and master blueprints.
              </p>
            </div>

            {/* Master Plan vs Unit Plan Toggle — Pure SVG Icons */}
            <div className={styles.planTypeToggleRow}>
              <button
                className={`${styles.planTypeBtn} ${activeFloorPlanTab === "unit" ? styles.activePlanTypeBtn : ""}`}
                onClick={() => setActiveFloorPlanTab("unit")}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><rect width="10" height="10" x="7" y="7" />
                </svg>
                <span>Unit Floor Plans</span>
              </button>
              <button
                className={`${styles.planTypeBtn} ${activeFloorPlanTab === "master" ? styles.activePlanTypeBtn : ""}`}
                onClick={() => setActiveFloorPlanTab("master")}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /><line x1="9" y1="3" x2="9" y2="18" /><line x1="15" y1="6" x2="15" y2="21" />
                </svg>
                <span>38-Acre Master Layout Plan</span>
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
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <span>Click to View High-Resolution Master Plan</span>
                  </div>
                </div>
                <div className={styles.masterPlanMeta}>
                  <h3>Sai World City 38-Acre Master Township Layout</h3>
                  <p>
                    Comprehensive layout featuring high-rise towers, 75,000 sq. ft. Club Vegas, multi-tiered security,
                    podium recreation parks, Olympic swimming lap pools, and multi-sport astro turfs.
                  </p>
                  <button onClick={() => setIsBrochureModalOpen(true)} className={styles.planBookBtn}>
                    Download Master Plan PDF ↗
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
                      <div className={styles.tabHeaderRow}>
                        <span className={styles.tabBhk}>{config.bhk}</span>
                        <span className={styles.tabCarpetMini}>{config.carpetArea.split(" ")[0]} sqft</span>
                      </div>
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
                      <span className={styles.dimTitle}>TYPICAL ROOM DIMENSIONS</span>
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
                      <span className={styles.featuresTitle}>SPECIFICATION HIGHLIGHTS</span>
                      <ul>
                        {selectedPlan.features.map((feat, i) => (
                          <li key={i}>
                            <span className={styles.featureCheckSvg}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                            <span>{feat}</span>
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

                  {/* Interactive Floor Plan Preview Column */}
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
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <span>Click to Enlarge Floor Plan</span>
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
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {h}
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

        {/* Gold Section Divider */}
        <div className={styles.sectionDivider} />

        {/* 75,000 Sq.Ft. Club Vegas & 50+ Amenities — Full-Page Experience */}
        <section className={styles.amenitiesSection} id="amenities" ref={revealRef}>
          <div className={styles.sectionContainer}>
            <div className={`${styles.sectionHeader} ${styles.revealOnScroll}`}>
              <span className={styles.sectionEyebrow}>RESORT-STYLE GLOBAL DESTINATION</span>
              <h2>75,000 Sq.Ft. Club Vegas &amp; <em>50+ Amenities</em></h2>
              <p className={styles.sectionDesc}>
                A world of international entertainment, sports, and serene rejuvenation built to exceed the finest 5-star clubhouses.
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
                      <span className={styles.amenitySvgWrap}>{renderSvgIcon(amenity.iconKey)}</span>
                      <h4 className={styles.amenityTitle}>{amenity.title}</h4>
                    </div>
                    <p className={styles.amenityDesc}>{amenity.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Request: Architectural Video Walkthrough — Full Page Width & Autoplay */}
        <section className={styles.walkthroughSection} id="walkthrough">
          <div className={styles.walkthroughHeaderWrap}>
            <div className={styles.sectionHeader} style={{ textAlign: "center", marginBottom: "30px" }}>
              <span className={styles.sectionEyebrow}>38-ACRE CINEMATIC IMMERSION</span>
              <h2>Experience Club Vegas &amp; <em>Township Walkthrough</em></h2>
              <p className={styles.sectionDesc} style={{ margin: "0 auto" }}>
                Witness the grand high-rise towers, 75,000 sq. ft. Club Vegas, and panoramic Sahyadri hill views in this 4K drone tour.
              </p>
            </div>
          </div>

          {/* Full Page Width Player with Autoplay */}
          <div className={styles.videoPlayerFullBleed}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/SzbhWhcaKqg?autoplay=1&mute=1&loop=1&playlist=SzbhWhcaKqg&playsinline=1&controls=1&rel=0&modestbranding=1&enablejsapi=1"
              title="Sai World City Panvel Official Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles.youtubeIframeFull}
            />
            <div className={styles.videoFloatingControlBar}>
              <div className={styles.videoMetaLeft}>
                <span className={styles.liveAutoplayBadge}>
                  <span className={styles.liveDot} /> AUTOPLAY ACTIVE
                </span>
                <span className={styles.videoTitleText}>Sai World City Panvel — Official 4K Architectural Tour</span>
              </div>
              <button onClick={() => setIsVideoOpen(true)} className={styles.fullscreenTourBtn}>
                Full-Screen Mode ↗
              </button>
            </div>
          </div>
        </section>

        {/* Strategic Location Radar — Vector SVGs & 100% Left-to-Right Full Bleed Map */}
        <section className={styles.locationSection} id="location" ref={revealRef}>
          <div className={styles.sectionContainer}>
            <div className={`${styles.sectionHeader} ${styles.revealOnScroll}`}>
              <span className={styles.sectionEyebrow}>STRATEGIC CONNECTIVITY RADAR</span>
              <h2>Connected to the <em>Heart of MMR Growth</em></h2>
              <p className={styles.sectionDesc}>
                Positioned at Palaspe Junction, Panvel with signal-free highway, metro, airport, and trans-harbour link connectivity.
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

            {/* Connectivity Cards — Pure SVG Icons */}
            <div className={styles.connectivityGrid}>
              {filteredLocations.map((item, idx) => (
                <div key={idx} className={styles.connectivityCard}>
                  <div className={styles.connIconWrap}>{renderSvgIcon(item.iconKey)}</div>
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

          {/* User Request: GEOGRAPHIC LOCATION Uses Whole Left-to-Right Place of Page */}
          <div className={styles.googleMapsFullBleedSection}>
            <div className={styles.mapsTopBanner}>
              <div className={styles.mapsTopBannerContent}>
                <div className={styles.mapsTextGroup}>
                  <span className={styles.mapEyebrow}>GEOGRAPHIC LOCATION</span>
                  <h3 className={styles.mapTitle}>Palaspe Junction, Panvel, Navi Mumbai (18.9676° N, 73.1248° E)</h3>
                  <p className={styles.mapSub}>Gateway intersection uniting Mumbai, Pune, and Goa arterial expressways.</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Sai+World+City+Panvel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapDirectionsBtn}
                >
                  Get Live Directions on Google Maps ↗
                </a>
              </div>
            </div>

            <div className={styles.googleMapsIframeWrap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.180985554309!2d73.1248308!3d18.9676128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e7b1c4bf9485%3A0xde2ff6b4d8743963!2sSAI%20WORLD%20CITY!5e0!3m2!1sen!2sin!4v1776947274098!5m2!1sen!2sin"
                title="Sai World City Full Width Location Map"
                className={styles.googleMapsIframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Gold Section Divider */}
        <div className={styles.sectionDivider} />

        {/* Project Gallery & Architecture — Enhanced Luxury UI */}
        <section className={styles.gallerySection} id="gallery" ref={revealRef}>
          <div className={styles.sectionContainer}>
            <div className={`${styles.sectionHeader} ${styles.revealOnScroll}`}>
              <span className={styles.sectionEyebrow}>VISUAL PORTFOLIO</span>
              <h2>Project <em>Gallery &amp; Architecture</em></h2>
              <p className={styles.sectionDesc}>
                Witness the craftsmanship, 75,000 sq.ft. clubhouse resort, panoramic double decks, and manicured green podiums.
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
                      <span className={styles.zoomIcon}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        Click to Enlarge
                      </span>
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

        {/* Gold Section Divider */}
        <div className={styles.sectionDivider} />

        {/* Developer Spotlight & Credentials */}
        <section className={styles.developerSection} ref={revealRef}>
          <div className={styles.sectionContainer}>
            <div className={`${styles.developerCard} ${styles.revealOnScroll}`}>
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
                  <div className={styles.agentBadgeIcon}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
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

        {/* Gold Section Divider */}
        <div className={styles.sectionDivider} />

        {/* VIP Booking & Consultation Section */}
        <section className={styles.bookingSection} id="booking" ref={revealRef}>
          <div className={styles.sectionContainer}>
            <div className={`${styles.bookingWrapper} ${styles.revealOnScroll}`}>
              <div className={styles.bookingIntro}>
                <span className={styles.bookingEyebrow}>EXCLUSIVE CONSULTATION</span>
                <h2>Schedule a <em>VIP Site Visit</em></h2>
                <p className={styles.bookingLead}>
                  Experience Sai World City Panvel with an exclusive personalized guided tour, complimentary
                  pickup &amp; drop, customized payment plans, and early bird phase 3 offers.
                </p>

                <div className={styles.bookingPerks}>
                  <div className={styles.perkItem}>
                    <span className={styles.perkCheckSvg}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>Guaranteed best developer pricing &amp; early bird inventory</span>
                  </div>
                  <div className={styles.perkItem}>
                    <span className={styles.perkCheckSvg}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>End-to-end legal verification &amp; home loan assistance</span>
                  </div>
                  <div className={styles.perkItem}>
                    <span className={styles.perkCheckSvg}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
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
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29" />
                    </svg>
                    <span>Chat on WhatsApp ↗</span>
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
      </div>

      {/* User Request: Footer with Scroll Overlapping Animation */}
      <footer className={styles.bottomFooter}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            <div className={styles.footerColBrand}>
              <span className={styles.footerBrand}>AASCO REALTY</span>
              <p className={styles.footerTagline}>From Dream to Reality · Curated MMR Luxury Properties</p>
              <p className={styles.footerAboutText}>
                Premier real estate advisory specializing in ultra-luxury developments, high-growth corridors, and strategic property investments across Navi Mumbai and Mumbai.
              </p>
              <div className={styles.footerReraPill}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Authorized Agent MahaRERA: A51900029955</span>
              </div>
            </div>

            <div className={styles.footerCol}>
              <h5 className={styles.footerColTitle}>The Township</h5>
              <div className={styles.footerColLinks}>
                <a href="#overview">Township Master Vision</a>
                <a href="#amenities">75,000 Sq.Ft. Club Vegas</a>
                <a href="#walkthrough">Architectural Video Tour</a>
                <a href="#location">Panvel &amp; MMR Radar</a>
                <a href="#gallery">Project Gallery</a>
              </div>
            </div>

            <div className={styles.footerCol}>
              <h5 className={styles.footerColTitle}>Residences</h5>
              <div className={styles.footerColLinks}>
                <a href="#pricing">2 BHK Luxury Elite (620-892 Sq.Ft)</a>
                <a href="#pricing">3 BHK Grande Royale (1334 Sq.Ft)</a>
                <a href="#pricing">3.5 BHK Imperial Suite (1598 Sq.Ft)</a>
                <a href="#pricing">4 BHK Royal Penthouse (1858 Sq.Ft)</a>
                <a href="#pricing">38-Acre Master Layout</a>
              </div>
            </div>

            <div className={styles.footerCol}>
              <h5 className={styles.footerColTitle}>Consultation</h5>
              <div className={styles.footerColLinks}>
                <a href="tel:+918828112657">+91 88281 12657</a>
                <a href="https://wa.me/918828112657">WhatsApp Instant Connect</a>
                <a href="#booking">Book Complimentary Cab Visit</a>
                <Link href="/works#top">All Navi Mumbai Properties</Link>
                <Link href="/privacy-policy#top">Privacy Policy</Link>
              </div>
            </div>
          </div>

          <div className={styles.footerDisclaimers}>
            <p>
              Project MahaRERA Registration: Phase 1 &amp; 2: P52000006318 | Phase 3: P52000022708. Available at website maharera.mahaonline.gov.in.
            </p>
            <p>
              Disclaimer: The information presented on this page is for guidance purposes only. Floor plans, specifications, amenities, and dimensions are indicative and subject to change by the developer. All brand marks and logos belong to Paradise Group.
            </p>
            <p className={styles.footerCopyright}>
              © {new Date().getFullYear()} Aasco Realty (PropSolutions4U Pvt. Ltd.). All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Quick Conversion Bar — Pure SVGs */}
      <aside className={styles.stickyBottomBar} aria-label="Quick Property Actions">
        <div className={styles.stickyContainer}>
          <div className={styles.stickyPropertyInfo}>
            <strong className={styles.stickyPropName}>Sai World City Panvel</strong>
            <span className={styles.stickyDivider}>|</span>
            <span className={styles.stickyPrice}>2, 3, 3.5 &amp; 4 BHK from ₹ 1.25 Cr*</span>
          </div>
          <div className={styles.stickyActions}>
            <a href="tel:+918828112657" className={styles.stickyCallBtn}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 88281 12657</span>
            </a>
            <a
              href="https://wa.me/918828112657?text=Hello%20Aasco%2C%20I%20am%20interested%20in%20Sai%20World%20City%20Panvel."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.stickyWhatsappBtn}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29" />
              </svg>
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => setIsBrochureModalOpen(true)}
              className={styles.stickyBrochureBtn}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Brochure</span>
            </button>
            <a href="#booking" className={styles.stickyVisitBtn}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>Book Visit</span>
            </a>
          </div>
        </div>
      </aside>

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
                src="https://www.youtube-nocookie.com/embed/SzbhWhcaKqg?autoplay=1&rel=0"
                title="Official Walkthrough Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.modalIframe}
              />
            </div>
          </div>
        </div>
      )}

      {/* Brochure Request Modal */}
      {isBrochureModalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsBrochureModalOpen(false)}>
          <div className={styles.modalContentBrochure} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h4>Download Sai World City Panvel E-Brochure</h4>
              <button className={styles.closeModalBtn} onClick={() => setIsBrochureModalOpen(false)}>
                ✕
              </button>
            </div>
            <div className={styles.modalBody}>
              {brochureSubmitted ? (
                <div className={styles.successState}>
                  <span className={styles.successCheck}>✓</span>
                  <h3>Brochure On Its Way!</h3>
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
                    Instant Download Brochure ➔
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className={styles.lightboxOverlay} onClick={() => setLightboxImage(null)}>
          <div className={styles.lightboxWrap} onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Expanded Blueprint / Gallery View" className={styles.lightboxImg} />
            <button className={styles.lightboxClose} onClick={() => setLightboxImage(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
