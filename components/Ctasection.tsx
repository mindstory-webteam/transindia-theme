"use client"

import React from "react";


const SHIELD_SRC  = "/images/Cta/Protection shield, System security, Verified access.svg";      // Protection_shield image
const FAMILY_SRC  = "/images/Cta/couple walks with baby.svg";      // couple_walks_with_baby image

// ─── Phone SVG icon (inline, no extra file needed) ───────────────────────────
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path
      d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24
         c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3
         13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1
         0 01-.24 1.01l-2.21 2.21z"
      fill="#EF4444"
    />
  </svg>
);

// ─── Section ─────────────────────────────────────────────────────────────────
export default function CtaSection() {
  return (
    <section style={s.section}>
      <div style={s.inner}>

        {/* ── LEFT: text ── */}
        <div style={s.textCol}>
          <h2 style={s.heading}>
            Finding the right insurance<br />
            shouldn't feel complicated.
          </h2>

          <p style={s.body}>
            Our advisors will assess your situation and find the right product for your
            life and budget. Free consultation, no pressure.
          </p>

          <button
            style={s.btn}
            onMouseEnter={e => (e.currentTarget.style.background = "#EA580C")}
            onMouseLeave={e => (e.currentTarget.style.background = "#F97316")}
          >
            Get free advice
          </button>

          <div style={s.phoneRow}>
            <PhoneIcon />
            <span style={s.phoneText}>
              Or call us:&nbsp;
              <span style={s.phoneNumber}>1800 425 8084</span>
              &nbsp;(24/7 · Toll-free)
            </span>
          </div>
        </div>

        {/* ── RIGHT: composite illustration — shield behind family ── */}
        <div style={s.imageCol}>
          {/* Shield — positioned behind the family, slightly left-center */}
          <img
            src={SHIELD_SRC}
            alt=""
            aria-hidden="true"
            style={s.shieldImg}
          />
          {/* Family — sits on top of the shield */}
          <img
            src={FAMILY_SRC}
            alt="Family protected by insurance shield"
            style={s.familyImg}
          />
        </div>

      </div>
    </section>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const s: Record<string, React.CSSProperties> = {

  section: {
    width: "100%",
    minHeight: 480,
    position: "relative",
    overflow: "hidden",
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    // Light warm-to-cool gradient matching the reference (image 4)
    background: "linear-gradient(110deg, #FFE8E3 0%, #FFF0EC 30%, #E8F8FF 65%, #C8F2FF 100%)",
    boxSizing: "border-box",
  },

  inner: {
    maxWidth: 1280,
    margin: "0 auto",
    minHeight: 480,
    display: "grid",
    gridTemplateColumns: "52fr 48fr",
    alignItems: "center",
    padding: "0 64px",
    boxSizing: "border-box",
  },

  // ── Left column ──
  textCol: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    paddingRight: 32,
    paddingTop: 72,
    paddingBottom: 72,
  },

  heading: {
    fontSize: "clamp(24px, 2.6vw, 40px)",
    fontWeight: 800,
    lineHeight: 1.18,
    color: "#1A1A2E",
    letterSpacing: "-0.025em",
    margin: 0,
  },

  body: {
    fontSize: 14.5,
    color: "#6B7280",
    lineHeight: 1.75,
    margin: 0,
    maxWidth: 460,
  },

  btn: {
    display: "inline-block",
    alignSelf: "flex-start",
    background: "#F97316",
    color: "#fff",
    fontWeight: 700,
    fontSize: 14,
    padding: "12px 26px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    transition: "background 0.15s",
    fontFamily: "inherit",
    letterSpacing: "0.01em",
  },

  phoneRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: 2,
  },

  phoneText: {
    fontSize: 13,
    color: "#6B7280",
  },

  phoneNumber: {
    fontWeight: 700,
    color: "#374151",
  },

  // ── Right column ──
  // The column is the positioning context for both layered images
  imageCol: {
    position: "relative",
    height: 480,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },

  // Shield: large oval, sits centre-left behind the family.
  // In the reference the shield top edge reaches ~25 % from the top of the
  // section and its centre is roughly aligned with the family's torsos.
  shieldImg: {
    position: "absolute",
    // Vertically: top of shield ~20 % down, let it run to ~85 % down
    top: "8%",
    left: "50%",
    // Nudge it left so the family's right side extends beyond the shield edge
    transform: "translateX(-62%)",
    // Width drives the shield size; height stays auto to preserve aspect ratio
    width: "68%",
    maxWidth: 300,
    height: "auto",
    objectFit: "contain",
    opacity: 0.88,
    pointerEvents: "none",
    userSelect: "none" as const,
    zIndex: 1,
    filter: "drop-shadow(0 12px 40px rgba(59,97,220,0.22))",
  },

  // Family: anchored to the bottom, slightly right of centre so the shield
  // peeks out to the left — matching the reference layout exactly.
  familyImg: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    // Slight rightward offset so the shield shows on the left
    transform: "translateX(-44%)",
    height: "94%",
    maxHeight: 450,
    width: "auto",
    objectFit: "contain",
    objectPosition: "bottom center",
    pointerEvents: "none",
    userSelect: "none" as const,
    zIndex: 2,
  },
};