'use client';

import { useRouter } from 'next/navigation';
import { useI18n, GOLD, getCatLabel } from '@/lib/i18n';
import LegalFooter from './LegalFooter';
import LanguageToggle from './LanguageToggle';
import { categories } from '@/data/categories';

export default function AgeGateContent() {
  const router = useRouter();
  const { t, locale } = useI18n();

  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: "url('/hero-bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#0f0f1a',
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      display: 'flex',
      flexDirection: 'column',
      color: '#e5e5e5',
      position: 'relative',
    }}>
      <div style={{ position: 'relative', zIndex: 2 }}><LanguageToggle /></div>

      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'linear-gradient(145deg, rgba(15,15,26,0.70) 0%, rgba(26,16,40,0.65) 40%, rgba(15,15,26,0.72) 100%)',
      }} />
      <div style={{
        position: 'fixed', width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(218,177,42,0.08) 0%, transparent 70%)',
        top: '-100px', right: '-100px', pointerEvents: 'none', zIndex: 1,
      }} />
      <div style={{
        position: 'fixed', width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(218,177,42,0.06) 0%, transparent 70%)',
        bottom: '-80px', left: '-80px', pointerEvents: 'none', zIndex: 1,
      }} />

      <div style={{
        flex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '80px 24px 40px',
        position: 'relative', zIndex: 2,
      }}>
        <div style={{
          width: '88px', height: '88px', borderRadius: '50%',
          border: `2px solid ${GOLD}40`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 32px', background: 'rgba(218,177,42,0.05)',
        }}>
          <span style={{ fontSize: '36px', fontWeight: 800, color: GOLD, lineHeight: 1, letterSpacing: '-1px' }}>18+</span>
        </div>

        <h1 style={{
          margin: '0 0 16px', fontSize: '42px', fontWeight: 800, color: GOLD,
          letterSpacing: '8px', textAlign: 'center',
        }}>CANTINA VIRTUAL</h1>

        <p style={{
          margin: '0 0 24px', fontSize: '15px', color: 'rgba(255,255,255,0.5)',
          textAlign: 'center', maxWidth: '500px', lineHeight: 1.6, letterSpacing: '0.5px',
        }}>{t('age.subtitle')}</p>

        <p style={{
          margin: '0 0 20px', fontSize: '14px', color: 'rgba(255,255,255,0.4)', textAlign: 'center',
        }}>
          {t('age.contact_prefix')}{' '}
          <a href="mailto:sinaloainspireddreams@gmail.com" style={{ color: GOLD, textDecoration: 'none' }}>sinaloainspireddreams@gmail.com</a>
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px', maxWidth: '640px', width: '100%', margin: '0 0 32px',
        }}>
          {categories.filter(c => c.slug !== 'unique-offers').map((cat) => (
            <div key={cat.slug} style={{
              textAlign: 'center', padding: '10px 8px',
              borderRadius: '10px', border: `1px solid ${cat.color}40`,
              background: `${cat.color}10`,
            }}>
              <span style={{
                fontSize: '12px', fontWeight: 700, color: cat.color,
                letterSpacing: '0.5px', textTransform: 'uppercase',
              }}>{getCatLabel(cat.slug, locale)}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => router.push('/repository')}
          style={{
            padding: '16px 64px', borderRadius: '10px', border: `2px solid ${GOLD}`,
            background: 'transparent', color: GOLD, fontSize: '20px', fontWeight: 700,
            cursor: 'pointer', letterSpacing: '4px', marginBottom: '16px',
            transition: 'background 0.2s, color 0.2s, transform 0.15s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = GOLD; el.style.color = '#0c0c14';
            el.style.boxShadow = `0 8px 32px ${GOLD}40`; el.style.transform = 'scale(1.03)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = 'transparent'; el.style.color = GOLD;
            el.style.boxShadow = 'none'; el.style.transform = 'scale(1)';
          }}
        >{t('age.enter')}</button>

        <button
          onClick={() => { window.location.href = 'https://www.google.com'; }}
          style={{
            padding: '10px 32px', borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.15)', background: 'transparent',
            color: 'rgba(255,255,255,0.4)', fontSize: '14px', fontWeight: 500,
            cursor: 'pointer', letterSpacing: '2px', transition: 'border-color 0.15s, color 0.15s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
            e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
            e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
          }}
        >{t('age.exit')}</button>
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}><LegalFooter /></div>
    </div>
  );
}