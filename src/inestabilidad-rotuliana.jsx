// src/pages/inestabilidad-rotuliana.jsx
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';

export default function InestabilidadRotulianaPage() {
  return (
    <Article>
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          Rodilla
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          Inestabilidad rotuliana
        </h1>

        <p className="mt-4 text-neutral-600">
          Explicamos de forma clara qué es la inestabilidad de rótula, por qué
          ocurre y qué opciones de tratamiento existen, siguiendo el protocolo
          de la Escuela de Lyon (Dejour).
        </p>

        <div className="mt-5">
          <Link to="/" className="text-sm text-cota-navy hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* 1. Anatomía y función */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cota-slate mb-3">
          1. Anatomía y función de la articulación patelofemoral
        </h2>

        <p className="text-neutral-700 mb-3">
          La rótula es un pequeño hueso situado en la parte anterior de la
          rodilla, “encajado” dentro del tendón del cuádriceps. Por detrás está
          recubierta de cartílago y se desliza sobre un surco del fémur llamado{' '}
          <strong>tróclea femoral</strong>.
        </p>

        <p className="text-neutral-700 mb-3">
          Esta articulación patelofemoral tiene varias funciones importantes:
        </p>

        <ul className="list-disc list-inside text-neutral-700 mb-3 space-y-1">
          <li>
            <strong>Aumentar la fuerza del cuádriceps</strong>: la rótula actúa
            como una polea que mejora el brazo de palanca del músculo.
          </li>
          <li>
            <strong>Repartir las cargas</strong> en la parte anterior de la
            rodilla.
          </li>
          <li>
            <strong>Guiar el movimiento</strong> de flexión y extensión,
            manteniendo la rótula centrada en el surco.
          </li>
        </ul>

        <p className="text-neutral-700 mb-3">
          La estabilidad de la rótula depende de cuatro grandes grupos de
          factores:
        </p>

        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          <li>
            <strong>Hueso</strong>: forma de la tróclea (más profunda o más
            plana) y de la cara articular de la rótula.
          </li>
          <li>
            <strong>Aparato extensor</strong>: cuádriceps, tendón rotuliano y su
            alineación sobre la tibia.
          </li>
          <li>
            <strong>Ligamentos y cápsula</strong>: especialmente el{' '}
            <strong>ligamento femororrotuliano medial (MPFL)</strong>, que
            sujeta la rótula desde la parte interna.
          </li>
          <li>
            <strong>Eje y alineación de la pierna</strong>: valgo/varo,
            rotaciones del fémur y de la tibia, etc.
          </li>
        </ul>

        <p className="text-neutral-700 mt-3">
          Cuando varios de estos elementos no trabajan bien de forma conjunta,
          la rótula puede desplazarse hacia fuera del surco (
          <strong>inestabilidad</strong>) o incluso salirse completamente (
          <strong>luxación</strong>).
        </p>
      </section>

      {/* 2. Incidencia y mecanismo lesional */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cota-slate mb-3">
          2. Incidencia y mecanismo lesional
        </h2>

        <p className="text-neutral-700 mb-3">
          La inestabilidad rotuliana es más frecuente en{' '}
          <strong>adolescentes y adultos jóvenes</strong>, sobre todo mujeres.
        </p>

        <p className="text-neutral-700 mb-3">Suele aparecer:</p>

        <ul className="list-disc list-inside text-neutral-700 mb-3 space-y-1">
          <li>
            En deportes con giros, cambios de dirección o frenadas bruscas.
          </li>
          <li>Tras un golpe directo sobre la parte interna de la rótula.</li>
          <li>
            En rodillas con cierta “predisposición” anatómica (tróclea poco
            profunda, rótula alta, pierna en valgo, etc.).
          </li>
        </ul>

        <p className="text-neutral-700 mb-2">
          Tras un primer episodio, muchos pacientes refieren:
        </p>

        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          <li>Dolor en la parte anterior de la rodilla.</li>
          <li>Sensación de fallo o “rodilla que se va”.</li>
          <li>Inflamación.</li>
          <li>
            Episodios repetidos en los que la rótula “se escapa” hacia fuera.
          </li>
        </ul>
      </section>

      {/* 3. Clasificación según Dejour */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cota-slate mb-3">
          3. Clasificación según Dejour
        </h2>

        <p className="text-neutral-700 mb-3">
          Seguimos la clasificación desarrollada por{' '}
          <strong>Dejour y la escuela de Lyon</strong>, que divide a los
          pacientes en tres grandes grupos según síntomas y anatomía:
        </p>

        <ul className="list-disc list-inside text-neutral-700 mb-3 space-y-2">
          <li>
            <strong>Inestabilidad rotuliana objetiva</strong>: ha habido al
            menos una luxación real de rótula y existen factores anatómicos que
            la favorecen.
          </li>
          <li>
            <strong>Inestabilidad rotuliana potencial</strong>: no se ha llegado
            a luxar, pero el paciente tiene dolor, sensación de inseguridad y
            alteraciones anatómicas que podrían llevar a una luxación.
          </li>
          <li>
            <strong>Dolor rotuliano sin inestabilidad</strong> (síndrome
            femororrotuliano doloroso): dolor anterior de rodilla sin luxaciones
            ni factores claros de inestabilidad.
          </li>
        </ul>

        <p className="text-neutral-700">
          Esta clasificación nos ayuda a decidir si el tratamiento debe ser
          sobre todo <strong>funcional (rehabilitación)</strong> o si es
          necesario <strong>corregir la anatomía</strong> con cirugía.
        </p>
      </section>

      {/* 4. Factores anatómicos */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cota-slate mb-3">
          4. Factores anatómicos que influyen
        </h2>

        <p className="text-neutral-700 mb-3">
          La inestabilidad rotuliana suele ser la suma de varios factores:
        </p>

        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          <li>
            <strong>Forma de la tróclea</strong>: si el canal es muy plano o
            deformado (displasia), la rótula se escapa con más facilidad.
          </li>
          <li>
            <strong>Altura de la rótula</strong>: si está demasiado alta (
            <strong>patela alta</strong>), entra tarde en el canal y es más
            inestable.
          </li>
          <li>
            <strong>Desalineación del aparato extensor</strong>: cuando el
            tendón rotuliano tira demasiado hacia fuera (tuberosidad tibial muy
            lateral, rotaciones anómalas o rodilla en valgo).
          </li>
          <li>
            <strong>Ligamentos y partes blandas</strong>: si el ligamento
            femororrotuliano medial (MPFL) está roto o muy laxo y el lado
            externo muy tenso, la rótula tiende a irse hacia fuera.
          </li>
        </ul>
      </section>

      {/* 5. Exploración clínica */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cota-slate mb-3">
          5. Exploración clínica
        </h2>

        <p className="text-neutral-700 mb-3">En la consulta valoramos:</p>

        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          <li>Dolor anterior y sensación de inestabilidad.</li>
          <li>Si la rótula está bien centrada o tiende a irse hacia fuera.</li>
          <li>
            El <strong>test de aprehensión</strong> (el paciente nota miedo a
            que se luxe si desplazamos la rótula lateralmente).
          </li>
          <li>
            El llamado <strong>J-sign</strong> (trayectoria en “J” de la rótula
            al extender la rodilla).
          </li>
          <li>Si hay bloqueos, chasquidos o derrames.</li>
        </ul>
      </section>

      {/* 6. Pruebas de imagen */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cota-slate mb-3">
          6. Pruebas de imagen
        </h2>

        <p className="text-neutral-700 mb-3">Solemos pedir:</p>

        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          <li>
            <strong>Radiografías</strong> de rodilla (frente, perfil y axial de
            rótula) para ver forma de la tróclea, altura de la rótula y
            descartar fracturas.
          </li>
          <li>
            <strong>Resonancia magnética (RMN)</strong> para valorar el estado
            del cartílago, el MPFL y otros ligamentos.
          </li>
          <li>
            En algunos casos, <strong>TAC</strong> para estudiar con detalle la
            alineación ósea y planificar la cirugía.
          </li>
        </ul>
      </section>

      {/* 7. Tratamiento */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cota-slate mb-3">
          7. Tratamiento: nuestro protocolo (Escuela de Lyon)
        </h2>

        <p className="text-neutral-700 mb-3">
          En nuestro equipo utilizamos el{' '}
          <strong>protocolo de la Escuela de Lyon (Dejour)</strong> para la
          inestabilidad rotuliana. Este enfoque se basa en un concepto de{' '}
          <strong>“menú a la carta”</strong>:
        </p>

        <p className="text-neutral-700 mb-4">
          primero identificamos{' '}
          <strong>qué factores anatómicos están alterados</strong> y luego{' '}
          <strong>corregimos solo los que realmente lo necesitan</strong>,
          evitando tanto el infratratamiento como el exceso de cirugía.
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-cota-slate mb-2">
            7.1. Primer episodio de luxación
          </h3>

          <p className="text-neutral-700 mb-3">
            En la primera luxación de rótula, si no hay fracturas importantes,
            el tratamiento suele ser <strong>conservador</strong>:
          </p>

          <ul className="list-disc list-inside text-neutral-700 mb-3 space-y-1">
            <li>Control del dolor e inflamación.</li>
            <li>Recuperar cuanto antes la movilidad.</li>
            <li>
              Fortalecimiento del cuádriceps (especialmente el vasto medial).
            </li>
            <li>Trabajo de estabilidad y control neuromuscular.</li>
            <li>Férula o rodillera ligera solo de forma temporal.</li>
          </ul>

          <p className="text-neutral-700">
            La cirugía inicial se reserva para casos con{' '}
            <strong>fracturas osteocondrales</strong> significativas o lesiones
            asociadas que lo justifiquen.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-cota-slate mb-2">
            7.2. Inestabilidad rotuliana recurrente (varias luxaciones o
            subluxaciones)
          </h3>

          <p className="text-neutral-700 mb-3">
            Cuando la rótula se luxa o se “escapa” repetidamente, valoramos cada
            caso de forma individual y aplicamos el “menú a la carta”:
          </p>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-cota-slate mb-1">
              a) Displasia troclear (canal femoral poco profundo o deformado)
            </h4>
            <p className="text-neutral-700">
              Tratamiento habitual cuando es severa:{' '}
              <strong>trocleoplastia de surco profundo</strong>, una cirugía que{' '}
              <strong>vuelve a esculpir el canal del fémur</strong> para que la
              rótula encaje mejor y sea más estable.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-cota-slate mb-1">
              b) Patela alta (rótula demasiado alta)
            </h4>
            <p className="text-neutral-700">
              Tratamiento:{' '}
              <strong>
                descender ligeramente el punto donde se inserta el tendón
                rotuliano en la tibia
              </strong>{' '}
              (distalización de la tuberosidad tibial), para que la rótula entre
              antes en el canal y sea más estable desde los primeros grados de
              flexión.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-cota-slate mb-1">
              c) Desalineación del aparato extensor
            </h4>
            <p className="text-neutral-700 mb-2">
              Aquí incluimos casos en los que la tuberosidad tibial está muy
              hacia fuera, hay rotaciones anómalas o una rodilla en valgo.
            </p>
            <p className="text-neutral-700">
              El tratamiento más frecuente es{' '}
              <strong>
                recolocar la inserción del tendón rotuliano algo más hacia
                dentro
              </strong>{' '}
              (medialización de la tuberosidad tibial), para que la rótula
              reciba una fuerza más centrada. En casos seleccionados puede ser
              necesario <strong>realinear el eje de la pierna</strong> con
              osteotomías del fémur o la tibia.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-cota-slate mb-1">
              d) Insuficiencia del ligamento femororrotuliano medial (ligamento
              patelofemoral medial)
            </h4>
            <p className="text-neutral-700 mb-2">
              Este ligamento es el “cinturón” interno que evita que la rótula se
              vaya hacia fuera. Tras varios episodios de luxación suele quedar
              roto o muy debilitado.
            </p>
            <p className="text-neutral-700">
              El tratamiento consiste en la{' '}
              <strong>
                reconstrucción del ligamento femororrotuliano medial (MPFL)
              </strong>{' '}
              con un injerto del propio paciente, para recuperar la sujeción
              interna. Normalmente se combina con otras correcciones óseas si
              también hay displasia, patela alta o desalineación.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-cota-slate mb-1">
              e) Retináculo lateral muy tenso (lado externo demasiado tirante)
            </h4>
            <p className="text-neutral-700">
              Si la rótula está muy inclinada hacia fuera y no es reducible,
              puede ser necesario{' '}
              <strong>liberar parcialmente las estructuras laterales</strong>{' '}
              (liberación lateral) para que la rótula pueda recentrarse mejor.
              No se realiza de rutina, solo en casos donde realmente está
              indicado.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Resumen práctico */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cota-slate mb-3">
          8. Resumen práctico
        </h2>

        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          <li>
            La inestabilidad rotuliana es una combinación de{' '}
            <strong>dolor</strong> y <strong>sensación de fallo</strong> de la
            rótula, a menudo con episodios de luxación.
          </li>
          <li>No todos los pacientes necesitan cirugía.</li>
          <li>
            Cuando hay inestabilidad repetida, es esencial{' '}
            <strong>estudiar bien la anatomía</strong> y{' '}
            <strong>
              corregir de forma precisa los factores que lo provocan
            </strong>
            .
          </li>
          <li>
            La <strong>rehabilitación</strong> es clave tanto en el tratamiento
            conservador como tras la cirugía.
          </li>
        </ul>
      </section>

      {/* 9. Nuestro enfoque */}
      <section className="border-t border-neutral-200 pt-6 mt-6">
        <h2 className="text-2xl font-semibold text-cota-slate mb-3">
          9. Nuestro enfoque en CotaClinic
        </h2>

        <p className="text-neutral-700 mb-2">
          En CotaClinic seguimos el{' '}
          <strong>
            protocolo desarrollado por el Dr. Dejour y la escuela de Lyon
          </strong>
          , una de las referencias internacionales en patelofemoral.
        </p>

        <p className="text-neutral-700 mb-2">
          Analizamos con detalle{' '}
          <strong>qué factores anatómicos están alterados</strong> en tu rodilla
          y proponemos un tratamiento <strong>personalizado</strong>,
          corrigiendo solo aquello que realmente lo requiere.
        </p>

        <p className="text-neutral-700">
          Combinamos <strong>cirugía precisa</strong>, cuando es necesaria, con
          un programa de <strong>rehabilitación estructurado</strong>, para
          recuperar fuerza, estabilidad y confianza en la rodilla.
        </p>
      </section>
    </Article>
  );
}
