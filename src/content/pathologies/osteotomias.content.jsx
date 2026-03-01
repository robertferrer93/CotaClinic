// src/content/pathologies/osteotomias.content.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const linkCls = 'text-cota-navy underline-offset-4 hover:underline';

export const OSTEOTOMIAS_CONTENT = {
  // SEO / Schema
  url: 'https://cotasportclinic.com/rodilla/osteotomias',
  metaTitle: 'Osteotomía de rodilla en Barcelona | CotaSport Clinic',
  metaDescription:
    'Cirugía para corregir el eje (varo/valgo) y descargar la zona desgastada. Indicaciones, tipos (HTO/DFO), recuperación y resultados. Solicita valoración.',
  title: 'Osteotomía de rodilla en Barcelona',
  image: 'https://cotasportclinic.com/og-image.png',
  ogType: 'article',
  published: '2026-02-25',
  modified: '2026-02-28',
  publishedUi: '25/02/2026',
  modifiedUi: '28/02/2026',
  condition: 'Artrosis localizada de rodilla / alteración del eje (varo/valgo)',
  authorId: 'robert-ferrer-rivero',

  // UI
  eyebrow: 'Rodilla',
  intro: (
    <>
      La osteotomía de rodilla es una cirugía diseñada para corregir el eje de
      la pierna (varo o valgo) y redistribuir las cargas dentro de la
      articulación. En pacientes bien seleccionados puede aliviar el dolor,
      mejorar la función y retrasar la necesidad de una prótesis. Si ya tienes
      radiografías o resonancia y quieres saber si eres candidato, te ayudamos a
      decidir con criterio.
    </>
  ),
  cta: {
    label: 'Solicitar valoración por osteotomía →',
    to: '/contacto',
  },

  related: [
    { to: '/rodilla/cartilago', label: 'Lesiones osteocondrales y cartílago' },
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
      heading: 'Por qué una osteotomía puede tener sentido',
      paragraphs: [
        <>
          Cuando el desgaste del{' '}
          <Link to="/rodilla/cartilago" className={linkCls}>
            cartílago
          </Link>{' '}
          está localizado (por ejemplo, más en el compartimento interno o
          externo) y existe una desviación del eje, la rodilla carga de forma
          repetida siempre en la misma zona. En ese contexto, una osteotomía
          puede ser una alternativa razonable a una prótesis, especialmente en
          pacientes jóvenes o activos.
        </>,
        <>
          El objetivo no es “poner una rodilla nueva”, sino{' '}
          <strong>conservar tu propia rodilla</strong> corrigiendo de forma
          precisa la alineación para descargar el compartimento más dañado.
        </>,
      ],
    },

    {
      id: 'que-es',
      heading: '¿Qué es una osteotomía de rodilla?',
      paragraphs: [
        'Una osteotomía es un corte controlado en el hueso (tibia o fémur) para cambiar el eje de la pierna y redistribuir las cargas en la rodilla.',
        'Tras la corrección, la posición se fija con una placa y tornillos específicos para mantener la nueva alineación mientras el hueso consolida.',
      ],
    },

    {
      id: 'indicaciones',
      heading: '¿Cuándo está indicada una osteotomía?',
      paragraphs: [
        'Se valora de forma individual, pero suele considerarse cuando el desgaste es localizado y existe un eje en varo o en valgo que sobrecarga una zona concreta.',
      ],
      list: [
        'Artrosis localizada (compartimento interno o externo) con el resto de la rodilla relativamente conservado.',
        'Rodilla en varo (piernas en “paréntesis”) o rodilla en valgo (piernas en “X”) con sobrecarga de un compartimento.',
        'Paciente joven o activo en el que una prótesis total no es la mejor opción todavía.',
        'Dolor y limitación pese a tratamiento conservador (ejercicio, fisioterapia, control de carga, infiltraciones si se han probado).',
      ],
      footer:
        'Para decidir si eres candidato, valoramos síntomas, exploración y pruebas de imagen. Son especialmente útiles las radiografías de miembros inferiores en carga para medir el eje, y RMN cuando aporta información adicional.',
    },

    {
      id: 'tipos',
      heading: 'Tipos de osteotomía más habituales',
      paragraphs: [
        'La zona del corte depende de dónde está el problema del eje y dónde se encuentra el desgaste principal.',
      ],
      listRich: [
        {
          title: 'HTO (osteotomía tibial alta):',
          text: 'frecuente en varo con sobrecarga del compartimento interno.',
        },
        {
          title: 'DFO (osteotomía femoral distal):',
          text: 'frecuente en valgo con sobrecarga del compartimento externo.',
        },
      ],
      footer:
        'La planificación se individualiza: no es solo “varo o valgo”, sino cuánto hay que corregir y hacia dónde para descargar la zona dolorosa sin crear sobrecargas nuevas.',
    },

    {
      id: 'alternativas',
      heading: 'Alternativas y cuándo NO es la mejor opción',
      paragraphs: [
        <>
          La osteotomía no es la única opción. Según el caso, puede tener más
          sentido insistir en tratamiento conservador o apoyar el control
          sintomático con{' '}
          <Link to="/rodilla/terapias-biologicas" className={linkCls}>
            terapias biológicas
          </Link>{' '}
          cuando está indicado.
        </>,
        <>
          Si el desgaste es más generalizado o hay afectación de varios
          compartimentos, suele ser más razonable valorar una{' '}
          <Link to="/rodilla/protesis-rodilla" className={linkCls}>
            prótesis de rodilla
          </Link>{' '}
          (parcial o total), en lugar de una corrección de eje.
        </>,
      ],
    },

    {
      id: 'cirugia',
      heading: '¿Cómo es la cirugía de osteotomía?',
      paragraphs: [
        'La intervención se realiza en quirófano con anestesia raquídea o general. Se corrige el eje según la planificación y se fija con una placa y tornillos.',
        'En algunos casos se utiliza injerto/biomaterial para favorecer la consolidación, dependiendo del tipo de corrección.',
        'La estancia hospitalaria suele ser de pocos días. Se inicia movilidad según protocolo, control del dolor y prevención de complicaciones.',
      ],
    },

    {
      id: 'recuperacion',
      heading: 'Recuperación',
      paragraphs: [
        'La recuperación es progresiva y depende del tipo de osteotomía y del grado de corrección. Como es una cirugía sobre el hueso, es normal que se requiera un periodo de consolidación antes de aumentar cargas.',
      ],
      list: [
        'Rehabilitación por fases: movilidad, control de inflamación y fortalecimiento progresivo.',
        'La carga (apoyo) se pauta de forma individual según estabilidad de la fijación y evolución radiográfica.',
        'El retorno a deporte se individualiza; suele priorizarse bajo impacto y progresión según fuerza y tolerancia.',
      ],
    },

    {
      id: 'resultados',
      heading: 'Resultados esperables',
      paragraphs: [
        'En pacientes bien seleccionados, la osteotomía suele mejorar el dolor y la función al descargar el compartimento más afectado.',
        'El objetivo es ganar años de buena calidad de vida con tu rodilla y retrasar (no garantizar evitar) una prótesis.',
        'El pronóstico depende del grado de desgaste, la corrección del eje, el estado del resto de compartimentos y la adherencia a la rehabilitación.',
      ],
    },

    {
      id: 'enfoque',
      heading: 'Nuestro enfoque como especialistas en rodilla',
      list: [
        'Mediciones precisas del eje y planificación individual.',
        'Objetivo: descargar la zona dolorosa manteniendo una biomecánica lo más natural posible.',
        'Revisión de “modificadores” del pronóstico (cartílago, menisco, estabilidad).',
        'Rehabilitación estructurada y criterios objetivos para progresar.',
      ],
    },
  ],

  faqTitle: 'Preguntas frecuentes sobre osteotomía de rodilla',
  faqs: [
    {
      q: '¿La osteotomía de rodilla evita una prótesis?',
      a: 'Puede retrasarla muchos años en pacientes bien seleccionados, pero no lo garantiza. El objetivo es aliviar dolor y mejorar función descargando el compartimento más desgastado.',
    },
    {
      q: '¿Voy a llevar placa y tornillos para siempre tras una osteotomía?',
      a: 'Pueden quedarse de forma definitiva si no dan molestias. En algunos pacientes se retiran más adelante si hay irritación local o por motivos funcionales, una vez el hueso ha consolidado.',
    },
    {
      q: '¿Cuándo notaré mejoría después de una osteotomía de rodilla?',
      a: 'La mejoría es progresiva y se nota a medida que consolida el hueso y avanza la rehabilitación. No es una cirugía de “resultado inmediato”: requiere semanas a meses de recuperación estructurada.',
    },
    {
      q: '¿Podré volver a hacer deporte tras una osteotomía?',
      a: 'En muchos casos sí, especialmente actividades de bajo impacto. El tipo de deporte y el calendario se individualizan según tu caso, la consolidación y los criterios de fuerza y control.',
    },
    {
      q: '¿Qué diferencia hay entre HTO y DFO?',
      a: 'La HTO (tibial alta) se usa con frecuencia para corregir varo y descargar el compartimento interno. La DFO (femoral distal) se usa con frecuencia para corregir valgo y descargar el compartimento externo. La indicación depende de dónde está el origen del eje y del patrón de desgaste.',
    },
  ],
};
