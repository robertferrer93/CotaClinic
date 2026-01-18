// src/lca.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';

export default function LCAPage() {
  return (
    <Article>
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          Rodilla
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          Lesión del ligamento cruzado anterior (LCA)
        </h1>

        <p className="mt-4 text-neutral-600">
          Información práctica sobre qué es el LCA, cómo se lesiona, opciones de
          tratamiento y tiempos aproximados de recuperación.
        </p>

        <div className="mt-5">
          <Link to="/" className="text-sm text-cota-navy hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Anatomía y función
        </h2>
        <p className="text-neutral-700">
          El ligamento cruzado anterior conecta el fémur con la tibia y evita
          que esta se desplace hacia delante, además de ayudar a controlar la
          rotación de la rodilla. Es clave en giros, cambios de dirección y
          saltos.
        </p>
      </section>

      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Incidencia y mecanismo lesional
        </h2>
        <p className="text-neutral-700">
          Es una lesión frecuente en deportes de pivotaje como fútbol,
          baloncesto o esquí. Suele romperse en un giro brusco con la rodilla en
          ligera flexión, a menudo sin contacto directo. Es algo más frecuente
          en mujeres por factores anatómicos y de control neuromuscular.
        </p>
      </section>

      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Opciones de tratamiento
        </h2>
        <p className="text-neutral-700">
          El tratamiento puede ser conservador o quirúrgico según la demanda
          funcional, el deporte y la estabilidad de la rodilla.
        </p>

        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <strong>Conservador:</strong> fisioterapia, fortalecimiento y
            trabajo propioceptivo en pacientes con baja demanda y sin
            inestabilidad importante.
          </li>
          <li>
            <strong>Reconstrucción quirúrgica:</strong> recomendada en pacientes
            jóvenes y/o deportistas, para recuperar estabilidad y proteger
            menisco y cartílago.
          </li>
        </ul>
      </section>

      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Técnicas quirúrgicas disponibles
        </h2>

        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <strong>Tendón rotuliano (HTH):</strong> injerto muy resistente,
            habitual en deportes de alto impacto.
          </li>
          <li>
            <strong>Isquiotibiales (ST/G):</strong> menos dolor en la zona
            donante, buenos resultados funcionales.
          </li>
          <li>
            <strong>Tendón cuadricipital:</strong> alternativa versátil con
            buena resistencia.
          </li>
          <li>
            <strong>Aloinjerto:</strong> tejido de donante, útil en revisiones o
            baja demanda, integración algo más lenta.
          </li>
        </ul>

        <p className="text-neutral-700">
          En algunos casos se asocia una{' '}
          <strong>tenodesis extraarticular</strong> para reforzar el control
          rotacional en deportistas de alto riesgo o inestabilidad marcada.
        </p>
      </section>

      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Recuperación y rehabilitación
        </h2>
        <p className="text-neutral-700">
          El retorno al deporte suele situarse alrededor de los{' '}
          <strong>6–9 meses</strong>, según el injerto y el nivel deportivo. La
          rehabilitación se organiza por fases: control del dolor e inflamación,
          recuperación del rango de movimiento, fortalecimiento, trabajo
          propioceptivo y readaptación progresiva al deporte.
        </p>
      </section>

      <section className="border-t border-neutral-200 pt-6 mt-6 space-y-4">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Preguntas frecuentes
        </h2>

        <div className="space-y-3 text-neutral-700">
          <div>
            <div className="font-semibold">
              ¿Cuándo puedo volver a conducir o trabajar?
            </div>
            <div>
              Habitualmente entre 3 y 6 semanas, según el lado operado y el tipo
              de trabajo.
            </div>
          </div>

          <div>
            <div className="font-semibold">
              ¿Se puede volver al mismo nivel deportivo?
            </div>
            <div>
              En la mayoría de casos sí, tras completar la rehabilitación y
              superar pruebas de retorno seguro.
            </div>
          </div>

          <div>
            <div className="font-semibold">¿Qué pasa si no me opero?</div>
            <div>
              Algunas rodillas se adaptan, pero otras quedan inestables y con
              mayor riesgo de lesiones meniscales o de cartílago.
            </div>
          </div>

          <div>
            <div className="font-semibold">¿Qué injerto es mejor para mí?</div>
            <div>
              Depende de edad, tipo de deporte y anatomía; la decisión se toma
              de forma individualizada con tu cirujano.
            </div>
          </div>
        </div>
      </section>
    </Article>
  );
}
