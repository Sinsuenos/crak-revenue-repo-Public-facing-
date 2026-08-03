'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

export type Locale = 'en' | 'es';

interface I18nContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  locale: 'en',
  setLocale: () => {},
  t: (key) => key,
});

const STORAGE_KEY = 'cv_locale';

export const GOLD = '#DAB12A';

const ui: Record<Locale, Record<string, string>> = {
  en: {
    'age.row1': 'Dating \u2022 Live Cams \u2022 AI Companions \u2022 Fansites',
    'age.row2': 'Paysites \u2022 Gay \u2022 Games \u2022 Transgender',
    'age.contact_prefix': 'Looking for something specific? Contact us.',
    'age.enter': 'ENTER',
    'age.exit': 'EXIT',
    'cat.all': 'All',
    'repo.title': 'Offer Repository',
    'repo.subtitle': 'Browse {count} offers across {catCount} categories',
    'repo.back_categories': '\u2190 All Categories',
    'repo.back_all': '\u2190 Back to all categories',
    'footer.adults': '18+ ADULTS ONLY',
    'footer.dmca': 'DMCA',
    'footer.privacy': 'PRIVACY',
    'footer.terms': 'TERMS',
    'footer.contact': 'CONTACT',
    'nav.back': '\u2190 CANTINA VIRTUAL',
    'dmca.title': 'DMCA Takedown Policy',
    'privacy.title': 'Privacy Policy',
    'terms.title': 'Terms of Service',
    'contact.title': 'Contact',
  },
  es: {
    'age.row1': 'Citas \u2022 C\u00e1maras en Vivo \u2022 Compa\u00f1eros IA \u2022 Sitios de Fans',
    'age.row2': 'Sitios Premium \u2022 Gay \u2022 Juegos \u2022 Transg\u00e9nero',
    'age.contact_prefix': 'Buscas algo espec\u00edfico? Cont\u00e1ctanos.',
    'age.enter': 'ENTRAR',
    'age.exit': 'SALIR',
    'cat.all': 'Todos',
    'repo.title': 'Directorio de Ofertas',
    'repo.subtitle': 'Explora {count} ofertas en {catCount} categor\u00edas',
    'repo.back_categories': '\u2190 Todas las Categor\u00edas',
    'repo.back_all': '\u2190 Volver a todas las categor\u00edas',
    'footer.adults': '18+ SOLO ADULTOS',
    'footer.dmca': 'DMCA',
    'footer.privacy': 'PRIVACIDAD',
    'footer.terms': 'T\u00c9RMINOS',
    'footer.contact': 'CONTACTO',
    'nav.back': '\u2190 CANTINA VIRTUAL',
    'dmca.title': 'Pol\u00edtica de Retiro DMCA',
    'privacy.title': 'Pol\u00edtica de Privacidad',
    'terms.title': 'T\u00e9rminos de Servicio',
    'contact.title': 'Contacto',
  },
};

const catLabels: Record<Locale, Record<string, string>> = {
  en: {
    'ai-companions': 'AI Companions',
    'dating': 'Dating',
    'live-cams': 'Live Cams',
    'fan-sites': 'Fansites',
    'pay-sites': 'Paysites',
    'gay': 'Gay',
    'games': 'Games',
    'transgender': 'Transgender',
    'unique-offers': 'Unique Offers',
  },
  es: {
    'ai-companions': 'Compa\u00f1eros IA',
    'dating': 'Citas',
    'live-cams': 'C\u00e1maras en Vivo',
    'fan-sites': 'Sitios de Fans',
    'pay-sites': 'Sitios Premium',
    'gay': 'Gay',
    'games': 'Juegos',
    'transgender': 'Transg\u00e9nero',
    'unique-offers': 'Ofertas Especiales',
  },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'es' || saved === 'en') {
        setLocaleState(saved);
      } else {
        // First visit: default to English and persist it
        setLocaleState('en');
        localStorage.setItem(STORAGE_KEY, 'en');
      }
    } catch {
      setLocaleState('en');
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
  }, []);

  const t = useCallback((key: string): string => {
    return ui[locale]?.[key] || ui.en[key] || key;
  }, [locale]);

  if (!mounted) return <div style={{ visibility: 'hidden' }}>{children}</div>;

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

export function getCatLabel(slug: string, locale: Locale): string {
  return catLabels[locale]?.[slug] || catLabels.en[slug] || slug;
}
