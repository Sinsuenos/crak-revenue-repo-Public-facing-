'use client';

import Link from 'next/link';
import { useI18n, GOLD } from '@/lib/i18n';
import LanguageToggle from '../../components/LanguageToggle';
import LegalFooter from '../../components/LegalFooter';

const text = {
  en: `By accessing and using Cantina Virtuale, you confirm that you are at least 18 years of age.
Cantina Virtuale is an entertainment platform. All content is provided for informational and entertainment purposes only.
Third-party offers and brands featured on this site remain the property of their respective owners. Cantina Virtuale does not claim ownership of any third-party trademarks, logos, or content.
Users are solely responsible for ensuring that their use of this site and any third-party services accessed through it complies with all applicable local, state, national, and international laws.
External websites linked from Cantina Virtuale operate under their own terms and policies. Cantina Virtuale is not responsible for the content, terms, or practices of any linked external site.
If you have any questions about these Terms, please contact us: sinaloainspireddreams@gmail.com`,
  es: `Al acceder y utilizar Cantina Virtuale, usted confirma que tiene al menos 18 años de edad.
Cantina Virtuale es una plataforma de entretenimiento. Todo el contenido se proporciona solo con fines informativos y de entretenimiento.
Las ofertas y marcas de terceros que aparecen en este sitio siguen siendo propiedad de sus respectivos propietarios. Cantina Virtuale no reclama la propiedad de ninguna marca comercial, logotipo o contenido de terceros.
Los usuarios son los únicos responsables de asegurarse de que su uso de este sitio y cualquier servicio de terceros al que se acceda a través de él cumpla con todas las leyes locales, estatales, nacionales e internacionales aplicables.
Los sitios web externos vinculados desde Cantina Virtuale operan bajo sus propios términos y políticas. Cantina Virtuale no es responsable del contenido, los términos o las prácticas de ningún sitio externo vinculado.
Si tiene alguna pregunta sobre estos Términos, contáctenos: sinaloainspireddreams@gmail.com`,
};

export default function TermsPage() {
  const { locale, t } = useI18n();
  const body = text[locale] || text.en;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0c0c14' }}>
      <LanguageToggle />
      <main style={{ flex: 1, maxWidth: '720px', margin: '0 auto', width: '100%', padding: '60px 24px 64px' }}>
        <Link href="/repository" style={{ fontSize: '13px', color: GOLD, textDecoration: 'none', display: 'inline-block', marginBottom: '32px' }}>{t('nav.back')}</Link>
        <h1 style={{ margin: '0 0 32px', fontSize: '28px', fontWeight: 800, color: GOLD, letterSpacing: '1px' }}>{t('terms.title')}</h1>
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