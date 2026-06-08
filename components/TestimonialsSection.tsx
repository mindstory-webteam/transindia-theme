"use client"

// ─── Data ────────────────────────────────────────────────────────────────────
const testimonials = [
  {
    stars: 5,
    quote:
      "Renjith made the entire process completely stress-free. He explained every clause, compared five different plans, and found us something significantly better than what we had before — at a lower premium.",
    name: "Irfan Mohammed",
    role: "Business Owner, Kochi",
    initials: "IM",
  },
  {
    stars: 5,
    quote:
      "Renjith made the entire process completely stress-free. He explained every clause, compared five different plans, and found us something significantly better than what we had before — at a lower premium.",
    name: "Irfan Mohammed",
    role: "Business Owner, Kochi",
    initials: "IM",
  },
  {
    stars: 5,
    quote:
      "Renjith made the entire process completely stress-free. He explained every clause, compared five different plans, and found us something significantly better than what we had before — at a lower premium.",
    name: "Irfan Mohammed",
    role: "Business Owner, Kochi",
    initials: "IM",
  },
];

// ─── Star Row ─────────────────────────────────────────────────────────────────
function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="#FBBF24">
          <path d="M9 1.5l2.06 4.18 4.61.67-3.34 3.25.79 4.6L9 11.77l-4.12 2.43.79-4.6L2.33 6.35l4.61-.67L9 1.5z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Testimonial Card ─────────────────────────────────────────────────────────
function TestimonialCard({
  stars,
  quote,
  name,
  role,
  initials,
}: {
  stars: number;
  quote: string;
  name: string;
  role: string;
  initials: string;
}) {
  return (
    <div style={card}>
      {/* Stars */}
      <Stars count={stars} />

      {/* Quote mark */}
      <span style={quoteMark}>"</span>

      {/* Quote text */}
      <p style={quoteText}>{quote}</p>

      {/* Author */}
      <div style={authorRow}>
        <div style={avatar}>{initials}</div>
        <div>
          <p style={authorName}>{name}</p>
          <p style={authorRole}>{role}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function TestimonialsSection() {
  return (
    <section style={section}>

      {/* Header */}
      <div style={headerWrap}>
        <h2 style={heading}>
          <span style={{ color: "#1E293B" }}>Real people.</span>
          <br />
          <span style={{ color: "#F97316" }}>Real peace of mind</span>
        </h2>
        <p style={subheading}>
          Hear from clients who found the right cover — and the right
          <br />
          support when it mattered.
        </p>
      </div>

      {/* Cards */}
      <div style={grid}>
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>

    </section>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const section: React.CSSProperties = {
  width: "100%",
  padding: "96px 48px",
  boxSizing: "border-box",
  background: "#FFFFFF",
  fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
};

const headerWrap: React.CSSProperties = {
  textAlign: "center",
  marginBottom: 64,
};

const heading: React.CSSProperties = {
  fontSize: "clamp(36px, 4vw, 52px)",
  fontWeight: 800,
  lineHeight: 1.15,
  letterSpacing: "-0.02em",
  margin: "0 0 20px",
};

const subheading: React.CSSProperties = {
  fontSize: 17,
  color: "#64748B",
  lineHeight: 1.7,
  margin: 0,
};

const grid: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 24,
  alignItems: "stretch",
};

const card: React.CSSProperties = {
  background: "#F8FAFC",
  borderRadius: 20,
  padding: "32px 28px",
  display: "flex",
  flexDirection: "column",
  gap: 0,
  border: "1px solid #F1F5F9",
  boxSizing: "border-box",
};

const quoteMark: React.CSSProperties = {
  display: "block",
  fontSize: 36,
  fontWeight: 800,
  color: "#CBD5E1",
  lineHeight: 1,
  marginTop: 16,
  marginBottom: 4,
  fontFamily: "Georgia, serif",
};

const quoteText: React.CSSProperties = {
  fontSize: 15,
  color: "#475569",
  lineHeight: 1.75,
  fontStyle: "italic",
  margin: "0 0 28px",
  flex: 1,
};

const authorRow: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginTop: "auto",
};

const avatar: React.CSSProperties = {
  width: 44,
  height: 44,
  borderRadius: "50%",
  background: "#F97316",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: 14,
  flexShrink: 0,
  letterSpacing: "0.02em",
};

const authorName: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  color: "#1E293B",
  margin: "0 0 2px",
};

const authorRole: React.CSSProperties = {
  fontSize: 12,
  color: "#94A3B8",
  margin: 0,
};