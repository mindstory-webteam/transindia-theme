"use client"

import { useState } from "react";

// ── Types ───────────────────────────────────────────────────────────────────

interface CalculatorItem {
  label: string;
  imgSrc: string;
}

interface Category {
  title: string;
  badgeImg: string;
  badgeBg: string;   // ← background color for the badge image container
  headerBg: string;
  iconBg: string;
  items: CalculatorItem[];
}

// ── Data ─────────────────────────────────────────────────────────────────────

const categories: Category[] = [
  {
    title: "Home & Property\ncalculators",
    badgeImg: "/images/section-3/home security concept with smart house icon.svg",
    badgeBg: "#FFBE8C",   // orange tint behind the badge image
    headerBg: "#FFF3E8",
    iconBg: "#FFF3E8",
    items: [
      { label: "Home Loan Calculator",   imgSrc: "/images/section-3/home-13.svg" },
      { label: "EMI Calculator",         imgSrc: "/images/section-3/calculate.svg" },
      { label: "Stamp Duty Calculator",  imgSrc: "/images/section-3/google-doc.svg" },
      { label: "Rent vs Buy Calculator", imgSrc: "/images/section-3/balance-scale.svg" },
    ],
  },
  {
    title: "Money & Finance\nCalculators",
    badgeImg: "/images/section-3/coins.svg",
    badgeBg: "#A8F0C6",   // green tint
    headerBg: "#EDFDF4",
    iconBg: "#EDFDF4",
    items: [
      { label: "Compound Interest Calculator", imgSrc: "/images/section-3/chart-histogram.svg" },
      { label: "Saving Goal Calculator",       imgSrc: "/images/section-3/target-02.svg" },
      { label: "Inflation Calculator",         imgSrc: "/images/section-3/auto-conversations.svg" },
      { label: "Loan Eligibility Calculator",  imgSrc: "/images/section-3/coins-01.svg" },
    ],
  },
  {
    title: "Daily Life\nCalculators",
    badgeImg: "/images/section-3/budget management with financial calculator and money coins.svg",
    badgeBg: "#C4A8F5",   // purple tint
    headerBg: "#F3EFFE",
    iconBg: "#F3EFFE",
    items: [
      { label: "Age calculator",           imgSrc: "/images/section-3/user-circle.svg" },
      { label: "Date Duration Calculator", imgSrc: "/images/section-3/calendar-03.svg" },
      { label: "Time Zone Converted",      imgSrc: "/images/section-3/internet.svg" },
      { label: "Percentage Calculator",    imgSrc: "/images/section-3/percent.svg" },
    ],
  },
];

// ── ChevronRight ──────────────────────────────────────────────────────────────

const ChevronRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ── CalculatorRow ─────────────────────────────────────────────────────────────

function CalculatorRow({
  item,
  iconBg,
  isLast,
}: {
  item: CalculatorItem;
  iconBg: string;
  isLast: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "13px 20px",
        borderBottom: isLast ? "none" : "1px solid #F3F4F6",
        cursor: "pointer",
        transition: "background 0.15s",
        background: hovered ? "#FAFAFA" : "transparent",
        borderRadius: isLast ? "0 0 16px 16px" : 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {/*
          ── ROW ICON ──
          Container: 32×32 px (down from 40×40).
          Image renders at 20×20 px inside, centered.
          Set iconBg per category for the tinted background.
        */}
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: iconBg,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={item.imgSrc}
            alt={item.label}
            style={{
              width: 20,
              height: 20,
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            fontWeight: 500,
            color: "#1A1A2E",
            letterSpacing: "-0.01em",
          }}
        >
          {item.label}
        </span>
      </div>

      <span style={{ color: "#9CA3AF", flexShrink: 0 }}>
        <ChevronRight />
      </span>
    </div>
  );
}

// ── CategoryCard ──────────────────────────────────────────────────────────────

function CategoryCard({ cat }: { cat: Category }) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 20,
        border: "1px solid #F0F0F0",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        overflow: "hidden",
        flex: "1 1 0",
        minWidth: 0,
      }}
    >
      {/* ── HEADER ── */}
      <div
        style={{
          background: cat.headerBg,
          padding: "20px 22px",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        {/*
          ── BADGE IMAGE ──
          Container: 64×64 px with its own background color (cat.badgeBg).
          Image renders at 40×40 px, centered and contained.
          To change: update badgeBg and badgeImg in the categories array above.
        */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 14,
            background: cat.badgeBg,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={cat.badgeImg}
            alt={cat.title}
            style={{
              width: 40,
              height: 40,
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        <h3
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 17,
            fontWeight: 700,
            color: "#1A1A2E",
            margin: 0,
            lineHeight: 1.35,
            whiteSpace: "pre-line",
            letterSpacing: "-0.02em",
          }}
        >
          {cat.title}
        </h3>
      </div>

      {/* ── ROWS ── */}
      <div>
        {cat.items.map((item, i) => (
          <CalculatorRow
            key={item.label}
            item={item}
            iconBg={cat.iconBg}
            isLast={i === cat.items.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

// ── Pagination ────────────────────────────────────────────────────────────────

function Pagination({
  total,
  active,
  onPrev,
  onNext,
  onDot,
}: {
  total: number;
  active: number;
  onPrev: () => void;
  onNext: () => void;
  onDot: (i: number) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        justifyContent: "center",
        marginTop: 36,
      }}
    >
      <button
        onClick={onPrev}
        style={{
          width: 34, height: 34, borderRadius: "50%",
          border: "1.5px solid #E5E7EB", background: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", color: "#6B7280",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDot(i)}
          style={{
            width: i === active ? 22 : 10,
            height: 10,
            borderRadius: 5,
            border: "none",
            background: i === active ? "#3B82F6" : "#E5E7EB",
            cursor: "pointer",
            padding: 0,
            transition: "all 0.25s",
          }}
        />
      ))}

      <button
        onClick={onNext}
        style={{
          width: 34, height: 34, borderRadius: "50%",
          border: "1.5px solid #E5E7EB", background: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", color: "#6B7280",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function ExploreToolsSection() {
  const [page, setPage] = useState(0);
  const totalPages = 2;

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>

      <section
        style={{
          background: "#FFFFFF",
          padding: "72px 24px",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: "#1A1A2E",
              margin: "0 0 14px 0",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            Explore{" "}
            <span style={{ color: "#F97316" }}>useful</span>
            {" "}tools
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#6B7280",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.65,
              fontWeight: 400,
            }}
          >
            Simplify everyday calculations with our easy-to-use tools.
            <br />Browse by category and find the right tool for you.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "flex",
            gap: 20,
            maxWidth: 1140,
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <CategoryCard key={cat.title} cat={cat} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          total={totalPages}
          active={page}
          onPrev={() => setPage((p) => Math.max(0, p - 1))}
          onNext={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          onDot={(i) => setPage(i)}
        />
      </section>
    </>
  );
}