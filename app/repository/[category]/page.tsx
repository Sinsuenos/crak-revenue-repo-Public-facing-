import Link from "next/link";
import { notFound } from "next/navigation";
import { offers } from "@/data/offers";
import { categories, getCategoryColor } from "@/data/categories";

/* ── generateStaticParams ─────────────────────────────────────── */
export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

/* ── dynamic metadata ─────────────────────────────────────────── */
export async function generateMetadata({ params }: { params: { category: string } }) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) return { title: "Not Found" };
  return { title: `${cat.label} — Cantina Virtual` };
}

/* ── page ─────────────────────────────────────────────────────── */
export default function CategoryPage({ params }: { params: { category: string } }) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) notFound();

  const filtered = offers.filter((o) => o.category === cat.label);
  const accent = cat.color;

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
      {/* Header with back link */}
      <header style={{ marginBottom: "1.5rem" }}>
        <Link
          href="/repository"
          style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none", display: "inline-block", marginBottom: "0.75rem" }}
        >
          &larr; All Categories
        </Link>
        <h1 style={{ margin: "0 0 0.25rem 0", fontSize: "28px", fontWeight: 700, color: "#111827" }}>
          <span style={{ color: accent }}>{cat.label}</span>
        </h1>
        <p style={{ margin: 0, fontSize: "15px", color: "#6b7280" }}>
          {filtered.length} offer{filtered.length !== 1 ? "s" : ""} available
        </p>
      </header>

      {/* Cards grid */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {filtered.map((offer) => {
          const brandedLink = `cantina virtual / ${offer.slug}`;
          return (
            <div
              key={offer.slug}
              style={{
                width: "300px",
                height: "250px",
                overflow: "hidden",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                borderTop: `4px solid ${accent}`,
                display: "flex",
                flexDirection: "column",
                fontFamily: "system-ui, -apple-system, sans-serif",
                background: "rgba(255, 255, 255, 0.95)",
                boxSizing: "border-box",
              }}
            >
              {/* Image area */}
              {offer.imageUrl ? (
                <div style={{ width: "100%", height: "90px", background: "#f0f0f0", flexShrink: 0, overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={offer.imageUrl} alt={offer.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              ) : (
                <div style={{ width: "100%", height: "90px", background: "#f0f0f0", flexShrink: 0 }} />
              )}

              {/* Card body */}
              <div style={{ padding: "10px 12px", flex: 1, display: "flex", flexDirection: "column", minHeight: 0, overflow: "hidden" }}>
                <h2 style={{ margin: "0 0 4px 0", fontSize: "15px", fontWeight: 600, color: "#111827", lineHeight: "1.2" }}>
                  {offer.title}
                </h2>
                <p style={{
                  margin: "0 0 6px 0", fontSize: "13px", color: "#6b7280", lineHeight: "1.4",
                  display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", flexShrink: 0,
                }}>
                  {offer.description}
                </p>

                {offer.countries.length > 0 && (
                  <details style={{ margin: 0, fontSize: "11px", color: "#6b7280", overflow: "hidden" }}>
                    <summary style={{ cursor: "pointer", padding: "2px 0", outline: "none", fontSize: "11px", color: "#9ca3af" }}>
                      View Available Countries ({offer.countries.length})
                    </summary>
                    <ul style={{ margin: 0, paddingLeft: "14px", maxHeight: "60px", overflowY: "auto", fontSize: "11px", lineHeight: "1.5" }}>
                      {offer.countries.map((c) => <li key={c}>{c}</li>)}
                    </ul>
                  </details>
                )}

                <Link
                  href={`/go/${offer.slug}`}
                  style={{ fontSize: "12px", color: "#2563eb", textDecoration: "none", fontWeight: 500, marginTop: "auto", display: "inline-block" }}
                >
                  {brandedLink}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <footer style={{ marginTop: "2rem" }}>
        <Link href="/repository" style={{ fontSize: "14px", color: "#9ca3af", textDecoration: "none" }}>
          &larr; Back to all categories
        </Link>
      </footer>
    </main>
  );
}