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
  { name: "Palaspe Junction, Panvel", time: "4 Mins*", category: "connectivity", iconKey: "pin", type: "Key Junction", note: "Direct gateway intersection connecting Mumbai, Pune, and Goa" },
  { name: "NH 17: Mumbai–Goa Highway", time: "4 Mins*", category: "connectivity", iconKey: "highway", type: "National Highway", note: "Immediate access for seamless coastal connectivity" },
  { name: "Panvel Bus Depot", time: "8 Mins*", category: "connectivity", iconKey: "bus", type: "State Transit Hub", note: "Central interstate transit bus terminus" },
  { name: "Mumbai Trans Harbour Link (MTHL / Atal Setu)", time: "10 Mins*", category: "connectivity", iconKey: "bridge", type: "Trans-Harbour Sea Bridge", note: "Direct 20-minute signal-free corridor into South Mumbai" },
  { name: "Multi Modal Corridor (MMC)", time: "10 Mins*", category: "connectivity", iconKey: "metro", type: "High-Speed Ring", note: "126-km growth corridor linking Virar to Alibaug" },
  { name: "NH 4: Mumbai–Pune Highway", time: "12 Mins*", category: "connectivity", iconKey: "car", type: "Expressway", note: "Smooth connectivity to Pune and IT industrial hubs" },
  { name: "Panvel Terminus Railway Station", time: "12 Mins*", category: "connectivity", iconKey: "train", type: "Central Rail Junction", note: "Hub for Harbour, Central, and outstation Konkan trains" },
  { name: "NH 4B: JNPT Expressway", time: "16 Mins*", category: "connectivity", iconKey: "port", type: "Port Corridor", note: "Rapid freight and logistics connectivity to JNPT port" },
  { name: "Navi Mumbai Intl. Airport (NMIA)", time: "22 Mins*", category: "connectivity", iconKey: "flight", type: "International Airport", note: "Upcoming greenfield international mega aviation hub" },
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
  { name: "Orion Mall Panvel (PVR Cinemas)", time: "8 Mins*", category: "malls_shopping", iconKey: "shopping", type: "Mega Mall", note: "Major retail stores, food court, and multiplex" },
  { name: "Reliance Fresh", time: "9 Mins*", category: "malls_shopping", iconKey: "cart", type: "Supermarket", note: "Fresh groceries and daily essentials" },
  { name: "D-Mart Hypermarket Palaspe", time: "10 Mins*", category: "malls_shopping", iconKey: "cart", type: "Hypermarket", note: "Daily grocery, apparel, and home essentials" },
  { name: "Little World Mall Kharghar", time: "18 Mins*", category: "malls_shopping", iconKey: "shopping", type: "Shopping Mall", note: "Multiplex cinemas, apparel brands, and casual dining" },
  { name: "CIDCO Business Zone", time: "16 Mins*", category: "tech_park", iconKey: "building", type: "Corporate Hub", note: "Modern commercial towers and office complexes" },
  { name: "Panvel Business Park", time: "22 Mins*", category: "tech_park", iconKey: "building", type: "Commercial District", note: "Corporate offices and IT enterprises" },
  { name: "Kharghar Industrial Zone", time: "28 Mins*", category: "tech_park", iconKey: "building", type: "Industrial Hub", note: "Manufacturing and light industrial parks" },
  { name: "Taloja Business Park", time: "30 Mins*", category: "tech_park", iconKey: "building", type: "Logistics Hub", note: "Logistics, pharmaceutical, and manufacturing estate" },
  { name: "18-Hole Kharghar Valley Golf Course", time: "5 Mins*", category: "rejuvenation", iconKey: "golf", type: "Championship Golf", note: "CIDCO international championship 18-hole golf course" },
  { name: "Kharghar Central Park (290 Acres)", time: "5 Mins*", category: "rejuvenation", iconKey: "tree", type: "Thematic Mega Park", note: "Asia's largest thematic green city park" },
  { name: "Grand ISKCON Temple Kharghar", time: "5 Mins*", category: "rejuvenation", iconKey: "temple", type: "Spiritual Centre", note: "Architectural masterpiece and cultural temple complex" },
];

const GALLERY_ITEMS = [
  { title: "Cosmopolitan Skyscraper Elevation", category: "Architecture", img: "https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-1.webp", desc: "Iconic global architecture inspired by New York, Paris & Dubai skylines." },
  { title: "Club Vegas 75K Sq.Ft. Grand Entrance", category: "Club Vegas", img: "https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-2.webp", desc: "Multi-level G+5 clubhouse resort with luxury hospitality ambiance." },
  { title: "Opulent Living & Dining Grand Salon", category: "Interiors", img: "https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-3.webp", desc: "Expansive double deck with floor-to-ceiling glass and Italian marble finishes." },
  { title: "Presidential Master Bedroom Suite", category: "Interiors", img: "https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-4.webp", desc: "Spacious master suites with walk-in wardrobes and designer en-suite baths." },
  { title: "Vegas Infinity Lap Pool & Cabanas", category: "Club Vegas", img: "https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-5.webp", desc: "Resort-style lap pool with sunken aqua loungers and private gazebos." },
  { title: "38-Acre Podium Green Landscape", category: "Landscape", img: "https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-6.webp", desc: "Lush botanical gardens, zen alcoves, and private jogging trails." },
];

function renderSvgIcon(key: string) {
  const props = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (key) {
    case "pin": return <svg {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
    case "highway": return <svg {...props}><path d="m4 19 4-14h8l4 14" /><path d="M12 5v3" /><path d="M12 11v3" /><path d="M12 17v2" /></svg>;
    case "bus": return <svg {...props}><rect x="4" y="3" width="16" height="16" rx="2" /><path d="M4 10h16" /><circle cx="8" cy="15" r="1.5" /><circle cx="16" cy="15" r="1.5" /></svg>;
    case "bridge": return <svg {...props}><path d="M2 18h20" /><path d="M4 18V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9" /><path d="M7 18V7" /><path d="M17 18V7" /><path d="M2 12h20" /></svg>;
    case "metro": case "train": return <svg {...props}><rect x="4" y="3" width="16" height="16" rx="2" /><path d="M4 11h16" /><circle cx="8" cy="15" r="1.5" /><circle cx="16" cy="15" r="1.5" /><path d="M12 3v8" /></svg>;
    case "car": return <svg {...props}><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.8C2.1 11.2 2 11.7 2 12.2V16c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg>;
    case "port": return <svg {...props}><circle cx="12" cy="5" r="3" /><line x1="12" y1="8" x2="12" y2="21" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /></svg>;
    case "flight": return <svg {...props}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" /></svg>;
    case "school": return <svg {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" /></svg>;
    case "book": return <svg {...props}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" /><path d="M6 6h10" /><path d="M6 10h10" /></svg>;
    case "hospital": return <svg {...props}><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M12 8v8" /><path d="M8 12h8" /></svg>;
    case "stethoscope": return <svg {...props}><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" /><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" /><circle cx="20" cy="10" r="2" /></svg>;
    case "shopping": return <svg {...props}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>;
    case "cart": return <svg {...props}><circle cx="8" cy="21" r="1.5" /><circle cx="19" cy="21" r="1.5" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>;
    case "building": return <svg {...props}><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M8 10h.01" /><path d="M12 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /></svg>;
    case "golf": return <svg {...props}><path d="M4 22h16" /><path d="M12 2v20" /><path d="M12 2l7 4-7 4" /></svg>;
    case "tree": return <svg {...props}><path d="M12 19v3" /><path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" /></svg>;
    case "temple": return <svg {...props}><path d="M3 21h18" /><path d="M5 21V10l7-6 7 6v11" /><path d="M9 21v-5a3 3 0 0 1 6 0v5" /></svg>;
    case "clubhouse": return <svg {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
    case "pool": return <svg {...props}><path d="M2 12c1.5 0 2.5 1 4 1s2.5-1 4-1 2.5 1 4 1 2.5-1 4-1 2.5 1 4 1" /><path d="M2 18c1.5 0 2.5 1 4 1s2.5-1 4-1 2.5 1 4 1 2.5-1 4-1 2.5 1 4 1" /></svg>;
    case "gym": return <svg {...props}><path d="m6.5 6.5 11 11" /><path d="m21 21-1-1" /><path d="m3 3 1 1" /><path d="m18 22 4-4" /><path d="m2 6 4-4" /><path d="m3 10 7-7" /><path d="m14 21 7-7" /></svg>;
    case "games": return <svg {...props}><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 12h4" /><path d="M8 10v4" /><circle cx="15" cy="13" r="1.5" /><circle cx="18" cy="11" r="1.5" /></svg>;
    case "kids": return <svg {...props}><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>;
    case "zen": return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 0 0 18" /><circle cx="12" cy="7.5" r="1.5" /><circle cx="12" cy="16.5" r="1.5" /></svg>;
    case "cinema": return <svg {...props}><rect width="20" height="15" x="2" y="5" rx="2" /><polygon points="10 9 15 12 10 15 10 9" /></svg>;
    case "observatory": return <svg {...props}><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>;
    default: return <svg {...props}><circle cx="12" cy="12" r="10" /></svg>;
  }
}

const SECTIONS = [
  { id: "overview", label: "OVERVIEW" },
  { id: "amenities", label: "CLUB & PLANS" },
  { id: "walkthrough", label: "FILM" },
  { id: "gallery", label: "GALLERY" },
  { id: "location", label: "LOCATION" },
  { id: "about", label: "ABOUT" },
  { id: "booking", label: "ENQUIRE" },
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
  const [navSolid, setNavSolid] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [introVisible, setIntroVisible] = useState(true);

  const rootRef = useRef<HTMLDivElement>(null);

  // Auto banner rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBannerIndex((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Cinematic intro sequence
  useEffect(() => {
    const timer = setTimeout(() => setIntroVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  // Navigation scroll behavior + section tracking
  useEffect(() => {
    const handleScroll = () => {
      setNavSolid(window.scrollY > 80);
      const sectionIds = SECTIONS.map((s) => s.id);
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(i);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll reveal observer
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
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    if (node.classList.contains(styles.reveal)) observer.observe(node);
    node.querySelectorAll(`.${styles.reveal}`).forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  const handlePrevBanner = () => setActiveBannerIndex((prev) => (prev - 1 + HERO_BANNERS.length) % HERO_BANNERS.length);
  const handleNextBanner = () => setActiveBannerIndex((prev) => (prev + 1) % HERO_BANNERS.length);

  const selectedPlan = UNIT_CONFIGS[selectedPlanIndex];
  const filteredAmenities = amenityFilter === "All" ? AMENITIES : AMENITIES.filter((a) => a.category === amenityFilter);
  const filteredLocations = locationTab === "all" ? LOCATION_RADAR_ITEMS : LOCATION_RADAR_ITEMS.filter((l) => l.category === locationTab);
  const filteredGallery = galleryFilter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === galleryFilter);

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); setFormSubmitted(true); };
  const handleBrochureSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); setBrochureSubmitted(true); };

  return (
    <div className={styles.propertyRoot} ref={rootRef}>
      {/* Cinematic Intro Overlay */}
      {introVisible && (
        <div className={styles.introOverlay} style={{ opacity: introVisible ? 1 : 0, transition: "opacity 0.6s ease" }}>
          <span className={`${styles.introMeta} ${styles.introMetaVisible}`}>PARADISE GROUP</span>
          <div className={`${styles.introLine} ${styles.introLineActive}`} />
          <span className={`${styles.introMeta} ${styles.introMetaVisible}`}>PANVEL, NAVI MUMBAI</span>
        </div>
      )}

      {/* Scroll Progress Indicator */}
      <nav className={styles.scrollProgress} aria-label="Sections navigation">
        {SECTIONS.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(s.id);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className={`${styles.progressItem} ${activeSection === i ? styles.activeProgress : ""}`}
            style={{ textDecoration: "none" }}
          >
            <span className={styles.progressNumber}>{String(i + 1).padStart(2, "0")}</span>
            <span className={styles.progressLine} />
            <span className={styles.progressLabel}>{s.label}</span>
          </a>
        ))}
      </nav>

      {/* Navigation Header */}
      <header className={`${styles.topNav} ${navSolid ? styles.navSolid : styles.navTransparent}`}>
        <div className={styles.navContainer}>
          <Link href="/works#top" className={styles.backLink}>
            <span className={styles.backArrow}>←</span> All Properties
          </Link>
          <div className={styles.brandTitleWrap}>
            <img src="https://paradise-saiworldcitypanvel.com/assets/images/logo/logo.png" alt="Sai World City Logo" className={styles.brandLogoImg} />
            <span className={styles.brandDivider}>|</span>
            <span className={styles.brandSub}>AASCO COLLECTION</span>
          </div>
          <div className={styles.navLinks}>
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={styles.navLinkItem}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(s.id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {s.label}
              </a>
            ))}
            <a
              href="#booking"
              className={styles.navCta}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("booking");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book Visit
            </a>
          </div>
        </div>
      </header>

      {/* ═══ 1. HERO — CINEMATIC FULL VIEWPORT (01 OVERVIEW) ═══ */}
      <section className={styles.heroSection} id="overview">
        <div className={styles.heroBg}>
          {HERO_BANNERS.map((b, i) => (
            <img key={i} src={b.url} alt={b.title} className={styles.heroImg} style={{ position: "absolute", inset: 0, opacity: activeBannerIndex === i ? 1 : 0, transition: "opacity 1.2s ease", zIndex: activeBannerIndex === i ? 1 : 0 }} />
          ))}
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroVignette} />
        <div className={styles.heroGrain} />

        <button type="button" className={styles.heroArrowLeft} onClick={handlePrevBanner} aria-label="Previous image">‹</button>
        <button type="button" className={styles.heroArrowRight} onClick={handleNextBanner} aria-label="Next image">›</button>

        {/* Integrated Hero Controls Bar */}
        <div className={styles.heroSliderControls}>
          <button type="button" className={styles.heroControlBtn} onClick={handlePrevBanner} aria-label="Previous slide">‹</button>
          <div className={styles.slideCounter}>
            <span className={styles.slideCounterCurrent}>{String(activeBannerIndex + 1).padStart(2, "0")}</span>
            <span className={styles.slideCounterSep}>/</span>
            <span className={styles.slideCounterTotal}>{String(HERO_BANNERS.length).padStart(2, "0")}</span>
          </div>
          <button type="button" className={styles.heroControlBtn} onClick={handleNextBanner} aria-label="Next slide">›</button>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroTopRow}>
            <div className={styles.heroMetaLeft}>
              <span className={styles.heroMetaBadge}>
                <span className={styles.heroLiveDot} /> RERA REGISTERED
              </span>
              <span className={styles.heroMetaLocation}>PALASPE JUNCTION · PANVEL · NAVI MUMBAI</span>
            </div>
            <div className={styles.heroMetaRight}>
              <span className={styles.heroPhaseTag}>PHASE 2 &amp; 3 — NOW SELLING</span>
            </div>
          </div>

          <div className={styles.heroCenter}>
            <h1 className={styles.heroHeading}>
              Sai World<br /><em>City</em>
            </h1>
            <p className={styles.heroTagline}>The city within the city. 38 acres of global architecture.</p>
            <div className={styles.heroActions}>
              <a href="#pricing" className={styles.heroCta}>
                EXPLORE PROPERTY <span className={styles.heroCtaArrow}>→</span>
              </a>
              <button className={styles.heroCtaSecondary} onClick={() => setIsVideoOpen(true)}>
                WATCH FILM
              </button>
              <a href="#booking" className={styles.heroCtaSecondary}>BOOK A SITE VISIT</a>
            </div>
          </div>

          <div className={styles.heroBottomRow}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>₹1.25 Cr*</span>
              <span className={styles.heroStatLabel}>ONWARDS</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>38 Acres</span>
              <span className={styles.heroStatLabel}>GLOBAL TOWNSHIP</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>75,000 Sq.Ft.</span>
              <span className={styles.heroStatLabel}>CLUB VEGAS</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>2, 3, 3.5 &amp; 4 BHK</span>
              <span className={styles.heroStatLabel}>LUXURY RESIDENCES</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. MERGED: 75% 75,000 SQ.FT. CLUB VEGAS & 50+ AMENITIES + 25% AREA & FLOOR PLANS (02 CLUB & PLANS) ═══ */}
      <section className={`${styles.amenitiesSection} ${styles.sectionDark}`} id="amenities" ref={revealRef}>
        <div className={styles.sectionContainerWide}>
          <div className={styles.mergedAmenitiesPlansGrid}>

            {/* 75% MAIN: 75,000 SQ.FT. CLUB VEGAS & 50+ AMENITIES */}
            <div className={styles.amenitiesMainCol}>
              <div className={`${styles.sectionHeader} ${styles.reveal}`}>
                <span className={styles.sectionEyebrow}>RESORT-STYLE GLOBAL DESTINATION</span>
                <h2 className={styles.sectionTitle}>75,000 Sq.Ft. Club Vegas &amp; <em>50+ Amenities</em></h2>
                <p className={styles.sectionDesc}>A Las Vegas-inspired multi-level G+5 clubhouse that transforms everyday living into a resort experience.</p>
                <div className={styles.sectionLine} />
              </div>

              <div className={`${styles.amenityFilterPills} ${styles.reveal}`}>
                {["All", "Club Vegas", "Wellness & Spa", "Sports Arena", "Kids & Family", "Nature & Gardens", "Sky Living"].map((cat) => (
                  <button key={cat} className={`${styles.filterPill} ${amenityFilter === cat ? styles.activeFilterPill : ""}`} onClick={() => setAmenityFilter(cat)}>
                    {cat}
                  </button>
                ))}
              </div>

              <div className={`${styles.amenityGrid} ${styles.reveal}`}>
                {filteredAmenities.map((a, i) => (
                  <div key={i} className={styles.amenityCard}>
                    <div className={styles.amenityImgWrapper}>
                      <img src={a.img} alt={a.title} className={styles.amenityImg} loading="lazy" />
                    </div>
                    <div className={styles.amenityBadgeRow}>
                      <span className={styles.amenityCategoryTag}>{a.category}</span>
                    </div>
                    <div className={styles.amenityContent}>
                      <div className={styles.amenityTitleRow}>
                        <span className={styles.amenitySvgWrap}>{renderSvgIcon(a.iconKey)}</span>
                        <h3 className={styles.amenityTitle}>{a.title}</h3>
                      </div>
                      <p className={styles.amenityDesc}>{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 25% SIDEBAR: AREA & FLOOR PLAN BREAKDOWN STUDIO */}
            <div className={styles.floorPlanSidebarCol} id="pricing">
              <div className={`${styles.sidebarPlanStickyCard} ${styles.reveal}`}>
                <div className={styles.sidebarPlanHeader}>
                  <span className={styles.sidebarEyebrow}>ARCHITECTURAL BLUEPRINTS</span>
                  <h3 className={styles.sidebarTitle}>Residences <em>&amp; Plans</em></h3>
                  <p className={styles.sidebarSub}>Area breakdown &amp; Vastu layouts</p>
                </div>

                {/* Plan Type Selector (Unit vs Master) */}
                <div className={styles.sidebarPlanToggleRow}>
                  <button className={`${styles.sidebarToggleBtn} ${activeFloorPlanTab === "unit" ? styles.activeSidebarToggle : ""}`} onClick={() => setActiveFloorPlanTab("unit")}>
                    Unit Plans
                  </button>
                  <button className={`${styles.sidebarToggleBtn} ${activeFloorPlanTab === "master" ? styles.activeSidebarToggle : ""}`} onClick={() => setActiveFloorPlanTab("master")}>
                    Master Plan
                  </button>
                </div>

                {activeFloorPlanTab === "unit" ? (
                  <>
                    {/* BHK Selector Chips */}
                    <div className={styles.sidebarBhkChipsRow}>
                      {UNIT_CONFIGS.map((cfg, idx) => (
                        <button key={idx} className={`${styles.sidebarBhkChip} ${selectedPlanIndex === idx ? styles.activeBhkChip : ""}`} onClick={() => setSelectedPlanIndex(idx)}>
                          <span className={styles.sidebarBhkText}>{cfg.bhk}</span>
                          <span className={styles.sidebarCarpetMini}>{cfg.carpetArea.split("-")[0].trim()}</span>
                        </button>
                      ))}
                    </div>

                    {/* Selected Plan Details Box */}
                    <div className={styles.sidebarSelectedCard}>
                      <div className={styles.sidebarPlanMetaTop}>
                        <h4 className={styles.sidebarPlanName}>{selectedPlan.type}</h4>
                        <div className={styles.sidebarPriceTag}>
                          <span className={styles.sidebarPriceLabel}>STARTING</span>
                          <span className={styles.sidebarPriceVal}>{selectedPlan.price}</span>
                        </div>
                      </div>

                      {/* Interactive Blueprint Thumbnail with Lightbox zoom */}
                      <div className={styles.sidebarBlueprintWrap} onClick={() => setLightboxImage(selectedPlan.blueprintImg)}>
                        <img src={selectedPlan.blueprintImg} alt={`${selectedPlan.bhk} Plan`} className={styles.sidebarBlueprintImg} />
                        <div className={styles.sidebarBlueprintZoomBadge}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                          <span>ENLARGE BLUEPRINT</span>
                        </div>
                      </div>

                      {/* Room Specifications */}
                      <div className={styles.sidebarDimBox}>
                        <span className={styles.sidebarDimTitle}>ROOM SPECIFICATIONS</span>
                        <div className={styles.sidebarDimList}>
                          {selectedPlan.dimensions.map((d, i) => (
                            <div key={i} className={styles.sidebarDimRow}>
                              <span className={styles.sidebarDimRoom}>{d.room}</span>
                              <span className={styles.sidebarDimSize}>{d.size}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key highlights pills */}
                      <div className={styles.sidebarChipsList}>
                        {selectedPlan.highlights.map((h, i) => (
                          <span key={i} className={styles.sidebarHighlightPill}>✓ {h}</span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className={styles.sidebarActionsCol}>
                        <button className={styles.sidebarRequestBtn} onClick={() => setIsBrochureModalOpen(true)}>
                          DOWNLOAD COST SHEET
                        </button>
                        <a href="#booking" className={styles.sidebarVisitLink}>
                          SCHEDULE SITE VISIT →
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className={styles.sidebarMasterPlanBox}>
                    <div className={styles.sidebarBlueprintWrap} onClick={() => setLightboxImage("https://paradise-saiworldcitypanvel.com/assets/images/floor-plan/MasterPlan.webp")}>
                      <img src="https://paradise-saiworldcitypanvel.com/assets/images/floor-plan/MasterPlan.webp" alt="Master Plan" className={styles.sidebarBlueprintImg} />
                      <div className={styles.sidebarBlueprintZoomBadge}>
                        <span>ENLARGE MASTER LAYOUT</span>
                      </div>
                    </div>
                    <p className={styles.sidebarMasterDesc}>38-Acre global township layout with residential towers, 75K Sq.Ft. Club Vegas, and podium gardens.</p>
                    <button className={styles.sidebarRequestBtn} onClick={() => setIsBrochureModalOpen(true)}>
                      DOWNLOAD MASTER BROCHURE
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 3. WALKTHROUGH — STEP INSIDE (03 FILM) ═══ */}
      <section className={styles.walkthroughSection} id="walkthrough" ref={revealRef}>
        <div className={styles.walkthroughHeaderWrap}>
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <span className={styles.sectionEyebrow}>ARCHITECTURE TOUR</span>
            <h2 className={styles.sectionTitle}><em>Step Inside.</em></h2>
            <p className={styles.sectionDesc}>Experience the township through an official cinematic walkthrough.</p>
          </div>
        </div>
        <div className={`${styles.videoPlayerFullBleed} ${styles.reveal}`}>
          <iframe className={styles.youtubeIframeFull} src="https://www.youtube.com/embed/SzbhWhcaKqg?autoplay=1&mute=1&loop=1&playlist=SzbhWhcaKqg&controls=0&showinfo=0&modestbranding=1" title="Sai World City Walkthrough" allow="autoplay; encrypted-media" loading="lazy" />
          <div className={styles.videoFloatingControlBar}>
            <div className={styles.videoMetaLeft}>
              <span className={styles.liveAutoplayBadge}><span className={styles.liveDot} /> AUTOPLAY</span>
              <span className={styles.videoTitleText}>Official Architecture Tour — Sai World City Panvel</span>
            </div>
            <button className={styles.fullscreenTourBtn} onClick={() => setIsVideoOpen(true)}>WATCH FULL FILM</button>
          </div>
        </div>
      </section>

      {/* ═══ 4. GALLERY — PROJECT GALLERY (04 GALLERY) ═══ */}
      <section className={`${styles.gallerySection} ${styles.sectionLight}`} id="gallery" ref={revealRef}>
        <div className={styles.sectionContainer}>
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <span className={styles.sectionEyebrow}>VISUAL PORTFOLIO</span>
            <h2 className={styles.sectionTitle}>Project <em>Gallery</em></h2>
            <p className={styles.sectionDesc}>Architectural photography capturing the scale, design, and ambition of Sai World City.</p>
            <div className={styles.sectionLine} />
          </div>

          <div className={`${styles.galleryFilterRow} ${styles.reveal}`}>
            {["All", "Architecture", "Club Vegas", "Interiors", "Landscape"].map((cat) => (
              <button key={cat} className={`${styles.galleryPill} ${galleryFilter === cat ? styles.activeGalleryPill : ""}`} onClick={() => setGalleryFilter(cat)}>
                {cat}
              </button>
            ))}
          </div>

          <div className={`${styles.galleryGrid} ${styles.reveal}`}>
            {filteredGallery.map((item, i) => (
              <div key={i} className={styles.galleryCard} onClick={() => setLightboxImage(item.img)}>
                <div className={styles.galleryImgWrap}>
                  <img src={item.img} alt={item.title} className={styles.galleryImg} loading="lazy" />
                </div>
                <div className={styles.galleryOverlay}>
                  <span className={styles.zoomIcon}>VIEW →</span>
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

      {/* ═══ 5. LOCATION — CONNECTED TO EVERYTHING (05 LOCATION) ═══ */}
      <section className={`${styles.locationSection} ${styles.sectionWarm}`} id="location" ref={revealRef}>
        <div className={styles.sectionContainer}>
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <span className={styles.sectionEyebrow}>STRATEGIC CONNECTIVITY</span>
            <h2 className={styles.sectionTitle}>Connected to <em>Everything.</em></h2>
            <p className={styles.sectionDesc}>Strategically positioned at the confluence of Mumbai&apos;s major infrastructure projects including MTHL, NMIA, and MMC.</p>
            <div className={styles.sectionLine} />
          </div>

          <div className={`${styles.locationTabsRow} ${styles.reveal}`}>
            {LOCATION_CATEGORIES.map((cat) => (
              <button key={cat.id} className={`${styles.locationTabBtn} ${locationTab === cat.id ? styles.activeLocationTab : ""}`} onClick={() => setLocationTab(cat.id)}>
                {cat.name}
              </button>
            ))}
          </div>

          <div className={`${styles.connectivityGrid} ${styles.reveal}`}>
            {filteredLocations.slice(0, 9).map((loc, i) => (
              <div key={i} className={styles.connectivityCard}>
                <span className={styles.connIconWrap}>{renderSvgIcon(loc.iconKey)}</span>
                <div className={styles.connInfo}>
                  <div className={styles.connHeaderRow}>
                    <span className={styles.connType}>{loc.type}</span>
                    <span className={styles.connTimeBadge}>{loc.time}</span>
                  </div>
                  <h4 className={styles.connName}>{loc.name}</h4>
                  <p className={styles.connNote}>{loc.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.googleMapsFullBleedSection}>
            <div className={styles.mapsTopBanner}>
              <div className={styles.mapsTopBannerContent}>
                <div className={styles.mapsTextGroup}>
                  <span className={styles.mapEyebrow}>PROJECT LOCATION</span>
                  <h3 className={styles.mapTitle}>Sai World City — Palaspe Junction, Panvel</h3>
                  <p className={styles.mapSub}>Near Panvel Railway Station · Opposite Palaspe Phata · Off Old Mumbai-Pune Highway</p>
                </div>
                <a href="https://maps.google.com/?q=Sai+World+City+Panvel" target="_blank" rel="noopener noreferrer" className={styles.mapDirectionsBtn}>GET DIRECTIONS</a>
              </div>
            </div>
            <div className={styles.googleMapsIframeWrap}>
              <iframe className={styles.googleMapsIframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.123456789!2d73.12!3d18.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSai+World+City!5e0!3m2!1sen!2sin!4v1234567890" title="Sai World City Location" loading="lazy" allowFullScreen />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. ABOUT THE MASTER VISION & DEVELOPER (06 ABOUT) ═══ */}
      <section className={`${styles.aboutSection} ${styles.sectionWarm}`} id="about" ref={revealRef}>
        <div className={styles.sectionContainer}>
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <span className={styles.sectionEyebrow}>THE MASTER VISION</span>
            <h2 className={styles.sectionTitle}>A Global Landmark in <em>Panvel, Navi Mumbai</em></h2>
            <p className={styles.sectionDesc}>An international lifestyle where every morning begins with breathtaking Sahyadri hill views and every evening unfolds against a spectacular skyline.</p>
            <div className={styles.sectionLine} />
          </div>

          <div className={`${styles.aboutGrid} ${styles.reveal}`}>
            <div className={styles.aboutTextCol}>
              <p className={styles.aboutLead}>
                Discover an international lifestyle where every morning begins with breathtaking Sahyadri hill views and every evening unfolds against a spectacular skyline.
              </p>
              <p className={styles.aboutBody}>
                Sai World City is a 38-Acre integrated global township featuring New York, Paris &amp; Dubai-inspired architecture. At its heart lies Club Vegas — a 75,000 sq.ft. multi-level G+5 clubhouse with over 50 world-class amenities including a resort-style infinity pool, TechnoGym fitness, private cinema, and championship sports facilities.
              </p>
              <div className={styles.aboutFeatures}>
                {[
                  { icon: "clubhouse", title: "G+5 Club Vegas", desc: "75,000 sq.ft. multi-level resort-style clubhouse" },
                  { icon: "flight", title: "NMIA Airport 20 Mins", desc: "Direct connectivity to new Navi Mumbai International Airport" },
                  { icon: "bridge", title: "MTHL Connected", desc: "10 min to Trans-Harbour Link to South Mumbai" },
                  { icon: "school", title: "Education Hub", desc: "11+ schools and universities within close proximity" },
                ].map((f, i) => (
                  <div key={i} className={styles.aboutFeatureItem}>
                    <span className={styles.featureIconWrap}>{renderSvgIcon(f.icon)}</span>
                    <div><strong>{f.title}</strong><span>{f.desc}</span></div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.aboutVisualCol}>
              <div className={styles.aboutImageFrame}>
                <img src="https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-1.webp" alt="Sai World City Aerial View" className={styles.aboutMainImg} />
                <div className={styles.imageOverlayBadge}>
                  <span className={styles.badgeNumber}>38</span>
                  <span className={styles.badgeText}>ACRE TOWNSHIP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPER SPOTLIGHT */}
      <section className={`${styles.developerSection} ${styles.sectionGraphite}`} ref={revealRef}>
        <div className={styles.sectionContainer}>
          <div className={`${styles.developerCard} ${styles.reveal}`}>
            <div className={styles.devHeader}>
              <span className={styles.devEyebrow}>DEVELOPER SPOTLIGHT</span>
              <h3>Paradise Group — <em>34 Years of Architectural Excellence</em></h3>
            </div>
            <p className={styles.devDesc}>
              Established in 1990, Paradise Group is one of Navi Mumbai&apos;s most trusted real estate developers with a portfolio spanning 50+ residential and commercial projects, 25,000+ delivered homes, and a reputation built on architectural innovation and timely delivery.
            </p>
            <div className={styles.devStatsRow}>
              <div className={styles.devStat}><strong>34+</strong><span>Years of Excellence</span></div>
              <div className={styles.devStat}><strong>50+</strong><span>Landmark Projects</span></div>
              <div className={styles.devStat}><strong>25,000+</strong><span>Happy Families</span></div>
              <div className={styles.devStat}><strong>15M+</strong><span>Sq.Ft. Developed</span></div>
            </div>
            <div className={styles.reraDisclosuresGrid}>
              <div className={styles.reraCard}>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=P52000006318&color=C5A76F&bgcolor=1A1A1A" alt="RERA QR" className={styles.qrCodeImg} />
                <div className={styles.reraDetails}>
                  <span className={styles.reraTag}>MAHARERA</span>
                  <strong className={styles.reraNumber}>P52000006318</strong>
                  <p>Phase 2 — Verified &amp; Compliant</p>
                </div>
              </div>
              <div className={styles.reraCard}>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=P52000038422&color=C5A76F&bgcolor=1A1A1A" alt="RERA QR" className={styles.qrCodeImg} />
                <div className={styles.reraDetails}>
                  <span className={styles.reraTag}>MAHARERA</span>
                  <strong className={styles.reraNumber}>P52000038422</strong>
                  <p>Phase 3 — Verified &amp; Compliant</p>
                </div>
              </div>
              <div className={styles.reraCard}>
                <div className={styles.agentBadgeIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div className={styles.reraDetails}>
                  <span className={styles.reraTag}>CHANNEL PARTNER</span>
                  <strong className={styles.reraNumber}>AASCO Realty</strong>
                  <p>Authorized MahaRERA Agent: A52000032476</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. BOOKING / CTA (07 ENQUIRE) ═══ */}
      <section className={`${styles.bookingSection} ${styles.sectionDark}`} id="booking" ref={revealRef}>
        <div className={styles.sectionContainer}>
          <div className={`${styles.bookingWrapper} ${styles.reveal}`}>
            <div className={styles.bookingIntro}>
              <span className={styles.bookingEyebrow}>EXCLUSIVE CONSULTATION</span>
              <h2>Ready to see it <em>for yourself?</em></h2>
              <p className={styles.bookingLead}>
                Schedule a private site visit with our property consultants. Experience the township, explore show flats, and receive exclusive pricing.
              </p>
              <div className={styles.bookingPerks}>
                {["Priority access to pre-launch inventory & early-bird pricing", "Complimentary cab from Panvel station for site visit", "Dedicated relationship manager throughout purchase journey", "Exclusive Aasco Realty cashback & festive offers"].map((perk, i) => (
                  <div key={i} className={styles.perkItem}>
                    <svg className={styles.perkCheckSvg} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    {perk}
                  </div>
                ))}
              </div>
              <div className={styles.whatsappDirect}>
                <span>Prefer WhatsApp?</span>
                <a href="https://wa.me/919082407700?text=Hi%20Aasco%2C%20I%20am%20interested%20in%20Sai%20World%20City%20Panvel.%20Please%20share%20details." target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  CHAT NOW
                </a>
              </div>
            </div>

            <div className={styles.bookingFormContainer}>
              {!formSubmitted ? (
                <>
                  <h3 className={styles.formTitle}>Book a Private Visit</h3>
                  <form className={styles.bookingForm} onSubmit={handleBookingSubmit}>
                    <div className={styles.formRow}>
                      <div className={styles.formField}>
                        <label htmlFor="booking_name">FULL NAME</label>
                        <input id="booking_name" name="name" type="text" placeholder="Your name" required autoComplete="name" />
                      </div>
                      <div className={styles.formField}>
                        <label htmlFor="booking_phone">MOBILE NUMBER</label>
                        <input id="booking_phone" name="phone" type="tel" placeholder="+91" required autoComplete="tel" />
                      </div>
                    </div>
                    <div className={styles.formField}>
                      <label htmlFor="booking_email">EMAIL</label>
                      <input id="booking_email" name="email" type="email" placeholder="your@email.com" autoComplete="email" />
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.formField}>
                        <label htmlFor="booking_config">CONFIGURATION</label>
                        <select id="booking_config" name="configuration" value={selectedConfigInterest} onChange={(e) => setSelectedConfigInterest(e.target.value)}>
                          <option value="2 BHK">2 BHK — ₹1.25 Cr*</option>
                          <option value="3 BHK">3 BHK — ₹2.41 Cr*</option>
                          <option value="3.5 BHK">3.5 BHK — ₹2.89 Cr*</option>
                          <option value="4 BHK">4 BHK — ₹3.34 Cr*</option>
                        </select>
                      </div>
                      <div className={styles.formField}>
                        <label htmlFor="booking_date">PREFERRED DATE</label>
                        <input id="booking_date" name="visitDate" type="date" value={siteVisitDate} onChange={(e) => setSiteVisitDate(e.target.value)} />
                      </div>
                    </div>
                    <div className={styles.checkboxGroup}>
                      <label className={styles.checkboxLabel} htmlFor="booking_consent">
                        <input id="booking_consent" name="consent" type="checkbox" defaultChecked />
                        I agree to receive property updates via WhatsApp &amp; SMS
                      </label>
                    </div>
                    <button type="submit" className={styles.submitBookingBtn}>BOOK PRIVATE VISIT</button>
                    <p className={styles.disclaimerText}>
                      By submitting, you agree to our Privacy Policy. Your data is secure and will only be used for property consultation.
                    </p>
                  </form>
                </>
              ) : (
                <div className={styles.successState}>
                  <div className={styles.successCheck}>✓</div>
                  <h3>Visit Confirmed</h3>
                  <p>Our property consultant will contact you within 30 minutes to finalize your private site visit.</p>
                  <button className={styles.resetBtn} onClick={() => setFormSubmitted(false)}>SUBMIT ANOTHER ENQUIRY</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className={styles.bottomFooter}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            <div className={styles.footerColBrand}>
              <span className={styles.footerBrand}>Sai World City</span>
              <p className={styles.footerTagline}>THE CITY WITHIN THE CITY</p>
              <p className={styles.footerAboutText}>A 38-acre integrated global township by Paradise Group at Palaspe Junction, Panvel — featuring New York, Paris &amp; Dubai-inspired architecture and 75,000 sq.ft. Club Vegas.</p>
              <span className={styles.footerReraPill}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                MAHARERA: P52000006318 | P52000038422
              </span>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>NAVIGATE</h4>
              <div className={styles.footerColLinks}>
                <a href="#overview">Overview</a>
                <a href="#pricing">Floor Plans</a>
                <a href="#amenities">Club Vegas</a>
                <a href="#walkthrough">Walkthrough</a>
                <a href="#location">Location</a>
                <a href="#gallery">Gallery</a>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>CONTACT</h4>
              <div className={styles.footerColLinks}>
                <a href="tel:+919082407700">+91 90824 07700</a>
                <a href="mailto:info@aasco.in">info@aasco.in</a>
                <a href="https://wa.me/919082407700" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>LEGAL</h4>
              <div className={styles.footerColLinks}>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/privacy-policy">Terms of Service</Link>
                <Link href="/privacy-policy">Disclaimer</Link>
              </div>
            </div>
          </div>
          <div className={styles.footerDisclaimers}>
            <p>Disclaimer: This website is a marketing initiative by AASCO Realty (MahaRERA Agent Reg: A52000032476). Content is for informational purposes only and does not constitute an offer or contract.</p>
            <p className={styles.footerCopyright}>© 2026 AASCO Realty — From Dream to Reality. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ═══ STICKY BOTTOM BAR ═══ */}
      <div className={styles.stickyBottomBar}>
        <div className={styles.stickyContainer}>
          <div className={styles.stickyPropertyInfo}>
            <span className={styles.stickyPropName}>Sai World City</span>
            <span className={styles.stickyDivider}>|</span>
            <span className={styles.stickyPrice}>₹1.25 Cr* Onwards</span>
          </div>
          <div className={styles.stickyActions}>
            <a href="tel:+919082407700" className={styles.stickyCallBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              CALL
            </a>
            <a href="https://wa.me/919082407700" target="_blank" rel="noopener noreferrer" className={styles.stickyWhatsappBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
              WHATSAPP
            </a>
            <button className={styles.stickyBrochureBtn} onClick={() => setIsBrochureModalOpen(true)}>BROCHURE</button>
            <a href="#booking" className={styles.stickyVisitBtn}>BOOK VISIT</a>
          </div>
        </div>
      </div>

      {/* ═══ MODALS ═══ */}
      {isVideoOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsVideoOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.videoEmbedWrapper}>
              <iframe className={styles.modalIframe} src="https://www.youtube.com/embed/SzbhWhcaKqg?autoplay=1&rel=0" title="Walkthrough" allow="autoplay; encrypted-media" allowFullScreen />
            </div>
          </div>
        </div>
      )}

      {isBrochureModalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsBrochureModalOpen(false)}>
          <div className={styles.modalContentBrochure} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h4>Download Brochure</h4>
              <button className={styles.closeModalBtn} onClick={() => setIsBrochureModalOpen(false)}>✕</button>
            </div>
            <div className={styles.modalBody}>
              {!brochureSubmitted ? (
                <>
                  <p className={styles.brochureIntro}>Enter your details to receive the complete project brochure and pricing sheet.</p>
                  <form className={styles.brochureForm} onSubmit={handleBrochureSubmit}>
                    <div className={styles.formField}>
                      <label htmlFor="brochure_name">NAME</label>
                      <input id="brochure_name" name="name" type="text" placeholder="Your name" required autoComplete="name" />
                    </div>
                    <div className={styles.formField}>
                      <label htmlFor="brochure_phone">MOBILE</label>
                      <input id="brochure_phone" name="phone" type="tel" placeholder="+91" required autoComplete="tel" />
                    </div>
                    <div className={styles.formField}>
                      <label htmlFor="brochure_email">EMAIL</label>
                      <input id="brochure_email" name="email" type="email" placeholder="your@email.com" autoComplete="email" />
                    </div>
                    <button type="submit" className={styles.submitBookingBtn}>SEND BROCHURE</button>
                  </form>
                </>
              ) : (
                <div className={styles.successState}>
                  <div className={styles.successCheck}>✓</div>
                  <h3>Brochure Sent</h3>
                  <p>Check your WhatsApp and email for the complete brochure and pricing details.</p>
                  <button className={styles.resetBtn} onClick={() => { setBrochureSubmitted(false); setIsBrochureModalOpen(false); }}>CLOSE</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {lightboxImage && (
        <div className={styles.lightboxOverlay} onClick={() => setLightboxImage(null)}>
          <div className={styles.lightboxWrap} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setLightboxImage(null)}>✕</button>
            <img src={lightboxImage} alt="Full view" className={styles.lightboxImg} />
          </div>
        </div>
      )}
    </div>
  );
}
