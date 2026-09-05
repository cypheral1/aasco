"use client";

import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import styles from "./AboutSection.module.css";

interface FeaturedProperty {
  id: string;
  index: string;
  title: string;
  location: string;
  price: string;
  priceLabel: string;
  details: string;
  badge: string;
  specs: string;
  demandLabel: string;
  demandIndex: number;
  highlights: string;
  href: string;
  source: string;
  fallback: string;
  sparkline: number[];
}

const properties: FeaturedProperty[] = [
  {
    id: "meghna-star-walk",
    index: "01",
    title: "Meghna Star Walk",
    location: "NAVI MUMBAI SECTOR · NX KHARGHAR",
    price: "₹ 23.99 L* - 32.99 L*",
    priceLabel: "INDEX VALUATION",
    details: "360 - 600 sq. ft. · 1, 2 BHK",
    badge: "+14%",
    specs: "19.0473° N, 73.0699° E",
    demandLabel: "HIGH LIQUIDITY",
    demandIndex: 94,
    highlights: "Metro Line 1 Link · High Rental Yield Corridor · CIDCO Planned",
    href: "/properties/meghna-star-walk-kharghar",
    source: "/assets/properties/property-1.jpg",
    fallback: "/assets/properties/property-1.jpg",
    sparkline: [42, 50, 60, 72, 85, 96, 100],
  },
  {
    id: "arihant-avanti-palace",
    index: "02",
    title: "Arihant Avanti Palace",
    location: "NAVI MUMBAI REGION · DOMBIVLI",
    price: "₹ 42 Lacs* - 65 Lacs*",
    priceLabel: "INDEX VALUATION",
    details: "400 - 650 sq. ft. · 1, 2 BHK",
    badge: "+18%",
    specs: "19.2183° N, 73.0867° E",
    demandLabel: "MASSIVE APPRECIATION",
    demandIndex: 98,
    highlights: "Multi-Modal Hub · Gated Integrated Township · Luxury Amenities",
    href: "/properties/arihant-avanti-palace",
    source: "/assets/properties/property-2.jpg",
    fallback: "/assets/properties/property-2.jpg",
    sparkline: [38, 46, 56, 68, 79, 90, 100],
  },
  {
    id: "sai-world-city",
    index: "03",
    title: "Sai World City & Towers",
    location: "NAVI MUMBAI SECTOR · KHARGHAR",
    price: "₹ 65 Lacs* - 1.25 Cr*",
    priceLabel: "INDEX VALUATION",
    details: "720 - 1250 sq. ft. · 2, 3 BHK",
    badge: "+22%",
    specs: "19.0330° N, 73.0297° E",
    demandLabel: "FASTEST GROWTH",
    demandIndex: 96,
    highlights: "Central Park Proximity · 18-Hole Golf Course · Cosmopolitan High-Rise",
    href: "/properties/navi-mumbai-homes",
    source: "/assets/properties/property-3.jpg",
    fallback: "/assets/properties/property-3.jpg",
    sparkline: [45, 55, 68, 76, 88, 95, 100],
  },
];

const topDevelopers = [
  { name: "Godrej Properties", location: "Mumbai & MMR" },
  { name: "Lodha Group", location: "Mumbai & MMR" },
  { name: "Paradise Group", location: "Navi Mumbai" },
  { name: "Hiranandani Group", location: "Mumbai & Thane" },
  { name: "Arihant Superstructures", location: "Navi Mumbai" },
  { name: "L&T Realty", location: "Mumbai & MMR" },
  { name: "Marathon Group", location: "Navi Mumbai & Thane" },
  { name: "Oberoi Realty", location: "Mumbai" },
  { name: "Kalpataru", location: "Mumbai & Thane" },
  { name: "Shapoorji Pallonji", location: "Mumbai" },
  { name: "Piramal Realty", location: "Mumbai" },
  { name: "The Wadhwa Group", location: "Navi Mumbai & Mumbai" },
  { name: "Rustomjee", location: "Mumbai & MMR" },
  { name: "Sunteck Realty", location: "Mumbai" },
  { name: "Today Global", location: "Navi Mumbai" },
  { name: "Meghna Builders", location: "Navi Mumbai" },
];

function FeaturedPropertyCard({
  item,
  index,
}: {
  item: FeaturedProperty;
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = -((y - centerY) / centerY) * 8;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY });

    const magX = ((x - centerX) / centerX) * 4;
    const magY = ((y - centerY) / centerY) * 4;
    setMagneticOffset({ x: magX, y: magY });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
    setMagneticOffset({ x: 0, y: 0 });
  };

  const createSparklinePath = (points: number[], width = 120, height = 32) => {
    const min = Math.min(...points);
    const max = Math.max(...points);
    const range = max - min || 1;
    const step = width / (points.length - 1);

    const coords = points.map((p, i) => {
      const x = i * step;
      const y = height - ((p - min) / range) * (height - 8) - 4;
      return `${x},${y}`;
    });

    return `M ${coords.join(" L ")}`;
  };

  const sparklineD = createSparklinePath(item.sparkline, 120, 32);

  return (
    <Link
      ref={cardRef}
      href={item.href}
      className={`${styles.cardWrapper} ${isHovered ? styles.wrapperHovered : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      aria-label={`View intelligence dossier for ${item.title}`}
    >
      <div
        className={styles.card}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${isHovered ? 12 : 0}px)`,
        }}
      >
        {/* Layer 1: Multi-depth Background Cinematic Image */}
        <div className={styles.imageLayer}>
          <div
            className={styles.bgImage}
            style={{
              backgroundImage: `url('${item.source}')`,
              transform: `scale(${isHovered ? 1.08 : 1.02}) translate(${tilt.y * -0.5}px, ${tilt.x * 0.5}px)`,
            }}
          />
          {/* Deep charcoal atmospheric gradient overlay */}
          <div className={styles.atmosphereGradient} />
          {/* Dynamic Light Sweep / Glare on Hover */}
          <div
            className={styles.ambientGlare}
            style={{
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 220, 160, 0.06) 40%, transparent 70%)`,
            }}
          />
        </div>

        {/* Layer 2: Futuristic Property Scanner Beam */}
        <div className={`${styles.scannerBeam} ${isHovered ? styles.scannerActive : ""}`} />

        {/* Top Header Row: Index Number, Center Coordinates, & Growth Metric */}
        <div className={styles.cardTopRow} style={{ transform: "translateZ(30px)" }}>
          <span className={styles.indexNumber}>{item.index}</span>

          <div className={styles.coordinateBadge}>
            <span className={styles.radarDot}>
              <span className={styles.radarRing} />
            </span>
            <span className={styles.coordText}>{item.specs}</span>
          </div>

          <div className={styles.growthPill}>
            <span className={styles.growthDot} />
            <span className={styles.growthText}>{item.badge}</span>
          </div>
        </div>

        {/* Card Content & Data Reveal with Expandable Drawer Elevation */}
        <div className={styles.cardContent} style={{ transform: "translateZ(36px)" }}>
          <div className={styles.titleGroup}>
            <span className={styles.localityCategory}>{item.location}</span>
            <h3 className={styles.localityName}>{item.title}</h3>
          </div>

          {/* Primary Price & Appreciation Sparkline */}
          <div className={styles.priceRow}>
            <div className={styles.priceContainer}>
              <span className={styles.priceLabel}>{item.priceLabel}</span>
              <div className={styles.priceValue}>
                <span className={styles.amount}>{item.price}</span>
              </div>
            </div>

            {/* Micro Market Sparkline Graph */}
            <div className={styles.sparklineWrap} title="Appreciation Trend">
              <svg className={styles.sparklineSvg} width="96" height="28" viewBox="0 0 120 32">
                <defs>
                  <linearGradient id={`grad-prop-${item.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
                    <stop offset="100%" stopColor="rgba(255, 215, 120, 0.95)" />
                  </linearGradient>
                </defs>
                <path
                  d={sparklineD}
                  fill="none"
                  stroke={`url(#grad-prop-${item.id})`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`${styles.sparklinePath} ${isHovered ? styles.sparklineDraw : ""}`}
                />
              </svg>
            </div>
          </div>

          {/* Expandable Market Intelligence Elevation Panel */}
          <div className={`${styles.dataDrawer} ${isHovered ? styles.drawerOpen : ""}`}>
            <div className={styles.demandMeter}>
              <div className={styles.demandHeader}>
                <span>MARKET DEMAND</span>
                <span className={styles.demandVal}>
                  {item.demandLabel} ({item.demandIndex}%)
                </span>
              </div>
              <div className={styles.meterTrack}>
                <div
                  className={styles.meterFill}
                  style={{ width: isHovered ? `${item.demandIndex}%` : "0%" }}
                />
              </div>
            </div>
            <p className={styles.infraSummary}>
              <span className={styles.infraIcon}>◈</span> {item.highlights}
            </p>
          </div>

          {/* Bottom Action Footer with Magnetic "EXPLORE →" */}
          <div className={styles.cardFooter}>
            <span className={styles.viewBrief}>INTELLIGENCE DOSSIER</span>
            <div
              className={styles.exploreControl}
              style={{
                transform: `translate(${magneticOffset.x}px, ${magneticOffset.y}px)`,
              }}
            >
              <span className={styles.exploreLabel}>EXPLORE</span>
              <span className={styles.arrowIcon}>→</span>
            </div>
          </div>
        </div>

        {/* Extremely subtle metallic border stroke */}
        <div className={styles.metallicBorder} />
      </div>
    </Link>
  );
}

export function AboutSection() {
  return (
    <section className={styles.aboutSection} aria-labelledby="featured-properties-title">
      <div className={styles.featuredHeader} data-framecoded-motion="r19">
        <div>
          <p className={styles.eyebrow} data-framecoded-motion="r1vn">
            CURATED FOR YOU
          </p>
          <h2 id="featured-properties-title">
            Featured <em>properties</em>
          </h2>
        </div>
        <p className={styles.featuredIntro} data-framecoded-motion="r1c">
          Find trusted homes and investment opportunities with Aasco, from dream to reality.
        </p>
      </div>

      <div className={styles.propertyGrid}>
        {properties.map((property, index) => (
          <FeaturedPropertyCard key={property.id} item={property} index={index} />
        ))}
      </div>

      <div className={styles.propertyFooter} data-framecoded-motion="r52">
        <span>Trusted guidance for every move</span>
        <Link href="/works#top">View all properties ↗</Link>
      </div>

      <div className={styles.developerTickerWrapper} data-framecoded-motion="r1yo">
        <div className={styles.developerTickerHeader}>
          <span className={styles.developerTickerTitle}>
            Top Developers • Mumbai &amp; Navi Mumbai
          </span>
          <span className={styles.developerTickerBadge}>Verified Partners</span>
        </div>
        <div
          className={styles.developerTickerTrack}
          aria-label="Top Developers in Mumbai and Navi Mumbai"
        >
          <div className={styles.developerTickerList}>
            {[...topDevelopers, ...topDevelopers].map((dev, index) => (
              <div key={`${dev.name}-${index}`} className={styles.developerPill}>
                <span className={styles.developerDot}>◆</span>
                <span className={styles.developerName}>{dev.name}</span>
                <span className={styles.developerTag}>{dev.location}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
