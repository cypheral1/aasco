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
  badgeType: "featured" | "hot" | "luxury";
  specs: string;
  href: string;
  source: string;
  fallback: string;
  sparkline: number[];
}

const properties: FeaturedProperty[] = [
  {
    id: "meghna-star-walk",
    index: "01",
    title: "Meghna Star Walk At Kharghar NX.",
    location: "NX Kharghar",
    price: "₹23.99 L* - 32.99 L*",
    priceLabel: "STARTING PRICE",
    details: "360 - 600 sq. ft. · 1, 2 BHK",
    badge: "FEATURED",
    badgeType: "featured",
    specs: "1 & 2 BHK · 360-600 SQ.FT",
    href: "/properties/meghna-star-walk-kharghar",
    source: "/assets/properties/property-1.jpg",
    fallback: "/assets/properties/property-1.jpg",
    sparkline: [42, 50, 60, 72, 85, 96, 100],
  },
  {
    id: "arihant-avanti-palace",
    index: "02",
    title: "Arihant Avanti Palace",
    location: "Dombivli",
    price: "₹42 Lacs* - 65 Lacs*",
    priceLabel: "STARTING PRICE",
    details: "400 - 650 sq. ft. · 1, 2 BHK",
    badge: "EXCLUSIVE",
    badgeType: "hot",
    specs: "1 & 2 BHK · 400-650 SQ.FT",
    href: "/properties/arihant-avanti-palace",
    source: "/assets/properties/property-2.jpg",
    fallback: "/assets/properties/property-2.jpg",
    sparkline: [38, 46, 56, 68, 79, 90, 100],
  },
  {
    id: "sai-world-city",
    index: "03",
    title: "Sai World City & Towers",
    location: "Kharghar, Navi Mumbai",
    price: "₹65 Lacs* - 1.25 Cr*",
    priceLabel: "STARTING PRICE",
    details: "720 - 1250 sq. ft. · 2, 3 BHK",
    badge: "LUXURY",
    badgeType: "luxury",
    specs: "2 & 3 BHK · 720-1250 SQ.FT",
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

// Single Property Card with 3D Parallax Tilt, Glare, Scanner & Sparkline
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

    const rotateY = ((x - centerX) / centerX) * 7;
    const rotateX = -((y - centerY) / centerY) * 7;

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
      aria-label={`View details for ${item.title}`}
    >
      <div
        className={styles.card}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${isHovered ? 10 : 0}px)`,
        }}
      >
        {/* Layer 1: Full-Bleed Background Cinematic Image */}
        <div className={styles.imageLayer}>
          <div
            className={styles.bgImage}
            style={{
              backgroundImage: `url('${item.source}')`,
              transform: `scale(${isHovered ? 1.08 : 1.02}) translate(${tilt.y * -0.4}px, ${tilt.x * 0.4}px)`,
            }}
          />
          {/* Atmospheric gradient overlay */}
          <div className={styles.atmosphereGradient} />
          {/* Dynamic Light Sweep / Glare on Hover */}
          <div
            className={styles.ambientGlare}
            style={{
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 220, 160, 0.06) 40%, transparent 70%)`,
            }}
          />
        </div>

        {/* Layer 2: Futuristic Property Scanner Beam */}
        <div className={`${styles.scannerBeam} ${isHovered ? styles.scannerActive : ""}`} />

        {/* Top Header Row: Index Number, Center Specs Badge, & Status Pill */}
        <div className={styles.cardTopRow} style={{ transform: "translateZ(26px)" }}>
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

        {/* Bottom Card Content with Frosted Glass Container */}
        <div className={styles.cardContent} style={{ transform: "translateZ(32px)" }}>
          <div className={styles.titleGroup}>
            <span className={styles.localityCategory}>{item.location}</span>
            <h3 className={styles.localityName}>{item.title}</h3>
            <p className={styles.detailsText}>{item.details}</p>
          </div>

          {/* Price & Sparkline Row */}
          <div className={styles.priceRow}>
            <div className={styles.priceContainer}>
              <span className={styles.priceLabel}>{item.priceLabel}</span>
              <div className={styles.priceValue}>
                <span className={styles.amount}>{item.price}</span>
              </div>
            </div>

            {/* Micro Market Sparkline Graph */}
            <div className={styles.sparklineWrap} title="Appreciation Trend">
              <svg className={styles.sparklineSvg} width="84" height="24" viewBox="0 0 120 32">
                <defs>
                  <linearGradient id={`grad-prop-${item.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#94A3B8" />
                    <stop offset="100%" stopColor="#0F172A" />
                  </linearGradient>
                </defs>
                <path
                  d={sparklineD}
                  fill="none"
                  stroke={`url(#grad-prop-${item.id})`}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Action Explore Row with Magnetic Pull */}
          <div className={styles.actionRow}>
            <span className={styles.exploreText}>EXPLORE RESIDENCE</span>
            <span
              className={styles.exploreArrow}
              style={{
                transform: isHovered
                  ? `translate(${magneticOffset.x + 3}px, ${magneticOffset.y - 1}px)`
                  : "translate(0, 0)",
              }}
            >
              ➔
            </span>
          </div>
        </div>

        {/* Metallic Border Outline */}
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
