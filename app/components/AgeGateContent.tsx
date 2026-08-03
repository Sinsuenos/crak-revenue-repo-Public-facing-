'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useI18n, GOLD } from '@/lib/i18n';
import LanguageToggle from './LanguageToggle';

export default function AgeGateContent() {
  const router = useRouter();
  const { t } = useI18n();

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
      <LanguageToggle />

      <div style={{
        position: 'fixed', top: '16px', left: '16px', zIndex: 10,
        width: '42px', height: '42px', borderRadius: '50%',
        border: `1.5px solid ${GOLD}50`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)',
      }}>
        <span style={{ fontSize: '14px', fontWeight: 800, color: GOLD, lineHeight: 1, letterSpacing: '-0.5px' }}>18+</span>
      </div>

      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'linear-gradient(145deg, rgba(10,10,20,0.75) 0%, rgba(15,15,26,0.70) 40%, rgba(10,10,20,0.78) 100%)',
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
        <h1 style={{
          margin: '0 0 16px', fontSize: '32px', fontWeight: 800, color: GOLD,
          letterSpacing: '4px', textAlign: 'center', whiteSpace: 'nowrap',
        }}>CANTINA CASITA TOTAL OFFERS</h1>

        <p style={{
          margin: '0 0 20px', fontSize: '18px', color: 'rgba(255,255,255,0.8)', textAlign: 'center',
        }}>
          {t('age.contact_prefix')}{' '}
          <a href="mailto:sinaloainspireddreams@gmail.com" style={{ color: GOLD, textDecoration: 'none' }}>sinaloainspireddreams@gmail.com</a>
        </p>

        <div style={{
          margin: '0 0 32px', textAlign: 'center',
          fontSize: '18px', color: 'rgba(255,255,255,0.8)',
          lineHeight: '2', letterSpacing: '0.3px', maxWidth: '640px',
        }}>
          {t('age.row1')}
          <br />
          {t('age.row2')}
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

      <footer style={{
        background: 'transparent',
        borderTop: '1px solid rgba(218,177,42,0.2)',
        padding: '20px 24px',
        textAlign: 'center',
        position: 'relative', zIndex: 2,
      }}>
        <div style={{ marginBottom: '12px' }}>
          <a
            href="https://myerolink.com/sinaloainspireddreams"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '22px',
              fontWeight: 800,
              color: GOLD,
              textDecoration: 'none',
              letterSpacing: '3px',
            }}
          >
            MYEROLINK
          </a>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          fontSize: '13px',
          color: 'rgba(255,255,255,0.75)',
          flexWrap: 'wrap',
        }}>
          <span style={{ color: GOLD, fontWeight: 700 }}>{t('footer.adults')}</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <Link href="/legal/dmca" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>{t('footer.dmca')}</Link>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <Link href="/legal/privacy" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>{t('footer.privacy')}</Link>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <Link href="/legal/terms" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>{t('footer.terms')}</Link>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <Link href="/legal/contact" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>{t('footer.contact')}</Link>
        </div>
      </footer>
    </div>
  );
}