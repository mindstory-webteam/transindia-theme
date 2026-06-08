"use client";

import { useState, useEffect, useRef } from "react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface Slide {
  id: number;
  accentColor: string;
  familyImageSrc: string;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const SLIDES: Slide[] = [
  {
    id: 1,
    accentColor: "#38BDF8",
    familyImageSrc: "/images/banner/banner-1.png",
  },
  {
    id: 2,
    accentColor: "#34D399",
    familyImageSrc: "/images/banner/banner-2.png",
  },
  
];

const STATS = [
  { value: "1.2L+",   label: "Policies sold"  },
  { value: "50K+",    label: "Happy clients"  },
  { value: "₹500Cr+", label: "Claim Settled"  },
  { value: "15+",     label: "Years of Trust" },
];

const INSURANCE_TYPES = [
  "Health Insurance",
  "Life Insurance",
  "Motor Insurance",
  "Term Insurance",
  "Travel Insurance",
];

const SUM_INSURED = [
  "₹2 Lakhs", "₹3 Lakhs", "₹5 Lakhs",
  "₹10 Lakhs", "₹25 Lakhs", "₹50 Lakhs", "₹1 Crore",
];

// ─── SVG ICONS ────────────────────────────────────────────────────────────────

function ChevronDown({ color = "#0B2563" }: { color?: string }) {
  return (
    <svg viewBox="0 0 20 20" width={16} height={16} fill="none" stroke={color} strokeWidth={2.2}>
      <polyline points="5 8 10 13 15 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width={18} height={18} fill="none" stroke="#fff" strokeWidth={2.2}>
      <line x1="4" y1="10" x2="16" y2="10" strokeLinecap="round" />
      <polyline points="11 5 16 10 11 15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── QUICK QUOTE BAR ──────────────────────────────────────────────────────────

function QuoteBar() {
  const [insType,  setInsType]  = useState("Health Insurance");
  const [sum,      setSum]      = useState("₹5 Lakhs");
  const [mobile,   setMobile]   = useState("7510715196");

  const selectStyle: React.CSSProperties = {
    appearance:       "none",
    WebkitAppearance: "none",
    border:           "none",
    background:       "transparent",
    fontSize:         17,
    fontWeight:       600,
    color:            "#0B2563",
    fontFamily:       "inherit",
    cursor:           "pointer",
    paddingRight:     28,
    outline:          "none",
    width:            "100%",
  };

  const colStyle: React.CSSProperties = {
    flex:          1,
    minWidth:      180,
    padding:       "0 28px",
    borderRight:   "1.5px solid #E5E9F2",
    display:       "flex",
    flexDirection: "column",
    gap:           4,
    position:      "relative",
  };

  return (
    <div className="ins-quotebar" style={{
      background:   "#fff",
      borderRadius: 18,
      boxShadow:    "0 8px 48px rgba(0,0,0,0.18)",
      padding:      "20px 28px",
      display:      "flex",
      alignItems:   "center",
      gap:          0,
    }}>
      {/* Label */}
      <div style={{
        paddingRight: 28,
        borderRight:  "1.5px solid #E5E9F2",
        whiteSpace:   "nowrap",
        fontSize:     18,
        fontWeight:   900,
        color:        "#0B2563",
        minWidth:     148,
      }}>
        Get Insured Fast
      </div>

      {/* Insurance Type */}
      <div className="ins-quote-col" style={colStyle}>
        <span style={{ fontSize: 10, fontWeight: 700, color: "#8A96B0", letterSpacing: 1, textTransform: "uppercase" }}>
          Insurance Type
        </span>
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <select value={insType} onChange={e => setInsType(e.target.value)} style={selectStyle}>
            {INSURANCE_TYPES.map(t => <option key={t}>{t}</option>)}
          </select>
          <div style={{ position: "absolute", right: 0, pointerEvents: "none" }}>
            <ChevronDown />
          </div>
        </div>
      </div>

      {/* Sum Insured */}
      <div className="ins-quote-col" style={colStyle}>
        <span style={{ fontSize: 10, fontWeight: 700, color: "#8A96B0", letterSpacing: 1, textTransform: "uppercase" }}>
          Sum Insured
        </span>
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <select value={sum} onChange={e => setSum(e.target.value)} style={selectStyle}>
            {SUM_INSURED.map(s => <option key={s}>{s}</option>)}
          </select>
          <div style={{ position: "absolute", right: 0, pointerEvents: "none" }}>
            <ChevronDown />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="ins-quote-col" style={{ ...colStyle, borderRight: "none" }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: "#8A96B0", letterSpacing: 1, textTransform: "uppercase" }}>
          Mobile Number
        </span>
        <input
          type="tel"
          value={mobile}
          onChange={e => setMobile(e.target.value)}
          maxLength={10}
          style={{
            border:     "none",
            outline:    "none",
            background: "transparent",
            fontSize:   17,
            fontWeight: 600,
            color:      "#0B2563",
            fontFamily: "inherit",
            width:      "100%",
          }}
        />
      </div>

      {/* CTA */}
      <button
        className="ins-quote-cta"
        style={{
          marginLeft:   16,
          padding:      "16px 32px",
          background:   "#F4622A",
          border:       "none",
          borderRadius: 12,
          color:        "#fff",
          fontSize:     16,
          fontWeight:   800,
          cursor:       "pointer",
          display:      "flex",
          alignItems:   "center",
          gap:          10,
          whiteSpace:   "nowrap",
          boxShadow:    "0 4px 20px rgba(244,98,42,0.45)",
          fontFamily:   "inherit",
          transition:   "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.transform  = "translateY(-2px)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 28px rgba(244,98,42,0.6)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.transform  = "translateY(0)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(244,98,42,0.45)";
        }}
      >
        Get Quote <ArrowRight />
      </button>
    </div>
  );
}

// ─── MAIN BANNER ─────────────────────────────────────────────────────────────

export default function Banner() {
  const [current,   setCurrent]   = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent(p => (p + 1) % SLIDES.length), 4000
    );
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (i: number) => {
    if (animating || i === current) return;
    setAnimating(true);
    setCurrent(i);
    resetTimer();
    setTimeout(() => setAnimating(false), 600);
  };

  const slide = SLIDES[current];

  // Quote bar height is ~76px; we want it to straddle 50/50
  const QUOTE_BAR_HALF = 38; // px — half of ~76px bar height

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,600;0,700;0,800;0,900;1,800;1,900&display=swap');

        .ins-root *{box-sizing:border-box;font-family:'Plus Jakarta Sans',sans-serif}

        @keyframes pulseDot{
          0%,100%{box-shadow:0 0 4px #4ADE80}
          50%    {box-shadow:0 0 12px #4ADE80,0 0 22px #4ADE8066}
        }
        .pulse-dot{animation:pulseDot 2s ease-in-out infinite}

        /* ── Image carousel (right side) ── */
        .ins-carousel{
          position:relative;
          width:100%;
          max-width:100%;
          margin:0 auto;
          overflow:hidden;
          background:transparent;
        }
        .ins-carousel-track{
          display:flex;
          transition:transform .6s cubic-bezier(.22,1,.36,1);
        }
        .ins-carousel-slide{ flex:0 0 100%; }
        .ins-carousel-img{ width:100%; height:auto; display:block; }

        /* ── Responsive ── */
        @media(max-width:960px){
          .ins-inner{flex-direction:column!important;padding:40px 20px 0!important}
          .ins-left{flex:unset!important;max-width:100%!important}
          .ins-right{flex:unset!important;max-width:100%!important;width:100%!important}
          .ins-quote-wrap{padding:0 20px!important}
          .ins-carousel{ max-width:100%; }

          .ins-quotebar{ flex-direction:column!important; align-items:stretch!important; gap:14px!important; }
          .ins-quotebar > div{ border-right:none!important; min-width:0!important; padding:0!important; }
          .ins-quote-col{ padding:12px 0!important; border-top:1.5px solid #E5E9F2!important; }
          .ins-quote-cta{ margin-left:0!important; justify-content:center!important; }
        }
      `}</style>

      <div className="ins-root">

        {/* ── HERO SECTION ── */}
        <section style={{
          // ✅ Exact royal blue from the image — bright deep blue, not near-black
          background:    "linear-gradient(160deg, #0B2080 0%, #0A1B6B 45%, #061448 100%)",
          position:      "relative",
          overflow:      "visible", // allow quote bar to overflow downward
          // Add padding at the bottom equal to half the quote bar height so content isn't hidden behind it
          paddingBottom: `${QUOTE_BAR_HALF}px`,
        }}>

          {/* Background glows */}
          <div style={{
            position:     "absolute",
            top:          "10%",
            right:        "25%",
            width:        700,
            height:       700,
            borderRadius: "50%",
            background:   "radial-gradient(circle,rgba(56,189,248,0.09) 0%,transparent 65%)",
            pointerEvents:"none",
          }} />
          <div style={{
            position:     "absolute",
            bottom:       "15%",
            left:         "5%",
            width:        500,
            height:       500,
            borderRadius: "50%",
            background:   "radial-gradient(circle,rgba(30,80,220,0.10) 0%,transparent 65%)",
            pointerEvents:"none",
          }} />

          {/* Main row */}
          <div
            className="ins-inner"
            style={{
              maxWidth:       1280,
              margin:         "0 auto",
              padding:        "64px 48px 0",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "space-between",
              gap:            32,
              position:       "relative",
              zIndex:         1,
            }}
          >
            {/* ── LEFT ── */}
            <div
              className="ins-left"
              style={{ flex: "0 0 44%", maxWidth: 530, paddingBottom: 80 }}
            >
              <h1 style={{
                fontSize:      "clamp(28px,3.6vw,52px)",
                fontWeight:    900,
                color:         "#fff",
                lineHeight:    1.12,
                margin:        "0 0 20px",
                letterSpacing: "-0.5px",
              }}>
                Protection for
                <br />
                <span style={{ color: "#F4622A", fontStyle: "italic" }}>Every </span>
                <span style={{ color: "#38BDF8" }}>stage of life.</span>
              </h1>

              <p style={{
                fontSize:   15,
                color:      "rgba(255,255,255,0.64)",
                lineHeight: 1.8,
                margin:     "0 0 36px",
                maxWidth:   460,
              }}>
                We help families find the right insurance coverage with easy
                processes, trusted advisors, and dependable claim support
                whenever you need it.
              </p>

              {/* CTAs */}
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}>
                <a href="#" style={{
                  padding:        "14px 36px",
                  background:     "#F4622A",
                  borderRadius:   10,
                  color:          "#fff",
                  textDecoration: "none",
                  fontSize:       15,
                  fontWeight:     800,
                  boxShadow:      "0 4px 26px rgba(244,98,42,0.5)",
                  whiteSpace:     "nowrap",
                }}>
                  Get your quote
                </a>
                <a href="#" style={{
                  padding:        "14px 36px",
                  background:     "rgba(255,255,255,0.06)",
                  border:         "1.5px solid rgba(255,255,255,0.4)",
                  borderRadius:   10,
                  color:          "#fff",
                  textDecoration: "none",
                  fontSize:       15,
                  fontWeight:     800,
                  backdropFilter: "blur(6px)",
                  whiteSpace:     "nowrap",
                }}>
                  Talk to an expert
                </a>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}>
                {STATS.map((s, i) => (
                  <div key={s.label} style={{
                    display:      "flex",
                    alignItems:   "flex-start",
                    gap:          18,
                    paddingRight: 18,
                  }}>
                    {i !== 0 && <div style={{
                      width:      1,
                      height:     40,
                      background: "rgba(255,255,255,0.15)",
                      flexShrink: 0,
                      marginTop:  2,
                    }} />}
                    <div>
                      <div style={{
                        fontSize:   "clamp(17px,1.7vw,23px)",
                        fontWeight: 900,
                        color:      "#fff",
                        lineHeight: 1.1,
                      }}>{s.value}</div>
                      <div style={{
                        fontSize:   11,
                        color:      "rgba(255,255,255,0.42)",
                        marginTop:  4,
                        whiteSpace: "nowrap",
                      }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Image carousel ── */}
            <div
              className="ins-right"
              style={{
                flex:          "0 0 52%",
                maxWidth:      680,
                display:       "flex",
                flexDirection: "column",
                alignItems:    "center",
              }}
            >
              {/* Sliding photos */}
              <div className="ins-carousel">
                <div
                  className="ins-carousel-track"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {SLIDES.map((s) => (
                    <div className="ins-carousel-slide" key={s.id}>
                      <img
                        className="ins-carousel-img"
                        src={s.familyImageSrc}
                        alt={`Insurance coverage ${s.id}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dot indicators */}
              <div style={{ display: "flex", gap: 8, marginTop: 20, marginBottom: 24 }}>
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Slide ${i + 1}`}
                    style={{
                      width:        i === current ? 28 : 9,
                      height:       9,
                      borderRadius: 5,
                      border:       "none",
                      cursor:       "pointer",
                      padding:      0,
                      background:   i === current
                        ? slide.accentColor
                        : "rgba(255,255,255,0.22)",
                      transition: "all 0.35s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── QUOTE BAR — absolutely positioned to straddle the bottom edge ── */}
          <div
            className="ins-quote-wrap"
            style={{
              position:  "absolute",
              bottom:    `-${QUOTE_BAR_HALF}px`, // half of bar hangs below section
              left:      0,
              right:     0,
              zIndex:    20,
              padding:   "0 48px",
            }}
          >
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
              <QuoteBar />
            </div>
          </div>

        </section>

        {/* ── CONTENT BELOW BANNER — needs top padding to clear the protruding quote bar ── */}
        <div style={{
          background:  "#F0F4FA",
          paddingTop:  `${QUOTE_BAR_HALF + 64}px`, // clear bar + breathing room
          paddingBottom: 64,
        }}>
          {/* your page content continues here */}
        </div>

      </div>
    </>
  );
}