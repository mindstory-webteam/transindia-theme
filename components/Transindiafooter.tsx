"use client"

import React from "react";

// ── Replace all src values below with your uploaded image paths ──

const LOGO_SRC          = "/images/logo/transindia.png";
const ICON_ADDRESS_SRC  = "/images/Footer/location.svg";
const ICON_PHONE_SRC    = "/images/Footer/call.svg";
const ICON_EMAIL_SRC    = "/images/Footer/yellow mail envelope.svg";

const socialIcons: { name: string; src: string; href: string }[] = [
  { name: "X (Twitter)", href: "#", src: "/images/Footer/x.svg" },
  { name: "Instagram",   href: "#", src: "/images/Footer/instagram logo.svg" },
  { name: "Facebook",    href: "#", src: "/images/Footer/facebook logo.svg" },
  { name: "YouTube",     href: "#", src: "/images/Footer/youtube logo.svg" },
  { name: "LinkedIn",    href: "#", src: "/images/Footer/linkedin logo.svg" },
];

const productLinks = [
  "Health insurance",
  "Life insurance",
  "Car insurance",
  "Bike insurance",
  "Home insurance",
  "Marine insurance",
  "Travel insurance",
];

const companyLinks = [
  "About us",
  "Our team",
  "Become a PoSP",
  "Corporate solutions",
  "Careers",
  "Blog",
];

const supportLinks = [
  "Make a claim",
  "Track claim",
  "Renew policy",
  "FAQ",
  "Privacy policy",
  "Terms of use",
];

const bottomLinks = ["Terms", "Privacy", "Disclaimer", "Cookie policy"];

const FooterColumn: React.FC<{ title: string; links: string[] }> = ({ title, links }) => (
  <div style={{ minWidth: 140 }}>
    <p
      style={{
        color: "#ffffff",
        fontWeight: 600,
        fontSize: 13,
        marginBottom: 14,
        marginTop: 0,
        letterSpacing: "0.02em",
      }}
    >
      {title}
    </p>
    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {links.map((link) => (
        <li key={link} style={{ marginBottom: 9 }}>
          <a
            href="#"
            style={{
              color: "#9ca3af",
              fontSize: 12.5,
              textDecoration: "none",
              lineHeight: 1.5,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#ffffff")}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#9ca3af")}
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const TransindiaFooter: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0d0f14",
        color: "#9ca3af",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        paddingTop: 48,
        borderTop: "1px solid #1f2937",
      }}
    >
      {/* Main content */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          gap: 40,
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {/* ── Left brand block ── */}
        <div style={{ maxWidth: 220, minWidth: 180, flex: "1 1 180px" }}>

          {/* LOGO */}
          <div style={{ marginBottom: 14 }}>
            <img
              src={LOGO_SRC}
              alt="Transindia logo"
              style={{ height: 36, width: "auto", objectFit: "contain" }}
            />
          </div>

          <p
            style={{
              fontSize: 12,
              color: "#9ca3af",
              lineHeight: 1.65,
              marginBottom: 20,
              marginTop: 0,
            }}
          >
            IRDAI licensed insurance partner based in Kochi.
            <br />
            Helping individuals and businesses across India find
            <br />
            the right protection since 2009.
          </p>

          {/* ADDRESS */}
          <div style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
            <img
              src={ICON_ADDRESS_SRC}
              alt="Address"
              style={{ width: 14, height: 14, objectFit: "contain", marginTop: 2, flexShrink: 0 }}
            />
            <p style={{ margin: 0, fontSize: 11.5, lineHeight: 1.6, color: "#9ca3af" }}>
              1st Floor, Indel House, Changampuzha Nagar,
              <br />
              Kalamassery, Kochi – 682 033
            </p>
          </div>

          {/* PHONE */}
          <div style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "center" }}>
            <img
              src={ICON_PHONE_SRC}
              alt="Phone"
              style={{ width: 14, height: 14, objectFit: "contain", flexShrink: 0 }}
            />
            <p style={{ margin: 0, fontSize: 11.5, color: "#9ca3af" }}>
              1800 425 8084 (Toll-free)
            </p>
          </div>

          {/* EMAIL */}
          <div style={{ display: "flex", gap: 8, marginBottom: 24, alignItems: "center" }}>
            <img
              src={ICON_EMAIL_SRC}
              alt="Email"
              style={{ width: 14, height: 14, objectFit: "contain", flexShrink: 0 }}
            />
            <p style={{ margin: 0, fontSize: 11.5, color: "#9ca3af" }}>
              care@transindia.com
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.href}
                title={icon.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  overflow: "hidden",
                  transition: "opacity 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
                }}
              >
                <img
                  src={icon.src}
                  alt={icon.name}
                  style={{ width: 32, height: 32, objectFit: "cover" }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* ── Right nav columns ── */}
        <div
          style={{
            display: "flex",
            gap: 40,
            flexWrap: "wrap",
            flex: "2 1 400px",
            justifyContent: "flex-end",
          }}
        >
          <FooterColumn title="Products" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Support" links={supportLinks} />
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          borderTop: "1px solid #1f2937",
          marginTop: 40,
          padding: "14px 32px",
          maxWidth: 1100,
          margin: "40px auto 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p style={{ margin: 0, fontSize: 11, color: "#6b7280" }}>
          © 2025 Transindia Insurance Broking Pvt. Ltd. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: 20 }}>
          {bottomLinks.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                color: "#6b7280",
                fontSize: 11,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#ffffff")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#6b7280")}
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div style={{ height: 16 }} />
    </footer>
  );
};

export default TransindiaFooter;