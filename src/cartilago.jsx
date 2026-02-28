// src/pages/cartilago.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';
import { useHead } from './hooks/useHead';
import FloatingCta from './components/FloatingCta.jsx';

export default function CartilagoPage() {
  // OBJETIVO SEO
  // Keyword principal: lesión de cartílago de rodilla Barcelona
  // Keywords secundarias: lesión osteocondral rodilla, microfracturas rodilla, AMIC Chondro-Gide,
  // OATS mosaicoplastia, aloinjerto osteocondral OCA, osteocondritis disecante, dolor rodilla cartílago
  // Localización: Barcelona
  // Tipo de paciente: con diagnóstico por RMN/TAC, dolor/derrame con lesión condral u osteocondral, busca tratamiento conservador o cirugía reparadora

  useHead({
    title: 'Lesión de cartílago de rodilla en Barcelona | CotaSport Clinic',
    description:
      'Lesiones condrales y osteocondrales de rodilla: diagnóstico, indicación y opciones (microfracturas, matrices, OATS/OCA). Recuperación y resultados.',
  });

  return (
    <Article>
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          Rodilla
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          Lesión de cartílago (osteocondral) de rodilla en Barcelona
        </h1>

        <p className="mt-4 text-neutral-600">
          Las lesiones de cartílago y las lesiones osteocondrales (cartílago +
          hueso subcondral) pueden provocar dolor, derrame recurrente y
          limitación para el deporte. En CotaSport Clinic (Barcelona) tratamos
          estos defectos con un enfoque práctico: confirmar el tipo y tamaño de
          la lesión, corregir factores asociados (eje, estabilidad, menisco) y
          elegir la técnica más adecuada, desde opciones conservadoras hasta
          injertos osteocondrales.
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          <Link
            to="/contacto"
            className="text-sm font-medium text-cota-navy hover:underline"
          >
            Solicitar valoración por lesión de cartílago →
          </Link>
        </div>
      </header>

      {/* 1) Introducción clara */}
      <section className="mb-10 space-y-3">
        <p className="text-neutral-700">
          Si ya tienes una RMN y te han hablado de “lesión condral” o “lesión
          osteocondral”, lo más importante es saber{' '}
          <strong>qué tamaño tiene</strong>, si afecta al hueso subcondral y si
          hay factores que la empeoran (inestabilidad, menisco, varo/valgo).
          Esto es lo que determina el tratamiento y la recuperación.
        </p>
        <p className="text-neutral-700">
          El cartílago no se regenera de forma espontánea como otros tejidos,
          por lo que el objetivo suele ser aliviar síntomas y, cuando está
          indicado, <strong>reparar o reconstruir</strong> el defecto con una
          técnica adecuada.
        </p>
      </section>

      {/* 2) ¿Qué es? */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Qué es una lesión osteocondral?
        </h2>
        <p className="text-neutral-700">
          Una lesión osteocondral es un daño que afecta al cartílago y al hueso
          subcondral (la capa de hueso justo por debajo del cartílago). Cuando
          el defecto es significativo, puede aparecer dolor mecánico,
          inflamación y limitación para actividades diarias o deporte.
        </p>
      </section>

      {/* 3) ¿Cuándo está indicado? (cuándo tratar) */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Cuándo conviene tratar una lesión de cartílago?
        </h2>
        <p className="text-neutral-700">
          No todas las lesiones producen síntomas. Se suelen tratar cuando hay
          dolor limitante, derrames recurrentes o síntomas mecánicos, y cuando
          el tamaño/ubicación del defecto y el perfil del paciente hacen
          probable un beneficio real.
        </p>

        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>Dolor mecánico al cargar, bajar escaleras o hacer deporte.</li>
          <li>Derrame o hinchazón recurrente (“rodilla que se inflama”).</li>
          <li>Sensación de enganche o bloqueo.</li>
          <li>Dificultad para correr, saltar o arrodillarse.</li>
        </ul>
      </section>

      {/* 4) Opciones de tratamiento */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Opciones de tratamiento
        </h2>

        <h3 className="text-lg font-semibold text-cota-slate">
          Tratamiento conservador
        </h3>
        <p className="text-neutral-700">
          No regenera el cartílago, pero puede mejorar síntomas y tolerancia a
          la carga, sobre todo en lesiones pequeñas o en pacientes de menor
          demanda.
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>Fisioterapia específica y fortalecimiento.</li>
          <li>Ajuste de carga y progresión de actividad.</li>
          <li>
            Infiltraciones en casos seleccionados (AH o PRP según indicación).
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-cota-slate">
          Tratamientos quirúrgicos (principales técnicas)
        </h3>
        <p className="text-neutral-700">
          La cirugía se indica según tamaño, profundidad, estado del hueso
          subcondral y perfil del paciente. De forma simplificada:
        </p>

        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <strong>Microfracturas / estimulación medular:</strong> para
            defectos pequeños seleccionados. Genera tejido reparador (no
            cartílago hialino), con durabilidad variable.
          </li>
          <li>
            <strong>Técnicas con matriz biológica en una etapa</strong> (por
            ejemplo, AMIC con membrana de colágeno, biomateriales moldeables o
            cartílago particulado con matriz PRP): orientadas a mejorar la
            organización de la reparación en lesiones de espesor completo
            seleccionadas.
          </li>
          <li>
            <strong>Fijación de fragmento osteocondral:</strong> cuando existe
            un fragmento viable (p. ej., osteocondritis disecante) y se puede
            preservar.
          </li>
          <li>
            <strong>Autoinjerto osteocondral (OATS / mosaicoplastia):</strong>{' '}
            para defectos pequeños-moderados con afectación del hueso
            subcondral.
          </li>
          <li>
            <strong>Aloinjerto osteocondral (OCA):</strong> para defectos
            grandes o complejos, o cirugías de revisión.
          </li>
        </ul>
      </section>

      {/* 5) Cómo es la cirugía/procedimiento */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Cómo es el procedimiento (si se indica cirugía)?
        </h2>
        <p className="text-neutral-700">
          Habitualmente se realiza por artroscopia o con una combinación
          artroscópica y abordajes pequeños según la técnica. El objetivo es
          preparar el defecto, tratar el hueso subcondral cuando corresponde y
          reconstruir la superficie articular de la forma más adecuada para ese
          caso.
        </p>
        <p className="text-neutral-700">
          Además de tratar el defecto, es fundamental corregir factores que
          “condenan” la reparación: mal eje (varo/valgo), inestabilidad, menisco
          insuficiente o alteraciones patelofemorales, cuando procede.
        </p>
      </section>

      {/* 6) Recuperación */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">Recuperación</h2>
        <p className="text-neutral-700">
          La rehabilitación depende de la localización y de la técnica (no es lo
          mismo una microfractura pequeña que un injerto osteocondral). En
          general, se organiza por fases y suele incluir un periodo de control
          de carga (a veces con descarga parcial) para proteger la zona tratada.
        </p>
        <p className="text-neutral-700">
          El objetivo es recuperar movilidad, fuerza y control neuromuscular, y
          reintroducir deporte de forma progresiva con criterios objetivos.
        </p>
      </section>

      {/* 7) Resultados */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Resultados esperables
        </h2>
        <p className="text-neutral-700">
          En pacientes bien seleccionados, las técnicas de reparación o injerto
          pueden mejorar dolor y función y permitir volver a actividades con más
          tolerancia. El resultado depende del tamaño del defecto, del hueso
          subcondral, del estado del resto de la rodilla y de la adherencia a la
          rehabilitación.
        </p>
      </section>

      {/* 8) FAQ */}
      <section className="border-t border-neutral-200 pt-6 mt-6">
        <h2 className="text-2xl font-semibold text-cota-slate">
          Preguntas frecuentes sobre lesión de cartílago de rodilla
        </h2>

        <div className="mt-6 space-y-6 text-neutral-700">
          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿El cartílago de la rodilla se regenera solo?
            </h3>
            <p className="mt-2">
              No de forma completa. En general, el cartílago tiene poca
              capacidad de regeneración. Algunas técnicas buscan estimular
              reparación o reconstruir el defecto, pero el objetivo y la técnica
              dependen del tipo y tamaño de la lesión.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Cuándo se indica microfractura y cuándo un injerto osteocondral?
            </h3>
            <p className="mt-2">
              La microfractura se reserva para defectos pequeños seleccionados.
              Cuando hay afectación relevante del hueso subcondral o el defecto
              es mayor/complexo, suelen considerarse técnicas con matriz o
              injertos osteocondrales (OATS/OCA), según tamaño y contexto.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Puedo hacer deporte con una lesión osteocondral?
            </h3>
            <p className="mt-2">
              Depende de síntomas, tamaño y localización. Si hay dolor y
              derrame, suele ser mejor ajustar carga y tratar la causa. Tras
              tratamiento, el retorno al deporte se planifica de forma
              progresiva y con criterios de fuerza y control.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cota-slate">
              ¿Por qué a veces se recomienda corregir el eje o la estabilidad
              además del cartílago?
            </h3>
            <p className="mt-2">
              Porque si la rodilla carga mal (varo/valgo) o es inestable, el
              defecto se sobrecarga y la reparación tiene peor pronóstico.
              Corregir esos factores mejora las probabilidades de un buen
              resultado.
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
          Indicamos el tratamiento según un algoritmo práctico basado en tamaño,
          profundidad y contexto de la rodilla. Si hace falta, además del
          cartílago tratamos los “modificadores” del pronóstico (eje, menisco,
          estabilidad) y estructuramos la rehabilitación para optimizar la
          recuperación.
        </p>
      </section>

      {/* 10) CTA final */}
      <section className="mb-4 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          ¿Quieres valorar tu lesión de cartílago?
        </h2>
        <p className="text-neutral-700">
          Si tienes una lesión condral u osteocondral diagnosticada y quieres
          saber qué opción tiene más sentido en tu caso, podemos ayudarte.
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
      <FloatingCta to="/contacto" label="Solicitar visita" />
    </Article>
  );
}
