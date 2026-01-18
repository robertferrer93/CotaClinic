// src/pages/protesis-rodilla.jsx
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';

export default function ProtesisRodillaPage() {
  return (
    <Article>
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          Rodilla
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          Prótesis de rodilla: parcial y total
        </h1>

        <p className="mt-4 text-neutral-600">
          Información clara sobre la <strong>prótesis de rodilla</strong>:
          cuándo está indicada, diferencias entre{' '}
          <strong>prótesis parcial</strong> y <strong>prótesis total</strong>,
          cómo es la cirugía y qué esperar de la recuperación.
        </p>

        <div className="mt-5">
          <Link to="/" className="text-sm text-cota-navy hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* ✅ Contenido */}
      <section className="space-y-10">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            ¿Qué es una prótesis de rodilla?
          </h2>
          <p className="mt-3 text-neutral-700">
            La <strong>prótesis de rodilla</strong> es una solución quirúrgica
            indicada cuando el <strong>dolor</strong> y la{' '}
            <strong>limitación funcional</strong> no mejoran con tratamientos
            conservadores. Consiste en sustituir las superficies articulares
            dañadas por implantes que permiten recuperar movilidad y reducir el
            dolor.
          </p>
          <p className="mt-3 text-neutral-700">
            El objetivo principal es <strong>mejorar la calidad de vida</strong>
            : caminar con menos dolor, subir escaleras y realizar actividades
            cotidianas con mayor autonomía.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            ¿Cuándo está indicada una prótesis de rodilla?
          </h2>
          <p className="mt-3 text-neutral-700">
            La indicación más frecuente es la{' '}
            <strong>artrosis de rodilla</strong> avanzada, aunque también puede
            estar indicada en otros casos.
          </p>

          <ul className="mt-4 list-disc pl-5 text-neutral-700 space-y-2">
            <li>Artrosis localizada o generalizada</li>
            <li>Deformidad progresiva (varo o valgo)</li>
            <li>Secuelas de fracturas</li>
            <li>
              Dolor persistente que limita la vida diaria pese a fisioterapia,
              medicación o infiltraciones
            </li>
          </ul>

          <div className="mt-5 rounded-2xl bg-cota-sky p-5">
            <p className="text-neutral-700">
              <strong>Importante:</strong> la decisión no depende solo de la
              radiografía. Valoramos el impacto real del dolor en tu día a día,
              la movilidad y tus objetivos.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Tipos de prótesis de rodilla
          </h2>

          <div className="mt-5 space-y-8">
            <div className="rounded-2xl border border-neutral-200 p-5">
              <h3 className="text-lg font-semibold text-cota-slate">
                Prótesis parcial de rodilla
              </h3>
              <p className="mt-2 text-neutral-700">
                La <strong>prótesis parcial</strong> (o unicompartimental)
                sustituye solo la parte dañada de la rodilla (interna, externa o
                femoropatelar).
              </p>

              <p className="mt-4 text-sm font-semibold text-cota-slate">
                ¿Cuándo es posible?
              </p>
              <ul className="mt-2 list-disc pl-5 text-neutral-700 space-y-2">
                <li>Artrosis localizada en un solo compartimento</li>
                <li>Ligamentos estables</li>
                <li>Buena alineación y movilidad de la rodilla</li>
              </ul>

              <p className="mt-4 text-sm font-semibold text-cota-slate">
                Ventajas frecuentes
              </p>
              <ul className="mt-2 list-disc pl-5 text-neutral-700 space-y-2">
                <li>Cirugía menos invasiva</li>
                <li>Recuperación más rápida</li>
                <li>Sensación de rodilla más “natural”</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-5">
              <h3 className="text-lg font-semibold text-cota-slate">
                Prótesis total de rodilla
              </h3>
              <p className="mt-2 text-neutral-700">
                La <strong>prótesis total</strong> sustituye todas las
                superficies articulares dañadas. Es una opción muy fiable cuando
                la artrosis afecta a varios compartimentos o existe deformidad
                importante.
              </p>

              <p className="mt-4 text-sm font-semibold text-cota-slate">
                Indicada cuando:
              </p>
              <ul className="mt-2 list-disc pl-5 text-neutral-700 space-y-2">
                <li>La artrosis afecta a más de un compartimento</li>
                <li>Existe deformidad significativa</li>
                <li>El dolor y la rigidez limitan claramente la vida diaria</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            ¿Cómo es la cirugía de prótesis de rodilla?
          </h2>
          <p className="mt-3 text-neutral-700">
            La intervención se realiza en quirófano con anestesia regional o
            general. Durante la cirugía se eliminan las superficies dañadas, se
            colocan los implantes y se busca restaurar el eje, la estabilidad y
            la movilidad.
          </p>
          <p className="mt-3 text-neutral-700">
            La duración habitual es de <strong>60 a 90 minutos</strong>, aunque
            puede variar según el caso.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Recuperación y rehabilitación
          </h2>
          <ul className="mt-4 list-disc pl-5 text-neutral-700 space-y-2">
            <li>
              <strong>Deambulación precoz:</strong> caminar en las primeras
              horas o al día siguiente
            </li>
            <li>
              <strong>Ingreso corto:</strong> habitualmente 2–4 días
            </li>
            <li>
              <strong>Rehabilitación progresiva:</strong> movilidad, fuerza y
              función
            </li>
          </ul>

          <div className="mt-5 rounded-2xl bg-neutral-50 border border-neutral-200 p-5">
            <p className="text-neutral-700">
              En general, la mayoría de pacientes nota una{' '}
              <strong>mejoría clara del dolor en las primeras semanas</strong>,
              con una recuperación funcional progresiva durante los siguientes
              meses.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Resultados y durabilidad
          </h2>
          <p className="mt-3 text-neutral-700">
            La prótesis de rodilla suele lograr una reducción significativa del
            dolor y una mejora de la movilidad y la autonomía.
          </p>
          <p className="mt-3 text-neutral-700">
            Las prótesis actuales tienen una durabilidad media superior a{' '}
            <strong>15–20 años</strong>, dependiendo del paciente, el tipo de
            implante y el uso.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Nuestro enfoque como especialistas en rodilla
          </h2>
          <ul className="mt-4 list-disc pl-5 text-neutral-700 space-y-2">
            <li>Valoración individualizada</li>
            <li>Priorizamos la preservación articular cuando es posible</li>
            <li>Indicamos prótesis parcial o total solo si está justificado</li>
            <li>Protocolos actuales de cirugía y recuperación</li>
          </ul>
        </section>

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
            <a
              href="/#contacto"
              className="inline-flex items-center justify-center rounded-xl bg-cota-navy px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Solicitar valoración
            </a>
          </div>

          <p className="mt-3 text-xs text-neutral-600">
            Te llevará al formulario de contacto de la página principal.
          </p>
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
