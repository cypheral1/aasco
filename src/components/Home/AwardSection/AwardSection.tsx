"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "./AwardSection.module.css";

interface LocalityData {
  id: string;
  index: string;
  name: string;
  priceRaw: number;
  priceFormatted: string;
  growth: string;
  growthRaw: number;
  coordinates: string;
  demandIndex: number;
  demandLabel: string;
  keyInfra: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
  sparkline: number[];
  highlights: string[];
}

const LOCALITIES: LocalityData[] = [
  {
    id: "kharghar",
    index: "01",
    name: "Kharghar",
    priceRaw: 12500,
    priceFormatted: "₹12,500/sqft",
    growth: "+14%",
    growthRaw: 14,
    coordinates: "19.0473° N, 73.0699° E",
    demandIndex: 94,
    demandLabel: "High Liquidity",
    keyInfra: "Metro Line 1 · Central Park · 18-Hole Golf Course · BKC 2",
    tagline: "The Cultural & Educational Capital of Navi Mumbai",
    description:
      "A master-planned luxury zone featuring wide avenues, pristine hillside topography, Navi Mumbai's signature Central Park, and the upcoming corporate growth center at Kharghar Valley.",
    image: "/assets/localities/kharghar.jpg",
    href: "/works?search=Kharghar#top",
    sparkline: [45, 52, 58, 65, 74, 86, 100],
    highlights: ["CIDCO Planned Infrastructure", "High Rental Yield Corridor", "Adjacent to Green Hills & Valley"],
  },
  {
    id: "panvel",
    index: "02",
    name: "Panvel",
    priceRaw: 8200,
    priceFormatted: "₹8,200/sqft",
    growth: "+18%",
    growthRaw: 18,
    coordinates: "18.9894° N, 73.1175° E",
    demandIndex: 98,
    demandLabel: "Massive Appreciation",
    keyInfra: "Navi Mumbai Int'l Airport · Mumbai-Pune Expressway · Multi-Modal Hub",
    tagline: "The Next-Gen Mega Transit & Aviation Metropolis",
    description:
      "Anchor point of MMR's largest infrastructure wave. Powered by the upcoming International Airport, multi-line rail interchange, and high-density luxury integrated townships.",
    image: "/assets/localities/panvel.jpg",
    href: "/works?search=Panvel#top",
    sparkline: [40, 48, 55, 68, 78, 90, 100],
    highlights: ["Airport Impact Zone (NMIA)", "Quad-Rail Interchange", "Premium Gated Communities"],
  },
  {
    id: "taloja",
    index: "03",
    name: "Taloja",
    priceRaw: 6800,
    priceFormatted: "₹6,800/sqft",
    growth: "+22%",
    growthRaw: 22,
    coordinates: "19.0882° N, 73.1116° E",
    demandIndex: 89,
    demandLabel: "Fastest Growth",
    keyInfra: "Metro Phase 1 & 2 · Industrial Corridor · Virar-Alibaug Ring Road",
    tagline: "The High-ROI Affordable Luxury Gateway",
    description:
      "The premier entry corridor for smart capital appreciation. Connected seamlessly to Kharghar via the newly operational Metro and expanding arterial road networks.",
    image: "/assets/localities/taloja.jpg",
    href: "/works?search=Taloja#top",
    sparkline: [35, 42, 52, 64, 76, 88, 100],
    highlights: ["Highest Capital Growth (+22%)", "Direct Metro Link to Kharghar", "Booming Residential Inflow"],
  },
  {
    id: "ulwe",
    index: "04",
    name: "Ulwe",
    priceRaw: 9100,
    priceFormatted: "₹9,100/sqft",
    growth: "+16%",
    growthRaw: 16,
    coordinates: "18.9750° N, 73.0289° E",
    demandIndex: 96,
    demandLabel: "Prime Coastal Link",
    keyInfra: "MTHL Atal Setu · Coastal Road Freeway · Bamandongri Railway",
    tagline: "15-Minute Direct Connectivity to South Mumbai",
    description:
      "Direct beneficiary of Atal Setu (MTHL) sea bridge. Ulwe provides rapid 15-minute access to South Mumbai, oceanfront views, and immediate proximity to the airport terminal.",
    image: "/assets/localities/ulwe.jpg",
    href: "/works?search=Ulwe#top",
    sparkline: [42, 50, 60, 70, 80, 92, 100],
    highlights: ["Atal Setu Sea Bridge Access", "Coastal Highway Network", "High-End Waterfront Developments"],
  },
  {
    id: "dronagiri",
    index: "05",
    name: "Dronagiri",
    priceRaw: 7400,
    priceFormatted: "₹7,400/sqft",
    growth: "+20%",
    growthRaw: 20,
    coordinates: "18.8876° N, 72.9460° E",
    demandIndex: 91,
    demandLabel: "High Yield Port City",
    keyInfra: "JNPT Smart Port City · Uran Suburban Rail · Water Taxi Terminal",
    tagline: "Seaside Smart Port City & Maritime Growth Zone",
    description:
      "A strategic coastal growth node adjacent to JNPA Special Economic Zone. High-potential waterfront residential cluster with direct ferry and suburban rail connectivity to Mumbai.",
    image: "/assets/localities/dronagiri.jpg",
    href: "/works?search=Dronagiri#top",
    sparkline: [38, 45, 54, 66, 76, 89, 100],
    highlights: ["JNPT SEZ Employment Magnet", "Water Taxi & Sea Link Proximity", "Oceanic View High-Rises"],
  },
  {
    id: "ghansoli",
    index: "06",
    name: "Ghansoli",
    priceRaw: 14200,
    priceFormatted: "₹14,200/sqft",
    growth: "+9%",
    growthRaw: 9,
    coordinates: "19.1254° N, 73.0034° E",
    demandIndex: 95,
    demandLabel: "Corporate Prestige",
    keyInfra: "Reliance Corporate Park · Thane-Belapur Tech Belt · Palm Beach Ext.",
    tagline: "Corporate Tech Corridor & Upscale Waterfront Living",
    description:
      "The IT and corporate powerhouse of Navi Mumbai. Home to Fortune 500 corporate campuses, upscale high-rise developments, and direct arterial connectivity to Mumbai and Thane.",
    image: "/assets/localities/ghansoli.jpg",
    href: "/works?search=Ghansoli#top",
    sparkline: [55, 62, 68, 75, 82, 91, 100],
    highlights: ["Mega IT & Corporate Epicenter", "Premium Waterfront Residences", "Established Luxury Lifestyle"],
  },
];

// Single Locality Card Component with 3D Parallax, Scanner & Micro-Animations
function LocalityCard({
  item,
  index,
  isActive,
  onActivate,
  onSelectModal,
}: {
  item: LocalityData;
  index: number;
  isActive: boolean;
  onActivate: () => void;
  onSelectModal: (item: LocalityData) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [animatedPrice, setAnimatedPrice] = useState(item.priceRaw);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });
  const animRef = useRef<number | null>(null);

  // Price count-up animation on hover
  useEffect(() => {
    if (isHovered) {
      const startPrice = Math.floor(item.priceRaw * 0.4);
      const duration = 650; // ms
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(startPrice + (item.priceRaw - startPrice) * easeOut);
        setAnimatedPrice(current);

        if (progress < 1) {
          animRef.current = requestAnimationFrame(updateCounter);
        } else {
          setAnimatedPrice(item.priceRaw);
        }
      };

      animRef.current = requestAnimationFrame(updateCounter);
      return () => {
        if (animRef.current) cancelAnimationFrame(animRef.current);
      };
    } else {
      setAnimatedPrice(item.priceRaw);
    }
  }, [isHovered, item.priceRaw]);

  // Handle smooth 3D mouse parallax tilt
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate restrained tilt angles (max +/- 8 deg)
    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = -((y - centerY) / centerY) * 8;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY });

    // Magnetic explore pull (up to 4px)
    const magX = ((x - centerX) / centerX) * 4;
    const magY = ((y - centerY) / centerY) * 4;
    setMagneticOffset({ x: magX, y: magY });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onActivate();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
    setMagneticOffset({ x: 0, y: 0 });
  };

  // Sparkline path generator
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
    <div
      ref={cardRef}
      className={`${styles.cardWrapper} ${isHovered ? styles.wrapperHovered : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelectModal(item)}
      style={{
        animationDelay: `${index * 90}ms`,
      }}
      role="button"
      tabIndex={0}
      aria-label={`View intelligence report for ${item.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelectModal(item);
        }
      }}
    >
      <div
        className={styles.card}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${isHovered ? 12 : 0}px)`,
        }}
      >
        {/* Layer 1: Multi-depth Background Cinematic Image with Ken Burns & Twilight Lift */}
        <div className={styles.imageLayer}>
          <div
            className={styles.bgImage}
            style={{
              backgroundImage: `url('${item.image}')`,
              transform: `scale(${isHovered ? 1.08 : 1.02}) translate(${tilt.y * -0.5}px, ${tilt.x * 0.5}px)`,
            }}
          />
          {/* Subtle architectural wireframe raster grid */}
          <div className={styles.wireframeLayer} />
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
            <span className={styles.coordText}>{item.coordinates}</span>
          </div>

          <div className={styles.growthPill}>
            <span className={styles.growthDot} />
            <span className={styles.growthText}>{item.growth}</span>
          </div>
        </div>

        {/* Card Content & Data Reveal */}
        <div className={styles.cardContent} style={{ transform: "translateZ(36px)" }}>
          <div className={styles.titleGroup}>
            <span className={styles.localityCategory}>NAVI MUMBAI SECTOR</span>
            <h3 className={styles.localityName}>{item.name}</h3>
          </div>

          {/* Primary Price & Live Numerical Counter */}
          <div className={styles.priceRow}>
            <div className={styles.priceContainer}>
              <span className={styles.priceLabel}>INDEX VALUATION</span>
              <div className={styles.priceValue}>
                <span className={styles.currency}>₹</span>
                <span className={styles.amount}>
                  {animatedPrice.toLocaleString("en-IN")}
                </span>
                <span className={styles.sqft}>/sqft</span>
              </div>
            </div>

            {/* Micro Market Sparkline Graph */}
            <div className={styles.sparklineWrap} title="5-Year Appreciation Trend">
              <svg className={styles.sparklineSvg} width="96" height="28" viewBox="0 0 120 32">
                <defs>
                  <linearGradient id={`grad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
                    <stop offset="100%" stopColor="rgba(255, 215, 120, 0.95)" />
                  </linearGradient>
                </defs>
                <path
                  d={sparklineD}
                  fill="none"
                  stroke={`url(#grad-${item.id})`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`${styles.sparklinePath} ${isHovered ? styles.sparklineDraw : ""}`}
                />
              </svg>
            </div>
          </div>

          {/* Expandable Market Intelligence Panel (Reveals smoothly on Hover) */}
          <div className={`${styles.dataDrawer} ${isHovered ? styles.drawerOpen : ""}`}>
            <div className={styles.demandMeter}>
              <div className={styles.demandHeader}>
                <span>MARKET DEMAND</span>
                <span className={styles.demandVal}>{item.demandLabel} ({item.demandIndex}%)</span>
              </div>
              <div className={styles.meterTrack}>
                <div
                  className={styles.meterFill}
                  style={{ width: isHovered ? `${item.demandIndex}%` : "0%" }}
                />
              </div>
            </div>
            <p className={styles.infraSummary}>
              <span className={styles.infraIcon}>◈</span> {item.keyInfra}
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
    </div>
  );
}

// Full Locality Intelligence Dossier Modal
function LocalityModal({
  locality,
  onClose,
}: {
  locality: LocalityData | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (locality) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [locality, onClose]);

  if (!locality) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalBackdrop} />
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Visual */}
        <div className={styles.modalHero}>
          <div
            className={styles.modalHeroImg}
            style={{ backgroundImage: `url('${locality.image}')` }}
          />
          <div className={styles.modalHeroGradient} />
          
          <button
            className={styles.modalCloseBtn}
            onClick={onClose}
            aria-label="Close intelligence report"
          >
            ✕
          </button>

          <div className={styles.modalHeroInfo}>
            <div className={styles.modalTagRow}>
              <span className={styles.modalSector}>SECTOR {locality.index} · NAVI MUMBAI</span>
              <span className={styles.modalCoord}>{locality.coordinates}</span>
            </div>
            <h2 className={styles.modalTitle}>{locality.name}</h2>
            <p className={styles.modalTagline}>{locality.tagline}</p>
          </div>
        </div>

        {/* Modal Body & Intelligence Metrics */}
        <div className={styles.modalBody}>
          <div className={styles.metricGrid}>
            <div className={styles.metricCard}>
              <span className={styles.metricLabel}>INDEX PRICE</span>
              <strong className={styles.metricBig}>{locality.priceFormatted}</strong>
              <span className={styles.metricSub}>Average weighted capital rate</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricLabel}>ANNUAL APPRECIATION</span>
              <strong className={`${styles.metricBig} ${styles.growthGreen}`}>
                {locality.growth}
              </strong>
              <span className={styles.metricSub}>YoY Infrastructure Growth</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricLabel}>DEMAND INDEX</span>
              <strong className={styles.metricBig}>{locality.demandIndex}%</strong>
              <span className={styles.metricSub}>{locality.demandLabel}</span>
            </div>
          </div>

          <div className={styles.modalSection}>
            <h4 className={styles.modalSectionHeading}>LOCALITY INTELLIGENCE & INFRASTRUCTURE</h4>
            <p className={styles.modalDescription}>{locality.description}</p>
          </div>

          <div className={styles.modalSection}>
            <h4 className={styles.modalSectionHeading}>KEY HIGHLIGHTS</h4>
            <div className={styles.highlightList}>
              {locality.highlights.map((h, i) => (
                <div key={i} className={styles.highlightChip}>
                  <span className={styles.chipCheck}>✓</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.modalSection}>
            <h4 className={styles.modalSectionHeading}>CONNECTIVITY & TRANSIT CATALYSTS</h4>
            <div className={styles.infraBar}>
              <span className={styles.infraDot} />
              <span>{locality.keyInfra}</span>
            </div>
          </div>

          {/* Modal Actions */}
          <div className={styles.modalActionRow}>
            <Link
              href={locality.href}
              className={styles.modalPrimaryBtn}
              onClick={onClose}
            >
              <span>Explore Verified Properties in {locality.name}</span>
              <span className={styles.btnArrow}>→</span>
            </Link>
            <Link
              href={`/contact?subject=Market%20Advisory%20for%20${encodeURIComponent(locality.name)}`}
              className={styles.modalSecondaryBtn}
              onClick={onClose}
            >
              Request Area Advisory Dossier
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AwardSection() {
  const [activeLocalityIndex, setActiveLocalityIndex] = useState<number>(0);
  const [selectedModalLocality, setSelectedModalLocality] = useState<LocalityData | null>(null);

  const activeNumberFormatted = String(activeLocalityIndex + 1).padStart(2, "0");

  return (
    <section className={styles.localitiesSection} aria-labelledby="localities-heading">
      {/* Subtle architectural ambient backdrop */}
      <div className={styles.ambientOrb} />
      <div className={styles.subtleGridBg} />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.eyebrowWrap}>
              <span className={styles.dash}>—</span>
              <span className={styles.eyebrow}>EXPLORE BY AREA</span>
            </div>
            <h2 id="localities-heading" className={styles.heading}>
              TOP LOCALITIES IN NAVI MUMBAI
            </h2>
          </div>

          {/* Section-level Progress Indicator (01 / 06) */}
          <div className={styles.headerRight}>
            <div className={styles.counterBox}>
              <span className={styles.activeCounter}>{activeNumberFormatted}</span>
              <span className={styles.counterDivider}>/</span>
              <span className={styles.totalCounter}>06</span>
            </div>
            <p className={styles.headerHint}>
              Bloomberg-grade real estate valuation intelligence & connectivity analytics
            </p>
          </div>
        </div>

        {/* 3x2 Editorial Real Estate Intelligence Grid */}
        <div className={styles.grid}>
          {LOCALITIES.map((item, index) => (
            <LocalityCard
              key={item.id}
              item={item}
              index={index}
              isActive={activeLocalityIndex === index}
              onActivate={() => setActiveLocalityIndex(index)}
              onSelectModal={(loc) => setSelectedModalLocality(loc)}
            />
          ))}
        </div>

        {/* Section Footer Callout */}
        <div className={styles.sectionFooter}>
          <div className={styles.footerBadge}>
            <span className={styles.badgePulse} />
            <span>REAL-TIME MMR VALUATION INDEX</span>
          </div>
          <Link href="/works#top" className={styles.allPropertiesLink}>
            <span>View All Curated Navi Mumbai Residences</span>
            <span className={styles.footerArrow}>↗</span>
          </Link>
        </div>
      </div>

      {/* Interactive Cinematic Dossier Modal */}
      <LocalityModal
        locality={selectedModalLocality}
        onClose={() => setSelectedModalLocality(null)}
      />
    </section>
  );
}
