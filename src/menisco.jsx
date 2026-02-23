// src/pages/menisco.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';
import { useHead } from './hooks/useHead';

export default function MeniscoPage() {
  // OBJETIVO SEO
  // Keyword principal: rotura de menisco Barcelona
  // Keywords secundarias: lesión meniscal rodilla, cirugía de menisco (artroscopia) Barcelona,
  // sutura meniscal, meniscectomía parcial, rotura menisco degenerativa, rotura menisco traumática
  // Localización: Barcelona
  // Tipo de paciente: con diagnóstico previo (RMN), dolor/bloqueo o síntomas mecánicos, busca plan claro (conservador vs cirugía)

  useHead({
    title: 'Rotura de menisco en Barcelona | CotaSport Clinic',
    description:
      'Especialistas en lesiones meniscales. Cuándo operar, cuándo no, opciones (sutura vs meniscectomía), recuperación y resultados. Valoración en Barcelona.',
  });

  return (
    <Article>
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          Rodilla
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          Rotura de menisco en Barcelona
        </h1>

        <p className="mt-4 text-neutral-600">
          Las lesiones meniscales son una causa frecuente de dolor, chasquidos o
          bloqueo de rodilla. En CotaSport Clinic (Barcelona) valoramos tu caso
          con un enfoque práctico: confirmar el tipo de rotura (traumática o
          degenerativa), decidir si el tratamiento debe ser conservador o
          quirúrgico y, si se opera, priorizar la preservación del menisco
          cuando es posible.
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          <Link
            to="/contacto"
            className="text-sm font-medium text-cota-navy hover:underline"
          >
            Solicitar valoración por menisco →
          </Link>
        </div>
      </header>

      {/* 1) Introducción clara */}
      <section className="mb-10 space-y-3">
        <p className="text-neutral-700">
          Si ya tienes una resonancia o te han dicho que tienes una “rotura de
          menisco”, la pregunta clave no es solo qué tipo de rotura es, sino
          <strong> si realmente explica tus síntomas</strong> y qué estrategia
          ofrece el mejor resultado a medio-largo plazo.
        </p>
        <p className="text-neutral-700">
          En muchas roturas (sobre todo degenerativas), la primera opción suele
          ser un tratamiento conservador bien dirigido. En roturas traumáticas
          inestables o con bloqueo, la cirugía puede ser necesaria, y cuando se
          opera intentamos <strong>preservar el menisco</strong> siempre que sea
          reparable.
        </p>
      </section>

      {/* 2) ¿Qué es? */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Qué es el menisco y para qué sirve?
        </h2>
        <p className="text-neutral-700">
          Los meniscos son dos estructuras fibrocartilaginosas situadas entre el
          fémur y la tibia. Su función principal es{' '}
          <strong>repartir cargas</strong>,{' '}
          <strong>proteger el cartílago</strong>,
          <strong>mejorar la estabilidad</strong> y contribuir a la{' '}
          <strong>propiocepción</strong> de la rodilla.
        </p>
        <p className="text-neutral-700">
          Cuando el menisco se lesiona o se pierde tejido, aumenta el estrés
          sobre el cartílago y, a largo plazo, puede incrementarse el riesgo de
          artrosis.
        </p>
      </section>

      {/* 3) ¿Cuándo está indicado? */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Cuándo una rotura de menisco requiere tratamiento específico?
        </h2>
        <p className="text-neutral-700">
          Depende del tipo de rotura y de tus síntomas. Hay roturas que se
          encuentran en la RMN y no son el origen principal del dolor, sobre
          todo en lesiones degenerativas asociadas a cambios de cartílago.
        </p>

        <h3 className="text-lg font-semibold text-cota-slate">
          Situaciones en las que suele tener más peso la lesión meniscal
        </h3>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <strong>Bloqueo real</strong> (la rodilla se queda “enganchada” y no
            se puede extender o flexionar).
          </li>
          <li>
            <strong>Síntomas mecánicos</strong> claros (fallos, enganches
            repetidos) con correlación en la exploración.
          </li>
          <li>
            <strong>Roturas traumáticas</strong> en pacientes jóvenes/activos,
            sobre todo si son inestables o tipo “asa de cubo”.
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-cota-slate">
          Lesiones degenerativas: matiz importante
        </h3>
        <p className="text-neutral-700">
          En roturas degenerativas (habituales a partir de 35–40 años), muchas
          veces el dolor se relaciona más con el entorno articular (cartílago,
          sinovitis, artrosis incipiente) que con la rotura en sí. Por eso, la
          artroscopia no suele ser el primer paso si no hay bloqueo o síntomas
          mecánicos significativos.
        </p>
      </section>

      {/* 4) Opciones de tratamiento */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Opciones de tratamiento para una rotura de menisco
        </h2>

        <h3 className="text-lg font-semibold text-cota-slate">
          Tratamiento conservador
        </h3>
        <p className="text-neutral-700">
          En muchas lesiones (especialmente degenerativas), el primer enfoque es
          no quirúrgico. El objetivo es reducir dolor, mejorar fuerza y control
          de carga, y recuperar función.
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>Fisioterapia: fuerza, movilidad y control neuromuscular.</li>
          <li>Modificación temporal de actividades y progresión de carga.</li>
          <li>Medicación antiinflamatoria si no hay contraindicaciones.</li>
          <li>
            Infiltraciones en casos seleccionados (por ejemplo, cuando hay
            componente inflamatorio intraarticular).
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-cota-slate">
          Tratamiento quirúrgico (artroscopia)
        </h3>
        <p className="text-neutral-700">
          La cirugía se plantea cuando hay roturas traumáticas inestables,
          bloqueo o persistencia de síntomas pese a un tratamiento conservador
          bien realizado.
        </p>

        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <strong>Sutura / reparación meniscal:</strong> opción preferente si
            la rotura es reparable. Preservar menisco protege mejor la rodilla a
            largo plazo.
          </li>
          <li>
            <strong>Meniscectomía parcial:</strong> se reserva para roturas
            irreparables o fallos de reparación. Se intenta retirar lo mínimo
            imprescindible.
          </li>
        </ul>

        <p className="text-neutral-700">
          La decisión se basa en: patrón de rotura, zona vascular, calidad del
          tejido, estabilidad, edad/actividad y lesiones asociadas (por ejemplo,
          LCA).
        </p>
      </section>

      {/* 5) Cómo es la cirugía/procedimiento */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Cómo es la cirugía del menisco?
        </h2>
        <p className="text-neutral-700">
          La cirugía suele realizarse por artroscopia (incisiones pequeñas) y el
          objetivo es tratar la rotura minimizando la pérdida de tejido. Cuando
          es posible, se repara (sutura). Si no es reparable, se realiza una
          meniscectomía parcial conservando el máximo menisco sano.
        </p>
        <p className="text-neutral-700">
          En el mismo acto se valoran y tratan lesiones asociadas si procede
          (cartílago, sinovitis, estabilidad, etc.).
        </p>
      </section>

      {/* 6) Recuperación */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">Recuperación</h2>
        <p className="text-neutral-700">
          La recuperación depende del tipo de tratamiento:
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <strong>Meniscectomía parcial:</strong> suele permitir una
            recuperación más rápida, con progresión de actividad en semanas.
          </li>
          <li>
            <strong>Sutura meniscal:</strong> requiere un protocolo más
            protector (por la cicatrización), con progresión más lenta de carga
            y flexión según el caso.
          </li>
        </ul>
        <p className="text-neutral-700">
          En ambos casos, la fisioterapia (fuerza, movilidad y control de carga)
          es clave para un buen resultado.
        </p>
      </section>

      {/* 7) Resultados */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Resultados esperables
        </h2>
        <p className="text-neutral-700">
          En roturas traumáticas reparables, la sutura puede ofrecer muy buenos
          resultados y mejor protección articular a largo plazo. En lesiones
          degenerativas, el objetivo suele ser mejorar dolor y función con el
          mínimo tratamiento necesario, y muchas evolucionan bien sin cirugía.
        </p>
        <p className="text-neutral-700">
          Si hay artrosis asociada, el pronóstico depende más del estado del
          cartílago y de la estrategia global de carga y fuerza que de la rotura
          meniscal aislada.
        </p>
      </section>

      {/* 8) FAQ – estilo obligatorio */}
      <section className="border-t border-neutral-200 pt-6 mt-6">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Preguntas frecuentes sobre rotura de menisco
        </h2>

        <div className="mt-6 space-y-6 text-neutral-700">
          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Cuándo hay que operar una rotura de menisco?
            </h3>
            <p className="mt-2">
              Se plantea sobre todo si hay bloqueo real, rotura traumática
              inestable o síntomas que persisten pese a un tratamiento
              conservador bien realizado. En roturas degenerativas, la cirugía
              no suele ser el primer paso.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Qué es mejor: sutura meniscal o meniscectomía parcial?
            </h3>
            <p className="mt-2">
              Cuando la rotura es reparable, la sutura suele ser preferible
              porque preserva el menisco y protege mejor la rodilla a largo
              plazo. La meniscectomía parcial se reserva para roturas
              irreparables y se intenta retirar lo mínimo imprescindible.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Se puede curar una rotura de menisco sin operar?
            </h3>
            <p className="mt-2">
              Muchas lesiones, especialmente degenerativas, mejoran con
              fisioterapia y control de carga. La posibilidad de “cicatrizar”
              depende del tipo de rotura y de la zona (hay áreas con mejor
              irrigación que otras).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Cuándo puedo volver a correr o hacer deporte tras una lesión de
              menisco?
            </h3>
            <p className="mt-2">
              Depende de síntomas y del tratamiento. Tras meniscectomía parcial,
              la vuelta suele ser más rápida; tras sutura, el plan es más
              protector. En ambos casos, se decide por criterios de fuerza,
              movilidad y tolerancia, no solo por el calendario.
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
          En lesiones meniscales, la decisión clave es indicar bien. Priorizamos
          un diagnóstico funcional (síntomas + exploración + imagen) y un plan
          progresivo. Cuando operamos, intentamos preservar el menisco siempre
          que sea técnicamente posible, porque es lo que mejor protege la
          rodilla a largo plazo.
        </p>
      </section>

      {/* 10) CTA final */}
      <section className="mb-4 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Quieres saber cuál es la mejor opción para tu menisco?
        </h2>
        <p className="text-neutral-700">
          Si tienes una rotura diagnosticada y dudas entre tratamiento
          conservador o cirugía, podemos valorar tu caso y explicarte
          alternativas con claridad.
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
    </Article>
  );
}
