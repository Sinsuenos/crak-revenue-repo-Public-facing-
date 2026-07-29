'use client';

import Link from 'next/link';
import { offers } from '@/data/offers';
import { categories, getCategoryColor } from '@/data/categories';
import { useI18n, GOLD, getCatLabel, type Locale } from '@/lib/i18n';
import LegalFooter from '../../components/LegalFooter';
import LanguageToggle from '../../components/LanguageToggle';

function OfferCard({ offer, color, locale }: { offer: (typeof offers)[number]; color: string; locale: Locale }) {
  const caption = locale === 'es' ? offer.captionEs : offer.caption;
  return (
    <Link href={`/go/${offer.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div style={{
        width: '280px', borderRadius: '14px', overflow: 'hidden',
        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
        transition: 'transform 0.2s cubic-bezier(.4,0,.2,1), border-color 0.2s, box-shadow 0.2s', cursor: 'pointer',
      }}
        onMouseEnter={(e) => { const el = e.currentTarget; el.style.transform = 'translateY(-4px)'; el.style.borderColor = color + '50'; el.style.boxShadow = `0 8px 32px ${color}25`; }}
        onMouseLeave={(e) => { const el = e.currentTarget; el.style.transform = 'translateY(0)'; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.boxShadow = 'none'; }}
      >
        {offer.imageUrl && (
          <div style={{ width: '100%', height: '152px', overflow: 'hidden', position: 'relative' }}>
            <img src={offer.imageUrl} alt={offer.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50px', background: 'linear-gradient(transparent, rgba(12,12,20,0.85))', pointerEvents: 'none' }} />
          </div>
        )}
        <div style={{ height: '3px', background: `linear-gradient(90deg, ${color}, ${color}80)` }} />
        <div style={{ padding: '10px 14px 12px' }}>
          <h2 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 700, color: '#f0f0f0', lineHeight: '1.3', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{offer.title}</h2>
          <p style={{ margin: 0, fontSize: '12px', color, lineHeight: '1.3', fontWeight: 500, letterSpacing: '0.2px' }}>{caption}</p>
        </div>
      </div>
    </Link>
  );
}

export default function CategoryContent({ categorySlug }: { categorySlug: string }) {
  const { locale, t } = useI18n();
  const cat = categories.find((c) => c.slug === categorySlug);
  if (!cat) return <div>Not found</div>;
  const filtered = offers.filter((o) => o.category === cat.label);
  const count = filtered.length;
  const availableText = locale === 'es'
    ? `${count} oferta${count !== 1 ? 's' : ''} disponible${count !== 1 ? 's' : ''}`
    : `${count} offer${count !== 1 ? 's' : ''} available`;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <LanguageToggle />
      <main style={{ flex: 1, padding: '32px 24px 64px', maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <header style={{ marginBottom: '28px' }}>
          <Link href="/repository" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', display: 'inline-block', marginBottom: '12px' }}>
            {t('repo.back_categories')}
          </Link>
          <h1 style={{ margin: '0 0 6px', fontSize: '26px', fontWeight: 800, color: cat.color, letterSpacing: '-0.5px' }}>{getCatLabel(cat.slug, locale)}</h1>
          <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>{availableText}</p>
        </header>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {filtered.map((o) => <OfferCard key={o.slug} offer={o} color={cat.color} locale={locale} />)}
        </div>
      </main>
      <LegalFooter />
    </div>
  );
}