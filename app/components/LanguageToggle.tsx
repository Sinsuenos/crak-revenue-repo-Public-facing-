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
        padding: '6px 14px',
        borderRadius: '6px',
        border: `1.5px solid ${GOLD}`,
        background: 'transparent',
        color: GOLD,
        fontSize: '13px',
        fontWeight: 600,
        cursor: 'pointer',
        letterSpacing: '1px',
        transition: 'background 0.15s, color 0.15s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = GOLD;
        e.currentTarget.style.color = '#0c0c14';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = GOLD;
      }}
    >
      {locale === 'en' ? 'ES' : 'EN'}
    </button>
  );
}
