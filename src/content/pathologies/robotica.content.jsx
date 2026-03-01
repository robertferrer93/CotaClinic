// src/content/pathologies/robotica.content.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const linkCls = 'text-cota-navy underline-offset-4 hover:underline';

export const ROBOTICA_CONTENT = {
  // SEO / Schema
  url: 'https://cotasportclinic.com/rodilla/robotica',
  metaTitle: 'Prótesis de rodilla robótica en Barcelona | CotaSport Clinic',
  metaDescription:
    'Realidad aumentada, robótica y navegación para prótesis de rodilla: cuándo aportan valor, qué mejoran y qué puedes esperar en cirugías primarias y complejas.',
  title:
    'Asistencia quirúrgica en prótesis de rodilla: realidad aumentada, robótica y navegación',
  image: 'https://cotasportclinic.com/og-image.png',
  ogType: 'article',
  published: '2026-02-25',
  modified: '2026-03-01',
  publishedUi: '25/02/2026',
  modifiedUi: '01/03/2026',
  condition: 'Artroplastia de rodilla asistida por tecnología',
  authorId: 'robert-ferrer-rivero',

  // UI
  eyebrow: 'Rodilla',
  intro: (
    <>
      La cirugía de <strong>prótesis de rodilla</strong> ha evolucionado con
      tecnologías que ayudan a <strong>mejorar la precisión</strong> en pasos
      críticos: orientación de cortes, alineación, balance ligamentario y
      verificación de resultados antes de implantar la prótesis. Estas
      herramientas son especialmente útiles en <strong>cirugías complejas</strong>{' '}
      (deformidades, cirugías previas o presencia de material).
      <br />
      <br />
      Es importante remarcar que{' '}
      <strong>no todos los pacientes necesitan asistencia tecnológica</strong>.
      Su indicación debe individualizarse y utilizarse cuando aporta un beneficio
      real, siempre como apoyo a la experiencia del cirujano.
    </>
  ),
  cta: {
    label: 'Solicitar valoración →',
    to: '/contacto',
  },

  related: [
    {
      to: '/rodilla/protesis-rodilla',
      label: 'Prótesis de rodilla: parcial y total',
    },
    {
      to: '/rodilla/protesis-dolorosa-revision',
      label: 'Prótesis dolorosa: estudio y cirugía de revisión',
    },
  ],

  sections: [
    {
      id: 'introduccion',
      heading: 'Qué significa “robótica” o “navegación” en una prótesis de rodilla',
      paragraphs: [
        <>
          Si estás valorando una{' '}
          <Link to="/rodilla/protesis-rodilla" className={linkCls}>
            prótesis de rodilla
          </Link>{' '}
          (primaria o de revisión), es normal preguntarse si “robótica” o
          “navegación” significan un mejor resultado. En la práctica, lo más
          relevante es entender <strong>qué problema resuelve cada herramienta</strong>{' '}
          y si encaja con tu anatomía y con la complejidad del caso.
        </>,
        'Nuestro enfoque es pragmático: usar tecnología cuando aporta precisión adicional en decisiones intraoperatorias, y no utilizarla si no cambia el resultado esperado.',
      ],
    },

    {
      id: 'que-es',
      heading: '¿Qué entendemos por asistencia quirúrgica?',
      paragraphs: [
        'La asistencia quirúrgica engloba sistemas que ayudan a visualizar, medir y verificar parámetros clave durante la cirugía: orientación de cortes, resecciones óseas, alineación de la extremidad, balance ligamentario y estabilidad.',
      ],
      footer:
        'El objetivo final es conseguir una rodilla estable, alineada y funcional, adaptada a la anatomía de cada paciente.',
    },

    {
      id: 'indicacion',
      heading: '¿Cuándo está indicada la asistencia tecnológica?',
      paragraphs: [
        'Suele aportar más valor cuando el caso es complejo o cuando pequeñas variaciones pueden afectar a estabilidad, alineación o a la mecánica femoropatelar.',
      ],
      list: [
        'Deformidades importantes (varo/valgo) o anatomías atípicas.',
        'Cirugías previas de rodilla o presencia de material.',
        'Prótesis de revisión o casos con déficits ligamentarios.',
        'Necesidad de verificar con datos objetivos alineación y balance.',
      ],
      footer: (
        <>
          En revisiones y casos complejos (por ejemplo,{' '}
          <Link to="/rodilla/protesis-dolorosa-revision" className={linkCls}>
            prótesis dolorosa con indicación de estudio o revisión
          </Link>
          ), la capacidad de medir y comprobar parámetros de forma objetiva puede ser
          especialmente útil.
        </>
      ),
    },

    {
      id: 'opciones',
      heading: 'Opciones de asistencia: realidad aumentada, robótica y navegación',
      paragraphs: [
        'Son herramientas distintas que pueden complementar la cirugía. Su valor es aportar información y control en pasos críticos, especialmente cuando buscamos reproducir una planificación con precisión.',
      ],
      listRich: [
        {
          title: 'Realidad aumentada (RA):',
          text: 'guía visual en tiempo real para orientar instrumental y planos de corte, con ajustes finos antes de resecar hueso.',
        },
        {
          title: 'Cirugía robótica:',
          text: 'ayuda a ejecutar un plan con alta precisión y consistencia. No sustituye al cirujano: aporta control y reproducibilidad.',
        },
        {
          title: 'Navegación quirúrgica:',
          text: 'aporta datos objetivos durante la cirugía sobre alineación, orientación de componentes y balance/estabilidad, con verificación antes de finalizar.',
        },
      ],
    },

    {
      id: 'integracion',
      heading: '¿Cómo se integra esta tecnología en la cirugía?',
      paragraphs: [
        'Estas herramientas se utilizan para medir y comprobar pasos críticos: cortes óseos, orientación de componentes, alineación final y estabilidad. La información permite ajustar de forma más objetiva antes de implantar la prótesis definitiva.',
        'En casos seleccionados, esta precisión adicional ayuda especialmente en deformidades, revisiones o cuando hay referencias anatómicas alteradas por cirugías previas.',
      ],
    },

    {
      id: 'recuperacion',
      heading: 'Recuperación',
      paragraphs: [
        'La recuperación depende más del tipo de cirugía (prótesis primaria vs revisión), del estado previo de la rodilla y del plan de rehabilitación que de la tecnología utilizada.',
        'La asistencia puede mejorar la precisión, pero no “acelera” por sí sola los tiempos biológicos.',
      ],
    },

    {
      id: 'resultados',
      heading: 'Resultados: qué puede mejorar y qué no',
      paragraphs: [
        'La asistencia tecnológica busca reducir variabilidad en parámetros técnicos (alineación, cortes, balance). El objetivo clínico es una rodilla más estable y funcional.',
        'Aun así, el resultado final depende también del estado de tejidos, del dolor preoperatorio, del control muscular y de la rehabilitación.',
      ],
    },

    {
      id: 'enfoque',
      heading: 'Nuestro enfoque',
      paragraphs: [
        'Entendemos la asistencia quirúrgica como un medio, no como un fin. La utilizamos cuando creemos que aporta un beneficio real, especialmente en cirugías complejas por deformidades, cirugías previas o presencia de material.',
        'El objetivo final es el mismo: una rodilla estable, alineada y funcional, adaptada a tu anatomía y a tus necesidades.',
      ],
    },
  ],

  faqTitle: 'Preguntas frecuentes sobre prótesis de rodilla robótica y navegación',
  faqs: [
    {
      q: '¿La prótesis de rodilla robótica es mejor para todo el mundo?',
      a: 'No necesariamente. Aporta más valor en casos complejos o cuando la precisión adicional cambia decisiones intraoperatorias. En muchos pacientes, la técnica convencional puede ofrecer resultados excelentes.',
    },
    {
      q: '¿Qué diferencia hay entre robótica, navegación y realidad aumentada?',
      a: 'La navegación mide y muestra parámetros; la robótica ayuda a ejecutar el plan con alta precisión; la realidad aumentada aporta guía visual inmediata sobre orientación de cortes e instrumental. Son herramientas distintas que pueden complementar la cirugía.',
    },
    {
      q: '¿La tecnología reduce el dolor o acelera la recuperación?',
      a: 'No de forma directa. Su objetivo principal es mejorar precisión y consistencia técnica. La recuperación depende del tipo de cirugía (primaria o revisión), del estado previo y de la rehabilitación.',
    },
    {
      q: '¿En qué casos se recomienda más la navegación o la robótica?',
      a: 'Suele ser especialmente útil en deformidades importantes, cirugías previas, revisiones, anatomías atípicas o cuando necesitamos verificar con datos objetivos la alineación y la estabilidad.',
    },
  ],
};
