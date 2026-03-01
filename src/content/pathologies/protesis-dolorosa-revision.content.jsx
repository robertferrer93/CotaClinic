// src/content/pathologies/protesis-dolorosa-revision.content.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const linkCls = 'text-cota-navy underline-offset-4 hover:underline';

export const PROTESIS_DOLOROSA_REVISION_CONTENT = {
  // SEO / Schema
  url: 'https://cotasportclinic.com/rodilla/protesis-dolorosa-revision',
  metaTitle: 'Prótesis de rodilla dolorosa en Barcelona | Estudio y revisión',
  metaDescription:
    'Dolor tras prótesis de rodilla: causas frecuentes, estudio completo (Rx, analítica, punción, TAC) y cuándo se indica cirugía de revisión en Barcelona.',
  title: 'Prótesis dolorosa de rodilla: causas, estudio y cirugía de revisión',
  image: 'https://cotasportclinic.com/og-image.png',
  ogType: 'article',
  published: '2026-02-25',
  modified: '2026-02-28',
  publishedUi: '25/02/2026',
  modifiedUi: '28/02/2026',
  condition: 'Dolor tras prótesis de rodilla',
  authorId: 'robert-ferrer-rivero',

  // UI
  eyebrow: 'Rodilla',
  intro:
    'Cuando aparece dolor tras una prótesis de rodilla o el dolor persiste más allá de la recuperación esperable, es fundamental identificar la causa antes de indicar tratamientos. En esta página explicamos las causas más frecuentes y en qué consiste la cirugía de revisión cuando está indicada.',
  cta: {
    label: 'Solicitar valoración por prótesis dolorosa →',
    to: '/contacto',
  },

  // Solo robotica (como pediste)
  related: [{ to: '/rodilla/robotica', label: 'Robótica, navegación y RA en rodilla' }],

  sections: [
    {
      id: 'intro-clinica',
      heading: 'Qué entendemos por prótesis dolorosa',
      paragraphs: [
        'Tras una prótesis de rodilla es normal notar molestias durante los primeros meses. Hablamos de prótesis dolorosa cuando el dolor persiste, reaparece tras un periodo de mejoría o se acompaña de inflamación repetida, sensación de fallo o rigidez importante.',
      ],
      footer:
        'En estos casos, el objetivo no es “tratar el dolor” sin más, sino encontrar el origen con un estudio ordenado. Esto reduce el riesgo de tratamientos ineficaces o cirugías innecesarias.',
    },

    {
      id: 'que-significa',
      heading: '¿Qué significa “prótesis dolorosa”?',
      paragraphs: [
        'Es un término clínico que describe una prótesis de rodilla con dolor no esperable por tiempo o intensidad, o con síntomas asociados (derrame, inestabilidad o rigidez). La causa puede estar en la propia prótesis (infección, aflojamiento, alineación, rotación, estabilidad) o fuera de ella (columna, cadera, tendones o dolor neuropático).',
      ],
    },

    {
      id: 'cuando-estudiar',
      heading: '¿Cuándo conviene estudiarla de forma específica?',
      paragraphs: [
        'Recomendamos una valoración dirigida si aparece alguno de estos escenarios:',
      ],
      list: [
        'Dolor persistente o dolor nuevo tras un periodo de mejoría.',
        'Inflamación recurrente o derrames repetidos.',
        'Sensación de inestabilidad (“la rodilla falla”).',
        'Dolor anterior (zona de rótula) que limita.',
        'Rigidez muy limitante o pérdida progresiva de movilidad.',
        'Dificultad para caminar pese a rehabilitación.',
      ],
    },

    {
      id: 'causas',
      heading: 'Causas frecuentes de dolor tras una prótesis de rodilla',
      paragraphs: [
        'Las causas pueden ser protésicas o no protésicas. Por eso el estudio debe ser global, y no centrarse solo en “una radiografía aislada”.',
      ],
      listRich: [
        {
          title: 'Infección:',
          text: 'puede ser evidente o presentarse de forma más “silenciosa”. Por seguridad, siempre debe descartarse con un protocolo riguroso.',
        },
        {
          title: 'Inestabilidad:',
          text: 'sensación de fallo o inseguridad al caminar, relacionada con ligamentos, equilibrio de espacios, alineación o ajuste del implante.',
        },
        {
          title: 'Problemas femoropatelares:',
          text: 'incluyen el maltracking de la rótula y dolor anterior tras la prótesis.',
        },
        {
          title: 'Malposición/rotación de componentes:',
          text: 'una rotación inadecuada puede producir dolor, rigidez o un patrón de movimiento no fisiológico.',
        },
        {
          title: 'Rigidez muy limitante (artrofibrosis):',
          text: 'cicatrización interna excesiva que limita la movilidad y afecta de forma importante a la función.',
        },
        {
          title: 'Desgaste o aflojamiento de componentes:',
          text: 'con el tiempo puede aparecer desgaste del polietileno o aflojamiento, generando dolor mecánico.',
        },
      ],
      footer:
        'Además, existen causas no protésicas (columna, cadera, tendones o dolor neuropático), por lo que el estudio debe ser global.',
    },

    {
      id: 'estudio',
      heading: '¿Cómo es el estudio de una prótesis dolorosa?',
      paragraphs: [
        'Antes de plantear cualquier cirugía, es imprescindible un estudio completo porque cada causa requiere un tratamiento distinto.',
      ],
      list: [
        'Exploración clínica detallada y análisis del patrón de dolor.',
        'Radiografías específicas y de alineación.',
        'Analítica y, si está indicado, punción articular.',
        'TAC para valorar posición y rotación de componentes.',
      ],
      footer: (
        <>
          En casos seleccionados, las tecnologías de planificación y control
          intraoperatorio (navegación/robótica) pueden ayudar a optimizar la
          precisión en revisiones o casos complejos. Puedes ver más aquí:{' '}
          <Link to="/rodilla/robotica" className={linkCls}>
            robótica y navegación en prótesis de rodilla
          </Link>
          .
        </>
      ),
    },

    {
      id: 'estrategia',
      heading: 'Recuperación: de menos a más invasivo',
      paragraphs: [
        'Una vez identificada la causa, el tratamiento se orienta buscando la opción menos invasiva posible. En algunos casos será suficiente ajustar rehabilitación, tratar causas extraarticulares o realizar procedimientos limitados. Si la causa es mecánica o infecciosa y no tiene alternativa razonable, se plantea cirugía de revisión.',
      ],
    },

    {
      id: 'revision',
      heading: 'Cirugía de revisión de prótesis de rodilla: qué se puede hacer',
      paragraphs: [
        'La cirugía de revisión tiene como objetivo corregir el problema de la prótesis previa y puede ir desde procedimientos limitados hasta cirugías complejas, según la causa y el estado de hueso y ligamentos.',
      ],
      listRich: [
        {
          title: 'Cirugía de la rigidez (artrofibrosis):',
          text: 'liberación de adherencias mediante técnica artroscópica u abierta, según el caso.',
        },
        {
          title: 'Cirugía femoropatelar:',
          text: 'procedimientos para mejorar el seguimiento rotuliano, incluyendo tratamiento de la rótula cuando está indicado.',
        },
        {
          title: 'Revisión parcial de componentes:',
          text: 'sustitución de un componente concreto cuando el problema está bien localizado.',
        },
        {
          title: 'Revisión completa con implantes de revisión:',
          text: 'uso de implantes con mayor grado de constricción para restaurar estabilidad, corregir alineación y compensar déficits ligamentarios o pérdida ósea, cuando es necesario.',
        },
      ],
    },

    {
      id: 'enfoque',
      heading: 'Nuestro enfoque en CotaSport Clinic',
      paragraphs: [
        'En una prótesis dolorosa, la prioridad es el diagnóstico. Utilizamos un estudio ordenado para identificar la causa y proponer el tratamiento más razonable, evitando soluciones rápidas sin una explicación clara.',
      ],
    },
  ],

  faqTitle: 'Preguntas frecuentes sobre prótesis de rodilla dolorosa',
  faqs: [
    {
      q: '¿Es normal tener dolor después de una prótesis de rodilla?',
      a: 'Es normal tener molestias durante los primeros meses. Preocupa más el dolor que persiste más allá de lo esperable, reaparece tras una mejoría o se acompaña de derrame, inestabilidad o rigidez marcada.',
    },
    {
      q: '¿Cómo se descarta una infección en una prótesis dolorosa?',
      a: 'Con un protocolo que combina exploración, analítica y, si está indicado, punción articular, además de radiografías y otras pruebas según el caso. Identificar o descartar infección cambia por completo el tratamiento.',
    },
    {
      q: '¿Cuándo se recomienda una cirugía de revisión de prótesis de rodilla?',
      a: 'Cuando existe una causa clara que no tiene una alternativa eficaz (por ejemplo, infección, aflojamiento, malposición o inestabilidad relevante) y el problema limita función o calidad de vida.',
    },
    {
      q: '¿La revisión de prótesis siempre implica cambiar toda la prótesis?',
      a: 'No. En algunos casos puede bastar con procedimientos limitados o con cambiar un componente concreto. En otros, se requiere una revisión completa con implantes específicos.',
    },
  ],
};
