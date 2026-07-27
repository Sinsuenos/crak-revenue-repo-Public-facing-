import Link from "next/link";
import { notFound } from "next/navigation";
import { offers } from "@/data/offers";
import { categories, getCategoryColor } from "@/data/categories";

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) return { title: "Not Found" };
  return { title: `${cat.label} — Cantina Virtual` };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) notFound();

  const filtered = offers.filter((o) => o.category === cat.label);
  const c = cat.color;

  return (
    <main style={{
      padding: '32px 24px 64px',
      maxWidth: '1100px', margin: '0 auto', minHeight: '100vh',
    }}>
      <header style={{ marginBottom: '28px' }}>
        <Link
          href="/repository"
          style={{
            fontSize: '13px', color: 'rgba(255,255,255,0.35)',
            textDecoration: 'none', display: 'inline-block', marginBottom: '12px',
          }}
        >
          &larr; All Categories
        </Link>
        <h1 style={{
          margin: '0 0 6px', fontSize: '26px', fontWeight: 800,
          color: c, letterSpacing: '-0.5px',
        }}>
          {cat.label}
        </h1>
        <p style={{
          margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.4)',
        }}>
          {filtered.length} offer{filtered.length !== 1 ? 's' : ''} available
        </p>
      </header>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {filtered.map((offer) => (
          <Link key={offer.slug} href={`/go/${offer.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
            <div
              style={{
                width: '280px', borderRadius: '14px', overflow: 'hidden',
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
                    background: 'linear-gradient(transparent, rgba(12,12,20,0.85))',
                    pointerEvents: 'none',
                  }} />
                </div>
              )}

              <div style={{ height: '3px', background: `linear-gradient(90deg, ${c}, ${c}80)` }} />

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
        ))}
      </div>

      <footer style={{ marginTop: '40px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <Link href="/repository" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>
          &larr; Back to all categories
        </Link>
      </footer>
    </main>
  );
}