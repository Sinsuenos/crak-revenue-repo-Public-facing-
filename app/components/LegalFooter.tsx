'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { GOLD } from '@/lib/i18n';

export default function LegalFooter() {
  const { t } = useI18n();

  return (
    <footer style={{
      background: 'rgba(0,0,0,0.5)',
      borderTop: '1px solid rgba(218,177,42,0.2)',
      padding: '20px 24px',
      textAlign: 'center',
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
  );
}
