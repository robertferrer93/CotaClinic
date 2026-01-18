// src/protesis-dolorosa-revision.jsx
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';

export default function ProtesisDolorosaRevisionPage() {
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
          fundamental
          <strong> identificar la causa</strong> antes de indicar cualquier
          tratamiento. En esta página explicamos las causas más frecuentes y en
          qué consiste la{' '}
          <strong>cirugía de revisión de prótesis de rodilla</strong>.
        </p>

        <div className="mt-5">
          <Link to="/" className="text-sm text-cota-navy hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* ================= CONTENIDO ================= */}
      <section className="space-y-10">
        {/* Qué es prótesis dolorosa */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            ¿Qué significa “prótesis dolorosa”?
          </h2>

          <p className="mt-3 text-neutral-700">
            Tras una prótesis de rodilla es normal notar molestias durante los
            primeros meses. Sin embargo, hablamos de{' '}
            <strong>prótesis dolorosa</strong> cuando el dolor{' '}
            <strong>persiste</strong>, <strong>aparece de nuevo</strong> tras un
            periodo de mejoría o se acompaña de inflamación repetida, sensación
            de fallo o rigidez importante.
          </p>

          <div className="mt-5 rounded-2xl bg-cota-sky p-5">
            <p className="text-neutral-700">
              En estos casos, el objetivo no es “tratar el dolor”, sino{' '}
              <strong>identificar el origen</strong> con un estudio ordenado.
              Solo así se puede indicar el tratamiento adecuado y evitar
              cirugías innecesarias.
            </p>
          </div>
        </section>

        {/* Síntomas */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Síntomas habituales
          </h2>

          <ul className="mt-4 list-disc pl-5 text-neutral-700 space-y-2">
            <li>Dolor persistente o dolor nuevo tras un periodo de mejoría</li>
            <li>Inflamación recurrente o derrames repetidos</li>
            <li>Sensación de inestabilidad (“la rodilla falla”)</li>
            <li>Dolor anterior (zona de rótula)</li>
            <li>Rigidez muy limitante o pérdida progresiva de movilidad</li>
            <li>Dificultad para caminar pese a rehabilitación</li>
          </ul>
        </section>

        {/* Causas */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Causas frecuentes de dolor tras una prótesis de rodilla
          </h2>

          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold text-cota-slate">Infección</h3>
              <p className="mt-2 text-neutral-700">
                Puede ser evidente o presentarse de forma más “silenciosa”.
                Siempre debe descartarse de forma rigurosa.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold text-cota-slate">Inestabilidad</h3>
              <p className="mt-2 text-neutral-700">
                Sensación de inseguridad o fallo al caminar, relacionada con
                ligamentos, alineación o ajuste del implante.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold text-cota-slate">
                Problemas femoropatelares
              </h3>
              <p className="mt-2 text-neutral-700">
                Incluyen el <strong>maltracking de la rótula</strong> y el dolor
                anterior tras la prótesis.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold text-cota-slate">
                Problemas rotacionales de los componentes
              </h3>
              <p className="mt-2 text-neutral-700">
                Una rotación inadecuada puede generar dolor, rigidez o mal
                funcionamiento de la rodilla.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold text-cota-slate">
                Rigidez muy limitante (artrofibrosis)
              </h3>
              <p className="mt-2 text-neutral-700">
                Cicatrización interna excesiva que limita la movilidad y afecta
                de forma importante a la función.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold text-cota-slate">
                Desgaste o aflojamiento de componentes
              </h3>
              <p className="mt-2 text-neutral-700">
                Con el tiempo pueden aparecer desgaste del polietileno o
                aflojamiento del implante, generando dolor mecánico.
              </p>
            </div>
          </div>

          <p className="mt-5 text-neutral-700">
            Además, existen causas no protésicas (columna, cadera, tendones o
            dolor neuropático), por lo que el estudio debe ser global.
          </p>
        </section>

        {/* Estudio */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Importancia de un estudio completo
          </h2>

          <p className="mt-3 text-neutral-700">
            Cada causa requiere un tratamiento distinto. Antes de indicar
            ninguna cirugía es imprescindible un{' '}
            <strong>estudio exhaustivo</strong>.
          </p>

          <div className="mt-5 rounded-2xl border bg-neutral-50 p-5">
            <ul className="list-disc pl-5 text-neutral-700 space-y-2">
              <li>Radiografías específicas y de alineación</li>
              <li>Analítica y, si es necesario, punción articular</li>
              <li>TAC para valorar posición y rotación de los componentes</li>
              <li>Exploración clínica detallada</li>
            </ul>
          </div>
        </section>

        {/* Tratamiento */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Tratamiento: de menos a más invasivo
          </h2>

          <p className="mt-3 text-neutral-700">
            Una vez identificada la causa, el tratamiento se orienta siempre
            buscando la <strong>opción menos invasiva</strong> posible.
          </p>
        </section>

        {/* Cirugía de revisión */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Cirugía de revisión de prótesis de rodilla
          </h2>

          <p className="mt-3 text-neutral-700">
            La cirugía de revisión tiene como objetivo corregir el problema de
            una prótesis previa y puede ir desde procedimientos limitados hasta
            cirugías complejas.
          </p>

          <div className="mt-5 rounded-2xl border p-5 space-y-4">
            <div>
              <h3 className="font-semibold text-cota-slate">
                Cirugía de la rigidez (artrofibrosis)
              </h3>
              <p className="text-neutral-700 mt-2">
                Liberación de adherencias mediante técnica artroscópica u
                abierta.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-cota-slate">
                Cirugía femoropatelar
              </h3>
              <p className="text-neutral-700 mt-2">
                Procedimientos para mejorar el seguimiento rotuliano, incluyendo
                la protetización de la rótula cuando está indicada.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-cota-slate">
                Revisión parcial de componentes
              </h3>
              <p className="text-neutral-700 mt-2">
                Sustitución de un componente concreto cuando el problema está
                bien localizado.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-cota-slate">
                Revisión completa con implantes de revisión
              </h3>
              <p className="text-neutral-700 mt-2">
                Uso de <strong>implantes de revisión</strong> con mayor grado de
                constricción para restaurar la <strong>estabilidad</strong>,
                corregir la <strong>alineación</strong> y compensar déficits
                ligamentarios o pérdida ósea.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-cota-sky p-6">
          <h2 className="text-lg md:text-xl font-semibold text-cota-slate">
            ¿Quieres que estudiemos tu caso?
          </h2>
          <p className="mt-2 text-neutral-700">
            Si tienes una <strong>prótesis dolorosa</strong> o dudas sobre la
            necesidad de una cirugía de revisión, podemos ayudarte con una
            valoración completa.
          </p>

          <div className="mt-4">
            <a
              href="/#contacto"
              className="inline-flex items-center justify-center rounded-xl bg-cota-navy px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Solicitar valoración
            </a>
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
