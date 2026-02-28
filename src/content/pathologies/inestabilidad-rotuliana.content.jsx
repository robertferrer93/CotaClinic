// src/content/pathologies/inestabilidad-rotuliana.content.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const linkCls = 'text-cota-navy underline-offset-4 hover:underline';

export const INESTABILIDAD_ROTULIANA_CONTENT = {
  // SEO / Schema
  url: 'https://cotasportclinic.com/rodilla/inestabilidad-rotuliana',
  metaTitle: 'Inestabilidad rotuliana en Barcelona | CotaSport Clinic',
  metaDescription:
    'Luxación de rótula e inestabilidad patelofemoral: causas, diagnóstico y tratamiento (rehabilitación, MPFL y cirugía “a la carta”). Valoración en Barcelona.',
  title: 'Inestabilidad rotuliana en Barcelona',
  image: 'https://cotasportclinic.com/og-image.png',
  ogType: 'article',
  published: '2026-02-25',
  modified: '2026-02-28',
  condition: 'Inestabilidad patelofemoral / luxación de rótula',
  authorId: 'robert-ferrer-rivero',

  // UI
  eyebrow: 'Rodilla',
  intro: (
    <>
      La inestabilidad rotuliana ocurre cuando la rótula pierde su trayectoria
      normal y tiende a desplazarse hacia fuera (subluxación) o a salirse
      completamente (luxación). En CotaSport Clinic (Barcelona) valoramos el
      problema con un enfoque estructurado: identificar qué factores lo causan
      (anatomía + control muscular) y decidir si el tratamiento debe ser
      conservador o quirúrgico con un plan claro.
    </>
  ),
  cta: {
    label: 'Solicitar valoración por inestabilidad rotuliana →',
    to: '/contacto',
  },

  related: [
    { to: '/rodilla/cartilago', label: 'Lesiones osteocondrales y cartílago' },
    { to: '/rodilla/osteotomias', label: 'Osteotomías de rodilla' },
    {
      to: '/rodilla/terapias-biologicas',
      label: 'Terapias biológicas en rodilla',
    },
  ],

  sections: [
    {
      id: 'introduccion',
      heading: 'Por qué es importante estudiarla bien',
      paragraphs: [
        <>
          Tras un primer episodio, muchas personas notan dolor anterior,
          inflamación o sensación de que la rótula “se va”. Si hay episodios
          repetidos, aumenta el riesgo de daño en la articulación patelofemoral,
          incluyendo{' '}
          <Link to="/rodilla/cartilago" className={linkCls}>
            lesiones osteocondrales y del cartílago
          </Link>{' '}
          tras la luxación. Por eso es importante entender si se trata de un
          problema aislado o de una rodilla con factores anatómicos que
          predisponen a la inestabilidad.
        </>,
        'La buena noticia es que no todos los casos requieren cirugía. La clave es indicar bien: rehabilitación cuando corresponde y cirugía precisa cuando hay inestabilidad recurrente y factores estructurales.',
      ],
    },

    {
      id: 'que-es',
      heading: '¿Qué es la inestabilidad rotuliana?',
      paragraphs: [
        'La rótula se desliza sobre un surco del fémur llamado tróclea femoral. La estabilidad depende de la forma del hueso, de la alineación del aparato extensor (cuádriceps–tendón rotuliano), de los ligamentos/cápsula (especialmente el MPFL) y del eje global de la pierna (valgo/varo y rotaciones).',
        'Cuando varios de estos elementos no trabajan de forma coordinada, la rótula puede desplazarse lateralmente (inestabilidad) o luxarse.',
      ],
    },

    {
      id: 'cuando-estudiar',
      heading: '¿Cuándo conviene estudiarla a fondo?',
      paragraphs: [
        'Recomendamos una valoración específica cuando hay luxación documentada, episodios repetidos, sensación de fallo frecuente o miedo a que se vuelva a salir la rótula (aprehensión), especialmente si limita deporte o vida diaria.',
      ],
      list: [
        'Luxación de rótula (primer episodio) con derrame importante.',
        'Inestabilidad recurrente (luxaciones o subluxaciones repetidas).',
        'Dolor patelofemoral con sensación de inseguridad.',
        'Factores anatómicos conocidos (patela alta, displasia troclear, valgo).',
      ],
      footer: (
        <>
          En el primer episodio es clave descartar lesiones asociadas. Tras una
          luxación, puede aparecer una lesión osteocondral (fragmento) o daño
          del{' '}
          <Link to="/rodilla/cartilago" className={linkCls}>
            cartílago
          </Link>
          , que cambia la estrategia.
        </>
      ),
    },

    {
      id: 'tratamiento',
      heading: 'Opciones de tratamiento',
      paragraphs: [
        'La indicación depende de si es un primer episodio o una inestabilidad recurrente, y de los factores anatómicos que condicionan la rótula.',
      ],
      listRich: [
        {
          title: 'Tratamiento conservador (rehabilitación):',
          text: 'en el primer episodio, si no hay lesión osteocondral relevante u otras lesiones que lo indiquen, lo habitual es controlar inflamación, recuperar movilidad y trabajar fuerza y control neuromuscular (cuádriceps, cadera y core).',
        },
        {
          title: 'Tratamiento quirúrgico (inestabilidad recurrente):',
          text: 'cuando la inestabilidad se repite, el enfoque es “a la carta”: corregir solo los factores que realmente lo requieren para evitar infratratamiento o exceso de cirugía.',
        },
      ],
      footer: (
        <>
          En casos concretos con alteraciones del eje o rotaciones relevantes,
          puede ser necesario corregir la mecánica con una{' '}
          <Link to="/rodilla/osteotomias" className={linkCls}>
            osteotomía
          </Link>{' '}
          dentro del plan.
        </>
      ),
    },

    {
      id: 'cirugia',
      heading: '¿Cómo es la cirugía (si está indicada)?',
      paragraphs: [
        'El procedimiento depende del “perfil anatómico” de tu rodilla. En la reconstrucción del MPFL se utiliza un injerto para restaurar la sujeción medial. Si además existen factores óseos (patela alta, tuberosidad tibial lateralizada, displasia), se combinan técnicas de forma planificada.',
        'Antes de operar, revisamos exploración y pruebas de imagen para ajustar la indicación y explicar claramente qué se corrige y qué no.',
      ],
    },

    {
      id: 'recuperacion',
      heading: 'Recuperación',
      paragraphs: [
        'La recuperación se organiza por fases: control de dolor/inflamación, movilidad, fuerza progresiva y reintroducción de gestos deportivos. El calendario exacto depende de las técnicas realizadas (solo MPFL vs combinaciones).',
        'Más allá del tiempo, buscamos criterios objetivos: buena movilidad, fuerza adecuada y control neuromuscular antes de autorizar deporte.',
      ],
    },

    {
      id: 'resultados',
      heading: 'Resultados esperables',
      paragraphs: [
        <>
          En pacientes bien seleccionados, el tratamiento (conservador o
          quirúrgico) suele mejorar la estabilidad y la confianza en la rodilla.
          La evolución depende de la combinación de factores anatómicos, del
          estado del{' '}
          <Link to="/rodilla/cartilago" className={linkCls}>
            cartílago
          </Link>{' '}
          y de la calidad de la rehabilitación.
        </>,
        <>
          En casos seleccionados, y siempre dentro de un plan de carga y fuerza,
          puede considerarse apoyo sintomático con{' '}
          <Link to="/rodilla/terapias-biologicas" className={linkCls}>
            terapias biológicas
          </Link>{' '}
          si hay irritación articular asociada.
        </>,
      ],
    },

    {
      id: 'enfoque',
      heading: 'Nuestro enfoque en CotaSport Clinic',
      paragraphs: [
        'Analizamos con detalle qué factores están alterados en tu rodilla para decidir el tratamiento más eficiente: rehabilitación cuando es lo adecuado y cirugía “a la carta” cuando la anatomía y la clínica lo justifican.',
      ],
    },
  ],

  faqTitle: 'Preguntas frecuentes sobre inestabilidad rotuliana',
  faqs: [
    {
      q: '¿Qué diferencia hay entre luxación de rótula y subluxación?',
      a: 'La subluxación es un desplazamiento parcial que vuelve a su sitio espontáneamente; la luxación es cuando la rótula se sale completamente del surco y suele requerir reducción (a veces espontánea, a veces asistida).',
    },
    {
      q: '¿Hay que operar siempre después de una primera luxación de rótula?',
      a: 'No. Si no hay fractura osteocondral relevante u otras lesiones que lo indiquen, lo habitual es iniciar tratamiento conservador con rehabilitación. La cirugía se valora sobre todo en inestabilidad recurrente o en perfiles anatómicos de alto riesgo.',
    },
    {
      q: '¿Cuándo se indica la reconstrucción del MPFL?',
      a: 'Se indica cuando existe inestabilidad recurrente y el MPFL está insuficiente (frecuente tras luxaciones repetidas). A menudo se combina con correcciones óseas si hay patela alta, displasia o desalineación relevante.',
    },
    {
      q: '¿Puede dañarse el cartílago con una luxación de rótula?',
      a: 'Sí. Tras una luxación puede aparecer lesión osteocondral o daño del cartílago patelofemoral. Por eso conviene valorar bien el episodio, sobre todo si hay derrame importante o dolor persistente.',
    },
    {
      q: '¿Puedo volver a hacer deporte si tengo inestabilidad rotuliana?',
      a: 'En muchos casos sí. Con rehabilitación bien planteada y, si está indicada, cirugía precisa, el objetivo es recuperar estabilidad y confianza. El retorno se decide por criterios de fuerza y control, no solo por fechas.',
    },
  ],
};
