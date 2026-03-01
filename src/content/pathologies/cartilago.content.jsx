// src/content/pathologies/cartilago.content.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const linkCls = 'text-cota-navy underline-offset-4 hover:underline';

export const CARTILAGO_CONTENT = {
  // SEO / Schema
  url: 'https://cotasportclinic.com/rodilla/cartilago',
  metaTitle: 'Lesión de cartílago de rodilla en Barcelona | CotaSport Clinic',
  metaDescription:
    'Lesiones condrales y osteocondrales de rodilla: diagnóstico, indicación y opciones (microfracturas, matrices, OATS/OCA). Recuperación y resultados. Valoración en Barcelona.',
  title: 'Lesión de cartílago (osteocondral) de rodilla en Barcelona',
  image: 'https://cotasportclinic.com/og-image.png',
  ogType: 'article',
  published: '2026-02-25',
  modified: '2026-02-28',
  publishedUi: '25/02/2026',
  modifiedUi: '28/02/2026',
  condition: 'Lesión condral / osteocondral de rodilla',
  authorId: 'robert-ferrer-rivero',

  // UI
  eyebrow: 'Rodilla',
  intro: (
    <>
      Las lesiones de cartílago y las lesiones osteocondrales (cartílago + hueso
      subcondral) pueden provocar dolor, derrame recurrente y limitación para el
      deporte. En CotaSport Clinic (Barcelona) tratamos estos defectos con un
      enfoque práctico: confirmar el tipo y tamaño de la lesión, corregir
      factores asociados (eje, estabilidad, menisco) y elegir la técnica más
      adecuada, desde opciones conservadoras hasta injertos osteocondrales.
    </>
  ),
  cta: {
    label: 'Solicitar valoración por lesión de cartílago →',
    to: '/contacto',
  },

  related: [
    { to: '/rodilla/menisco', label: 'Lesión de menisco' },
    { to: '/rodilla/lca', label: 'Ligamento cruzado anterior (LCA)' },
    {
      to: '/rodilla/inestabilidad-rotuliana',
      label: 'Inestabilidad y luxación de rótula',
    },
    { to: '/rodilla/osteotomias', label: 'Osteotomías de rodilla' },
    {
      to: '/rodilla/terapias-biologicas',
      label: 'Terapias biológicas en rodilla',
    },
    {
      to: '/rodilla/protesis-rodilla',
      label: 'Prótesis de rodilla: parcial y total',
    },
  ],

  sections: [
    {
      id: 'intro-clinica',
      heading: 'Qué hay que saber antes de decidir tratamiento',
      paragraphs: [
        <>
          Si ya tienes una RMN y te han hablado de “lesión condral” o “lesión
          osteocondral”, lo más importante es saber{' '}
          <strong>qué tamaño tiene</strong>, si afecta al hueso subcondral y si
          hay factores que la empeoran (inestabilidad, menisco, varo/valgo).
          Esto es lo que determina el tratamiento y la recuperación.
        </>,
        <>
          El cartílago no se regenera de forma espontánea como otros tejidos,
          por lo que el objetivo suele ser aliviar síntomas y, cuando está
          indicado, <strong>reparar o reconstruir</strong> el defecto con una
          técnica adecuada. Si existe un factor mecánico claro, puede ser más
          importante corregirlo (por ejemplo, con una{' '}
          <Link to="/rodilla/osteotomias" className={linkCls}>
            osteotomía
          </Link>
          ) que “tratar solo el cartílago”.
        </>,
      ],
    },

    {
      id: 'que-es',
      heading: '¿Qué es una lesión osteocondral?',
      paragraphs: [
        'Una lesión osteocondral es un daño que afecta al cartílago y al hueso subcondral (la capa de hueso justo por debajo del cartílago). Cuando el defecto es significativo, puede aparecer dolor mecánico, inflamación y limitación para actividades diarias o deporte.',
        <>
          Estas lesiones pueden aparecer por traumatismo, sobrecarga o por
          episodios de inestabilidad. Por ejemplo, tras una{' '}
          <Link to="/rodilla/inestabilidad-rotuliana" className={linkCls}>
            luxación de rótula
          </Link>{' '}
          puede existir riesgo de lesión osteocondral en la rótula o en la
          tróclea.
        </>,
      ],
    },

    {
      id: 'cuando-tratar',
      heading: '¿Cuándo conviene tratar una lesión de cartílago?',
      paragraphs: [
        'No todas las lesiones producen síntomas. Se suelen tratar cuando hay dolor limitante, derrames recurrentes o síntomas mecánicos, y cuando el tamaño/ubicación del defecto y el perfil del paciente hacen probable un beneficio real.',
      ],
      list: [
        'Dolor mecánico al cargar, bajar escaleras o hacer deporte.',
        'Derrame o hinchazón recurrente (“rodilla que se inflama”).',
        'Sensación de enganche o bloqueo.',
        'Dificultad para correr, saltar o arrodillarse.',
      ],
      footer: (
        <>
          Si además hay una lesión del{' '}
          <Link to="/rodilla/menisco" className={linkCls}>
            menisco
          </Link>{' '}
          o inestabilidad por{' '}
          <Link to="/rodilla/lca" className={linkCls}>
            LCA
          </Link>
          , el plan cambia: no tiene sentido “reparar cartílago” si la rodilla
          sigue sobrecargando la zona o es inestable.
        </>
      ),
    },

    {
      id: 'tratamiento',
      heading: 'Opciones de tratamiento',
      paragraphs: [
        'La indicación se decide según tamaño, profundidad, estado del hueso subcondral y perfil del paciente. De forma simplificada:',
      ],
      listRich: [
        {
          title: 'Tratamiento conservador:',
          text: 'no regenera el cartílago, pero puede mejorar síntomas y tolerancia a la carga. Incluye fisioterapia específica, ajuste de carga y, en casos seleccionados, apoyo con infiltraciones.',
        },
        {
          title: 'Microfracturas / estimulación medular:',
          text: 'para defectos pequeños seleccionados. Genera tejido reparador (no cartílago hialino), con durabilidad variable.',
        },
        {
          title: 'Técnicas con matriz biológica (una etapa):',
          text: 'por ejemplo, AMIC con membrana de colágeno u otros biomateriales, orientadas a mejorar la organización de la reparación en lesiones de espesor completo seleccionadas.',
        },
        {
          title: 'Fijación de fragmento osteocondral:',
          text: 'cuando existe un fragmento viable (p. ej., osteocondritis disecante) y se puede preservar.',
        },
        {
          title: 'Autoinjerto osteocondral (OATS / mosaicoplastia):',
          text: 'para defectos pequeños-moderados con afectación del hueso subcondral.',
        },
        {
          title: 'Aloinjerto osteocondral (OCA):',
          text: 'para defectos grandes o complejos, o cirugías de revisión.',
        },
      ],
      footer: (
        <>
          En lesiones con componente inflamatorio o dolor persistente, en casos
          seleccionados puede valorarse apoyo con{' '}
          <Link to="/rodilla/terapias-biologicas" className={linkCls}>
            terapias biológicas
          </Link>{' '}
          como parte del plan global (carga, fuerza y control neuromuscular).
        </>
      ),
    },

    {
      id: 'procedimiento',
      heading: '¿Cómo es el procedimiento (si se indica cirugía)?',
      paragraphs: [
        'Habitualmente se realiza por artroscopia o con una combinación artroscópica y abordajes pequeños según la técnica. El objetivo es preparar el defecto, tratar el hueso subcondral cuando corresponde y reconstruir la superficie articular de la forma más adecuada para ese caso.',
        <>
          Además de tratar el defecto, es fundamental corregir factores que
          “condenan” la reparación: mal eje (varo/valgo), inestabilidad, menisco
          insuficiente o alteraciones patelofemorales, cuando procede. Por eso
          en algunos casos se asocia una{' '}
          <Link to="/rodilla/osteotomias" className={linkCls}>
            corrección del eje
          </Link>{' '}
          dentro de la estrategia.
        </>,
      ],
    },

    {
      id: 'recuperacion',
      heading: 'Recuperación',
      paragraphs: [
        'La rehabilitación depende de la localización y de la técnica (no es lo mismo una microfractura pequeña que un injerto osteocondral). En general, se organiza por fases y suele incluir un periodo de control de carga (a veces con descarga parcial) para proteger la zona tratada.',
        'El objetivo es recuperar movilidad, fuerza y control neuromuscular, y reintroducir deporte de forma progresiva con criterios objetivos.',
      ],
    },

    {
      id: 'resultados',
      heading: 'Resultados esperables',
      paragraphs: [
        'En pacientes bien seleccionados, las técnicas de reparación o injerto pueden mejorar dolor y función y permitir volver a actividades con más tolerancia. El resultado depende del tamaño del defecto, del hueso subcondral, del estado del resto de la rodilla y de la adherencia a la rehabilitación.',
        <>
          Cuando la afectación del cartílago es difusa y limita de forma
          importante, el enfoque cambia: a veces la opción más fiable para
          recuperar calidad de vida es una{' '}
          <Link to="/rodilla/protesis-rodilla" className={linkCls}>
            prótesis de rodilla
          </Link>{' '}
          (parcial o total), según el patrón de desgaste.
        </>,
      ],
    },

    {
      id: 'enfoque',
      heading: 'Nuestro enfoque en CotaSport Clinic',
      paragraphs: [
        'Indicamos el tratamiento según un algoritmo práctico basado en tamaño, profundidad y contexto de la rodilla. Si hace falta, además del cartílago tratamos los modificadores del pronóstico (eje, menisco, estabilidad) y estructuramos la rehabilitación para optimizar la recuperación.',
      ],
    },
  ],

  faqTitle: 'Preguntas frecuentes sobre lesión de cartílago de rodilla',
  faqs: [
    {
      q: '¿El cartílago de la rodilla se regenera solo?',
      a: 'No de forma completa. En general, el cartílago tiene poca capacidad de regeneración. Algunas técnicas buscan estimular reparación o reconstruir el defecto, pero la indicación depende del tipo y tamaño de la lesión.',
    },
    {
      q: '¿Cuándo se indica microfractura y cuándo un injerto osteocondral?',
      a: 'La microfractura se reserva para defectos pequeños seleccionados. Cuando hay afectación relevante del hueso subcondral o el defecto es mayor/complexo, se consideran técnicas con matriz o injertos osteocondrales (OATS/OCA), según tamaño y contexto.',
    },
    {
      q: '¿Puedo hacer deporte con una lesión osteocondral?',
      a: 'Depende de síntomas, tamaño y localización. Si hay dolor y derrame, suele ser mejor ajustar carga y tratar la causa. Tras tratamiento, el retorno al deporte se planifica de forma progresiva y con criterios de fuerza y control.',
    },
    {
      q: '¿Por qué a veces se recomienda corregir el eje o la estabilidad además del cartílago?',
      a: 'Porque si la rodilla carga mal (varo/valgo) o es inestable, el defecto se sobrecarga y la reparación tiene peor pronóstico. Corregir esos factores mejora las probabilidades de un buen resultado.',
    },
    {
      q: '¿Una luxación de rótula puede causar lesión osteocondral?',
      a: 'Sí. Tras una luxación puede aparecer una lesión osteocondral en la rótula o en la tróclea. Por eso conviene valorar bien el episodio, sobre todo si hay derrame importante o dolor persistente.',
    },
  ],
};
