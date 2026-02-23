// src/pages/osteotomias.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';
import { useHead } from './hooks/useHead';

export default function OsteotomiasPage() {
  // OBJETIVO SEO
  // Keyword principal: osteotomía de rodilla Barcelona
  // Keywords secundarias: osteotomía tibial alta (HTO) Barcelona, osteotomía femoral distal (DFO) Barcelona,
  // rodilla en varo, rodilla en valgo, artrosis localizada rodilla, cirugía para corregir eje rodilla
  // Localización: Barcelona
  // Tipo de paciente: con diagnóstico previo (Rx/RMN), dolor por desgaste localizado, paciente joven/activo que busca alternativa a prótesis

  useHead({
    title: 'Osteotomía de rodilla en Barcelona | CotaSport Clinic',
    description:
      'Cirugía para corregir el eje (varo/valgo) y descargar la zona desgastada. Indicaciones, tipos (HTO/DFO), recuperación y resultados. Solicita valoración.',
  });

  return (
    <Article>
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          Rodilla
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          Osteotomía de rodilla en Barcelona
        </h1>

        <p className="mt-4 text-neutral-600">
          La osteotomía de rodilla es una cirugía diseñada para corregir el eje
          de la pierna (varo o valgo) y redistribuir las cargas dentro de la
          articulación. En pacientes bien seleccionados puede aliviar el dolor,
          mejorar la función y retrasar la necesidad de una prótesis. Si ya
          tienes radiografías o resonancia y quieres saber si eres candidato, te
          ayudamos a decidir con criterio.
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          <Link
            to="/contacto"
            className="text-sm font-medium text-cota-navy hover:underline"
          >
            Solicitar valoración por osteotomía →
          </Link>
        </div>
      </header>

      {/* 1) Introducción clara */}
      <section className="mb-10 space-y-3">
        <p className="text-neutral-700">
          Cuando el desgaste del cartílago está localizado (por ejemplo, más en
          el compartimento interno o externo) y existe una desviación del eje,
          la rodilla “carga” de forma repetida siempre en la misma zona. En ese
          contexto, una osteotomía puede ser una alternativa razonable a una
          prótesis, especialmente en pacientes jóvenes o activos.
        </p>
        <p className="text-neutral-700">
          El objetivo no es “poner una rodilla nueva”, sino{' '}
          <strong>conservar tu propia rodilla</strong> corrigiendo de forma
          precisa la alineación para descargar el compartimento más dañado.
        </p>
      </section>

      {/* 2) ¿Qué es? */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Qué es una osteotomía de rodilla?
        </h2>
        <p className="text-neutral-700">
          Una osteotomía es un corte controlado en el hueso (tibia o fémur) para
          cambiar el eje de la pierna y redistribuir las cargas en la rodilla.
          Tras la corrección, la posición se fija con una{' '}
          <strong>placa y tornillos</strong> específicos para mantener la nueva
          alineación mientras el hueso consolida.
        </p>
      </section>

      {/* 3) ¿Cuándo está indicado? */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Cuándo está indicada una osteotomía?
        </h2>
        <p className="text-neutral-700">
          Se valora de forma individual, pero suele considerarse cuando el
          desgaste es localizado y existe un eje en varo o en valgo que
          sobrecarga una zona concreta.
        </p>

        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <strong>Artrosis localizada</strong> (compartimento interno o
            externo) con el resto de la rodilla relativamente conservado.
          </li>
          <li>
            <strong>Rodilla en varo</strong> (piernas en “paréntesis”) o{' '}
            <strong>rodilla en valgo</strong> (piernas en “X”) con sobrecarga de
            un compartimento.
          </li>
          <li>
            <strong>Paciente joven o activo</strong> en el que una prótesis
            total no es la mejor opción todavía.
          </li>
          <li>
            Dolor y limitación pese a tratamiento conservador (ejercicio,
            fisioterapia, control de carga, infiltraciones si se han probado).
          </li>
        </ul>

        <p className="text-neutral-700">
          Para decidir si eres candidato, valoramos exploración, síntomas y
          pruebas de imagen: especialmente{' '}
          <strong>radiografías de miembros inferiores en carga</strong> para
          medir el eje, y RMN cuando aporta información adicional.
        </p>
      </section>

      {/* 4) Opciones de tratamiento (si aplica) */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Alternativas y opciones de tratamiento
        </h2>
        <p className="text-neutral-700">
          La osteotomía no es la única opción. Según el caso, puede tener más
          sentido insistir en tratamiento conservador, plantear cirugía
          artroscópica en indicaciones concretas o, si el desgaste es avanzado,
          valorar prótesis (parcial o total).
        </p>
        <p className="text-neutral-700">
          La clave es elegir la opción que mejor encaje con tu diagnóstico,
          edad, nivel de actividad y expectativas realistas.
        </p>
      </section>

      {/* 5) Cómo es la cirugía/procedimiento */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Cómo es la cirugía de osteotomía?
        </h2>
        <p className="text-neutral-700">
          La intervención se realiza en quirófano con anestesia raquídea o
          general, en coordinación con Anestesia. Se corrige el eje según la
          planificación y se fija con una placa y tornillos. En algunos casos se
          utiliza injerto/biomaterial para favorecer la consolidación,
          dependiendo del tipo de corrección.
        </p>
        <p className="text-neutral-700">
          La estancia hospitalaria suele ser de pocos días. Se inicia movilidad
          según protocolo, control del dolor y prevención de complicaciones.
        </p>
      </section>

      {/* 6) Recuperación */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">Recuperación</h2>
        <p className="text-neutral-700">
          La recuperación es progresiva y depende del tipo de osteotomía y del
          grado de corrección. Como es una cirugía sobre el hueso, es normal que
          se requiera un periodo de consolidación antes de aumentar cargas.
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            Rehabilitación por fases: movilidad, control de inflamación y
            fortalecimiento progresivo.
          </li>
          <li>
            La carga (apoyo) se pauta de forma individual según estabilidad de
            la fijación y evolución radiográfica.
          </li>
          <li>
            El retorno a deporte se individualiza; suele priorizarse bajo
            impacto y progresión según fuerza y tolerancia.
          </li>
        </ul>
      </section>

      {/* 7) Resultados */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Resultados esperables
        </h2>
        <p className="text-neutral-700">
          En pacientes bien seleccionados, la osteotomía suele mejorar el dolor
          y la función al descargar el compartimento más afectado. El objetivo
          es ganar años de buena calidad de vida con tu rodilla y retrasar (no
          “garantizar evitar”) una prótesis.
        </p>
        <p className="text-neutral-700">
          El pronóstico depende del grado de desgaste, la corrección del eje, el
          estado del resto de compartimentos y la adherencia a la
          rehabilitación.
        </p>
      </section>

      {/* 8) FAQ – estilo obligatorio (H2 + H3 + respuesta visible) */}
      <section className="border-t border-neutral-200 pt-6 mt-6">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Preguntas frecuentes sobre osteotomía de rodilla
        </h2>

        <div className="mt-6 space-y-6 text-neutral-700">
          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿La osteotomía de rodilla evita una prótesis?
            </h3>
            <p className="mt-2">
              Puede retrasarla muchos años en pacientes bien seleccionados, pero
              no lo garantiza. El objetivo es aliviar dolor y mejorar función
              descargando el compartimento más desgastado.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Voy a llevar placa y tornillos para siempre tras una osteotomía?
            </h3>
            <p className="mt-2">
              Pueden quedarse de forma definitiva si no dan molestias. En
              algunos pacientes se retiran más adelante si hay irritación local
              o por motivos funcionales, una vez el hueso ha consolidado.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Cuándo notaré mejoría después de una osteotomía de rodilla?
            </h3>
            <p className="mt-2">
              La mejoría es progresiva y se nota a medida que consolida el hueso
              y avanza la rehabilitación. No es una cirugía de “resultado
              inmediato”: requiere semanas a meses de recuperación estructurada.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Podré volver a hacer deporte tras una osteotomía?
            </h3>
            <p className="mt-2">
              En muchos casos sí, especialmente actividades de bajo impacto. El
              tipo de deporte y el calendario se individualizan según tu caso,
              la consolidación y los criterios de fuerza y control.
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
          Planificamos las osteotomías con mediciones precisas del eje y una
          visión global de la extremidad. Buscamos el equilibrio entre descargar
          la zona dañada y mantener una biomecánica lo más natural posible.
        </p>
        <p className="text-neutral-700">
          Si ya dispones de radiografías en carga de toda la pierna o
          resonancia, podemos orientarte con una segunda opinión y explicarte
          alternativas.
        </p>
      </section>

      {/* 10) CTA final con botón a /contacto */}
      <section className="mb-4 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Quieres valorar si eres candidato a una osteotomía?
        </h2>
        <p className="text-neutral-700">
          Si tienes dolor con desgaste localizado y te han hablado de
          varo/valgo, podemos revisar tu caso y ayudarte a elegir la opción más
          adecuada.
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
