// src/robotica.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';
import { useHead } from './hooks/useHead';

export default function RoboticaPage() {
  // OBJETIVO SEO
  // Keyword principal: prótesis de rodilla robótica Barcelona
  // Keywords secundarias: cirugía robótica rodilla, navegación en prótesis de rodilla,
  // realidad aumentada prótesis de rodilla, alineación cinemática, precisión prótesis rodilla, cirugía compleja prótesis rodilla
  // Localización: Barcelona
  // Tipo de paciente: con artrosis avanzada o prótesis indicada (primaria o revisión) que busca entender si la asistencia tecnológica aporta valor en su caso

  useHead({
    title: 'Prótesis de rodilla robótica en Barcelona | CotaSport Clinic',
    description:
      'Realidad aumentada, robótica y navegación para prótesis de rodilla: cuándo aportan valor, qué mejoran y qué puedes esperar en cirugías primarias y complejas.',
  });

  return (
    <Article>
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          Rodilla
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          Asistencia quirúrgica en prótesis de rodilla: realidad aumentada,
          robótica y navegación
        </h1>

        <p className="mt-4 text-neutral-600">
          La cirugía de prótesis de rodilla ha evolucionado con tecnologías que
          ayudan a <strong>mejorar la precisión</strong> en pasos críticos:
          orientación de cortes, alineación, balance ligamentario y verificación
          de resultados antes de implantar la prótesis. Estas herramientas son
          especialmente útiles en <strong>cirugías complejas</strong>{' '}
          (deformidades, cirugías previas o presencia de material de
          osteosíntesis).
        </p>

        <p className="mt-3 text-neutral-600">
          Es importante remarcar que{' '}
          <strong>
            no todos los pacientes necesitan asistencia tecnológica
          </strong>
          . Su indicación debe individualizarse y utilizarse cuando aporta un
          beneficio real, siempre como apoyo a la experiencia del cirujano.
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          <Link
            to="/contacto"
            className="text-sm font-medium text-cota-navy hover:underline"
          >
            Solicitar valoración →
          </Link>
        </div>
      </header>

      {/* 1) Introducción clara */}
      <section className="mb-10 space-y-3">
        <p className="text-neutral-700">
          Si estás valorando una prótesis de rodilla (primaria o de revisión),
          es normal preguntarse si “robótica” o “navegación” significan un mejor
          resultado. En la práctica, lo más relevante es entender{' '}
          <strong>qué problema resuelve cada herramienta</strong> y si encaja
          con tu anatomía y con la complejidad del caso.
        </p>
        <p className="text-neutral-700">
          Nuestro enfoque es pragmático: usar tecnología cuando aporta precisión
          adicional en decisiones intraoperatorias, y no utilizarla si no cambia
          el resultado esperado.
        </p>
      </section>

      {/* 2) ¿Qué es? */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Qué entendemos por asistencia quirúrgica?
        </h2>

        <p className="text-neutral-700">
          La asistencia quirúrgica engloba sistemas que ayudan a{' '}
          <strong>visualizar</strong>, <strong>medir</strong> y{' '}
          <strong>verificar</strong> parámetros clave durante la cirugía:
          orientación de cortes, resecciones óseas, alineación de la extremidad,
          balance ligamentario y estabilidad.
        </p>

        <div className="rounded-2xl bg-cota-sky p-5">
          <p className="text-neutral-700">
            El objetivo final es conseguir una rodilla <strong>estable</strong>,{' '}
            <strong>alineada</strong> y <strong>funcional</strong>, adaptada a
            la anatomía de cada paciente.
          </p>
        </div>
      </section>

      {/* 3) ¿Cuándo está indicado? */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Cuándo está indicada la asistencia tecnológica?
        </h2>

        <p className="text-neutral-700">
          Suele aportar más valor cuando el caso es complejo o cuando pequeñas
          variaciones pueden afectar a estabilidad, alineación o a la mecánica
          femoropatelar.
        </p>

        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>Deformidades importantes (varo/valgo) o anatomías atípicas.</li>
          <li>Cirugías previas de rodilla o presencia de material.</li>
          <li>Prótesis de revisión o casos con déficits ligamentarios.</li>
          <li>
            Necesidad de verificar con datos objetivos alineación y balance.
          </li>
        </ul>
      </section>

      {/* 4) Opciones de tratamiento (si aplica): aquí son “opciones tecnológicas” */}
      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Opciones de asistencia: realidad aumentada, robótica y navegación
        </h2>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cota-slate">
            Realidad aumentada (RA): precisión visual en tiempo real
          </h3>

          <p className="text-neutral-700">
            La realidad aumentada permite superponer información digital en el
            campo de visión del cirujano, facilitando una orientación precisa
            sin necesidad de grandes sistemas externos.
          </p>

          <div className="rounded-2xl border border-neutral-200 p-5">
            <h4 className="text-base font-semibold text-cota-slate">
              Pixee (realidad aumentada en prótesis de rodilla)
            </h4>

            <p className="mt-2 text-neutral-700">
              Utilizamos la plataforma <strong>Pixee</strong> como herramienta
              de asistencia visual durante la cirugía.
            </p>

            <ul className="mt-3 list-disc pl-5 text-neutral-700 space-y-2">
              <li>
                Permite <strong>visualizar el plano de corte</strong> antes de
                realizarlo.
              </li>
              <li>
                Informa del <strong>ángulo exacto</strong> con el que se ejecuta
                la resección.
              </li>
              <li>Facilita ajustes finos antes de resecar hueso.</li>
              <li>Ayuda a comprobar la orientación del instrumental.</li>
            </ul>

            <p className="mt-4 text-neutral-700">
              Desde el punto de vista del paciente, aporta control y precisión,
              especialmente cuando la mecánica femoropatelar o la estabilidad
              pueden ser sensibles a pequeños cambios.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cota-slate">
            Cirugía robótica: control y precisión en la ejecución
          </h3>

          <p className="text-neutral-700">
            La cirugía robótica ayuda a ejecutar un plan con alta precisión.
            Dependiendo del sistema, puede guiar cortes, limitar zonas de
            trabajo para proteger tejidos o permitir ajustes intraoperatorios
            precisos.
          </p>

          <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-5">
            <p className="text-neutral-700">
              El robot no sustituye al cirujano ni “opera solo”. Es una
              herramienta que aporta <strong>consistencia</strong> y{' '}
              <strong>control</strong>, útil en casos complejos o cuando
              buscamos reproducir con exactitud la planificación.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cota-slate">
            Navegación quirúrgica: información objetiva durante la cirugía
          </h3>

          <p className="text-neutral-700">
            La navegación utiliza sensores y referencias anatómicas para dar
            datos en tiempo real sobre alineación, orientación de componentes y
            balance/ estabilidad. Su valor principal es la{' '}
            <strong>verificación objetiva</strong> antes de finalizar la
            cirugía.
          </p>
        </div>
      </section>

      {/* 5) Cómo es la cirugía/procedimiento */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Cómo se integra esta tecnología en la cirugía?
        </h2>

        <p className="text-neutral-700">
          Estas herramientas se utilizan para medir y comprobar pasos críticos:
          cortes óseos, orientación de componentes, alineación final y
          estabilidad. La información permite ajustar de forma más objetiva
          antes de implantar la prótesis definitiva.
        </p>

        <p className="text-neutral-700">
          En casos seleccionados, esta precisión adicional ayuda especialmente
          en deformidades, revisiones o cuando hay referencias anatómicas
          alteradas por cirugías previas.
        </p>
      </section>

      {/* 6) Recuperación */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">Recuperación</h2>
        <p className="text-neutral-700">
          La recuperación depende más del tipo de prótesis (primaria vs
          revisión), del estado previo de la rodilla y del plan de
          rehabilitación que de la tecnología utilizada. La asistencia puede
          mejorar la precisión, pero no “acelera” por sí sola los tiempos
          biológicos.
        </p>
      </section>

      {/* 7) Resultados */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Resultados: qué puede mejorar y qué no
        </h2>
        <p className="text-neutral-700">
          La asistencia tecnológica busca reducir variabilidad en parámetros
          técnicos (alineación, cortes, balance). El objetivo clínico es una
          rodilla más estable y funcional. Aun así, el resultado final depende
          también del estado de tejidos, del dolor preoperatorio, del control
          muscular y de la rehabilitación.
        </p>
      </section>

      {/* 8) FAQ – estilo obligatorio */}
      <section className="border-t border-neutral-200 pt-6 mt-6">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Preguntas frecuentes sobre prótesis de rodilla robótica y navegación
        </h2>

        <div className="mt-6 space-y-6 text-neutral-700">
          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿La prótesis de rodilla robótica en Barcelona es mejor para todo
              el mundo?
            </h3>
            <p className="mt-2">
              No necesariamente. Aporta más valor en casos complejos o cuando la
              precisión adicional cambia decisiones intraoperatorias. En muchos
              pacientes, la técnica convencional puede ofrecer resultados
              excelentes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Qué diferencia hay entre robótica, navegación y realidad
              aumentada?
            </h3>
            <p className="mt-2">
              La navegación mide y muestra parámetros; la robótica ayuda a
              ejecutar el plan con alta precisión; la realidad aumentada aporta
              guía visual inmediata sobre orientación de cortes e instrumental.
              Son herramientas distintas que pueden complementar la cirugía.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿La tecnología reduce el dolor o acelera la recuperación?
            </h3>
            <p className="mt-2">
              No de forma directa. Su objetivo principal es mejorar precisión y
              consistencia técnica. La recuperación depende de la cirugía
              (primaria o revisión), del estado previo y de la rehabilitación.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿En qué casos se recomienda más la navegación o la robótica?
            </h3>
            <p className="mt-2">
              Suele ser especialmente útil en deformidades importantes, cirugías
              previas, revisiones, anatomías atípicas o cuando necesitamos
              verificar con datos objetivos la alineación y la estabilidad.
            </p>
          </div>
        </div>

        {/* Preparado para futura implementación de Schema FAQPage (JSON-LD) */}
        {/*
          const schemaFaq = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              ...
            ]
          };
        */}
      </section>

      {/* 9) Enfoque del equipo */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Nuestro enfoque
        </h2>

        <p className="text-neutral-700">
          Entendemos la asistencia quirúrgica como un <strong>medio</strong>, no
          como un fin. La utilizamos cuando creemos que aporta un beneficio
          real, especialmente en cirugías complejas por deformidades, cirugías
          previas o presencia de material.
        </p>

        <p className="text-neutral-700">
          El objetivo final es el mismo: una rodilla <strong>estable</strong>,{' '}
          <strong>alineada</strong> y <strong>funcional</strong>, adaptada a tu
          anatomía y a tus necesidades.
        </p>
      </section>

      {/* 10) CTA final (siempre a /contacto, sin /#contacto) */}
      <section className="mb-4 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Quieres una valoración personalizada?
        </h2>

        <p className="text-neutral-700">
          Si estás valorando una prótesis de rodilla o deseas entender si la
          asistencia tecnológica aporta valor en tu caso, podemos ayudarte.
        </p>

        <div className="mt-5">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center rounded-md bg-cota-navy px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Solicitar valoración
          </Link>
        </div>
      </section>

      <div className="pt-2">
        <Link to="/" className="text-sm text-cota-navy hover:underline">
          ← Volver al inicio
        </Link>
      </div>
    </Article>
  );
}
