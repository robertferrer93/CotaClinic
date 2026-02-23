// src/pages/inestabilidad-rotuliana.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';
import { useHead } from './hooks/useHead';

export default function InestabilidadRotulianaPage() {
  // OBJETIVO SEO
  // Keyword principal: inestabilidad rotuliana Barcelona
  // Keywords secundarias: luxación de rótula, subluxación rotuliana, reconstrucción MPFL Barcelona,
  // trocleoplastia, tuberosidad tibial (medialización/distalización), dolor femororrotuliano
  // Localización: Barcelona
  // Tipo de paciente: adolescente/adulto joven con luxaciones o sensación de “rótula que se sale”; paciente con RMN/Rx/TAC o buscando plan claro

  useHead({
    title: 'Inestabilidad rotuliana en Barcelona | CotaSport Clinic',
    description:
      'Luxación de rótula e inestabilidad patelofemoral: causas, diagnóstico y tratamiento (rehabilitación, MPFL y cirugía “a la carta”). Valoración en Barcelona.',
  });

  return (
    <Article>
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          Rodilla
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          Inestabilidad rotuliana en Barcelona
        </h1>

        <p className="mt-4 text-neutral-600">
          La inestabilidad rotuliana ocurre cuando la rótula pierde su
          trayectoria normal y tiende a desplazarse hacia fuera (subluxación) o
          a salirse completamente (luxación). En CotaSport Clinic (Barcelona)
          valoramos el problema con un enfoque estructurado: identificar qué
          factores lo causan (anatomía + control muscular) y decidir si el
          tratamiento debe ser conservador o quirúrgico, siguiendo el protocolo
          de la Escuela de Lyon (Dejour).
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          <Link
            to="/contacto"
            className="text-sm font-medium text-cota-navy hover:underline"
          >
            Solicitar valoración por inestabilidad rotuliana →
          </Link>
        </div>
      </header>

      {/* 1) Introducción clara */}
      <section className="mb-10 space-y-3">
        <p className="text-neutral-700">
          Tras un primer episodio, muchas personas notan dolor anterior,
          inflamación o sensación de que la rótula “se va”. Si hay episodios
          repetidos, el riesgo de daño del cartílago patelofemoral puede
          aumentar. Por eso es importante entender si se trata de un problema
          aislado o de una rodilla con factores anatómicos que predisponen a la
          inestabilidad.
        </p>
        <p className="text-neutral-700">
          La buena noticia es que no todos los casos requieren cirugía. La clave
          es indicar bien: rehabilitación cuando corresponde y cirugía precisa
          cuando hay inestabilidad recurrente y factores estructurales.
        </p>
      </section>

      {/* 2) ¿Qué es? */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Qué es la inestabilidad rotuliana?
        </h2>
        <p className="text-neutral-700">
          La rótula se desliza sobre un surco del fémur llamado{' '}
          <strong>tróclea femoral</strong>. La estabilidad depende de la forma
          del hueso, de la alineación del aparato extensor (cuádriceps–tendón
          rotuliano), de los ligamentos/cápsula (especialmente el{' '}
          <strong>MPFL</strong>) y del eje global de la pierna (valgo/varo y
          rotaciones).
        </p>
        <p className="text-neutral-700">
          Cuando varios de estos elementos no trabajan de forma coordinada, la
          rótula puede desplazarse lateralmente (inestabilidad) o luxarse.
        </p>
      </section>

      {/* 3) ¿Cuándo está indicado? (cuándo tratar / cuándo preocuparse) */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Cuándo conviene estudiarla a fondo?
        </h2>
        <p className="text-neutral-700">
          Recomendamos una valoración específica cuando hay luxación
          documentada, episodios repetidos, sensación de fallo frecuente o miedo
          a que se vuelva a salir la rótula (aprehensión), especialmente si
          limita deporte o vida diaria.
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>Luxación de rótula (primer episodio) con derrame importante.</li>
          <li>
            Inestabilidad recurrente (luxaciones o subluxaciones repetidas).
          </li>
          <li>Dolor patelofemoral con sensación de inseguridad.</li>
          <li>
            Antecedentes familiares o factores anatómicos conocidos (patela
            alta, displasia troclear, valgo).
          </li>
        </ul>
      </section>

      {/* 4) Opciones de tratamiento (si aplica) */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Opciones de tratamiento
        </h2>

        <h3 className="text-lg font-semibold text-cota-slate">
          Tratamiento conservador (rehabilitación)
        </h3>
        <p className="text-neutral-700">
          En el primer episodio, si no hay fracturas osteocondrales relevantes u
          otras lesiones que lo indiquen, el enfoque suele ser conservador:
          control de inflamación, recuperar movilidad y un programa de fuerza y
          control neuromuscular (cuádriceps, cadera y core). La rodillera puede
          usarse de forma temporal si ayuda.
        </p>

        <h3 className="text-lg font-semibold text-cota-slate">
          Tratamiento quirúrgico (inestabilidad recurrente)
        </h3>
        <p className="text-neutral-700">
          Cuando la inestabilidad es recurrente, el tratamiento se decide con un
          “menú a la carta” (Dejour): corregir solo los factores anatómicos que
          realmente lo requieren para evitar tanto el infratratamiento como el
          exceso de cirugía.
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <strong>Reconstrucción del MPFL:</strong> cuando hay insuficiencia
            del ligamento medial que frena la salida lateral.
          </li>
          <li>
            <strong>Cirugía de la tuberosidad tibial:</strong> medialización y/o
            distalización si hay desalineación y/o patela alta.
          </li>
          <li>
            <strong>Trocleoplastia:</strong> en displasia troclear severa
            seleccionada.
          </li>
          <li>
            <strong>Correcciones del eje/rotaciones:</strong> en casos concretos
            con valgo o torsiones relevantes.
          </li>
          <li>
            <strong>Liberación lateral:</strong> solo si existe retináculo
            lateral muy tenso y rótula no reducible, no de rutina.
          </li>
        </ul>
      </section>

      {/* 5) Cómo es la cirugía/procedimiento */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Cómo es la cirugía (si está indicada)?
        </h2>
        <p className="text-neutral-700">
          El procedimiento depende del “perfil anatómico” de tu rodilla. En la
          reconstrucción del MPFL se utiliza un injerto para restaurar la
          sujeción medial. Si además existen factores óseos (patela alta,
          tuberosidad tibial lateralizada, displasia), se combinan técnicas de
          forma planificada.
        </p>
        <p className="text-neutral-700">
          Antes de operar, revisamos exploración y pruebas de imagen para
          ajustar la indicación y explicar claramente qué se corrige y qué no.
        </p>
      </section>

      {/* 6) Recuperación */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">Recuperación</h2>
        <p className="text-neutral-700">
          La recuperación se organiza por fases: control de dolor/inflamación,
          movilidad, fuerza progresiva y reintroducción de gestos deportivos. El
          calendario exacto depende de las técnicas realizadas (solo MPFL vs
          combinaciones con osteotomías de tuberosidad o trocleoplastia).
        </p>
        <p className="text-neutral-700">
          Más allá del tiempo, buscamos criterios objetivos: buena movilidad,
          fuerza adecuada y control neuromuscular antes de autorizar deporte.
        </p>
      </section>

      {/* 7) Resultados */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Resultados esperables
        </h2>
        <p className="text-neutral-700">
          En pacientes bien seleccionados, el tratamiento (conservador o
          quirúrgico) suele mejorar la estabilidad y la confianza en la rodilla.
          La evolución depende de la combinación de factores anatómicos, del
          estado del cartílago y de la calidad de la rehabilitación.
        </p>
      </section>

      {/* 8) FAQ – estilo obligatorio (H2 + H3 + respuesta visible) */}
      <section className="border-t border-neutral-200 pt-6 mt-6">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Preguntas frecuentes sobre inestabilidad rotuliana
        </h2>

        <div className="mt-6 space-y-6 text-neutral-700">
          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Qué diferencia hay entre luxación de rótula y subluxación?
            </h3>
            <p className="mt-2">
              La subluxación es un desplazamiento parcial que vuelve a su sitio
              espontáneamente; la luxación es cuando la rótula se sale
              completamente del surco y suele requerir reducción (a veces
              espontánea, a veces asistida).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Hay que operar siempre después de una primera luxación de rótula?
            </h3>
            <p className="mt-2">
              No. Si no hay fractura osteocondral relevante u otras lesiones que
              lo indiquen, lo habitual es iniciar tratamiento conservador con
              rehabilitación. La cirugía se valora sobre todo en inestabilidad
              recurrente o en perfiles anatómicos de alto riesgo.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Cuándo se indica la reconstrucción del MPFL?
            </h3>
            <p className="mt-2">
              Se indica cuando existe inestabilidad recurrente y el MPFL está
              insuficiente (frecuente tras luxaciones repetidas). A menudo se
              combina con correcciones óseas si hay patela alta, displasia o
              desalineación relevante.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Puedo volver a hacer deporte si tengo inestabilidad rotuliana?
            </h3>
            <p className="mt-2">
              En muchos casos sí. Con rehabilitación bien planteada y, si está
              indicada, cirugía precisa, el objetivo es recuperar estabilidad y
              confianza. El retorno se decide por criterios de fuerza y control,
              no solo por fechas.
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
          Seguimos el protocolo de la Escuela de Lyon (Dejour) y analizamos con
          detalle qué factores están alterados en tu rodilla. El objetivo es un
          tratamiento personalizado: rehabilitación cuando es lo adecuado y
          cirugía “a la carta” cuando la anatomía y la clínica lo justifican.
        </p>
      </section>

      {/* 10) CTA final */}
      <section className="mb-4 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Quieres una valoración de tu inestabilidad rotuliana?
        </h2>
        <p className="text-neutral-700">
          Si has tenido una luxación de rótula o notas que “se te va” la rótula,
          podemos estudiar tu caso y explicarte opciones con claridad.
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
