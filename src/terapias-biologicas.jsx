// src/pages/terapias-biologicas.jsx
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function TerapiasbiologicasPage() {
  return (
    <article className="max-w-3xl">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          Tratamientos
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          Terapias biológicas en CotaClinic
        </h1>

        <p className="mt-4 text-neutral-600">
          Utilizamos tratamientos biológicos mínimamente invasivos para reducir
          el dolor, modular la inflamación y favorecer la reparación de tejidos
          en artrosis, lesiones de cartílago, menisco y tendón.
        </p>

        <div className="mt-5">
          <Link to="/" className="text-sm text-cota-navy hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* Introducción */}
      <section className="mb-10 space-y-3">
        <p className="text-neutral-700">
          Las terapias biológicas se basan en sustancias del propio organismo o
          biomateriales avanzados. Bien indicadas, pueden ayudar a mejorar la
          función y retrasar, cuando es posible, la necesidad de cirugías más
          agresivas.
        </p>
        <p className="text-neutral-700">
          En CotaClinic aplicamos estas técnicas de forma personalizada,
          especialmente en:
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>Artrosis de rodilla leve o moderada.</li>
          <li>Lesiones de cartílago y menisco.</li>
          <li>Tendinopatías (rotuliana, Aquiles, epicondilitis, etc.).</li>
        </ul>
      </section>

      {/* 1. Ácido hialurónico */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl font-semibold text-cota-slate">
          1. Ácido hialurónico (AH)
        </h2>
        <p className="text-neutral-700">
          El ácido hialurónico es una sustancia natural del líquido sinovial,
          que actúa como lubricante y amortiguador dentro de la articulación.
          Con la artrosis su calidad disminuye, y la rodilla pierde capacidad de
          deslizamiento.
        </p>
        <p className="text-neutral-700">
          Las infiltraciones de AH ayudan a reducir el dolor, mejorar la
          movilidad y disminuir la sensación de fricción articular.
        </p>

        <h3 className="text-lg font-semibold text-cota-slate">
          Peso molecular y reticulación: por qué importa la calidad
        </h3>
        <p className="text-neutral-700">
          No todos los ácidos hialurónicos son iguales. Dos características
          clave son:
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <span className="font-semibold">Peso molecular alto:</span>{' '}
            productos más viscosos, que permanecen más tiempo en la articulación
            y suelen ofrecer un efecto más prolongado, especialmente en artrosis
            leve-moderada.
          </li>
          <li>
            <span className="font-semibold">Reticulación:</span> las moléculas
            se &quot;entrelazan&quot; para hacer el producto más estable y
            duradero, de forma que mantiene su viscosidad durante más tiempo.
          </li>
        </ul>

        <p className="text-neutral-700">
          En CotaClinic utilizamos principalmente{' '}
          <span className="font-semibold">
            ácidos hialurónicos de alta viscosidad y con reticulación
          </span>
          , que ofrecen una mayor duración del efecto, mejor tolerancia y menos
          necesidad de repetir infiltraciones. No empleamos productos de baja
          viscosidad por su menor beneficio y duración.
        </p>
      </section>

      {/* 2. PRP */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl font-semibold text-cota-slate">
          2. PRP – Plasma rico en plaquetas
        </h2>
        <p className="text-neutral-700">
          El PRP se obtiene de una pequeña muestra de sangre del propio
          paciente, que se procesa para concentrar las plaquetas y los factores
          de crecimiento. Estos factores ayudan a modular la inflamación y a
          mejorar el entorno biológico de la articulación o del tendón.
        </p>

        <h3 className="text-lg font-semibold text-cota-slate">
          ¿En qué casos lo utilizamos?
        </h3>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>Artrosis de rodilla leve o moderada.</li>
          <li>Lesiones condrales y meniscales degenerativas.</li>
          <li>Tendinopatías (rotuliana, Aquiles, epicondilitis, etc.).</li>
        </ul>
        <p className="text-neutral-700">
          En muchos pacientes el PRP permite reducir el dolor y mejorar la
          función, sobre todo si se acompaña de un buen programa de ejercicio
          terapéutico y control de factores mecánicos.
        </p>

        <h3 className="text-lg font-semibold text-cota-slate">
          PRP pobre vs rico en leucocitos
        </h3>
        <p className="text-neutral-700">
          No todos los PRP son iguales. Una diferencia importante es la cantidad
          de leucocitos (glóbulos blancos):
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <span className="font-semibold">
              PRP pobre en leucocitos (LP-PRP):
            </span>{' '}
            ideal para articulaciones (cartílago, menisco, artrosis), ya que
            genera menos inflamación postinfiltración.
          </li>
          <li>
            <span className="font-semibold">
              PRP rico en leucocitos (LR-PRP):
            </span>{' '}
            puede ser útil en algunas tendinopatías donde buscamos un estímulo
            biológico más intenso.
          </li>
        </ul>
        <p className="text-neutral-700">
          En CotaClinic seleccionamos el tipo de PRP en función de la lesión
          (articular o tendinosa) y del perfil de cada paciente.
        </p>
      </section>

      {/* 3. Monocitos */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl font-semibold text-cota-slate">
          3. Terapia con monocitos (PBMNCs)
        </h2>
        <p className="text-neutral-700">
          Los monocitos son células de la sangre con capacidad para modular la
          inflamación y participar en procesos de reparación tisular. La terapia
          con monocitos consiste en concentrar las células mononucleares del
          propio paciente e infiltrarlas en la articulación.
        </p>
        <p className="text-neutral-700">
          En CotaClinic consideramos esta opción en casos seleccionados,
          especialmente cuando{' '}
          <span className="font-semibold">
            tratamientos estándar como el ácido hialurónico o el PRP no han sido
            suficientes
          </span>{' '}
          y el paciente mantiene dolor o limitación.
        </p>
        <p className="text-neutral-700">
          Es una opción avanzada, con un buen perfil de seguridad, que se indica
          tras una valoración cuidadosa del caso.
        </p>
      </section>

      {/* 4. Células madre adiposas */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl font-semibold text-cota-slate">
          4. Células madre derivadas del tejido adiposo
        </h2>
        <p className="text-neutral-700">
          El tejido adiposo (grasa) contiene células mesenquimales con capacidad
          antiinflamatoria y moduladora del entorno articular. En artrosis o
          lesiones condrales pueden ayudar a reducir el dolor y mejorar la
          función.
        </p>
        <p className="text-neutral-700">
          En CotaClinic valoramos estas terapias en pacientes muy seleccionados,
          sobre todo cuando{' '}
          <span className="font-semibold">
            el tratamiento con ácido hialurónico y PRP no ha dado el resultado
            esperado
          </span>
          . Son técnicas avanzadas, con evidencia científica prometedora, que se
          indican dentro de protocolos controlados y con una explicación clara
          al paciente.
        </p>
      </section>

      {/* 5. Proloterapia y ozonoterapia */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl font-semibold text-cota-slate">
          5. Proloterapia y ozonoterapia
        </h2>
        <p className="text-neutral-700">
          También disponemos de tratamientos complementarios como la
          proloterapia y la ozonoterapia, que pueden utilizarse de forma aislada
          o combinados con otras terapias biológicas.
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <span className="font-semibold">Proloterapia:</span> infiltración
            con dextrosa en ligamentos o zonas dolorosas para estimular
            mecanismos locales de reparación.
          </li>
          <li>
            <span className="font-semibold">Ozonoterapia:</span> mezcla de
            oxígeno-ozono con efecto modulador del dolor y la inflamación en
            determinadas articulaciones.
          </li>
        </ul>
        <p className="text-neutral-700">
          Se plantean siempre dentro de una estrategia global que incluye
          ejercicio, corrección de factores mecánicos y, cuando es necesario),
          otras terapias biológicas.
        </p>
      </section>

      {/* Comparativa de terapias */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl font-semibold text-cota-slate">
          Comparativa orientativa de las terapias biológicas
        </h2>
        <p className="text-neutral-700">
          De forma resumida, estas son las características aproximadas de cada
          tratamiento. La indicación final siempre se decide de forma individual
          tras la valoración médica.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-neutral-200 text-sm">
            <thead className="bg-neutral-50">
              <tr>
                <th className="border-b border-neutral-200 px-3 py-2 text-left font-semibold">
                  Terapia
                </th>
                <th className="border-b border-neutral-200 px-3 py-2 text-left font-semibold">
                  Ideal para
                </th>
                <th className="border-b border-neutral-200 px-3 py-2 text-left font-semibold">
                  Duración orientativa del efecto
                </th>
                <th className="border-b border-neutral-200 px-3 py-2 text-left font-semibold">
                  Tiempo de recuperación
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-neutral-50">
                <td className="border-b border-neutral-200 px-3 py-2 font-medium">
                  Ácido hialurónico alta viscosidad
                </td>
                <td className="border-b border-neutral-200 px-3 py-2">
                  Artrosis de rodilla leve-moderada
                </td>
                <td className="border-b border-neutral-200 px-3 py-2">
                  Aproximadamente 6–12 meses
                </td>
                <td className="border-b border-neutral-200 px-3 py-2">
                  Actividad habitual en 24–48 horas
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-neutral-50">
                <td className="border-b border-neutral-200 px-3 py-2 font-medium">
                  PRP (plasma rico en plaquetas)
                </td>
                <td className="border-b border-neutral-200 px-3 py-2">
                  Cartílago, menisco, tendinopatías
                </td>
                <td className="border-b border-neutral-200 px-3 py-2">
                  Aproximadamente 6–24 meses
                </td>
                <td className="border-b border-neutral-200 px-3 py-2">
                  Molestias leves 24–72 horas
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-neutral-50">
                <td className="border-b border-neutral-200 px-3 py-2 font-medium">
                  Monocitos (PBMNCs)
                </td>
                <td className="border-b border-neutral-200 px-3 py-2">
                  Artrosis cuando AH/PRP no han funcionado
                </td>
                <td className="border-b border-neutral-200 px-3 py-2">
                  Habitualmente 6–12 meses
                </td>
                <td className="border-b border-neutral-200 px-3 py-2">
                  Actividad ligera en 24–48 horas
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-neutral-50">
                <td className="border-b border-neutral-200 px-3 py-2 font-medium">
                  Células madre de tejido adiposo
                </td>
                <td className="border-b border-neutral-200 px-3 py-2">
                  Artrosis y lesiones condrales seleccionadas
                </td>
                <td className="border-b border-neutral-200 px-3 py-2">
                  12 meses o más (variable según el caso)
                </td>
                <td className="border-b border-neutral-200 px-3 py-2">
                  Actividad ligera en pocos días
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-neutral-50">
                <td className="border-b border-neutral-200 px-3 py-2 font-medium">
                  Proloterapia / ozonoterapia
                </td>
                <td className="border-b border-neutral-200 px-3 py-2">
                  Dolor articular o tendinoso, complemento a otras terapias
                </td>
                <td className="border-b border-neutral-200 px-3 py-2">
                  Variable según protocolo y paciente
                </td>
                <td className="border-b border-neutral-200 px-3 py-2">
                  Recuperación rápida, actividad habitual en 24–48 horas
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA final */}
      <section className="mb-4 space-y-3">
        <h2 className="text-xl font-semibold text-cota-slate">
          ¿Qué terapia biológica es la mejor para tu caso?
        </h2>
        <p className="text-neutral-700">
          No existe un tratamiento único que sirva para todos los pacientes. En
          CotaClinic estudiamos cada caso de forma individual para ofrecer la
          combinación más adecuada de ejercicio, control mecánico y terapias
          biológicas.
        </p>
        <p className="text-neutral-700">
          Si tienes dolor de rodilla, una lesión de cartílago, menisco o una
          tendinopatía que no mejora, podemos ayudarte a valorar si alguna de
          estas opciones es adecuada para ti.
        </p>
      </section>
    </article>
  );
}
