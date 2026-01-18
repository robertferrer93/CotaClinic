// src/robotica.jsx
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';

export default function RoboticaPage() {
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
          La cirugía de prótesis de rodilla ha evolucionado gracias a la
          incorporación de tecnologías que permiten{' '}
          <strong>
            mejorar la precisión en momentos clave de la intervención
          </strong>
          . Estas herramientas resultan especialmente útiles en{' '}
          <strong>cirugías complejas</strong>, ya sea por la anatomía del
          paciente, la existencia de cirugías previas, deformidades importantes
          o la presencia de <strong>material de osteosíntesis</strong>.
        </p>

        <p className="mt-3 text-neutral-600">
          Es importante remarcar que{' '}
          <strong>
            no todos los pacientes necesitan asistencia tecnológica
          </strong>
          . Su indicación debe individualizarse y utilizarse cuando aporta un
          beneficio real, siempre como apoyo a la experiencia del cirujano.
        </p>

        <div className="mt-5">
          <Link to="/" className="text-sm text-cota-navy hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <section className="space-y-10">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            ¿Qué entendemos por asistencia quirúrgica?
          </h2>

          <p className="mt-3 text-neutral-700">
            La asistencia quirúrgica engloba sistemas que ayudan al cirujano a
            visualizar y comprobar la orientación de los cortes, medir con
            precisión las resecciones óseas, ajustar la alineación y el balance
            ligamentario, y verificar los resultados antes de implantar la
            prótesis.
          </p>

          <div className="mt-5 rounded-2xl bg-cota-sky p-5">
            <p className="text-neutral-700">
              El objetivo final es conseguir una rodilla{' '}
              <strong>estable</strong>, <strong>alineada</strong> y{' '}
              <strong>funcional</strong>, adaptada a la anatomía de cada
              paciente.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Realidad aumentada (RA): precisión visual en tiempo real
          </h2>

          <p className="mt-3 text-neutral-700">
            La <strong>realidad aumentada</strong> permite superponer
            información digital directamente en el campo de visión del cirujano
            mediante un visor, facilitando una orientación precisa sin necesidad
            de grandes sistemas externos.
          </p>

          <div className="mt-5 rounded-2xl border border-neutral-200 p-5">
            <h3 className="text-lg font-semibold text-cota-slate">
              Pixee (realidad aumentada en prótesis de rodilla)
            </h3>

            <p className="mt-2 text-neutral-700">
              En <strong>Cota Clinic</strong> utilizamos la plataforma{' '}
              <strong>Pixee</strong>, que actúa como una herramienta de
              asistencia visual durante la cirugía de prótesis de rodilla.
            </p>

            <h4 className="mt-4 text-sm font-semibold text-cota-slate">
              ¿Qué aporta Pixee?
            </h4>

            <ul className="mt-2 list-disc pl-5 text-neutral-700 space-y-2">
              <li>
                Permite{' '}
                <strong>
                  visualizar el plano de corte antes de realizarlo
                </strong>
                .
              </li>
              <li>
                Informa en todo momento del <strong>ángulo exacto</strong> con
                el que se va a efectuar el corte.
              </li>
              <li>Facilita ajustes finos antes de resecar hueso.</li>
              <li>
                Ayuda a comprobar la orientación de los instrumentos de forma
                inmediata.
              </li>
            </ul>

            <p className="mt-4 text-neutral-700">
              Desde el punto de vista del paciente, la realidad aumentada aporta{' '}
              <strong>control y precisión</strong>, especialmente en situaciones
              donde pequeños cambios pueden influir en la estabilidad o en el
              funcionamiento de la rótula.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Robot quirúrgico: control y precisión en la ejecución
          </h2>

          <p className="mt-3 text-neutral-700">
            La <strong>cirugía robótica</strong> incorpora un sistema que ayuda
            a ejecutar el plan quirúrgico con un alto grado de precisión.
            Dependiendo del tipo de robot, puede guiar la realización de los
            cortes, limitar zonas de trabajo para proteger tejidos o permitir
            ajustes intraoperatorios muy precisos.
          </p>

          <div className="mt-5 rounded-2xl bg-neutral-50 border border-neutral-200 p-5">
            <p className="text-neutral-700">
              El robot no sustituye al cirujano ni “opera solo”. Es una
              herramienta que aporta <strong>consistencia</strong> y{' '}
              <strong>control</strong>, especialmente útil en casos complejos o
              cuando se busca una reproducción muy exacta del plan quirúrgico.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Navegación quirúrgica: información objetiva durante la cirugía
          </h2>

          <p className="mt-3 text-neutral-700">
            La <strong>navegación quirúrgica</strong> utiliza sensores y
            referencias anatómicas para proporcionar datos en tiempo real sobre
            la alineación de la extremidad, la orientación de los componentes y
            el balance y la estabilidad.
          </p>

          <p className="mt-3 text-neutral-700">
            Su principal ventaja es permitir una{' '}
            <strong>verificación objetiva</strong> de los parámetros críticos
            antes de finalizar la intervención. Puede ser de gran ayuda en
            deformidades, revisiones o anatomías atípicas.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Alineación cinemática: restablecer la anatomía original
          </h2>

          <p className="mt-3 text-neutral-700">
            La <strong>alineación cinemática</strong> busca reproducir, en la
            medida de lo posible, la anatomía y la forma natural de moverse de
            la rodilla antes del desgaste.
          </p>

          <p className="mt-3 text-neutral-700">
            Para ello utilizamos <strong>instrumental específico</strong> que
            permite medir el <strong>grosor del cartílago restante</strong> en
            cada superficie articular y medir con precisión{' '}
            <strong>cada corte</strong>, comparándolo con el grosor del
            implante.
          </p>

          <div className="mt-5 rounded-2xl border border-neutral-200 p-5 bg-neutral-50">
            <h3 className="text-base font-semibold text-cota-slate">
              ¿Qué se tiene en cuenta durante la cirugía?
            </h3>

            <ul className="mt-3 list-disc pl-5 text-neutral-700 space-y-2">
              <li>
                El grosor exacto de cada resección ósea y su equivalencia con el
                implante.
              </li>
              <li>El cartílago restante y el patrón de desgaste individual.</li>
              <li>La comprobación sistemática del balance y la estabilidad.</li>
            </ul>
          </div>

          <p className="mt-5 text-neutral-700">
            Este enfoque aumenta la precisión y permite{' '}
            <strong>restablecer la anatomía del paciente</strong> lo más
            parecido posible a la que tenía antes de la artrosis, mejorando la
            estabilidad y la función.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            ¿Es necesaria la asistencia tecnológica en todos los pacientes?
          </h2>

          <p className="mt-3 text-neutral-700">
            No. La elección depende de la anatomía de la rodilla, el grado de
            deformidad, cirugías previas o presencia de material, si se trata de
            una cirugía primaria o de revisión y los objetivos funcionales del
            paciente.
          </p>

          <div className="mt-5 rounded-2xl bg-cota-sky p-5">
            <p className="text-neutral-700">
              La clave es{' '}
              <strong>
                seleccionar la herramienta adecuada para cada caso
              </strong>
              , no aplicar tecnología de forma indiscriminada.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-cota-slate">
            Nuestro enfoque
          </h2>

          <p className="mt-3 text-neutral-700">
            Entendemos la asistencia quirúrgica como un <strong>medio</strong>,
            no como un fin. La utilizamos solo en los casos en los que creemos
            que puede aportar un beneficio real, y especialmente cuando se trata
            de <strong>cirugías complejas</strong> por la anatomía del paciente,
            deformidades, cirugías previas o presencia de material de
            osteosíntesis.
          </p>

          <p className="mt-3 text-neutral-700">
            Estas herramientas pueden resultar de gran utilidad para{' '}
            <strong>medir, comprobar y ajustar</strong> cada paso crítico de la
            cirugía, pero{' '}
            <strong>no son necesarias en todos los pacientes</strong>. En muchos
            casos, la <strong>técnica convencional</strong> permite obtener
            excelentes resultados.
          </p>

          <p className="mt-3 text-neutral-700">
            Cada paciente puede consultar con nuestro equipo si, en su caso
            concreto, consideramos que la asistencia tecnológica es necesaria
            para lograr un mejor resultado, o si la cirugía puede realizarse de
            forma segura y eficaz mediante técnica convencional.
          </p>

          <p className="mt-3 text-neutral-700">
            Nuestro objetivo final es siempre el mismo: conseguir una rodilla{' '}
            <strong>estable</strong>, <strong>alineada</strong> y{' '}
            <strong>funcional</strong>, adaptada a la anatomía y a las
            necesidades de cada paciente.
          </p>
        </section>

        <section className="rounded-2xl bg-cota-sky p-6">
          <h2 className="text-lg md:text-xl font-semibold text-cota-slate">
            ¿Quieres una valoración personalizada?
          </h2>

          <p className="mt-2 text-neutral-700">
            Si estás valorando una prótesis de rodilla o deseas una segunda
            opinión, podemos explicarte qué estrategia y qué nivel de asistencia
            quirúrgica encaja mejor en tu caso.
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
