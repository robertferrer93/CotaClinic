// src/content/pathologies/lca.content.js

export const LCA_CONTENT = {
  // SEO / Schema
  url: 'https://cotasportclinic.com/rodilla/lca',
  metaTitle:
    'Cirugía de Ligamento Cruzado Anterior (LCA) en Barcelona | CotaSport Clinic',
  metaDescription:
    'Especialistas en cirugía del ligamento cruzado anterior (LCA) en Barcelona. Diagnóstico, indicación quirúrgica, opciones de injerto y recuperación. Solicita valoración o segunda opinión.',
  title: 'Cirugía de ligamento cruzado anterior (LCA) en Barcelona',
  image: 'https://cotasportclinic.com/og-image.png',
  ogType: 'article',
  published: '2025-12-10',
  modified: '2026-02-25',
  condition: 'Rotura del ligamento cruzado anterior (LCA)',
  authorId: 'robert-ferrer-rivero',

  // UI
  eyebrow: 'Rodilla',
  intro:
    'En CotaSport Clinic (Barcelona) valoramos y tratamos la lesión del ligamento cruzado anterior (LCA) con un enfoque práctico: diagnóstico preciso, indicación clara (operar o no) y un plan de recuperación orientado a volver a tu actividad con seguridad. Si buscas una segunda opinión con resonancia o quieres valorar cirugía, te ayudamos a decidir con criterio.',
  cta: {
    label: 'Solicitar valoración por LCA →',
    to: '/contacto',
  },

  related: [
    { to: '/rodilla/menisco', label: 'Lesión de menisco' },
    {
      to: '/rodilla/terapias-biologicas',
      label: 'Terapias biológicas en rodilla',
    },
    { to: '/rodilla/cartilago', label: 'Lesiones osteocondrales y cartílago' },
    { to: '/rodilla/osteotomias', label: 'Osteotomías de rodilla' },
  ],
  sections: [
    {
      id: 'sintomas',
      heading: 'Síntomas habituales de la rotura del LCA',
      paragraphs: [
        'La lesión del LCA es frecuente en deportes de pivotaje como fútbol, baloncesto, esquí o pádel. Suele producirse en un giro brusco con la rodilla en ligera flexión, muchas veces sin contacto directo.',
      ],
      list: [
        'Sensación de “chasquido” en el momento de la lesión.',
        'Inflamación o derrame en las primeras horas.',
        'Inestabilidad al girar o cambiar de dirección.',
        'Dificultad para volver al deporte.',
      ],
    },
    {
      id: 'anatomia',
      heading: 'Anatomía y función',
      paragraphs: [
        'El ligamento cruzado anterior conecta el fémur con la tibia y es clave para la estabilidad anterior y rotacional de la rodilla. Su función es especialmente importante en giros, cambios de dirección y saltos. Cuando se rompe, puede aumentar el riesgo de lesiones meniscales y del cartílago si existe inestabilidad repetida.',
      ],
    },
    {
      id: 'diagnostico',
      heading: 'Diagnóstico',
      paragraphs: [
        'El diagnóstico se basa en la historia clínica y la exploración física, junto con pruebas de estabilidad específicas. La resonancia magnética confirma la rotura y permite valorar lesiones asociadas como daño meniscal, condral u otras estructuras ligamentarias.',
      ],
    },
    {
      id: 'tratamiento',
      heading: 'Opciones de tratamiento',
      paragraphs: [
        'No todas las roturas de LCA requieren cirugía. La decisión depende del grado de inestabilidad, el nivel deportivo y los objetivos personales.',
      ],
      listRich: [
        {
          title: 'Tratamiento conservador:',
          text: 'fisioterapia, fortalecimiento y trabajo neuromuscular en pacientes sin inestabilidad significativa o con baja demanda deportiva.',
        },
        {
          title: 'Reconstrucción quirúrgica:',
          text: 'recomendada en pacientes jóvenes, deportistas o con inestabilidad que limita su actividad.',
        },
      ],
    },
    {
      id: 'tecnicas',
      heading: 'Técnicas de reconstrucción del LCA',
      paragraphs: [
        'La elección del injerto se individualiza según edad, tipo de deporte, anatomía y antecedentes.',
      ],
      listRich: [
        {
          title: 'Tendón rotuliano (HTH):',
          text: 'muy resistente, habitual en deportes de alto impacto.',
        },
        {
          title: 'Isquiotibiales (ST/G):',
          text: 'buenos resultados funcionales con menor dolor anterior en algunos casos.',
        },
        {
          title: 'Tendón cuadricipital:',
          text: 'alternativa versátil con buena resistencia.',
        },
        {
          title: 'Aloinjerto:',
          text: 'indicado en casos seleccionados, como revisiones o para disminuir el dolor postoperatorio, aunque tiene un tiempo de recuperación un poco mayor.',
        },
      ],
      footer:
        'En determinados deportistas puede asociarse una técnica complementaria para mejorar el control rotacional.',
    },
    {
      id: 'recuperacion',
      heading: 'Recuperación y retorno al deporte',
      paragraphs: [
        'La rehabilitación se organiza por fases: control del dolor e inflamación, recuperación del rango de movimiento, fortalecimiento progresivo, trabajo propioceptivo y readaptación deportiva.',
        'El retorno al deporte suele situarse alrededor de los 6–9 meses, dependiendo del injerto y del nivel deportivo. Más allá del tiempo, se valoran criterios objetivos de fuerza y control neuromuscular antes de autorizar la vuelta a la competición.',
      ],
    },
  ],

  faqTitle:
    'Preguntas frecuentes sobre la rotura del ligamento cruzado anterior (LCA)',
  faqs: [
    {
      q: '¿Cuándo puedo conducir o trabajar después de una cirugía de LCA?',
      a: 'Tras una reconstrucción del ligamento cruzado anterior, la conducción y el regreso al trabajo suelen ser posibles entre las 3 y 6 semanas, dependiendo del lado operado, el control muscular y el tipo de actividad laboral.',
    },
    {
      q: '¿Cuándo se puede volver a correr después de una rotura de LCA?',
      a: 'La carrera suele iniciarse de forma progresiva a partir de los 3–4 meses, siempre que exista buena fuerza, estabilidad y control neuromuscular. El calendario se individualiza según evolución.',
    },
    {
      q: '¿Se puede volver al mismo nivel deportivo tras una rotura de LCA?',
      a: 'En muchos casos sí. El retorno al deporte competitivo suele plantearse alrededor de los 6–9 meses, tras completar la rehabilitación y superar pruebas funcionales específicas que garanticen estabilidad y seguridad.',
    },
    {
      q: '¿Qué ocurre si no me opero una rotura del ligamento cruzado anterior?',
      a: 'Algunas rodillas pueden adaptarse con tratamiento conservador, pero en pacientes activos la inestabilidad puede aumentar el riesgo de lesiones meniscales y del cartílago a medio y largo plazo.',
    },
    {
      q: '¿Qué injerto es mejor en la cirugía de LCA?',
      a: 'No existe un injerto “mejor” universal. La elección entre tendón rotuliano, isquiotibiales o tendón cuadricipital depende de la edad, el tipo de deporte y las características individuales del paciente.',
    },
  ],
};
