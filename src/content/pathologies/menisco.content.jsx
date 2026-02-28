// src/content/pathologies/menisco.content.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const linkCls = 'text-cota-navy underline-offset-4 hover:underline';

export const MENISCO_CONTENT = {
  // SEO / Schema
  url: 'https://cotasportclinic.com/rodilla/menisco',
  metaTitle: 'Rotura de menisco en Barcelona | CotaSport Clinic',
  metaDescription:
    'Especialistas en lesiones meniscales. Cuándo operar, cuándo no, opciones (sutura vs meniscectomía), recuperación y resultados. Valoración en Barcelona.',
  title: 'Lesión de menisco en Barcelona',
  image: 'https://cotasportclinic.com/og-image.png',
  ogType: 'article',
  published: '2026-02-25',
  modified: '2026-02-28',
  condition: 'Lesión/rotura meniscal de rodilla',
  authorId: 'robert-ferrer-rivero',

  // UI
  eyebrow: 'Rodilla',
  intro: (
    <>
      Las lesiones meniscales son una causa frecuente de dolor, chasquidos o
      bloqueo de rodilla. En CotaSport Clinic (Barcelona) valoramos tu caso con
      un enfoque práctico: confirmar el tipo de rotura (traumática o
      degenerativa), decidir si el tratamiento debe ser conservador o
      quirúrgico y, si se opera, priorizar la preservación del menisco cuando es
      posible. Si hay lesiones asociadas como{' '}
      <Link to="/rodilla/lca" className={linkCls}>
        LCA
      </Link>{' '}
      o afectación del{' '}
      <Link to="/rodilla/cartilago" className={linkCls}>
        cartílago
      </Link>
      , lo integramos en la estrategia.
    </>
  ),
  cta: {
    label: 'Solicitar valoración por menisco →',
    to: '/contacto',
  },

  related: [
    { to: '/rodilla/lca', label: 'Ligamento cruzado anterior (LCA)' },
    { to: '/rodilla/cartilago', label: 'Lesiones osteocondrales y cartílago' },
    {
      to: '/rodilla/terapias-biologicas',
      label: 'Terapias biológicas en rodilla',
    },
    { to: '/rodilla/osteotomias', label: 'Osteotomías de rodilla' },
  ],

  sections: [
    {
      id: 'introduccion',
      heading: 'Cómo enfocamos una rotura de menisco',
      paragraphs: [
        <>
          Si ya tienes una resonancia o te han dicho que tienes una “rotura de
          menisco”, la pregunta clave no es solo qué tipo de rotura es, sino{' '}
          <strong>si realmente explica tus síntomas</strong> y qué estrategia
          ofrece el mejor resultado a medio-largo plazo.
        </>,
        <>
          En muchas roturas (sobre todo degenerativas), la primera opción suele
          ser un tratamiento conservador bien dirigido. En roturas traumáticas
          inestables o con bloqueo, la cirugía puede ser necesaria, y cuando se
          opera intentamos <strong>preservar el menisco</strong> siempre que sea
          reparable.
        </>,
      ],
    },

    {
      id: 'que-es',
      heading: '¿Qué es el menisco y para qué sirve?',
      paragraphs: [
        <>
          Los meniscos son dos estructuras fibrocartilaginosas situadas entre el
          fémur y la tibia. Su función principal es{' '}
          <strong>repartir cargas</strong>, <strong>proteger el cartílago</strong>
          , <strong>mejorar la estabilidad</strong> y contribuir a la{' '}
          <strong>propiocepción</strong> de la rodilla.
        </>,
        <>
          Cuando el menisco se lesiona o se pierde tejido, aumenta el estrés
          sobre el{' '}
          <Link to="/rodilla/cartilago" className={linkCls}>
            cartílago
          </Link>{' '}
          y, a largo plazo, puede incrementarse el riesgo de deterioro articular.
        </>,
      ],
    },

    {
      id: 'cuando-tratar',
      heading:
        '¿Cuándo una rotura de menisco requiere tratamiento específico?',
      paragraphs: [
        <>
          Depende del tipo de rotura y de tus síntomas. Hay roturas que se
          encuentran en la RMN y no son el origen principal del dolor, sobre
          todo en lesiones degenerativas asociadas a cambios del{' '}
          <Link to="/rodilla/cartilago" className={linkCls}>
            cartílago
          </Link>
          .
        </>,
      ],
      listRich: [
        {
          title: 'Bloqueo real:',
          text: 'la rodilla se queda “enganchada” y no se puede extender o flexionar.',
        },
        {
          title: 'Síntomas mecánicos claros:',
          text: 'fallos o enganches repetidos con correlación en la exploración.',
        },
        {
          title: 'Roturas traumáticas en pacientes activos:',
          text: 'especialmente si son inestables o tipo “asa de cubo”.',
        },
      ],
      footer: (
        <>
          En roturas degenerativas (frecuentes a partir de 35–40 años), muchas
          veces el dolor se relaciona más con el entorno articular (sinovitis,
          desgaste, cartílago) que con la rotura en sí. En estos casos, la
          artroscopia no suele ser el primer paso si no hay bloqueo o síntomas
          mecánicos significativos. A veces puede tener sentido un enfoque con
          ejercicio y, en casos seleccionados,{' '}
          <Link to="/rodilla/terapias-biologicas" className={linkCls}>
            terapias biológicas
          </Link>
          .
        </>
      ),
    },

    {
      id: 'tratamiento',
      heading: 'Opciones de tratamiento para una rotura de menisco',
      paragraphs: [
        'La estrategia se decide con síntomas + exploración + imagen, y teniendo en cuenta edad, nivel de actividad y lesiones asociadas.',
      ],
      listRich: [
        {
          title: 'Tratamiento conservador:',
          text: 'fisioterapia (fuerza, movilidad, control neuromuscular), progresión de carga, medidas antiinflamatorias si procede e infiltraciones en casos seleccionados.',
        },
        {
          title: 'Tratamiento quirúrgico (artroscopia):',
          text: 'se plantea si hay roturas traumáticas inestables, bloqueo o persistencia de síntomas pese a tratamiento conservador bien realizado.',
        },
        {
          title: 'Sutura / reparación meniscal:',
          text: 'opción preferente si la rotura es reparable: preservar menisco protege mejor la rodilla a largo plazo.',
        },
        {
          title: 'Meniscectomía parcial:',
          text: 'para roturas irreparables o fallos de reparación, retirando lo mínimo imprescindible.',
        },
      ],
      footer: (
        <>
          La decisión también depende de lesiones asociadas. Por ejemplo, una
          rotura meniscal junto a inestabilidad por{' '}
          <Link to="/rodilla/lca" className={linkCls}>
            lesión del LCA
          </Link>{' '}
          puede cambiar la indicación y el plan.
        </>
      ),
    },

    {
      id: 'cirugia',
      heading: '¿Cómo es la cirugía del menisco?',
      paragraphs: [
        'La cirugía suele realizarse por artroscopia (incisiones pequeñas) y el objetivo es tratar la rotura minimizando la pérdida de tejido. Cuando es posible, se repara (sutura). Si no es reparable, se realiza una meniscectomía parcial conservando el máximo menisco sano.',
        'En el mismo acto se valoran y tratan lesiones asociadas si procede (cartílago, sinovitis, estabilidad, etc.).',
      ],
    },

    {
      id: 'recuperacion',
      heading: 'Recuperación',
      paragraphs: ['La recuperación depende del tipo de tratamiento.'],
      listRich: [
        {
          title: 'Meniscectomía parcial:',
          text: 'suele permitir una recuperación más rápida, con progresión de actividad en semanas.',
        },
        {
          title: 'Sutura meniscal:',
          text: 'requiere un protocolo más protector (por cicatrización), con progresión más lenta de carga y flexión según el caso.',
        },
      ],
      footer:
        'En ambos casos, la fisioterapia (fuerza, movilidad y control de carga) es clave para un buen resultado.',
    },

    {
      id: 'resultados',
      heading: 'Resultados esperables',
      paragraphs: [
        'En roturas traumáticas reparables, la sutura puede ofrecer muy buenos resultados y mejor protección articular a largo plazo. En lesiones degenerativas, el objetivo suele ser mejorar dolor y función con el mínimo tratamiento necesario, y muchas evolucionan bien sin cirugía.',
        'Si hay desgaste asociado, el pronóstico depende más del estado del cartílago y de la estrategia global de carga y fuerza que de la rotura meniscal aislada.',
      ],
    },

    {
      id: 'enfoque',
      heading: 'Nuestro enfoque en CotaSport Clinic',
      paragraphs: [
        'En lesiones meniscales, la decisión clave es indicar bien. Priorizamos un diagnóstico funcional (síntomas + exploración + imagen) y un plan progresivo. Cuando operamos, intentamos preservar el menisco siempre que sea técnicamente posible, porque es lo que mejor protege la rodilla a largo plazo.',
      ],
    },
  ],

  faqTitle: 'Preguntas frecuentes sobre rotura de menisco',
  faqs: [
    {
      q: '¿Cuándo hay que operar una rotura de menisco?',
      a: 'Se plantea sobre todo si hay bloqueo real, rotura traumática inestable o síntomas que persisten pese a un tratamiento conservador bien realizado. En roturas degenerativas, la cirugía no suele ser el primer paso.',
    },
    {
      q: '¿Qué es mejor: sutura meniscal o meniscectomía parcial?',
      a: 'Cuando la rotura es reparable, la sutura suele ser preferible porque preserva el menisco y protege mejor la rodilla a largo plazo. La meniscectomía parcial se reserva para roturas irreparables y se intenta retirar lo mínimo imprescindible.',
    },
    {
      q: '¿Se puede mejorar una rotura de menisco sin operar?',
      a: 'Muchas lesiones, especialmente degenerativas, mejoran con fisioterapia y control de carga. La posibilidad de cicatrizar depende del tipo de rotura y de la zona (hay áreas con mejor irrigación que otras).',
    },
    {
      q: '¿Cuándo puedo volver a correr o hacer deporte tras una lesión de menisco?',
      a: 'Depende de síntomas y del tratamiento. Tras meniscectomía parcial, la vuelta suele ser más rápida; tras sutura, el plan es más protector. Se decide por criterios de fuerza, movilidad y tolerancia, no solo por el calendario.',
    },
    {
      q: '¿Qué relación tiene el menisco con el cartílago?',
      a: 'El menisco ayuda a repartir cargas y proteger el cartílago. Cuando se pierde tejido meniscal, aumenta el estrés sobre el cartílago, lo que puede acelerar el deterioro articular.',
    },
  ],
};
