import Link from "next/link";
import { offers } from "@/data/offers";

export const metadata = {
  title: "Offer Repository — Cantina Virtual",
  description: "Public list of available offers with shortened links.",
};

const cardStyle: React.CSSProperties = {
  width: "300px",
  height: "250px",
  overflow: "hidden",
  borderRadius: "8px",
  border: "1px solid #e0e0e0",
  display: "flex",
  flexDirection: "column",
  fontFamily: "system-ui, -apple-system, sans-serif",
  background: "rgba(255, 255, 255, 0.95)",
  boxSizing: "border-box",
};

const imagePlaceholderStyle: React.CSSProperties = {
  width: "100%",
  height: "90px",
  background: "#f0f0f0",
  flexShrink: 0,
  overflow: "hidden",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const bodyStyle: React.CSSProperties = {
  padding: "10px 12px",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
  overflow: "hidden",
};

const titleStyle: React.CSSProperties = {
  margin: "0 0 4px 0",
  fontSize: "15px",
  fontWeight: 600,
  color: "#111827",
  lineHeight: "1.2",
};

const descriptionStyle: React.CSSProperties = {
  margin: "0 0 6px 0",
  fontSize: "13px",
  color: "#6b7280",
  lineHeight: "1.4",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  flexShrink: 0,
};

const linkStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: 500,
  marginTop: "auto",
  display: "inline-block",
};

const detailsStyle: React.CSSProperties = {
  margin: "0",
  fontSize: "11px",
  color: "#6b7280",
  overflow: "hidden",
};

const summaryStyle: React.CSSProperties = {
  cursor: "pointer",
  padding: "2px 0",
  outline: "none",
  fontSize: "11px",
  color: "#9ca3af",
};

const countryListStyle: React.CSSProperties = {
  margin: "0",
  paddingLeft: "14px",
  maxHeight: "60px",
  overflowY: "auto",
  fontSize: "11px",
  lineHeight: "1.5",
};

export default function RepositoryPage() {
  return (
    <main
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "2rem",
        maxWidth: "960px",
        margin: "0 auto",
        minHeight: "100vh",
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header style={{ marginBottom: "2rem" }}>
        <h1 style={{ margin: "0 0 0.5rem 0", fontSize: "28px", fontWeight: 700, color: "#111827" }}>
          Offer Repository
        </h1>
        <p style={{ margin: 0, fontSize: "15px", color: "#6b7280" }}>
          Browse available offers. Each link redirects through a short path.
        </p>
      </header>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {offers.map((offer) => {
          const brandedLink = `cantina virtual / ${offer.slug}`;
          return (
            <div key={offer.slug} style={cardStyle}>
              {/* Image area */}
              {offer.imageUrl ? (
                <div style={imagePlaceholderStyle}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={offer.imageUrl} alt={offer.title} style={imageStyle} />
                </div>
              ) : (
                <div style={imagePlaceholderStyle} />
              )}

              {/* Card body */}
              <div style={bodyStyle}>
                <h2 style={titleStyle}>{offer.title}</h2>
                <p style={descriptionStyle}>{offer.description}</p>

                {/* Collapsible countries */}
                <details style={detailsStyle}>
                  <summary style={summaryStyle}>
                    View Available Countries ({offer.countries.length})
                  </summary>
                  <ul style={countryListStyle}>
                    {offer.countries.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </details>

                {/* Branded link */}
                <Link href={`/go/${offer.slug}`} style={linkStyle}>
                  {brandedLink}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <footer style={{ marginTop: "2rem" }}>
        <Link
          href="/"
          style={{ fontSize: "14px", color: "#9ca3af", textDecoration: "none" }}
        >
          &larr; Back to home
        </Link>
      </footer>
    </main>
  );
}