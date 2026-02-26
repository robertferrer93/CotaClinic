// src/content/pathologies/protesis-rodilla.content.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const linkCls = 'text-cota-navy underline-offset-4 hover:underline';

export const PROTESIS_RODILLA_CONTENT = {
  // SEO / Schema
  url: 'https://cotasportclinic.com/rodilla/protesis-rodilla',
  metaTitle:
    'Prótesis de rodilla en Barcelona | Parcial y Total | CotaSport Clinic',
  metaDescription:
    'Especialistas en prótesis de rodilla en Barcelona. Indicaciones de prótesis parcial y total, cirugía, recuperación y valoración individualizada por expertos en rodilla.',
  title:
    'Prótesis de rodilla en Barcelona: parcial (unicompartimental) y total',
  image: 'https://cotasportclinic.com/og-image.png',
  ogType: 'article',
  published: '2026-02-25',
  modified: '2026-02-25',
  condition: 'Artrosis de rodilla',
  authorId: 'robert-ferrer-rivero',

  // UI
  eyebrow: 'Rodilla',
  intro: (
    <>
      En CotaSport Clinic (Barcelona) indicamos prótesis de rodilla con un
      criterio muy claro: confirmamos que el dolor y la limitación justifican la
      cirugía y, después, definimos si el caso encaja mejor con una prótesis
      parcial (unicompartimental) o una prótesis total. Si buscas una valoración
      o segunda opinión, revisamos tu caso de forma individualizada y te
      explicamos alternativas cuando es posible (por ejemplo,{' '}
      <Link to="/rodilla/osteotomias" className={linkCls}>
        osteotomías
      </Link>{' '}
      o tratamientos para{' '}
      <Link to="/rodilla/cartilago" className={linkCls}>
        lesiones de cartílago
      </Link>
      ).
    </>
  ),
  cta: {
    label: 'Solicitar valoración para prótesis de rodilla →',
    to: '/contacto',
  },

  related: [
    { to: '/rodilla/cartilago', label: 'Lesiones osteocondrales y cartílago' },
    { to: '/rodilla/osteotomias', label: 'Osteotomías de rodilla' },
    {
      to: '/rodilla/terapias-biologicas',
      label: 'Terapias biológicas en rodilla',
    },
    { to: '/rodilla/menisco', label: 'Lesión de menisco' },
  ],

  sections: [
    {
      id: 'que-es',
      heading: '¿Qué es una prótesis de rodilla?',
      paragraphs: [
        'La prótesis de rodilla (artroplastia) sustituye las superficies articulares desgastadas por implantes que buscan reducir el dolor y recuperar función. Se indica cuando los tratamientos conservadores ya no controlan los síntomas y la limitación afecta al día a día.',
        'El objetivo es volver a caminar, subir escaleras y realizar actividades cotidianas con más autonomía y menos dolor.',
      ],
    },

    {
      id: 'indicacion',
      heading: '¿Cuándo está indicada una prótesis de rodilla?',
      paragraphs: [
        <>
          La indicación más frecuente es el desgaste avanzado de la
          articulación. Cuando el problema afecta de forma localizada a una zona
          concreta del cartílago, pueden valorarse tratamientos específicos para{' '}
          <Link to="/rodilla/cartilago" className={linkCls}>
            lesiones osteocondrales o de cartílago
          </Link>{' '}
          con el objetivo de preservar la rodilla.
        </>,
        <>
          En cambio, cuando la afectación es más generalizada, afecta a varios
          compartimentos o se acompaña de deformidad y limitación funcional
          importante, la prótesis de rodilla suele ser la opción más fiable para
          recuperar calidad de vida. En algunos casos seleccionados, si existe
          un componente de alineación desfavorable, puede considerarse una{' '}
          <Link to="/rodilla/osteotomias" className={linkCls}>
            osteotomía de rodilla
          </Link>{' '}
          como alternativa o como parte de la estrategia de tratamiento.
        </>,
      ],
      list: [
        'Dolor persistente que limita la vida diaria.',
        'Rigidez y pérdida de movilidad.',
        'Deformidad progresiva (varo o valgo).',
        'Desgaste localizado o generalizado.',
        'Secuelas de fracturas o lesiones previas.',
        'Falta de respuesta a fisioterapia, medicación o infiltraciones.',
      ],
      footer:
        'Importante: no decidimos solo por la radiografía. Valoramos tu dolor real, estabilidad, movilidad, objetivos y expectativas.',
    },

    {
      id: 'tipos-general',
      heading: 'Tipos de prótesis de rodilla: parcial y total',
      paragraphs: [
        <>
          En función de cómo esté distribuido el desgaste, puede indicarse una
          prótesis parcial (unicompartimental) o una prótesis total. La elección
          depende del patrón de afectación, la estabilidad ligamentaria, la
          alineación y la movilidad de la rodilla. Además, valoramos lesiones
          asociadas que pueden influir en la decisión, como problemas{' '}
          <Link to="/rodilla/menisco" className={linkCls}>
            meniscales
          </Link>{' '}
          o del{' '}
          <Link to="/rodilla/cartilago" className={linkCls}>
            cartílago
          </Link>
          .
        </>,
      ],
    },

    {
      id: 'parcial',
      heading: 'Prótesis parcial (unicompartimental)',
      paragraphs: [
        <>
          La prótesis parcial sustituye solo el compartimento dañado
          (habitualmente el interno). Es una opción cuando el desgaste está bien
          localizado y el resto de la rodilla conserva buen estado, con
          ligamentos estables.
        </>,
      ],
      listRich: [
        {
          title: 'Suele ser posible si:',
          text: 'la afectación está localizada en un único compartimento, los ligamentos son estables y existe buena alineación y movilidad.',
        },
        {
          title: 'Ventajas frecuentes:',
          text: 'cirugía menos invasiva, recuperación más rápida en muchos pacientes y sensación de rodilla más “natural”.',
        },
      ],
      footer: (
        <>
          Si existe dolor por sobrecarga en un compartimento concreto pero aún
          hay margen para preservar articulación, en casos seleccionados se
          valora también la opción de{' '}
          <Link to="/rodilla/osteotomias" className={linkCls}>
            osteotomía
          </Link>{' '}
          para redistribuir cargas.
        </>
      ),
    },

    {
      id: 'total',
      heading: 'Prótesis total de rodilla',
      paragraphs: [
        'La prótesis total sustituye las superficies articulares principales de la rodilla. Es la opción más fiable cuando la afectación compromete varios compartimentos, existe deformidad importante o rigidez marcada.',
      ],
      listRich: [
        {
          title: 'Indicada cuando:',
          text: 'la afectación compromete más de un compartimento, hay deformidad significativa o el dolor y la rigidez limitan claramente la vida diaria.',
        },
      ],
      footer: (
        <>
          Si ya existe una prótesis y persisten síntomas, revisamos el caso como
          “prótesis dolorosa” para descartar causas tratables; puedes ver la
          guía específica en{' '}
          <Link to="/rodilla/protesis-dolorosa-revision" className={linkCls}>
            prótesis dolorosa y cirugía de revisión
          </Link>
          .
        </>
      ),
    },

    {
      id: 'cirugia',
      heading: '¿Cómo es la cirugía de prótesis de rodilla?',
      paragraphs: [
        <>
          La intervención se realiza en quirófano con anestesia regional o
          general. Se preparan las superficies dañadas y se colocan los
          implantes buscando restaurar el eje, la estabilidad y la movilidad de
          la rodilla. En casos seleccionados, la planificación y la ejecución
          pueden apoyarse en tecnología de{' '}
          <Link to="/rodilla/robotica" className={linkCls}>
            navegación, realidad aumentada o robótica
          </Link>{' '}
          para optimizar la precisión en pasos clave.
        </>,
        'La duración habitual es de 60 a 90 minutos, aunque varía según el caso.',
      ],
    },

    {
      id: 'recuperacion',
      heading: 'Recuperación y rehabilitación',
      paragraphs: [
        <>
          La recuperación es progresiva. El objetivo al inicio es controlar
          dolor e inflamación y recuperar movilidad; después, fuerza y función
          para volver a caminar con normalidad. En algunos pacientes se valora
          apoyo con{' '}
          <Link to="/rodilla/terapias-biologicas" className={linkCls}>
            terapias biológicas
          </Link>{' '}
          para modular síntomas o acompañar el proceso en contextos concretos
          (siempre con indicación individual).
        </>,
      ],
      listRich: [
        {
          title: 'Deambulación precoz:',
          text: 'caminar en las primeras horas o al día siguiente.',
        },
        { title: 'Ingreso corto:', text: 'habitualmente 2–4 días.' },
        {
          title: 'Rehabilitación:',
          text: 'movilidad, fuerza y reeducación de la marcha.',
        },
      ],
      footer:
        'En general, la mayoría de pacientes nota una mejoría clara del dolor en las primeras semanas, con recuperación funcional progresiva durante los siguientes meses.',
    },

    {
      id: 'resultados',
      heading: 'Resultados y durabilidad',
      paragraphs: [
        'La prótesis de rodilla suele lograr una reducción significativa del dolor y una mejora de la movilidad y la autonomía.',
        'Las prótesis actuales suelen ofrecer durabilidad media superior a 15–20 años, dependiendo del paciente, el tipo de implante y el uso.',
      ],
    },

    {
      id: 'enfoque',
      heading: 'Nuestro enfoque como especialistas en rodilla',
      list: [
        'Valoración individualizada y objetivos realistas.',
        'Priorizamos preservación articular cuando es posible.',
        'Indicamos prótesis parcial o total solo si está justificado.',
        'Protocolos actuales de cirugía y recuperación.',
      ],
    },
  ],

  faqTitle: 'Preguntas frecuentes sobre la prótesis de rodilla',
  faqs: [
    {
      q: '¿Cuánto dura una prótesis de rodilla?',
      a: 'Una prótesis de rodilla suele tener una durabilidad media superior a 15–20 años. La duración depende del tipo de implante, la técnica quirúrgica, el peso del paciente y el nivel de actividad.',
    },
    {
      q: '¿Cuánto tiempo se tarda en caminar después de una prótesis de rodilla?',
      a: 'La mayoría de pacientes comienzan a caminar con ayuda en las primeras 24 horas tras la cirugía. La recuperación es progresiva y suele permitir una marcha funcional en pocas semanas.',
    },
    {
      q: '¿Es muy dolorosa la operación de prótesis de rodilla?',
      a: 'La cirugía puede producir molestias iniciales, pero actualmente utilizamos protocolos modernos de control del dolor que permiten una recuperación más confortable y una movilización precoz.',
    },
    {
      q: '¿Qué es mejor, una prótesis parcial o una prótesis total?',
      a: 'Depende del patrón de afectación y de la estabilidad de la rodilla. Si está localizada y los ligamentos son estables, la prótesis parcial puede ser una buena opción. En casos más avanzados, la prótesis total ofrece resultados muy fiables.',
    },
    {
      q: '¿Cuándo podré conducir después de una prótesis de rodilla?',
      a: 'La conducción suele retomarse cuando el paciente tiene buen control muscular, movilidad suficiente y ausencia de dolor relevante, habitualmente entre las 4 y 6 semanas. La decisión se individualiza en función del lado operado y la evolución clínica.',
    },
  ],
};
