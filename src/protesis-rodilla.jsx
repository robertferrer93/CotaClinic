// src/pages/protesis-rodilla.jsx
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';
import { useHead } from './hooks/useHead';

export default function ProtesisRodillaPage() {
  useHead({
    title:
      'Prótesis de rodilla en Barcelona | Parcial y Total | CotaSport Clinic',
    description:
      'Especialistas en prótesis de rodilla en Barcelona. Indicaciones de prótesis parcial y total, cirugía, recuperación y valoración individualizada por expertos en rodilla.',
  });
  return (
    <Article>
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          Rodilla
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          Prótesis de rodilla en Barcelona: parcial (unicompartimental) y total
        </h1>

        <p className="mt-4 text-neutral-600">
          Guía práctica sobre la <strong>cirugía de prótesis de rodilla</strong>{' '}
          (artroplastia): cuándo está indicada en{' '}
          <strong>artrosis de rodilla</strong>, diferencias entre{' '}
          <strong>prótesis parcial</strong> y <strong>prótesis total</strong>,
          en qué consiste la operación y qué esperar de la{' '}
          <strong>recuperación</strong>.
        </p>

        <div className="mt-5">
          <Link to="/" className="text-sm text-cota-navy hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <section className="space-y-10">
        {/* Qué es */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            ¿Qué es una prótesis de rodilla?
          </h2>
          <p className="mt-3 text-neutral-700">
            La <strong>prótesis de rodilla</strong> (artroplastia) sustituye las
            superficies articulares desgastadas por implantes que buscan{' '}
            <strong>reducir el dolor</strong> y recuperar función. Se indica
            cuando los tratamientos conservadores ya no controlan los síntomas y
            la limitación afecta al día a día.
          </p>
          <p className="mt-3 text-neutral-700">
            El objetivo es volver a caminar, subir escaleras y realizar
            actividades cotidianas con más autonomía y menos dolor.
          </p>
        </section>

        {/* Cuándo se indica */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            ¿Cuándo está indicada una prótesis de rodilla?
          </h2>
          <p className="mt-3 text-neutral-700">
            La indicación más frecuente es la{' '}
            <strong>artrosis de rodilla avanzada</strong>, aunque también puede
            estar indicada en otras situaciones.
          </p>

          <ul className="mt-4 list-disc pl-5 text-neutral-700 space-y-2">
            <li>Dolor persistente que limita la vida diaria</li>
            <li>Rigidez y pérdida de movilidad</li>
            <li>Deformidad progresiva (varo o valgo)</li>
            <li>Artrosis localizada o generalizada</li>
            <li>Secuelas de fracturas o lesiones previas</li>
            <li>
              Falta de respuesta a fisioterapia, medicación o infiltraciones
            </li>
          </ul>

          <div className="mt-5 rounded-2xl bg-cota-sky p-5">
            <p className="text-neutral-700">
              <strong>Importante:</strong> no decidimos solo por la radiografía.
              Valoramos tu dolor real, estabilidad, movilidad, objetivos y
              expectativas.
            </p>
          </div>
        </section>

        {/* Tipos */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Tipos de prótesis de rodilla
          </h2>

          <div className="mt-5 space-y-8">
            <div className="rounded-2xl border border-neutral-200 p-5">
              <h3 className="text-lg font-semibold text-cota-slate">
                Prótesis parcial (unicompartimental)
              </h3>
              <p className="mt-2 text-neutral-700">
                La <strong>prótesis parcial</strong> sustituye solo el
                compartimento dañado (habitualmente el interno). Es una opción
                cuando la artrosis está bien localizada y el resto de la rodilla
                conserva buen estado.
              </p>

              <p className="mt-4 text-sm font-semibold text-cota-slate">
                Suele ser posible si:
              </p>
              <ul className="mt-2 list-disc pl-5 text-neutral-700 space-y-2">
                <li>Artrosis localizada en un único compartimento</li>
                <li>Ligamentos estables</li>
                <li>Buena alineación y movilidad</li>
              </ul>

              <p className="mt-4 text-sm font-semibold text-cota-slate">
                Ventajas frecuentes
              </p>
              <ul className="mt-2 list-disc pl-5 text-neutral-700 space-y-2">
                <li>Cirugía menos invasiva</li>
                <li>Recuperación más rápida en muchos pacientes</li>
                <li>Sensación de rodilla más “natural”</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-5">
              <h3 className="text-lg font-semibold text-cota-slate">
                Prótesis total de rodilla
              </h3>
              <p className="mt-2 text-neutral-700">
                La <strong>prótesis total</strong> sustituye las superficies
                articulares principales de la rodilla. Es la opción más fiable
                cuando la artrosis afecta a varios compartimentos, existe
                deformidad importante o rigidez marcada.
              </p>

              <p className="mt-4 text-sm font-semibold text-cota-slate">
                Indicada cuando:
              </p>
              <ul className="mt-2 list-disc pl-5 text-neutral-700 space-y-2">
                <li>La artrosis afecta a más de un compartimento</li>
                <li>Hay deformidad significativa</li>
                <li>El dolor y la rigidez limitan claramente la vida diaria</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            ¿Cómo es la cirugía de prótesis de rodilla?
          </h2>
          <p className="mt-3 text-neutral-700">
            La intervención se realiza en quirófano con anestesia regional o
            general. Se preparan las superficies dañadas y se colocan los
            implantes buscando restaurar el eje, la estabilidad y la movilidad
            de la rodilla.
          </p>
          <p className="mt-3 text-neutral-700">
            La duración habitual es de <strong>60 a 90 minutos</strong>, aunque
            varía según el caso.
          </p>
        </section>

        {/* Recuperación */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Recuperación y rehabilitación
          </h2>
          <p className="mt-3 text-neutral-700">
            La recuperación es progresiva. El objetivo al inicio es controlar
            dolor e inflamación y recuperar movilidad; después, fuerza y función
            para volver a caminar con normalidad.
          </p>

          <ul className="mt-4 list-disc pl-5 text-neutral-700 space-y-2">
            <li>
              <strong>Deambulación precoz:</strong> caminar en las primeras
              horas o al día siguiente
            </li>
            <li>
              <strong>Ingreso corto:</strong> habitualmente 2–4 días
            </li>
            <li>
              <strong>Rehabilitación:</strong> movilidad, fuerza y reeducación
              de la marcha
            </li>
          </ul>

          <div className="mt-5 rounded-2xl bg-neutral-50 border border-neutral-200 p-5">
            <p className="text-neutral-700">
              En general, la mayoría de pacientes nota una{' '}
              <strong>mejoría clara del dolor en las primeras semanas</strong>,
              con recuperación funcional progresiva durante los siguientes
              meses.
            </p>
          </div>
        </section>

        {/* Resultados */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Resultados y durabilidad
          </h2>
          <p className="mt-3 text-neutral-700">
            La prótesis de rodilla suele lograr una reducción significativa del
            dolor y una mejora de la movilidad y la autonomía.
          </p>
          <p className="mt-3 text-neutral-700">
            Las prótesis actuales suelen ofrecer durabilidad media superior a{' '}
            <strong>15–20 años</strong>, dependiendo del paciente, el tipo de
            implante y el uso.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Preguntas frecuentes sobre la prótesis de rodilla
          </h2>

          <div className="mt-6 space-y-6 text-neutral-700">
            <div>
              <h3 className="font-semibold text-cota-slate">
                ¿Cuánto dura una prótesis de rodilla?
              </h3>
              <p className="mt-2">
                Una prótesis de rodilla suele tener una durabilidad media
                superior a 15–20 años. La duración depende del tipo de implante,
                la técnica quirúrgica, el peso del paciente y el nivel de
                actividad.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-cota-slate">
                ¿Cuánto tiempo se tarda en caminar después de una prótesis de
                rodilla?
              </h3>
              <p className="mt-2">
                La mayoría de pacientes comienzan a caminar con ayuda en las
                primeras 24 horas tras la cirugía. La recuperación es progresiva
                y suele permitir una marcha funcional en pocas semanas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-cota-slate">
                ¿Es muy dolorosa la operación de prótesis de rodilla?
              </h3>
              <p className="mt-2">
                La cirugía puede producir molestias iniciales, pero actualmente
                utilizamos protocolos modernos de control del dolor que permiten
                una recuperación más confortable y una movilización precoz.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-cota-slate">
                ¿Qué es mejor, una prótesis parcial o una prótesis total?
              </h3>
              <p className="mt-2">
                Depende del patrón de artrosis y de la estabilidad de la
                rodilla. Si la artrosis está localizada y los ligamentos son
                estables, la prótesis parcial puede ser una buena opción. En
                casos más avanzados, la prótesis total ofrece resultados muy
                fiables.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-cota-slate">
                ¿Cuándo podré conducir después de una prótesis de rodilla?
              </h3>
              <p className="mt-2">
                La conducción suele retomarse cuando el paciente tiene buen
                control muscular, movilidad suficiente y ausencia de dolor
                relevante, habitualmente entre las 4 y 6 semanas. La decisión se
                individualiza en función del lado operado y la evolución
                clínica.
              </p>
            </div>
          </div>
        </section>

        {/* Enfoque */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Nuestro enfoque como especialistas en rodilla
          </h2>
          <ul className="mt-4 list-disc pl-5 text-neutral-700 space-y-2">
            <li>Valoración individualizada y objetivos realistas</li>
            <li>Priorizamos preservación articular cuando es posible</li>
            <li>Indicamos prótesis parcial o total solo si está justificado</li>
            <li>Protocolos actuales de cirugía y recuperación</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-cota-sky p-6">
          <h2 className="text-lg md:text-xl font-semibold text-cota-slate">
            ¿Necesitas una valoración?
          </h2>
          <p className="mt-2 text-neutral-700">
            Si tienes <strong>dolor de rodilla</strong> por artrosis y te limita
            en tu día a día, podemos ayudarte a decidir si una{' '}
            <strong>prótesis parcial</strong>, una{' '}
            <strong>prótesis total</strong> u otras opciones son lo más adecuado
            para ti.
          </p>

          <div className="mt-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-xl bg-cota-navy px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
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
      </section>
    </Article>
  );
}
