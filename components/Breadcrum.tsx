"use client";

import Link from "next/link";

interface BreadcrumProps {
  title?: string;
  titleAccent?: React.ReactNode;
  description?: string;
  crumbs?: { label: string; href?: string }[];
}

export default function Breadcrum({
  title = "India's Most Trusted",
  titleAccent = (
    <>
      <span style={{ color: "#F15A40" }}>Insurance</span>{" "}
      <span style={{ color: "#20BEC6" }}>Marketplace.</span>
    </>
  ),
  description =
    "We exist to make insurance simple, honest, and accessible for every Indian family — whether you're planning for tomorrow or protecting what you've built today.",
  crumbs = [{ label: "Home", href: "/" }, { label: "About Us" }],
}: BreadcrumProps) {
  return (
    <>
      <style>{CSS}</style>

      <section className="bc-hero">

        <div className="bc-inner">
          {/* ── Breadcrumb trail ── */}
          <nav className="bc-trail" aria-label="Breadcrumb">
            {crumbs.map((crumb, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <span key={crumb.label} className="bc-trail-item">
                  {i > 0 && <span className="bc-sep" aria-hidden="true">›</span>}
                  {isLast ? (
                    <span className="bc-current">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href ?? "#"} className="bc-link">
                      {crumb.label}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>

          {/* ── Hero text ── */}
          <div className="bc-content">
            <h1 className="bc-title">
              {title}
              <br />
              {titleAccent}
            </h1>
            <p className="bc-desc">{description}</p>

            <div className="bc-btns">
              <a href="#contact" className="bc-btn-orange">Talk to an Expert</a>
              <a href="/careers" className="bc-btn-ghost">Join Our Team</a>
            </div>
          </div>

          {/* ── Mobile visual (only visible on small screens) ── */}
          <div className="bc-mobile-visual">
            <img src="/images/about/about-us-sm-banner1.png" alt="About TransIndia" />
          </div>

        </div>

        {/* ── Stats bar ── */}
        <div className="bc-stats-bar">
          <div className="bc-stats-inner">
            {[
              { value: "18", label: "Years of Experience" },
              { value: "20", label: "Insurer Partners" },
              { value: "500K", label: "Happy Customers" },
              { value: "₹7000Cr", label: "Claims Settled" },
            ].map((s) => (
              <div key={s.label} className="bc-stat">
                <div className="bc-stat-value">{s.value}<span>+</span></div>
                <div className="bc-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


const CSS = `
  /* ── Hero section ── */
  .bc-hero {
    background: url('/images/about/aboutus-banner1.png') center/cover no-repeat;
    position: relative;
    overflow: visible; /* allow stats card to bleed out */
    padding-top: 150px; /* offset for fixed navbar */
    padding-bottom: 75px; /* half the card height — reserves space at bottom */
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  }



  .bc-inner {
    max-width: 1450px;
    margin: 0 auto;
    padding: 0 32px;
    display: flex;
    align-items: center;
    min-height: 535px;
    position: relative;
    z-index: 2;
  }

  /* ── Breadcrumb trail ── */
  .bc-trail {
    position: absolute;
    top: 40px;
    left: 32px;
    display: flex;
    align-items: center;
    gap: 0;
    font-size: 13px;
  }

  .bc-trail-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .bc-link {
    color: rgba(255,255,255,0.72);
    text-decoration: none;
    transition: color 0.2s;
  }
  .bc-link:hover { color: #fff; }

  .bc-sep {
    color: rgba(255,255,255,0.45);
    font-size: 11px;
    margin: 0 6px;
  }

  .bc-current {
    color: #fff;
    font-weight: 600;
  }

  /* ── Hero content (left) ── */
  .bc-content {
    flex: 0 0 52%;
    padding-bottom: 48px;
  }

  .bc-title {
    font-size: 55px;
    font-weight: 800;
    color: #fff;
    line-height: 1.15;
    margin: 0 0 14px 0;
    letter-spacing: -0.5px;
  }

  .bc-desc {
    font-size: 15px;
    color: rgba(255,255,255,0.80);
    line-height: 1.72;
    max-width: 540px;
    margin: 0 0 32px 0;
  }

  .bc-btns {
    display: flex;
    gap: 14px;
    align-items: center;
    flex-wrap: wrap;
  }

  .bc-btn-orange {
    background: #e84b2a;
    color: #fff;
    text-decoration: none;
    padding: 12px 26px;
    border-radius: 9px;
    font-size: 14px;
    font-weight: 700;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    display: inline-flex;
    align-items: center;
  }
  

  .bc-btn-ghost {
    background: transparent;
    color: #fff;
    border: 2px solid rgba(255,255,255,0.65);
    text-decoration: none;
    padding: 11px 24px;
    border-radius: 9px;
    font-size: 14px;
    font-weight: 700;
    transition: border-color 0.2s, background 0.2s;
    display: inline-flex;
    align-items: center;
  }


  .bc-visual {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;
    overflow: hidden;
  }

  .bc-mobile-visual {
    display: none;
  }

  .bc-banner-img {
    height: 100%;
    max-height: 420px;
    width: auto;
    object-fit: contain;
    object-position: bottom right;
    display: block;
    /* subtle entrance animation */
    animation: bc-rise 0.7s ease both;
  }

  @keyframes bc-rise {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Stats bar — absolutely pinned to hero bottom edge ── */
  .bc-stats-bar {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    width: calc(100% - 64px);
    max-width: 1300px;
    z-index: 20;
  }

  .bc-stats-inner {
    width: 100%;
    padding: 28px 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    gap: 20px;
    background: #fff;
    border-radius: 16px;
    box-shadow:
      0 8px 32px rgba(10, 31, 110, 0.13),
      0 2px 8px rgba(0, 0, 0, 0.07);
  }

  .bc-stat + .bc-stat {
    border-left: 1px solid #e8ecf4;
  }

  .bc-stat-value {
    font-size: 28px;
    font-weight: 800;
    color: #0a1f6e;
    line-height: 1;
    margin-bottom: 6px;
  }

  .bc-stat-value span {
    color: #e84b2a;
  }

  .bc-stat-label {
    font-size: 13px;
    color: #6b7280;
    font-weight: 500;
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .bc-visual { display: none; }
    .bc-content { flex: 1; }
    .bc-title { font-size: 32px; }

    .bc-stats-inner {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px 16px;
    }
    .bc-stat + .bc-stat { border-left: none; }
    .bc-stat { border-bottom: 1px solid #e8ecf4; padding-bottom: 24px; }
    .bc-stat:nth-child(3), .bc-stat:nth-child(4) { border-bottom: none; padding-bottom: 0; }
    .bc-stat:nth-child(even) { border-left: 1px solid #e8ecf4; padding-left: 16px; }
  }

  @media (max-width: 600px) {
    .bc-hero { background: #001250; }
    .bc-inner { 
      padding: 0 20px; 
      min-height: auto; 
      flex-direction: column; 
      align-items: flex-start; 
    }
    .bc-trail { display: none; }
    .bc-content {  padding-bottom: 20px; width: 100%; }
    .bc-title { font-size: 26px; }
    
    .bc-btns { flex-direction: column; width: 100%; }
    .bc-btn-orange, .bc-btn-ghost { width: 100%; justify-content: center; }

    .bc-mobile-visual {
      display: block;
      width: 100%;
      text-align: center;
      margin-top: 20px;
      padding-bottom: 140px; 
    }
    .bc-mobile-visual img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }

    .bc-stats-bar { width: calc(100% - 32px); }
    
    .bc-stats-inner {
      grid-template-columns: 1fr;
      padding: 24px 20px;
      gap: 20px;
      border-radius: 12px;
    }
    .bc-stat { border-left: none !important; padding-left: 0 !important; border-bottom: 1px solid #e8ecf4; padding-bottom: 20px; }
    .bc-stat:last-child { border-bottom: none; padding-bottom: 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    .bc-shield-svg, .bc-fi { animation: none !important; }
    .bc-btn-orange, .bc-btn-ghost { transition: none !important; }
  }
`;