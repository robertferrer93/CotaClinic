// src/content/pathologies/terapias-biologicas.content.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const linkCls = 'text-cota-navy underline-offset-4 hover:underline';

export const TERAPIAS_BIOLOGICAS_CONTENT = {
  // SEO / Schema
  url: 'https://cotasportclinic.com/rodilla/terapias-biologicas',
  metaTitle:
    'Terapias biológicas para rodilla en Barcelona | PRP y AH | CotaSport Clinic',
  metaDescription:
    'PRP y ácido hialurónico para dolor de rodilla, artrosis leve-moderada y lesiones seleccionadas. Indicaciones, procedimiento, recuperación y resultados. Valoración en Barcelona.',
  title: 'Terapias biológicas para la rodilla en Barcelona',
  image: 'https://cotasportclinic.com/og-image.png',
  ogType: 'article',
  published: '2026-02-25',
  modified: '2026-02-28',
  condition:
    'Dolor de rodilla / artrosis leve-moderada / lesiones degenerativas',
  authorId: 'robert-ferrer-rivero',

  // UI
  eyebrow: 'Rodilla',
  intro: (
    <>
      En CotaSport Clinic (Barcelona) utilizamos terapias biológicas como el{' '}
      <strong>ácido hialurónico</strong> y el <strong>PRP</strong> para reducir
      dolor y modular inflamación en artrosis leve-moderada y en lesiones
      seleccionadas. Si ya tienes diagnóstico (radiografía o resonancia) y
      quieres saber si una infiltración tiene sentido en tu caso, te ayudamos a
      decidir con criterio y con un plan claro. Cuando el origen del dolor es
      mecánico, también valoramos otras opciones como la{' '}
      <Link to="/rodilla/osteotomias" className={linkCls}>
        osteotomía de rodilla
      </Link>{' '}
      o tratamientos específicos para{' '}
      <Link to="/rodilla/cartilago" className={linkCls}>
        lesiones de cartílago
      </Link>
      .
    </>
  ),
  cta: {
    label: 'Solicitar valoración por terapias biológicas →',
    to: '/contacto',
  },

  related: [
    { to: '/rodilla/cartilago', label: 'Lesiones osteocondrales y cartílago' },
    { to: '/rodilla/menisco', label: 'Lesión de menisco' },
    { to: '/rodilla/osteotomias', label: 'Osteotomías de rodilla' },
    {
      to: '/rodilla/protesis-rodilla',
      label: 'Prótesis de rodilla: parcial y total',
    },
  ],

  sections: [
    {
      id: 'introduccion',
      heading: 'Cómo entendemos las terapias biológicas',
      paragraphs: [
        'Las terapias biológicas son tratamientos mínimamente invasivos que se integran en una estrategia global: control de carga, fuerza, movilidad y, cuando procede, infiltraciones para mejorar el entorno de la articulación.',
        'No son “milagrosas” ni sirven para todos, pero en los casos adecuados pueden mejorar dolor y función y ayudar a retrasar opciones más agresivas.',
      ],
    },

    {
      id: 'que-son',
      heading: '¿Qué son las terapias biológicas?',
      paragraphs: [
        'Son tratamientos que utilizan componentes del propio organismo (por ejemplo, derivados sanguíneos) o biomateriales biocompatibles para modular la inflamación y optimizar el entorno articular.',
        'Su objetivo principal suele ser reducir dolor y mejorar función, especialmente en artrosis leve-moderada o en lesiones degenerativas seleccionadas.',
      ],
    },

    {
      id: 'indicaciones',
      heading: '¿Cuándo están indicadas en la rodilla?',
      paragraphs: [
        <>
          La indicación depende del diagnóstico, el grado de desgaste y tus
          objetivos. En consulta valoramos exploración, mecánica y pruebas de
          imagen (Rx y/o RMN) para elegir la opción más razonable. Si hay una
          lesión focal, por ejemplo del{' '}
          <Link to="/rodilla/cartilago" className={linkCls}>
            cartílago
          </Link>{' '}
          o un problema{' '}
          <Link to="/rodilla/menisco" className={linkCls}>
            meniscal
          </Link>
          , la estrategia cambia respecto a un desgaste difuso.
        </>,
      ],
      list: [
        'Artrosis leve o moderada con dolor persistente pese a un plan de ejercicio bien planteado.',
        'Lesiones de cartílago (condrales) seleccionadas.',
        'Menisco degenerativo en casos concretos.',
        'Tendinopatías (rotuliana, Aquiles, etc.) que no mejoran con carga progresiva.',
      ],
      footer: (
        <>
          En artrosis avanzada con deformidad importante, el beneficio suele ser
          más limitado y conviene valorar alternativas: en casos seleccionados,
          una{' '}
          <Link to="/rodilla/osteotomias" className={linkCls}>
            osteotomía
          </Link>{' '}
          puede ayudar a redistribuir cargas; y cuando el deterioro es
          generalizado, puede indicarse una{' '}
          <Link to="/rodilla/protesis-rodilla" className={linkCls}>
            prótesis de rodilla
          </Link>
          .
        </>
      ),
    },

    {
      id: 'opciones',
      heading: 'Opciones de tratamiento: principales terapias biológicas',
      paragraphs: [
        'La elección se individualiza. Te explicamos objetivos, límites y qué encaja mejor según el patrón de dolor, el grado de desgaste y tu nivel de actividad.',
      ],
      listRich: [
        {
          title: 'Ácido hialurónico (AH):',
          text: 'actúa como lubricante y amortiguador del líquido sinovial; puede mejorar dolor y movilidad en pacientes bien indicados, especialmente en artrosis leve-moderada.',
        },
        {
          title: 'PRP (plasma rico en plaquetas):',
          text: 'se obtiene de la sangre del propio paciente y busca modular la inflamación y mejorar el entorno biológico del tejido; suele considerarse en artrosis leve-moderada, lesiones condrales y situaciones degenerativas seleccionadas.',
        },
        {
          title: 'Opciones avanzadas (casos seleccionados):',
          text: 'en contextos concretos pueden considerarse terapias más avanzadas; se indican con prudencia y tras explicar claramente objetivos y límites.',
        },
      ],
    },

    {
      id: 'procedimiento',
      heading: '¿Cómo es el procedimiento?',
      paragraphs: [
        'La mayoría de terapias biológicas se realizan en consulta de forma ambulatoria. Tras confirmar la indicación, se realiza asepsia estricta y la infiltración se efectúa con técnica mínimamente invasiva.',
        'En casos seleccionados puede utilizarse guía ecográfica para mejorar la precisión. En PRP, además, se realiza la extracción y el procesado de la muestra antes de la infiltración.',
      ],
    },

    {
      id: 'recuperacion',
      heading: 'Recuperación',
      paragraphs: [
        'La recuperación suele ser rápida. Es frecuente notar molestias leves durante 24–72 horas. En general recomendamos ajustar la carga y retomar progresivamente la actividad según síntomas.',
        'El resultado mejora cuando se acompaña de un plan de ejercicio terapéutico (fuerza, control neuromuscular y movilidad) y corrección de factores mecánicos.',
      ],
    },

    {
      id: 'resultados',
      heading: 'Resultados esperables',
      paragraphs: [
        'El objetivo habitual es mejorar dolor y función y aumentar la tolerancia a la carga. La duración del efecto varía según el diagnóstico, el grado de desgaste y el plan de rehabilitación.',
        'En consulta te orientamos sobre qué puedes esperar de forma realista y qué alternativa tiene más sentido si el beneficio probable es bajo.',
      ],
    },

    {
      id: 'enfoque',
      heading: 'Enfoque del equipo',
      paragraphs: [
        'Somos un equipo centrado en patología de rodilla y en pacientes que ya vienen con diagnóstico o pruebas de imagen. Indicamos terapias biológicas cuando aportan valor real y siempre dentro de un plan global (rehabilitación, control de carga y objetivos funcionales).',
      ],
    },
  ],

  faqTitle: 'Preguntas frecuentes sobre terapias biológicas para rodilla',
  faqs: [
    {
      q: '¿Las terapias biológicas evitan la cirugía?',
      a: 'No siempre. En casos bien indicados pueden mejorar dolor y función y ayudar a retrasar tratamientos más agresivos. Si existe artrosis avanzada o un problema mecánico claro, otras opciones pueden ser más efectivas.',
    },
    {
      q: '¿Qué es mejor para la rodilla: PRP o ácido hialurónico?',
      a: 'Depende del grado de desgaste y del objetivo. El ácido hialurónico se orienta más al alivio sintomático y lubricación; el PRP busca modular inflamación. La decisión se individualiza tras valorar pruebas de imagen, síntomas y nivel de actividad.',
    },
    {
      q: '¿Cuándo se nota el efecto de una infiltración biológica?',
      a: 'Suele ser progresivo en semanas y varía según la técnica y el caso. Más allá de los primeros días, se valora la respuesta junto con un plan de ejercicio y control de carga.',
    },
    {
      q: '¿Cuántas sesiones o infiltraciones necesito?',
      a: 'No existe un número universal. Depende de la técnica, del diagnóstico y de la respuesta. Tras la valoración, proponemos un protocolo razonable y revisiones para decidir si repetir o ajustar la estrategia.',
    },
    {
      q: '¿Puedo hacer deporte después de una infiltración?',
      a: 'Habitualmente se recomienda ajustar la carga 24–72 horas y retomar la actividad de forma progresiva según síntomas. El plan se individualiza según diagnóstico y tipo de infiltración.',
    },
  ],
};
