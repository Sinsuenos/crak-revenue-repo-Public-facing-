'use client';

import Link from 'next/link';
import { useI18n, GOLD } from '@/lib/i18n';
import LanguageToggle from '../../components/LanguageToggle';
import LegalFooter from '../../components/LegalFooter';

const text = {
  en: `Cantina Virtuale respects the intellectual property rights of others and expects its users to do the same.
If you believe that content available on or through Cantina Virtuale infringes one or more of your copyrights, please notify us by providing the following information:
1. A description of the copyrighted work you claim has been infringed.
2. A description of where the allegedly infringing material is located on the site, sufficient for us to locate it.
3. Your contact information, including name, email address, and physical address.
4. A statement that you have a good-faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law.
5. A statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on behalf of the owner.
6. A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.
Identity verification may be required to process your request.
All copyright and image removal requests should be directed to: sinaloainspireddreams@gmail.com
We will make our best effort to respond within 72 hours of receiving a complete and valid notice.`,
  es: `Cantina Virtuale respeta los derechos de propiedad intelectual de terceros y espera que sus usuarios hagan lo mismo.
Si usted cree que el contenido disponible en o a través de Cantina Virtuale infringe uno o más de sus derechos de autor, por favor notifíquenos proporcionando la siguiente información:
1. Una descripción de la obra con derechos de autor que usted afirma ha sido infringida.
2. Una descripción de dónde se encuentra el material presuntamente infractor en el sitio, suficiente para que podamos localizarlo.
3. Su información de contacto, incluyendo nombre, correo electrónico y dirección física.
4. Una declaración de que usted tiene la creencia de buena fe de que el uso del material no está autorizado por el propietario de los derechos de autor, su agente, o la ley.
5. Una declaración, bajo pena de perjurio, de que la información en su aviso es precisa y que usted es el propietario de los derechos de autor o está autorizado para actuar en nombre del propietario.
6. Una firma física o electrónica del propietario de los derechos de autor o de una persona autorizada para actuar en su nombre.
Puede ser necesaria la verificación de identidad para procesar su solicitud.
Todas las solicitudes de eliminación de derechos de autor e imágenes deben dirigirse a: sinaloainspireddreams@gmail.com
Haremos nuestro mejor esfuerzo por responder dentro de las 72 horas posteriores a la recepción de un aviso completo y válido.`,
};

export default function DmcaPage() {
  const { locale, t } = useI18n();
  const body = text[locale] || text.en;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0c0c14' }}>
      <LanguageToggle />
      <main style={{ flex: 1, maxWidth: '720px', margin: '0 auto', width: '100%', padding: '60px 24px 64px' }}>
        <Link href="/repository" style={{ fontSize: '13px', color: GOLD, textDecoration: 'none', display: 'inline-block', marginBottom: '32px' }}>{t('nav.back')}</Link>
        <h1 style={{ margin: '0 0 32px', fontSize: '28px', fontWeight: 800, color: GOLD, letterSpacing: '1px' }}>{t('dmca.title')}</h1>
        <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
          {body.split('\n\n').map((para, idx) => (
            <div key={idx} style={{ marginBottom: '16px' }}>
              {para.split('\n').map((line, li) => (
                <p key={li} style={{ margin: '0 0 6px' }}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </main>
      <LegalFooter />
    </div>
  );
}