// src/pages/menisco.jsx
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';

export default function MeniscoPage() {
  return (
    <Article>
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          Rodilla
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          Lesiones meniscales
        </h1>

        <p className="mt-4 text-neutral-600">
          Explicamos de forma sencilla qué son los meniscos, qué tipos de
          lesiones existen y cómo se tratan, siguiendo las recomendaciones de la
          ESSKA (Sociedad Europea de Traumatología Deportiva, Rodilla y
          Artroscopia).
        </p>

        <div className="mt-5">
          <Link to="/" className="text-sm text-cota-navy hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* 1. Anatomía y función */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cota-slate mb-3">
          1. Anatomía y función del menisco
        </h2>
        <p className="text-neutral-700 mb-3">
          Los meniscos son dos estructuras fibrocartilaginosas situadas entre el
          fémur y la tibia. Su función principal es{' '}
          <strong>repartir cargas</strong>,{' '}
          <strong>proteger el cartílago</strong>,{' '}
          <strong>mejorar la estabilidad</strong> y{' '}
          <strong>contribuir a la propiocepción</strong> de la rodilla.
        </p>
        <p className="text-neutral-700">
          Cuando se lesionan, aumenta el estrés sobre el cartílago y, a largo
          plazo, se incrementa el riesgo de artrosis.
        </p>
      </section>

      {/* 2. Incidencia y mecanismo lesional */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cota-slate mb-3">
          2. Incidencia y mecanismo lesional
        </h2>
        <p className="text-neutral-700 mb-3">
          Las roturas meniscales pueden ser <strong>traumáticas</strong>{' '}
          (habituales en pacientes jóvenes durante giros o torsiones bruscas) o{' '}
          <strong>degenerativas</strong> (propias de personas a partir de los
          35–40 años sin un trauma claro).
        </p>

        <ul className="list-disc list-inside text-neutral-700 mb-3 space-y-1">
          <li>
            En lesiones traumáticas, la ESSKA estima una incidencia aproximada
            del <strong>6%</strong> de las lesiones agudas de rodilla en
            población general, siendo más frecuente el{' '}
            <strong>menisco medial (75%)</strong>.
          </li>
          <li>
            En rodillas con rotura del <strong>LCA</strong>, las roturas
            meniscales son aún más frecuentes, especialmente en el{' '}
            <strong>menisco lateral</strong>.
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-cota-slate mb-2">
          Mecanismos típicos
        </h3>
        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          <li>Giro brusco con el pie fijo.</li>
          <li>Flexión forzada.</li>
          <li>
            En degenerativos: microtraumatismos repetitivos y desgaste
            progresivo.
          </li>
        </ul>
      </section>

      {/* 3. Tipos de roturas meniscales */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cota-slate mb-3">
          3. Tipos de roturas meniscales
        </h2>

        <p className="text-neutral-700 mb-4">
          La ESSKA diferencia claramente entre roturas{' '}
          <strong>traumáticas</strong> y <strong>degenerativas</strong>, por su
          manejo muy distinto.
        </p>

        <h3 className="text-xl font-semibold text-cota-slate mb-2">
          3.1. Roturas traumáticas
        </h3>
        <p className="text-neutral-700 mb-2">Las más habituales son:</p>
        <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
          <li>Longitudinales (incluye rotura en asa de cubo).</li>
          <li>Radiales.</li>
          <li>Flap.</li>
          <li>
            Lesión de la raíz meniscal posterior (especialmente lateral en
            lesiones de LCA).
          </li>
          <li>
            Lesión de la rampa meniscal (zona posterior del menisco medial, no
            siempre afecta al menisco propiamente dicho).
          </li>
        </ul>
        <p className="text-neutral-700 mb-4">
          Son roturas con mejor pronóstico de reparación y deben intentarse{' '}
          <strong>preservar</strong>.
        </p>

        <h3 className="text-xl font-semibold text-cota-slate mb-2">
          3.2. Roturas degenerativas
        </h3>
        <ul className="list-disc list-inside text-neutral-700 mb-3 space-y-1">
          <li>Típicamente horizontales.</li>
          <li>Se asocian a degeneración del menisco y del cartílago.</li>
          <li>
            A menudo son un marcador de <strong>artrosis incipiente</strong>,
            más que la causa principal del dolor.
          </li>
        </ul>
        <p className="text-neutral-700">
          En estos casos, la{' '}
          <strong>meniscectomía no debe ser el primer tratamiento</strong>.
        </p>
      </section>

      {/* 4. Opciones de tratamiento */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cota-slate mb-3">
          4. Opciones de tratamiento
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-cota-slate mb-2">
            4.1. Tratamiento conservador
          </h3>
          <p className="text-neutral-700 mb-3">
            La mayoría de lesiones, especialmente las{' '}
            <strong>degenerativas</strong>, deben empezar con manejo no
            quirúrgico:
          </p>
          <ul className="list-disc list-inside text-neutral-700 mb-3 space-y-1">
            <li>Fisioterapia para control del dolor y fortalecimiento.</li>
            <li>Modificación de actividades.</li>
            <li>AINEs si no hay contraindicaciones.</li>
            <li>
              <strong>Infiltraciones en casos seleccionados:</strong> el{' '}
              <strong>plasma rico en plaquetas (PRP)</strong> puede ayudar a
              disminuir la inflamación intraarticular, mejorar el dolor y
              potenciar la biología de cicatrización cuando la zona tiene cierto
              potencial de curación.
            </li>
          </ul>

          <p className="text-neutral-700 font-semibold mb-2">
            Recomendaciones ESSKA:
          </p>
          <ul className="list-disc list-inside text-neutral-700 space-y-1">
            <li>
              En roturas degenerativas, la artroscopia <strong>NO</strong> debe
              ser el tratamiento inicial porque no ha demostrado superioridad
              sobre la fisioterapia u otras medidas conservadoras.
            </li>
            <li>
              En roturas traumáticas pequeñas y estables, especialmente del
              menisco lateral, algunas pueden <strong>dejarse in situ</strong>{' '}
              con buenos resultados.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-cota-slate mb-2">
            4.2. Tratamiento quirúrgico
          </h3>
          <p className="text-neutral-700 mb-4">Según los consensos ESSKA:</p>

          <div className="mb-4 border-l-4 border-cota-navy pl-4 py-2 bg-cota-sky/60 rounded-md">
            <h4 className="text-lg font-semibold text-cota-slate mb-1">
              A. Reparación meniscal (suturar el menisco) – opción preferente
            </h4>
            <p className="text-neutral-700 mb-2">
              <span className="font-semibold">
                La preservación del menisco debe ser siempre la primera opción
              </span>{' '}
              siempre que sea técnicamente posible.
            </p>
            <p className="text-neutral-700 font-semibold mb-1">
              Indicaciones típicas:
            </p>
            <ul className="list-disc list-inside text-neutral-700 mb-2 space-y-1">
              <li>
                Roturas traumáticas longitudinales, verticales o tipo{' '}
                <strong>asa de cubo</strong>.
              </li>
              <li>Roturas radiales en zonas 1–2.</li>
              <li>Lesiones de raíz meniscal (posterior medial o lateral).</li>
              <li>Pacientes jóvenes o activos.</li>
            </ul>
            <p className="text-neutral-700 font-semibold mb-1">Ventajas:</p>
            <ul className="list-disc list-inside text-neutral-700 mb-2 space-y-1">
              <li>Mejor protección articular a largo plazo.</li>
              <li>Menor riesgo de artrosis futura.</li>
            </ul>
            <p className="text-neutral-700">
              La evidencia muestra mejores resultados si la reparación se
              realiza de forma <strong>precoz</strong> tras la lesión.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-cota-slate mb-1">
              B. Meniscectomía parcial – última opción
            </h4>
            <p className="text-neutral-700 mb-2">Debe reservarse para:</p>
            <ul className="list-disc list-inside text-neutral-700 mb-2 space-y-1">
              <li>
                Roturas irreparables (degenerativas complejas, menisco muy
                degenerado, flap no reducible, rotura en asa de cubo no
                reducible).
              </li>
              <li>Fallo de una reparación previa.</li>
              <li>Síntomas mecánicos intensos (bloqueo real).</li>
            </ul>
            <p className="text-neutral-700 font-semibold">
              Advertencia: las meniscectomías se asocian a{' '}
              <strong>mayor riesgo de artrosis</strong> y peor evolución
              funcional a largo plazo comparado con reparar o conservar.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Nuestro enfoque */}
      <section className="border-t border-neutral-200 pt-6 mt-6">
        <h2 className="text-2xl font-semibold text-cota-slate mb-3">
          5. Nuestro enfoque en CotaClinic
        </h2>
        <p className="text-neutral-700 mb-2">
          En nuestra práctica seguimos las recomendaciones de la{' '}
          <strong>ESSKA</strong>, tanto para lesiones traumáticas (consenso
          2019) como para degenerativas (consenso 2016).
        </p>
        <p className="text-neutral-700">
          Esto significa que siempre intentamos{' '}
          <strong>preservar el menisco</strong> cuando es posible, ya que es lo
          que mejor protege la rodilla a largo plazo.
        </p>
      </section>
    </Article>
  );
}
