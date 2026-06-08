"use client";

import { useEffect, useRef } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const PLANS = [
  {
    label:    "Health Insurance",
    desc:     "Cover medical expenses, hospitalisation, and critical illnesses for individuals and families.",
    cta:      "Explore plans",
    href:     "#",
    imageSrc: "/images/section-2/Health insurance and healthcare.png",
    imageAlt: "Health Insurance illustration",
    imageBg:  "#FFF0F0",
  },
  {
    label:    "Motor Insurance",
    desc:     "Protect your vehicle against damage, theft, and third-party liability with comprehensive motor coverage.",
    cta:      "Explore plans",
    href:     "#",
   
    imageSrc: "/images/section-2/Group.png",
    imageAlt: "Motor Insurance illustration",
    imageBg:  "#F0F8FF",
  },
  {
    label:    "Life Insurance",
    desc:     "Build financial security for your loved ones and plan a retirement without worries.",
    cta:      "Explore plans",
    href:     "#",
     imageSrc: "/images/section-2/Bike courier riding through clouds, Express delivery service.png",
    imageAlt: "Life Insurance illustration",
    imageBg:  "#F5F0FF",
  },
  {
    label:    "Home Insurance",
    desc:     "Insure your home structure and household property against damage, fire, and natural disasters.",
    cta:      "Explore plans",
    href:     "#",
    imageSrc: "/images/section-2/House insurance or property insurance.png",
    imageAlt: "Home Insurance illustration",
    imageBg:  "#FFFBF0",
  },
];

const TRUST_ITEMS = [
  {
    label:    "24/7\nClaim Assistance",
    imageSrc: "/images/icons/claim-assistance.png",
    imageAlt: "24/7 Claim Assistance",
  },
  {
    label:    "Trusted\nCoverage",
    imageSrc: "/images/icons/trusted-coverage.png",
    imageAlt: "Trusted Coverage",
  },
  {
    label:    "Fast\nApprovals",
    imageSrc: "/images/icons/fast-approvals.png",
    imageAlt: "Fast Approvals",
  },
  {
    label:    "Personalized\nPlans",
    imageSrc: "/images/icons/personalized-plans.png",
    imageAlt: "Personalized Plans",
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function InsurancePlansSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>(".fade-up");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.animationPlayState = "running";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{CSS}</style>
      <section className="ips-section" ref={sectionRef}>
        <div className="ips-container">

          {/* ── TOP ROW: heading left + button right ── */}
          <div className="ips-toprow fade-up" style={{ "--d": "0s" } as React.CSSProperties}>
            <div className="ips-heading">
              <h2 className="ips-title">
                Every risk, <span className="ips-orange">covered.</span><br />
                Every life, <span className="ips-teal">protected.</span>
              </h2>
              <p className="ips-subtitle">
                Comprehensive protection across every aspect of<br className="ips-br" />
                your life and business.
              </p>
            </div>
            <a href="#" className="ips-view-all">View all plans</a>
          </div>

          {/* ── CARDS GRID ── */}
          <div className="ips-cards">
            {PLANS.map((plan, i) => (
              <div
                key={i}
                className="ips-card fade-up"
                style={{ "--d": `${0.1 + i * 0.1}s` } as React.CSSProperties}
              >
                {/* Image zone — each card has its own bg tint */}
                <div className="ips-card-img-wrap" style={{ background: plan.imageBg }}>
                  <img
                    src={plan.imageSrc}
                    alt={plan.imageAlt}
                    className="ips-card-img"
                  />
                </div>

                {/* White body */}
                <div className="ips-card-body">
                  <h3 className="ips-card-title">{plan.label}</h3>
                  <p className="ips-card-desc">{plan.desc}</p>
                  <a href={plan.href} className="ips-card-cta">
                    {plan.cta}
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3.5 9H14.5M14.5 9L10 4.5M14.5 9L10 13.5"
                        stroke="currentColor" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ── TRUST BANNER ── */}
          <div className="ips-banner fade-up" style={{ "--d": "0.5s" } as React.CSSProperties}>

            {/* Left: shield image + text */}
            <div className="ips-banner-left">
              <img
                src="/images/shield-check.png"
                alt="Protection shield"
                className="ips-banner-shield"
              />
              <div className="ips-banner-text">
                <p className="ips-banner-title">
                  Protection that stays with you,<br />
                  <span className="ips-teal">every step of the way.</span>
                </p>
                <p className="ips-banner-desc">
                  Reliable coverage, expert support, and quick claim assistance
                  whenever you need it.
                </p>
              </div>
            </div>

            {/* Vertical divider */}
            <div className="ips-banner-divider" />

            {/* Right: 4 icon stats — icons are images */}
            <div className="ips-banner-stats">
              {TRUST_ITEMS.map((item, i) => (
                <div key={i} className="ips-banner-stat">
                  <div className="ips-stat-icon-wrap">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="ips-stat-icon"
                    />
                  </div>
                  <span className="ips-stat-label">
                    {item.label.split("\n").map((line, j) => (
                      <span key={j}>{line}{j === 0 && <br />}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

// ─── CSS ──────────────────────────────────────────────────────────────────────

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,800&display=swap');

  .ips-section {
    background: linear-gradient(109deg, #FFE9E5 0%, #B2F6FF 150%);
    padding: clamp(60px, 8vw, 100px) 0 clamp(64px, 9vw, 108px);
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .ips-container {
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 clamp(50px, 5vw, 88px);
  }

  /* ── Top row ── */
  .ips-toprow {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: clamp(36px, 5vw, 56px);
    flex-wrap: wrap;
  }

  .ips-heading { flex: 1; min-width: 260px; }

  .ips-title {
    font-size: clamp(28px, 3.8vw, 48px);
    font-weight: 900;
    color: #111827;
    line-height: 1.15;
    margin: 0 0 14px;
    letter-spacing: -0.03em;
  }

  .ips-orange { color: #F4622A; }
  .ips-teal   { color: #0BB5B5; }

  .ips-subtitle {
    font-size: clamp(13.5px, 1.2vw, 15.5px);
    color: #9CA3AF;
    line-height: 1.7;
    margin: 0;
    font-weight: 400;
  }

  .ips-br { display: none; }
  @media(min-width:640px){ .ips-br { display: inline; } }

  /* "View all plans" button */
  .ips-view-all {
    flex-shrink: 0;
    padding: 13px 28px;
    border: 2px solid #1A1A2E;
    border-radius: 12px;
    color: #1A1A2E;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
    background: transparent;
    transition: background 0.2s, color 0.2s;
    align-self: flex-start;
    margin-top: 4px;
  }

  .ips-view-all:hover {
    background: #1A1A2E;
    color: #fff;
  }

  /* ── Cards grid — 4 equal-height columns ── */
  .ips-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: clamp(12px, 1.8vw, 20px);
    margin-bottom: clamp(24px, 3.5vw, 40px);
    align-items: stretch;
  }

  @media(max-width:960px)  { .ips-cards { grid-template-columns: repeat(2, 1fr); } }
  @media(max-width:520px)  { .ips-cards { grid-template-columns: 1fr; max-width: 400px; margin-inline: auto; } }

  /* ── Single card ── */
  .ips-card {
    background: #fff;
    border-radius: 18px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: 0 2px 16px rgba(0,0,0,0.06);
    transition: transform 0.26s ease, box-shadow 0.26s ease;
  }

  .ips-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 48px rgba(0,0,0,0.11);
  }

  /* Image zone — tall, takes up ~55% of card */
  .ips-card-img-wrap {
    width: 100%;
    height: 130px;   /* tall image area matching the design */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 20px 16px;
    flex-shrink: 0;
  }

  .ips-card-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center bottom;
    display: block;
  }

  /* White body */
  .ips-card-body {
    padding: 20px 22px 26px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
    background: #fff;
  }

  .ips-card-title {
    font-size: clamp(16px, 1.4vw, 19px);
    font-weight: 700;
    color: #111827;
    margin: 0;
    letter-spacing: -0.01em;
  }

  .ips-card-desc {
    font-size: clamp(13px, 1.05vw, 14.5px);
    color: #6B7280;
    line-height: 1.72;
    margin: 0;
    flex: 1;
  }

  .ips-card-cta {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 700;
    color: #F4622A;
    text-decoration: none;
    margin-top: 6px;
    transition: gap 0.2s ease;
  }

  .ips-card-cta:hover { gap: 10px; }

  /* ── Trust Banner ── */
  .ips-banner {
    background: linear-gradient(135deg, #EBF5FF 0%, #EEF8FF 100%);
    border-radius: 20px;
    padding: clamp(20px, 3vw, 36px) clamp(20px, 4vw, 44px);
    display: flex;
    align-items: center;
    gap: clamp(16px, 3vw, 40px);
    flex-wrap: wrap;
    box-shadow: 0 2px 20px rgba(0,0,0,0.05);
  }

  /* Left: shield + text */
  .ips-banner-left {
    display: flex;
    align-items: center;
    gap: 18px;
    flex: 1;
    min-width: 240px;
  }

  .ips-banner-shield {
    width: clamp(60px, 7vw, 90px);
    height: auto;
    flex-shrink: 0;
    object-fit: contain;
  }

  .ips-banner-title {
    font-size: clamp(15px, 1.5vw, 19px);
    font-weight: 800;
    color: #0B2563;
    line-height: 1.3;
    margin: 0 0 8px;
  }

  .ips-banner-desc {
    font-size: clamp(12px, 0.95vw, 13.5px);
    color: #6B7280;
    line-height: 1.65;
    margin: 0;
  }

  /* Vertical divider */
  .ips-banner-divider {
    width: 1px;
    height: 72px;
    background: rgba(0,0,0,0.1);
    flex-shrink: 0;
    align-self: center;
  }

  @media(max-width:720px) { .ips-banner-divider { display: none; } }

  /* Right: stats with image icons */
  .ips-banner-stats {
    display: flex;
    gap: clamp(16px, 3.5vw, 44px);
    flex-wrap: wrap;
    align-items: center;
  }

  .ips-banner-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
    min-width: 68px;
  }

  /* Circular icon container — matches the soft-circle style in the image */
  .ips-stat-icon-wrap {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.07);
    flex-shrink: 0;
  }

  .ips-stat-icon {
    width: 28px;
    height: 28px;
    object-fit: contain;
    display: block;
  }

  .ips-stat-label {
    font-size: 12.5px;
    font-weight: 700;
    color: #374151;
    line-height: 1.45;
  }

  /* ── Scroll animation ── */
  .fade-up {
    opacity: 0;
    transform: translateY(24px);
    animation: ips-fadein 0.6s cubic-bezier(0.22,1,0.36,1) var(--d, 0s) forwards;
    animation-play-state: paused;
  }

  @keyframes ips-fadein {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;