// src/pages/protesis-dolorosa-revision.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';
import { useHead } from './hooks/useHead';

export default function ProtesisDolorosaRevisionPage() {
  // OBJETIVO SEO
  // Keyword principal: prótesis de rodilla dolorosa Barcelona
  // Keywords secundarias: dolor tras prótesis de rodilla, aflojamiento prótesis rodilla,
  // infección prótesis rodilla, inestabilidad prótesis rodilla, artrofibrosis, cirugía de revisión prótesis rodilla
  // Localización: Barcelona
  // Tipo de paciente: con prótesis de rodilla y dolor persistente/nuevo; busca diagnóstico de causa y plan (conservador vs revisión)

  useHead({
    title:
      'Prótesis de rodilla dolorosa en Barcelona | Estudio y revisión',
    description:
      'Dolor tras prótesis de rodilla: causas frecuentes, estudio completo (Rx, analítica, punción, TAC) y cuándo se indica cirugía de revisión en Barcelona.',
  });

  return (
    <Article>
      {/* ================= HEADER ================= */}
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          Rodilla
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          Prótesis dolorosa de rodilla: causas, estudio y cirugía de revisión
        </h1>

        <p className="mt-4 text-neutral-600">
          Cuando aparece <strong>dolor tras una prótesis de rodilla</strong> o
          el dolor persiste más allá de la recuperación esperable, es
          fundamental <strong>identificar la causa</strong> antes de indicar
          tratamientos. En esta página explicamos las causas más frecuentes y
          en qué consiste la <strong>cirugía de revisión</strong> cuando está
          indicada.
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          <Link
            to="/contacto"
            className="text-sm font-medium text-cota-navy hover:underline"
          >
            Solicitar valoración por prótesis dolorosa →
          </Link>
        </div>
      </header>

      {/* ================= CONTENIDO ================= */}

      {/* 1) Introducción clara */}
      <section className="mb-10 space-y-3">
        <p className="text-neutral-700">
          Tras una prótesis de rodilla es normal notar molestias durante los
          primeros meses. Hablamos de <strong>prótesis dolorosa</strong> cuando
          el dolor <strong>persiste</strong>, <strong>reaparece</strong> tras un
          periodo de mejoría o se acompaña de inflamación repetida, sensación de
          fallo o rigidez importante.
        </p>
        <div className="rounded-2xl bg-cota-sky p-5">
          <p className="text-neutral-700">
            En estos casos, el objetivo no es “tratar el dolor” sin más, sino{' '}
            <strong>encontrar el origen</strong> con un estudio ordenado. Esto
            reduce el riesgo de tratamientos ineficaces o cirugías innecesarias.
          </p>
        </div>
      </section>

      {/* 2) ¿Qué es? */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Qué significa “prótesis dolorosa”?
        </h2>
        <p className="text-neutral-700">
          Es un término clínico que describe una prótesis de rodilla con dolor
          no esperable por tiempo o intensidad, o con síntomas asociados
          (derrame, inestabilidad o rigidez). La causa puede estar en la propia
          prótesis (infección, aflojamiento, alineación, rotación, estabilidad)
          o fuera de ella (columna, cadera, tendones o dolor neuropático).
        </p>
      </section>

      {/* 3) ¿Cuándo está indicado? (cuándo estudiar) */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Cuándo conviene estudiarla de forma específica?
        </h2>
        <p className="text-neutral-700">
          Recomendamos una valoración dirigida si aparece alguno de estos
          escenarios:
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>Dolor persistente o dolor nuevo tras un periodo de mejoría.</li>
          <li>Inflamación recurrente o derrames repetidos.</li>
          <li>Sensación de inestabilidad (“la rodilla falla”).</li>
          <li>Dolor anterior (zona de rótula) que limita.</li>
          <li>Rigidez muy limitante o pérdida progresiva de movilidad.</li>
          <li>Dificultad para caminar pese a rehabilitación.</li>
        </ul>
      </section>

      {/* 4) Opciones de tratamiento (si aplica) */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Causas frecuentes de dolor tras una prótesis de rodilla
        </h2>

        <div className="mt-5 space-y-4">
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold text-cota-slate">Infección</h3>
            <p className="mt-2 text-neutral-700">
              Puede ser evidente o presentarse de forma más “silenciosa”. Por
              seguridad, siempre debe descartarse con un protocolo riguroso.
            </p>
          </div>

          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold text-cota-slate">Inestabilidad</h3>
            <p className="mt-2 text-neutral-700">
              Sensación de fallo o inseguridad al caminar, relacionada con
              ligamentos, equilibrio de espacios, alineación o ajuste del
              implante.
            </p>
          </div>

          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold text-cota-slate">
              Problemas femoropatelares
            </h3>
            <p className="mt-2 text-neutral-700">
              Incluyen el <strong>maltracking de la rótula</strong> y dolor
              anterior tras la prótesis.
            </p>
          </div>

          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold text-cota-slate">
              Malposición/rotación de componentes
            </h3>
            <p className="mt-2 text-neutral-700">
              Una rotación inadecuada puede producir dolor, rigidez o un patrón
              de movimiento no fisiológico.
            </p>
          </div>

          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold text-cota-slate">
              Rigidez muy limitante (artrofibrosis)
            </h3>
            <p className="mt-2 text-neutral-700">
              Cicatrización interna excesiva que limita la movilidad y afecta de
              forma importante a la función.
            </p>
          </div>

          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold text-cota-slate">
              Desgaste o aflojamiento de componentes
            </h3>
            <p className="mt-2 text-neutral-700">
              Con el tiempo puede aparecer desgaste del polietileno o
              aflojamiento, generando dolor mecánico.
            </p>
          </div>
        </div>

        <p className="mt-5 text-neutral-700">
          Además, existen causas no protésicas (columna, cadera, tendones o
          dolor neuropático), por lo que el estudio debe ser global.
        </p>
      </section>

      {/* 5) Cómo es la cirugía/procedimiento (en este caso: estudio + revisión) */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Cómo es el estudio de una prótesis dolorosa?
        </h2>
        <p className="text-neutral-700">
          Antes de plantear cualquier cirugía, es imprescindible un{' '}
          <strong>estudio completo</strong> porque cada causa requiere un
          tratamiento distinto.
        </p>

        <div className="rounded-2xl border bg-neutral-50 p-5">
          <ul className="list-disc pl-5 text-neutral-700 space-y-2">
            <li>Exploración clínica detallada y análisis del patrón de dolor.</li>
            <li>Radiografías específicas y de alineación.</li>
            <li>Analítica y, si está indicado, punción articular.</li>
            <li>TAC para valorar posición y rotación de componentes.</li>
          </ul>
        </div>
      </section>

      {/* 6) Recuperación (de la estrategia / y de cirugía si procede) */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Recuperación: de menos a más invasivo
        </h2>
        <p className="text-neutral-700">
          Una vez identificada la causa, el tratamiento se orienta buscando la{' '}
          <strong>opción menos invasiva</strong> posible. En algunos casos será
          suficiente ajustar rehabilitación, tratar causas extraarticulares o
          realizar procedimientos limitados. Si la causa es mecánica o infecciosa
          y no tiene alternativa razonable, se plantea cirugía de revisión.
        </p>
      </section>

      {/* 7) Resultados */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Cirugía de revisión de prótesis de rodilla: qué se puede hacer
        </h2>
        <p className="text-neutral-700">
          La cirugía de revisión tiene como objetivo corregir el problema de la
          prótesis previa y puede ir desde procedimientos limitados hasta
          cirugías complejas, según la causa y el estado de hueso y ligamentos.
        </p>

        <div className="mt-5 rounded-2xl border p-5 space-y-4">
          <div>
            <h3 className="font-semibold text-cota-slate">
              Cirugía de la rigidez (artrofibrosis)
            </h3>
            <p className="text-neutral-700 mt-2">
              Liberación de adherencias mediante técnica artroscópica u abierta,
              según el caso.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">Cirugía femoropatelar</h3>
            <p className="text-neutral-700 mt-2">
              Procedimientos para mejorar el seguimiento rotuliano, incluyendo
              tratamiento de la rótula cuando está indicado.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              Revisión parcial de componentes
            </h3>
            <p className="text-neutral-700 mt-2">
              Sustitución de un componente concreto cuando el problema está bien
              localizado.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              Revisión completa con implantes de revisión
            </h3>
            <p className="text-neutral-700 mt-2">
              Uso de implantes con mayor grado de constricción para restaurar
              estabilidad, corregir alineación y compensar déficits ligamentarios
              o pérdida ósea, cuando es necesario.
            </p>
          </div>
        </div>
      </section>

      {/* 8) FAQ */}
      <section className="border-t border-neutral-200 pt-6 mt-6">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Preguntas frecuentes sobre prótesis de rodilla dolorosa
        </h2>

        <div className="mt-6 space-y-6 text-neutral-700">
          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Es normal tener dolor después de una prótesis de rodilla?
            </h3>
            <p className="mt-2">
              Es normal tener molestias durante los primeros meses. Preocupa más
              el dolor que persiste más allá de lo esperable, reaparece tras una
              mejoría o se acompaña de derrame, inestabilidad o rigidez marcada.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Cómo se descarta una infección en una prótesis dolorosa?
            </h3>
            <p className="mt-2">
              Con un protocolo que combina exploración, analítica y, si está
              indicado, punción articular, además de radiografías y otras pruebas
              según el caso. Identificar o descartar infección cambia por completo
              el tratamiento.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Cuándo se recomienda una cirugía de revisión de prótesis de rodilla?
            </h3>
            <p className="mt-2">
              Cuando existe una causa clara que no tiene una alternativa eficaz
              (por ejemplo, infección, aflojamiento, malposición o inestabilidad
              relevante) y el problema limita función o calidad de vida.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿La revisión de prótesis siempre implica cambiar toda la prótesis?
            </h3>
            <p className="mt-2">
              No. En algunos casos puede bastar con procedimientos limitados o
              con cambiar un componente concreto. En otros, se requiere una
              revisión completa con implantes específicos.
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
          Nuestro enfoque en CotaSport Clinic
        </h2>
        <p className="text-neutral-700">
          En una prótesis dolorosa, la prioridad es el diagnóstico. Utilizamos un
          estudio ordenado para identificar la causa y proponer el tratamiento más
          razonable, evitando soluciones rápidas sin una explicación clara.
        </p>
      </section>

      {/* 10) CTA final (siempre a /contacto, sin /#contacto) */}
      <section className="mb-4 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Quieres que estudiemos tu caso?
        </h2>
        <p className="text-neutral-700">
          Si tienes una <strong>prótesis dolorosa</strong> o dudas sobre la
          necesidad de una revisión, podemos ayudarte con una valoración completa.
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
