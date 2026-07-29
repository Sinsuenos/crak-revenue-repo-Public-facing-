'use client';

import { useI18n } from '@/lib/i18n';
import { GOLD } from '@/lib/i18n';

export default function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  const toggle = () => setLocale(locale === 'en' ? 'es' : 'en');

  return (
    <button
      onClick={toggle}
      style={{
        position: 'fixed',
        top: '16px',
        right: '16px',
        zIndex: 100,
        padding: '8px 20px',
        borderRadius: '8px',
        border: `1.5px solid ${GOLD}`,
        background: 'rgba(12,12,20,0.7)',
        color: GOLD,
        fontSize: '14px',
        fontWeight: 700,
        cursor: 'pointer',
        letterSpacing: '1px',
        transition: 'background 0.15s, color 0.15s',
        backdropFilter: 'blur(8px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = GOLD;
        e.currentTarget.style.color = '#0c0c14';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(12,12,20,0.7)';
        e.currentTarget.style.color = GOLD;
      }}
    >
      {locale === 'en' ? 'Español' : 'English'}
    </button>
  );
}
