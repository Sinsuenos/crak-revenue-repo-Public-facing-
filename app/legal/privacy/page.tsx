'use client';

import Link from 'next/link';
import { useI18n, GOLD } from '@/lib/i18n';
import LanguageToggle from '../../components/LanguageToggle';
import LegalFooter from '../../components/LegalFooter';

const text = {
  en: `Cantina Virtuale ('we', 'us', 'our') operates this website. This page informs you of our policies regarding the collection, use, and disclosure of personal information when using our Service.
We do not sell personal information.
Cookies may be used to improve your browsing experience and to analyze site traffic.
Third-party affiliate partners may collect analytics and conversion data through links and tracking technologies present on this site. These partners operate under their own privacy policies, which we encourage you to review.
External advertisers featured on this site operate independently and under their own privacy policies. Cantina Virtuale does not control and is not responsible for the privacy practices of third-party websites.
Cantina Virtuale may receive compensation from qualifying affiliate referrals.
By using Cantina Virtuale, you acknowledge and consent to the practices described in this policy.
If you have any questions about this Privacy Policy, please contact us: sinaloainspireddreams@gmail.com`,
  es: `Cantina Virtuale ('nosotros', 'nuestro') opera este sitio web. Esta página le informa sobre nuestras políticas con respecto a la recopilación, uso y divulgación de información personal al utilizar nuestro Servicio.
No vendemos información personal.
Pueden utilizarse cookies para mejorar su experiencia de navegación y para analizar el tráfico del sitio.
Los socios afiliados de terceros pueden recopilar datos de análisis y conversión a través de enlaces y tecnologías de rastreo presentes en este sitio. Estos socios operan bajo sus propias políticas de privacidad, las cuales le recomendamos revisar.
Los anunciantes externos que aparecen en este sitio operan de manera independiente y bajo sus propias políticas de privacidad. Cantina Virtuale no controla y no es responsable de las prácticas de privacidad de sitios web de terceros.
Cantina Virtuale puede recibir compensación por referencias de afiliados calificadas.
Al utilizar Cantina Virtuale, usted reconoce y acepta las prácticas descritas en esta política.
Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos: sinaloainspireddreams@gmail.com`,
};

export default function PrivacyPage() {
  const { locale, t } = useI18n();
  const body = text[locale] || text.en;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0c0c14' }}>
      <LanguageToggle />
      <main style={{ flex: 1, maxWidth: '720px', margin: '0 auto', width: '100%', padding: '60px 24px 64px' }}>
        <Link href="/repository" style={{ fontSize: '13px', color: GOLD, textDecoration: 'none', display: 'inline-block', marginBottom: '32px' }}>{t('nav.back')}</Link>
        <h1 style={{ margin: '0 0 32px', fontSize: '28px', fontWeight: 800, color: GOLD, letterSpacing: '1px' }}>{t('privacy.title')}</h1>
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