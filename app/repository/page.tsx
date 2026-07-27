import Link from "next/link";
import { offers } from "@/data/offers";
import { categories, getCategoryColor } from "@/data/categories";

export const metadata = {
  title: "Offer Repository — Cantina Virtual",
  description: "Public list of available offers with shortened links.",
};

/* ── shared card renderer ──────────────────────────────────────── */
function OfferCard({ offer }: { offer: (typeof offers)[number] }) {
  const accent = getCategoryColor(offer.category);
  const shortCat = offer.category.split(' ')[0]; // e.g. "AI", "Dating", "Gay"

  /* Banner card: image top + info bottom, full-card clickable */
  if (offer.imageUrl) {
    return (
      <Link
        href={`/go/${offer.slug}`}
        style={{
          width: "300px",
          height: "250px",
          borderRadius: "10px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          transition: "transform 0.15s, box-shadow 0.15s",
          background: "#fff",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = `0 6px 20px ${accent}40`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)";
        }}
      >
        {/* Image area */}
        <div style={{
          width: "100%",
          height: "158px",
          flexShrink: 0,
          overflow: "hidden",
          position: "relative",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={offer.imageUrl}
            alt={offer.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          {/* Subtle category color overlay at bottom of image */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40px",
            background: `linear-gradient(transparent, ${accent}30)`,
            pointerEvents: "none",
          }} />
        </div>

        {/* Category color divider */}
        <div style={{ height: "3px", background: accent, flexShrink: 0 }} />

        {/* Info area */}
        <div style={{
          flex: 1,
          padding: "8px 10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: 0,
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "6px",
          }}>
            <h2 style={{
              margin: 0,
              fontSize: "13px",
              fontWeight: 700,
              color: "#111827",
              lineHeight: "1.2",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flex: 1,
            }}>
              {offer.title}
            </h2>
            <span style={{
              fontSize: "9px",
              fontWeight: 700,
              color: "#fff",
              background: accent,
              padding: "2px 7px",
              borderRadius: "8px",
              whiteSpace: "nowrap",
              flexShrink: 0,
              letterSpacing: "0.3px",
              textTransform: "uppercase",
            }}>
              {shortCat}
            </span>
          </div>
          <p style={{
            margin: "3px 0 0 0",
            fontSize: "11px",
            color: "#6b7280",
            lineHeight: "1.3",
            fontStyle: "italic",
          }}>
            {offer.caption}
          </p>
        </div>
      </Link>
    );
  }

  /* Fallback text card (no banner) — colorful gradient bg */
  return (
    <Link
      href={`/go/${offer.slug}`}
      style={{
        width: "300px",
        height: "250px",
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        transition: "transform 0.15s, box-shadow 0.15s",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = `0 6px 20px ${accent}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)";
      }}
    >
      {/* Colorful header area */}
      <div style={{
        flex: 1,
        background: `linear-gradient(135deg, ${accent}18, ${accent}08)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 16px",
        borderBottom: `3px solid ${accent}`,
      }}>
        {/* Large category icon/badge */}
        <span style={{
          fontSize: "10px",
          fontWeight: 700,
          color: "#fff",
          background: accent,
          padding: "3px 10px",
          borderRadius: "8px",
          marginBottom: "12px",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}>
          {shortCat}
        </span>
        <h2 style={{
          margin: 0,
          fontSize: "16px",
          fontWeight: 700,
          color: "#111827",
          lineHeight: "1.2",
          textAlign: "center",
        }}>
          {offer.title}
        </h2>
        <p style={{
          margin: "6px 0 0 0",
          fontSize: "12px",
          color: "#6b7280",
          lineHeight: "1.4",
          fontStyle: "italic",
          textAlign: "center",
        }}>
          {offer.caption}
        </p>
      </div>

      {/* Description footer */}
      <div style={{
        padding: "10px 14px",
        background: "#fff",
      }}>
        <p style={{
          margin: 0,
          fontSize: "11px",
          color: "#6b7280",
          lineHeight: "1.4",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {offer.description}
        </p>
      </div>
    </Link>
  );
}

/* ── main repository page ──────────────────────────────────────── */
export default function RepositoryPage() {
  return (
    <main
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "2rem",
        maxWidth: "1080px",
        margin: "0 auto",
        minHeight: "100vh",
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ margin: "0 0 0.5rem 0", fontSize: "28px", fontWeight: 700, color: "111827" }}>
          Offer Repository
        </h1>
        <p style={{ margin: 0, fontSize: "15px", color: "#6b7280" }}>
          Browse available offers by category. Each link redirects through a short path.
        </p>
      </header>

      {/* Category navigation tabs */}
      <nav style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "1.5rem" }}>
        {categories.map((cat) => {
          const count = offers.filter((o) => o.category === cat.label).length;
          return (
            <Link
              key={cat.slug}
              href={`/repository/${cat.slug}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 14px",
                borderRadius: "20px",
                border: `2px solid ${cat.color}`,
                color: cat.color,
                fontWeight: 600,
                fontSize: "13px",
                textDecoration: "none",
                background: "rgba(255,255,255,0.85)",
                transition: "background 0.15s",
              }}
            >
              {cat.label}
              <span style={{
                background: cat.color,
                color: "#fff",
                borderRadius: "10px",
                padding: "1px 7px",
                fontSize: "11px",
                fontWeight: 700,
              }}>
                {count}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* All offers grid */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {offers.map((offer) => (
          <OfferCard key={offer.slug} offer={offer} />
        ))}
      </div>

      <footer style={{ marginTop: "2rem" }}>
        <Link href="/" style={{ fontSize: "14px", color: "#9ca3af", textDecoration: "none" }}>
          &larr; Back to home
        </Link>
      </footer>
    </main>
  );
}