// src/lca.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';
import { useHead } from './hooks/useHead';
import JsonLd from './components/JsonLd.jsx';

export default function LCAPage() {
  useHead({
    title:
      'Cirugía de Ligamento Cruzado Anterior (LCA) en Barcelona | CotaSport Clinic',
    description:
      'Especialistas en cirugía del ligamento cruzado anterior (LCA) en Barcelona. Diagnóstico, indicación quirúrgica, opciones de injerto y recuperación. Solicita valoración o segunda opinión.',
    canonical: 'https://cotasportclinic.com/rodilla/lca',
  });
  return (
    <Article>
      <JsonLd id="ld-lca" data={LCA_SCHEMA} />
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          Rodilla
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          Cirugía de ligamento cruzado anterior (LCA) en Barcelona
        </h1>

        <p className="mt-4 text-neutral-600">
          En CotaSport Clinic (Barcelona) valoramos y tratamos la lesión del
          ligamento cruzado anterior (LCA) con un enfoque práctico: diagnóstico
          preciso, indicación clara (operar o no) y un plan de recuperación
          orientado a volver a tu actividad con seguridad. Si buscas una segunda
          opinión con resonancia o quieres valorar cirugía, te ayudamos a
          decidir con criterio.
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          <Link
            to="/contacto"
            className="text-sm font-medium text-cota-navy hover:underline"
          >
            Solicitar valoración por LCA →
          </Link>
        </div>
      </header>

      {/* Síntomas */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Síntomas habituales de la rotura del LCA
        </h2>
        <p className="text-neutral-700">
          La lesión del LCA es frecuente en deportes de pivotaje como fútbol,
          baloncesto, esquí o pádel. Suele producirse en un giro brusco con la
          rodilla en ligera flexión, muchas veces sin contacto directo.
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>Sensación de “chasquido” en el momento de la lesión.</li>
          <li>Inflamación o derrame en las primeras horas.</li>
          <li>Inestabilidad al girar o cambiar de dirección.</li>
          <li>Dificultad para volver al deporte.</li>
        </ul>
      </section>

      {/* Anatomía */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Anatomía y función
        </h2>
        <p className="text-neutral-700">
          El ligamento cruzado anterior conecta el fémur con la tibia y es clave
          para la estabilidad anterior y rotacional de la rodilla. Su función es
          especialmente importante en giros, cambios de dirección y saltos.
          Cuando se rompe, puede aumentar el riesgo de lesiones meniscales y del
          cartílago si existe inestabilidad repetida.
        </p>
      </section>

      {/* Diagnóstico */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">Diagnóstico</h2>
        <p className="text-neutral-700">
          El diagnóstico se basa en la historia clínica y la exploración física,
          junto con pruebas de estabilidad específicas. La resonancia magnética
          confirma la rotura y permite valorar lesiones asociadas como daño
          meniscal, condral u otras estructuras ligamentarias.
        </p>
      </section>

      {/* Tratamiento */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Opciones de tratamiento
        </h2>

        <p className="text-neutral-700">
          No todas las roturas de LCA requieren cirugía. La decisión depende del
          grado de inestabilidad, el nivel deportivo y los objetivos personales.
        </p>

        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <strong>Tratamiento conservador:</strong> fisioterapia,
            fortalecimiento y trabajo neuromuscular en pacientes sin
            inestabilidad significativa o con baja demanda deportiva.
          </li>
          <li>
            <strong>Reconstrucción quirúrgica:</strong> recomendada en pacientes
            jóvenes, deportistas o con inestabilidad que limita su actividad.
          </li>
        </ul>
      </section>

      {/* Técnicas quirúrgicas */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Técnicas de reconstrucción del LCA
        </h2>

        <p className="text-neutral-700">
          La elección del injerto se individualiza según edad, tipo de deporte,
          anatomía y antecedentes.
        </p>

        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <strong>Tendón rotuliano (HTH):</strong> muy resistente, habitual en
            deportes de alto impacto.
          </li>
          <li>
            <strong>Isquiotibiales (ST/G):</strong> buenos resultados
            funcionales con menor dolor anterior en algunos casos.
          </li>
          <li>
            <strong>Tendón cuadricipital:</strong> alternativa versátil con
            buena resistencia.
          </li>
          <li>
            <strong>Aloinjerto:</strong> indicado en casos seleccionados, como
            revisiones o para disminuir el dolor postoperatorio, aunque tiene un
            tiempo de recuperación un poco mayor.
          </li>
        </ul>

        <p className="text-neutral-700">
          En determinados deportistas puede asociarse una técnica complementaria
          para mejorar el control rotacional.
        </p>
      </section>

      {/* Recuperación */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Recuperación y retorno al deporte
        </h2>
        <p className="text-neutral-700">
          La rehabilitación se organiza por fases: control del dolor e
          inflamación, recuperación del rango de movimiento, fortalecimiento
          progresivo, trabajo propioceptivo y readaptación deportiva.
        </p>
        <p className="text-neutral-700">
          El retorno al deporte suele situarse alrededor de los{' '}
          <strong>6–9 meses</strong>, dependiendo del injerto y del nivel
          deportivo. Más allá del tiempo, se valoran criterios objetivos de
          fuerza y control neuromuscular antes de autorizar la vuelta a la
          competición.
        </p>
      </section>

      {/* FAQ */}
      <section className="border-t border-neutral-200 pt-6 mt-6">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Preguntas frecuentes sobre la rotura del ligamento cruzado anterior
          (LCA)
        </h2>

        <div className="mt-6 space-y-6 text-neutral-700">
          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Cuándo puedo conducir o trabajar después de una cirugía de LCA?
            </h3>
            <p className="mt-2">
              Tras una reconstrucción del ligamento cruzado anterior, la
              conducción y el regreso al trabajo suelen ser posibles entre las 3
              y 6 semanas, dependiendo del lado operado, el control muscular y
              el tipo de actividad laboral.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Cuándo se puede volver a correr después de una rotura de LCA?
            </h3>
            <p className="mt-2">
              La carrera suele iniciarse de forma progresiva a partir de los 3–4
              meses, siempre que exista buena fuerza, estabilidad y control
              neuromuscular. El calendario se individualiza según evolución.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Se puede volver al mismo nivel deportivo tras una rotura de LCA?
            </h3>
            <p className="mt-2">
              En muchos casos sí. El retorno al deporte competitivo suele
              plantearse alrededor de los 6–9 meses, tras completar la
              rehabilitación y superar pruebas funcionales específicas que
              garanticen estabilidad y seguridad.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Qué ocurre si no me opero una rotura del ligamento cruzado
              anterior?
            </h3>
            <p className="mt-2">
              Algunas rodillas pueden adaptarse con tratamiento conservador,
              pero en pacientes activos la inestabilidad puede aumentar el
              riesgo de lesiones meniscales y del cartílago a medio y largo
              plazo.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Qué injerto es mejor en la cirugía de LCA?
            </h3>
            <p className="mt-2">
              No existe un injerto “mejor” universal. La elección entre tendón
              rotuliano, isquiotibiales o tendón cuadricipital depende de la
              edad, el tipo de deporte y las características individuales del
              paciente.
            </p>
          </div>
        </div>
      </section>
    </Article>
  );
}
