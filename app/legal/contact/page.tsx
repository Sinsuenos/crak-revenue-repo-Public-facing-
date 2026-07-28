'use client';

import Link from 'next/link';
import { useI18n, GOLD } from '@/lib/i18n';
import LanguageToggle from '../../components/LanguageToggle';
import LegalFooter from '../../components/LegalFooter';

const text = {
  en: `Welcome to Cantina Virtuale.
We are happy to hear from you. Whether you have questions, need support, want to discuss a business inquiry, or are a creator interested in collaboration, we welcome your message.
Reach us at: sinaloainspireddreams@gmail.com
We do our best to respond within 72 hours.`,
  es: `Bienvenido a Cantina Virtuale.
Estamos felices de saber de usted. Ya sea que tenga preguntas, necesite soporte, quiera discutir una consulta comercial o sea un creador interesado en colaborar, recibimos su mensaje con gusto.
Contáctenos en: sinaloainspireddreams@gmail.com
Hacemos nuestro mejor esfuerzo por responder dentro de las 72 horas.`,
};

export default function ContactPage() {
  const { locale, t } = useI18n();
  const body = text[locale] || text.en;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0c0c14' }}>
      <LanguageToggle />
      <main style={{ flex: 1, maxWidth: '720px', margin: '0 auto', width: '100%', padding: '60px 24px 64px' }}>
        <Link href="/repository" style={{ fontSize: '13px', color: GOLD, textDecoration: 'none', display: 'inline-block', marginBottom: '32px' }}>{t('nav.back')}</Link>
        <h1 style={{ margin: '0 0 32px', fontSize: '28px', fontWeight: 800, color: GOLD, letterSpacing: '1px' }}>{t('contact.title')}</h1>
        <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
          {body.split('\n\n').map((p, i) => (
            <p key={i} style={{ margin: '0 0 16px' }}>{p}</p>
          ))}
        </div>
      </main>
      <LegalFooter />
    </div>
  );
}
