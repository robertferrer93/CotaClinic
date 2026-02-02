import React from 'react';
import { Article } from '../components/ui.jsx';

function Anchor({ href, children }) {
  return (
    <a
      href={href}
      className="text-cota-navy hover:underline underline-offset-4"
    >
      {children}
    </a>
  );
}

function H2({ id, children }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 text-xl font-semibold text-cota-ink mt-10"
    >
      {children}
    </h2>
  );
}

function P({ children }) {
  return (
    <p className="mt-3 text-[15px] leading-7 text-cota-slate">{children}</p>
  );
}

function Ul({ children }) {
  return (
    <ul className="mt-3 list-disc pl-5 space-y-2 text-[15px] leading-7 text-cota-slate">
      {children}
    </ul>
  );
}

export default function LegalPage() {
  return (
    <Article
      title="Aviso legal, privacidad y cookies"
      subtitle={
        <>
          Información legal del sitio web. Nombre comercial del sitio:{' '}
          <b>CotaSport Clinic</b>.
        </>
      }
    >
      <div className="mt-8 space-y-10">
        {/* Índice (una columna) */}
        <div className="rounded-2xl border border-cota-line bg-white/70 p-5">
          <div className="text-sm font-semibold text-cota-ink">Contenido</div>
          <nav className="mt-3 space-y-2 text-sm">
            <div>
              <Anchor href="#aviso-legal">Aviso legal</Anchor>
            </div>
            <div>
              <Anchor href="#privacidad">Política de privacidad</Anchor>
            </div>
            <div>
              <Anchor href="#cookies">Política de cookies</Anchor>
            </div>
          </nav>
        </div>

        {/* Contenido */}
        <section className="rounded-2xl border border-cota-line bg-white p-6 sm:p-8">
          {/* ================= AVISO LEGAL ================= */}
          <H2 id="aviso-legal">Aviso legal</H2>

          <P>
            En cumplimiento con el deber de información establecido en la Ley
            34/2002, de Servicios de la Sociedad de la Información y del
            Comercio Electrónico (LSSI-CE), se informa que el presente sitio
            web, bajo el nombre comercial <b>CotaSport Clinic</b>, es
            titularidad de la sociedad:
          </P>

          <Ul>
            <li>
              <b>Titular:</b> CIRUGÍA ORTOPÉDICA Y TRAUMATOLOGÍA AVANZADA,
              S.L.P.
            </li>
            <li>
              <b>NIF:</b> B58795188
            </li>
            <li>
              <b>Domicilio social:</b> Calle Mare de Déu de la Salut, 78, 4ª
              planta, puerta B, 08024 – Barcelona (España)
            </li>
            <li>
              <b>Registro:</b> Inscrita en el Registro de Sociedades
              Profesionales del COMB con el número <b>778</b>
            </li>
            <li>
              <b>Consulta registrada:</b> Departamento de Salud, número de
              solicitud de registro <b>91146</b>
            </li>
          </Ul>

          <H2 id="objeto">Objeto del sitio web</H2>
          <P>
            El presente sitio web tiene carácter meramente informativo y está
            destinado a ofrecer información general sobre la actividad médica y
            asistencial desarrollada en el ámbito de la cirugía ortopédica y
            traumatología, así como facilitar el contacto con el equipo
            profesional.
          </P>
          <P>
            La información contenida en esta web no sustituye en ningún caso la
            consulta médica presencial ni el diagnóstico profesional
            individualizado.
          </P>

          <H2 id="condiciones">Condiciones de uso</H2>
          <P>
            El acceso y uso de este sitio web atribuye la condición de usuario e
            implica la aceptación de las presentes condiciones. El usuario se
            compromete a hacer un uso adecuado de los contenidos y a no
            emplearlos para fines ilícitos, contrarios a la buena fe o al orden
            público.
          </P>

          <H2 id="responsabilidad">Responsabilidad</H2>
          <P>
            El titular no se hace responsable del uso indebido de la información
            contenida en esta web ni de los daños que pudieran derivarse del
            acceso o uso de la misma.
          </P>
          <P>
            En cualquier momento podemos modificar la presentación y
            configuración de nuestra web, ampliar o reducir servicios e incluso
            suprimirla, todo ello de forma unilateral y sin previo aviso.
          </P>

          <H2 id="propiedad-intelectual">Propiedad intelectual</H2>
          <P>
            Todos los contenidos del sitio web (textos, imágenes, diseño
            gráfico, logotipos, estructura y código fuente) están protegidos por
            la normativa vigente en materia de propiedad intelectual e
            industrial, siendo titularidad del responsable legal o de terceros
            autorizados, quedando prohibida su reproducción total o parcial sin
            autorización expresa.
          </P>

          <H2 id="legislacion">Legislación aplicable</H2>
          <P>
            La relación entre el usuario y el titular del sitio web se regirá
            por la legislación española vigente.
          </P>

          {/* ================= PRIVACIDAD ================= */}
          <H2 id="privacidad">Política de privacidad</H2>
          <P>
            De conformidad con lo dispuesto en el Reglamento (UE) 2016/679
            (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), se informa a los usuarios
            sobre el tratamiento de sus datos personales.
          </P>

          <Ul>
            <li>
              <b>Responsable del tratamiento:</b> CIRUGÍA ORTOPÉDICA Y
              TRAUMATOLOGÍA AVANZADA, S.L.P.
            </li>
            <li>
              <b>NIF:</b> B58795188
            </li>
            <li>
              <b>Domicilio:</b> Calle Mare de Déu de la Salut, 78, 4ª planta,
              puerta B, 08024 Barcelona
            </li>
          </Ul>

          <H2 id="finalidad">Finalidad del tratamiento</H2>
          <P>
            Los datos facilitados a través de los formularios de contacto se
            tratarán con la finalidad de:
          </P>
          <Ul>
            <li>Atender consultas o solicitudes de información.</li>
            <li>Contactar con el usuario en relación con su petición.</li>
          </Ul>

          <H2 id="base-legal">Base legal</H2>
          <P>
            La base legal para el tratamiento de los datos es el consentimiento
            del usuario, otorgado al enviar el formulario correspondiente.
          </P>

          <H2 id="conservacion">Conservación de los datos</H2>
          <P>
            Los datos se conservarán durante el tiempo necesario para atender la
            solicitud y mientras puedan derivarse responsabilidades legales.
          </P>

          <H2 id="destinatarios">Destinatarios</H2>
          <P>
            No se cederán datos personales a terceros, salvo obligación legal.
          </P>

          <H2 id="derechos">Derechos del usuario</H2>
          <P>
            El usuario puede ejercer los derechos de acceso, rectificación,
            supresión, limitación, oposición y portabilidad mediante solicitud
            escrita dirigida al responsable del tratamiento, acompañando copia
            de un documento identificativo.
          </P>

          <H2 id="seguridad">Medidas de seguridad</H2>
          <P>
            El responsable del tratamiento adopta las medidas técnicas y
            organizativas necesarias para garantizar la seguridad, integridad y
            confidencialidad de los datos personales.
          </P>

          {/* ================= COOKIES ================= */}
          <H2 id="cookies">Política de cookies</H2>
          <P>
            Este sitio web utiliza cookies propias y de terceros para garantizar
            el correcto funcionamiento del sitio y analizar la actividad de los
            usuarios.
          </P>

          <H2 id="que-son-cookies">¿Qué son las cookies?</H2>
          <P>
            Las cookies son pequeños archivos de texto que se almacenan en el
            dispositivo del usuario al acceder a determinadas páginas web.
          </P>

          <H2 id="tipos-cookies">Tipos de cookies utilizadas</H2>
          <Ul>
            <li>
              <b>Cookies técnicas:</b> necesarias para el funcionamiento del
              sitio web.
            </li>
            <li>
              <b>Cookies de análisis:</b> permiten analizar el comportamiento de
              los usuarios de forma anónima y agregada.
            </li>
          </Ul>

          <H2 id="gestion-cookies">Gestión de cookies</H2>
          <P>
            El usuario puede aceptar, rechazar o configurar el uso de cookies a
            través del banner de cookies o mediante la configuración de su
            navegador. La desactivación de cookies puede afectar al correcto
            funcionamiento de algunas secciones del sitio web.
          </P>

          <div className="mt-10 pt-6 border-t border-cota-line text-sm text-cota-muted">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </div>
        </section>
      </div>
    </Article>
  );
}
