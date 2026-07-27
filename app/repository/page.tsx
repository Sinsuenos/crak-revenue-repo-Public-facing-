import Link from "next/link";
import { offers } from "@/data/offers";
import { categories, getCategoryColor } from "@/data/categories";

export const metadata = {
  title: "Offer Repository — Cantina Virtual",
  description: "Browse all available offers by category.",
};

/* ── card ────────────────────────────────────────────────────── */
function OfferCard({ offer }: { offer: (typeof offers)[number] }) {
  const c = getCategoryColor(offer.category);

  return (
    <Link href={`/go/${offer.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div style={{
        width: '280px',
        borderRadius: '14px',
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
        transition: 'transform 0.2s cubic-bezier(.4,0,.2,1), border-color 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
      }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.transform = 'translateY(-4px)';
          el.style.borderColor = c + '50';
          el.style.boxShadow = `0 8px 32px ${c}25`;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.transform = 'translateY(0)';
          el.style.borderColor = 'rgba(255,255,255,0.07)';
          el.style.boxShadow = 'none';
        }}
      >
        {/* Banner image */
        {offer.imageUrl && (
          <div style={{
            width: '100%', height: '152px', overflow: 'hidden', position: 'relative',
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={offer.imageUrl}
              alt={offer.title}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '50px',
              background: `linear-gradient(transparent, rgba(12,12,20,0.85))`,
              pointerEvents: 'none',
            }} />
          </div>
        )}

        {/* Color accent bar */
        <div style={{ height: '3px', background: `linear-gradient(90deg, ${c}, ${c}80)` }} />

        {/* Info */
        <div style={{ padding: '10px 14px 12px' }}>
          <h2 style={{
            margin: '0 0 4px', fontSize: '14px', fontWeight: 700,
            color: '#f0f0f0', lineHeight: '1.3',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>{offer.title}</h2>
          <p style={{
            margin: 0, fontSize: '12px', color: c,
            lineHeight: '1.3', fontWeight: 500, letterSpacing: '0.2px',
          }}>{offer.caption}</p>
        </div>
      </div>
    </Link>
  );
}

/* ── page ────────────────────────────────────────────────────── */
export default function RepositoryPage() {
  return (
    <main style={{
      padding: '32px 24px 64px',
      maxWidth: '1100px',
      margin: '0 auto',
      minHeight: '100vh',
    }}>
      {/* Header */
      <header style={{ marginBottom: '28px' }}>
        <h1 style={{
          margin: '0 0 6px', fontSize: '26px', fontWeight: 800,
          color: '#ffffff', letterSpacing: '-0.5px',
        }}>
          Offer Repository
        </h1>
        <p style={{
          margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.4)',
        }}>
          Browse {offers.length} offers across {categories.length} categories
        </p>
      </header>

      {/* Category tabs */
      <nav style={{
        display: 'flex', flexWrap: 'wrap', gap: '8px',
        marginBottom: '28px', paddingBottom: '20px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <Link
          href="/repository"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '7px 16px', borderRadius: '20px',
            border: '1.5px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.7)', fontWeight: 600,
            fontSize: '13px', textDecoration: 'none',
            background: 'rgba(255,255,255,0.04)',
            transition: 'all 0.15s',
          }}
        >
          All
          <span style={{
            background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)',
            borderRadius: '10px', padding: '1px 8px', fontSize: '11px', fontWeight: 700,
          }}>{offers.length}</span>
        </Link>
        {categories.map((cat) => {
          const count = offers.filter((o) => o.category === cat.label).length;
          return (
            <Link
              key={cat.slug}
              href={`/repository/${cat.slug}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '7px 16px', borderRadius: '20px',
                border: `1.5px solid ${cat.color}40`,
                color: cat.color, fontWeight: 600,
                fontSize: '13px', textDecoration: 'none',
                background: `${cat.color}08`,
                transition: 'all 0.15s',
              }}
            >
              {cat.label}
              <span style={{
                background: cat.color, color: '#0c0c14',
                borderRadius: '10px', padding: '1px 8px',
                fontSize: '11px', fontWeight: 700,
              }}>{count}</span>
            </Link>
          );
        })}
      </nav>

      {/* Grid */
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '16px',
      }}>
        {offers.map((offer) => (
          <OfferCard key={offer.slug} offer={offer} />
        ))}
      </div>

      <footer style={{ marginTop: '40px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <Link href="/" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>
          &larr; Back to home
        </Link>
      </footer>
    </main>
  );
}