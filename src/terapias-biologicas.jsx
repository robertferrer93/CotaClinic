// src/pages/terapias-biologicas.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';
import { useHead } from './hooks/useHead';

export default function TerapiasBiologicasPage() {
  // OBJETIVO SEO
  // Keyword principal: terapias biológicas rodilla Barcelona
  // Keywords secundarias: PRP rodilla Barcelona, ácido hialurónico rodilla Barcelona,
  // infiltraciones rodilla, artrosis de rodilla, lesión de cartílago, dolor de rodilla
  // Localización: Barcelona
  // Tipo de paciente: con diagnóstico previo / segunda opinión / busca opciones no quirúrgicas

  useHead({
    title: 'Terapias biológicas para rodilla en Barcelona | CotaSport Clinic',
    description:
      'Ácido hialurónico y PRP para artrosis y lesiones de rodilla. Indicaciones, procedimiento, recuperación y resultados. Solicita valoración en Barcelona.',
  });

  return (
    <Article>
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          Rodilla
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          Terapias biológicas para la rodilla en Barcelona
        </h1>

        <p className="mt-4 text-neutral-600">
          En CotaSport Clinic (Barcelona) utilizamos terapias biológicas como el
          ácido hialurónico y el PRP para reducir el dolor y modular la
          inflamación en artrosis de rodilla y en algunas lesiones de cartílago,
          menisco o tendón. Si ya tienes un diagnóstico (radiografía o
          resonancia) y quieres saber si una infiltración tiene sentido en tu
          caso, te ayudamos a decidir con criterio y con un plan claro de
          recuperación.
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          <Link
            to="/contacto"
            className="text-sm font-medium text-cota-navy hover:underline"
          >
            Solicitar valoración por terapias biológicas →
          </Link>
          <Link
            to="/contacto"
            className="text-sm font-medium text-cota-navy hover:underline"
          >
            Segunda opinión con RMN/Rx →
          </Link>
        </div>
      </header>

      {/* 1. Introducción clara */}
      <section className="mb-10 space-y-3">
        <p className="text-neutral-700">
          Las terapias biológicas son tratamientos mínimamente invasivos que se
          integran en una estrategia global: control de carga, fuerza, movilidad
          y, cuando procede, infiltraciones para mejorar el entorno de la
          articulación o del tendón. No son “milagrosas” ni sirven para todos,
          pero en los casos adecuados pueden mejorar dolor y función y ayudar a
          retrasar opciones más agresivas.
        </p>
        <p className="text-neutral-700">
          En rodilla las consideramos sobre todo cuando hay síntomas
          persistentes pese a fisioterapia bien planteada, o cuando buscas una
          opción “puente” antes de plantear cirugía mayor.
        </p>
      </section>

      {/* 2. ¿Qué es? */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Qué son las terapias biológicas?
        </h2>
        <p className="text-neutral-700">
          Son tratamientos que utilizan componentes del propio organismo (por
          ejemplo, derivados sanguíneos) o biomateriales biocompatibles para
          modular la inflamación y optimizar el entorno articular. Su objetivo
          principal suele ser reducir dolor y mejorar función, especialmente en
          artrosis leve-moderada o en lesiones degenerativas seleccionadas.
        </p>
      </section>

      {/* 3. ¿Cuándo está indicado? */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Cuándo están indicadas en la rodilla?
        </h2>
        <p className="text-neutral-700">
          La indicación depende del diagnóstico, el grado de artrosis y tus
          objetivos. En consulta valoramos exploración, mecánica y pruebas de
          imagen (Rx y/o RMN) para elegir la opción más razonable.
        </p>

        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>Artrosis de rodilla leve o moderada con dolor persistente.</li>
          <li>Lesiones de cartílago (condrales) seleccionadas.</li>
          <li>Menisco degenerativo en casos concretos.</li>
          <li>
            Tendinopatías (rotuliana, Aquiles, etc.) que no mejoran con carga
            progresiva.
          </li>
        </ul>

        <p className="text-neutral-700">
          En artrosis avanzada o con deformidad importante, el beneficio suele
          ser más limitado y conviene valorar alternativas.
        </p>
      </section>

      {/* 4. Opciones de tratamiento */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Opciones de tratamiento: principales terapias biológicas
        </h2>

        <h3 className="text-lg font-semibold text-cota-slate">
          1) Ácido hialurónico (AH)
        </h3>
        <p className="text-neutral-700">
          El ácido hialurónico es una sustancia natural del líquido sinovial que
          actúa como lubricante y amortiguador. Con la artrosis, su calidad
          disminuye y la articulación pierde capacidad de deslizamiento.
        </p>
        <p className="text-neutral-700">
          En pacientes bien indicados, las infiltraciones de AH pueden reducir
          el dolor y mejorar la movilidad, especialmente en artrosis
          leve-moderada.
        </p>

        <h3 className="text-lg font-semibold text-cota-slate">
          2) PRP (plasma rico en plaquetas)
        </h3>
        <p className="text-neutral-700">
          El PRP se obtiene de una muestra de sangre del propio paciente y se
          procesa para concentrar plaquetas y factores de crecimiento. Su
          objetivo es modular la inflamación y mejorar el entorno biológico del
          tejido.
        </p>
        <p className="text-neutral-700">
          Lo consideramos sobre todo en artrosis leve-moderada, lesiones
          condrales y algunas situaciones degenerativas, especialmente si se
          combina con un programa de ejercicio terapéutico y control de factores
          mecánicos.
        </p>

        <h3 className="text-lg font-semibold text-cota-slate">
          3) Opciones avanzadas en casos seleccionados
        </h3>
        <p className="text-neutral-700">
          En situaciones concretas, y tras valorar alternativas y expectativas,
          pueden considerarse opciones más avanzadas (por ejemplo, terapias
          celulares o derivados del tejido adiposo). Se indican con prudencia,
          tras explicar claramente objetivos y límites.
        </p>
      </section>

      {/* 5. Cómo es el procedimiento */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Cómo es el procedimiento?
        </h2>
        <p className="text-neutral-700">
          La mayoría de terapias biológicas se realizan en consulta de forma
          ambulatoria. Tras confirmar la indicación, se realiza asepsia estricta
          y la infiltración se efectúa con técnica mínimamente invasiva. En
          casos seleccionados puede utilizarse guía ecográfica para mejorar la
          precisión.
        </p>
        <p className="text-neutral-700">
          En PRP, además, se realiza la extracción y el procesado de la muestra
          antes de la infiltración.
        </p>
      </section>

      {/* 6. Recuperación */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">Recuperación</h2>
        <p className="text-neutral-700">
          La recuperación suele ser rápida. Es frecuente notar molestias leves
          durante 24–72 horas. En general recomendamos ajustar la carga y
          retomar progresivamente la actividad según síntomas.
        </p>
        <p className="text-neutral-700">
          El resultado mejora cuando se acompaña de un plan de ejercicio
          terapéutico (fuerza, control neuromuscular y movilidad) y corrección
          de factores mecánicos.
        </p>
      </section>

      {/* 7. Resultados */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Resultados esperables
        </h2>
        <p className="text-neutral-700">
          El objetivo habitual es mejorar dolor y función y aumentar la
          tolerancia a la carga. La duración del efecto varía según el
          diagnóstico, el grado de artrosis y el plan de rehabilitación.
        </p>
        <p className="text-neutral-700">
          En consulta te orientamos sobre qué puedes esperar de forma realista y
          qué alternativa tiene más sentido si el beneficio probable es bajo.
        </p>
      </section>

      {/* 8. FAQ – estilo obligatorio (Nivel 1 + 2 SEO) */}
      <section className="border-t border-neutral-200 pt-6 mt-6">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Preguntas frecuentes sobre terapias biológicas para rodilla
        </h2>

        <div className="mt-6 space-y-6 text-neutral-700">
          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Las terapias biológicas para rodilla en Barcelona evitan la
              cirugía?
            </h3>
            <p className="mt-2">
              No siempre. En casos bien indicados pueden mejorar dolor y función
              y ayudar a retrasar tratamientos más agresivos, pero si existe
              artrosis muy avanzada o una lesión mecánica clara, la cirugía
              puede ser la opción más efectiva.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Qué es mejor para la artrosis: PRP o ácido hialurónico en la
              rodilla?
            </h3>
            <p className="mt-2">
              Depende del grado de artrosis y del objetivo. El ácido hialurónico
              se orienta más al alivio sintomático y lubricación; el PRP busca
              modular inflamación. La decisión se individualiza tras valorar
              Rx/RMN, síntomas y nivel de actividad.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Cuándo se nota el efecto de una infiltración biológica en la
              rodilla?
            </h3>
            <p className="mt-2">
              Suele ser progresivo en semanas y varía según la técnica y el
              caso. Más allá de los primeros días, se valora la respuesta con un
              plan de ejercicio y control de carga.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Cuántas sesiones o infiltraciones de terapias biológicas
              necesito?
            </h3>
            <p className="mt-2">
              No existe un número universal. Depende de la técnica, del
              diagnóstico y de la respuesta. Tras la valoración, proponemos un
              protocolo razonable y revisiones para decidir si repetir o ajustar
              la estrategia.
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

      {/* 9. Enfoque del equipo */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Enfoque del equipo
        </h2>
        <p className="text-neutral-700">
          Somos un equipo centrado en patología de rodilla y en pacientes que ya
          vienen con diagnóstico o pruebas de imagen. Indicamos terapias
          biológicas cuando aportan valor real y siempre dentro de un plan
          global (rehabilitación, control de carga y objetivos funcionales).
        </p>
      </section>

      {/* 10. CTA final */}
      <section className="mb-4 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Quieres saber si una terapia biológica es adecuada para tu caso?
        </h2>
        <p className="text-neutral-700">
          Si tienes artrosis leve-moderada o una lesión ya diagnosticada y
          quieres valorar PRP o ácido hialurónico con criterio, podemos
          ayudarte.
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
