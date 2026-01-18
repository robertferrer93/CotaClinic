// src/pages/osteotomias.jsx
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';

export default function OsteotomiasPage() {
  return (
    <Article>
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          Rodilla
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          Osteotomías de rodilla
        </h1>

        <p className="mt-4 text-neutral-600">
          Explicamos de forma sencilla en qué consisten las osteotomías de
          rodilla, cuándo se recomiendan y qué puedes esperar de la cirugía.
        </p>

        <p className="mt-3 text-neutral-700">
          En CotaClinic seguimos las recomendaciones de la sociedad
          internacional ISAKOS para la planificación de este tipo de cirugías.
        </p>

        <div className="mt-5">
          <Link to="/" className="text-sm text-cota-navy hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* 1. ¿Qué es una osteotomía de rodilla? */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          1. ¿Qué es una osteotomía de rodilla?
        </h2>
        <p className="text-neutral-700">
          La osteotomía es una cirugía en la que se realiza un corte controlado
          en el hueso para{' '}
          <strong>cambiar ligeramente el eje de la pierna</strong>. El objetivo
          es redistribuir las cargas de la rodilla para que la zona más
          desgastada sufra menos y disminuya el dolor.
        </p>
        <p className="text-neutral-700">
          No se trata de “poner una prótesis”, sino de{' '}
          <strong>conservar tu propia rodilla</strong>, modificando de forma
          precisa la alineación del fémur o la tibia.
        </p>
        <p className="text-neutral-700">
          Es una opción especialmente interesante en pacientes{' '}
          <strong>jóvenes o activos</strong>, cuando el desgaste está localizado
          y queremos retrasar al máximo la necesidad de una prótesis de rodilla.
        </p>
      </section>

      {/* 2. ¿En qué casos se recomienda? */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          2. ¿En qué casos se recomienda una osteotomía?
        </h2>
        <p className="text-neutral-700">
          La indicación se valora siempre de forma individual, pero en general
          la osteotomía se plantea en situaciones como:
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <strong>Desgaste localizado del cartílago</strong> en la parte
            interna o externa de la rodilla, mientras el resto de la
            articulación está relativamente conservada.
          </li>
          <li>
            <strong>Rodilla en varo o en valgo</strong> (piernas en “paréntesis”
            o en “X”) que sobrecarga una zona concreta de la rodilla.
          </li>
          <li>
            <strong>Pacientes jóvenes o activos</strong> en los que una prótesis
            completa no es todavía la mejor opción.
          </li>
          <li>
            Dolor que limita la vida diaria, el trabajo o la práctica deportiva
            a pesar de haber probado otros tratamientos conservadores.
          </li>
        </ul>
        <p className="text-neutral-700">
          Para decidir si eres candidato a una osteotomía, valoramos tu historia
          clínica, exploración física y pruebas de imagen (radiografías de toda
          la pierna, RMN, etc.).
        </p>
      </section>

      {/* 3. Objetivos de la cirugía */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          3. ¿Qué se busca con la osteotomía?
        </h2>
        <p className="text-neutral-700">
          El objetivo de la osteotomía no es únicamente “enderezar la pierna”,
          sino sobre todo <strong>mejorar tu calidad de vida</strong>.
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <strong>Aliviar el dolor</strong> al descargar la zona de cartílago
            más dañada y repartir mejor las fuerzas.
          </li>
          <li>
            <strong>Retrasar la necesidad de una prótesis de rodilla</strong>,
            ganando años de buena función con tu articulación propia.
          </li>
          <li>
            <strong>Mejorar la función</strong>: poder caminar más, subir y
            bajar escaleras con menos molestias y, en algunos casos, volver a
            realizar deporte de bajo impacto.
          </li>
        </ul>
      </section>

      {/* 4. Tipos de osteotomía de rodilla */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          4. Tipos de osteotomía de rodilla
        </h2>
        <p className="text-neutral-700">
          Existen varios tipos de osteotomía. La elección depende del tipo de
          desviación de la pierna, de qué zona de la rodilla está más afectada y
          de las características del paciente.
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <strong>Osteotomía tibial</strong>: el corte se realiza en la tibia,
            por debajo de la rodilla. Es la más frecuente cuando la pierna está
            en varo y está más desgastada la parte interna.
          </li>
          <li>
            <strong>Osteotomía femoral</strong>: el corte se hace en el fémur,
            por encima de la rodilla. Se utiliza sobre todo en valgos marcados o
            en determinadas deformidades del fémur.
          </li>
          <li>
            <strong>Osteotomías combinadas o personalizadas</strong>: en
            deformidades complejas puede ser necesario combinar correcciones o
            planificar cortes muy específicos adaptados a cada paciente.
          </li>
        </ul>
        <p className="text-neutral-700">
          En todos los casos, una vez corregido el eje, la posición se mantiene
          con una <strong>placa y tornillos específicos</strong> para
          osteotomías.
        </p>
      </section>

      {/* 5. Nuestro protocolo y planificación (ISAKOS) */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          5. Nuestro enfoque en CotaClinic
        </h2>
        <p className="text-neutral-700">
          En CotaClinic seguimos las <strong>recomendaciones de ISAKOS</strong>{' '}
          para la planificación de las osteotomías de rodilla. Esto se traduce
          en una planificación cuidadosa y personalizada.
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            Realizamos <strong>radiografías de toda la pierna</strong> para
            medir con precisión el eje y decidir cuántos grados hay que
            corregir.
          </li>
          <li>
            Valoramos la <strong>alineación global de la extremidad</strong>, no
            solo la rodilla de forma aislada.
          </li>
          <li>
            Buscamos el{' '}
            <strong>equilibrio entre descargar la zona dañada</strong> y
            mantener una biomecánica lo más natural posible.
          </li>
        </ul>
        <p className="text-neutral-700">
          El objetivo es ofrecer una cirugía{' '}
          <strong>segura, precisa y adaptada</strong> a las necesidades de cada
          paciente.
        </p>
      </section>

      {/* 6. ¿Cómo es la cirugía? */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          6. ¿Cómo es la cirugía de osteotomía?
        </h2>
        <p className="text-neutral-700">
          La intervención se realiza en quirófano, habitualmente con anestesia
          raquídea (de cintura para abajo) o general, según el caso y en
          coordinación con el equipo de Anestesia.
        </p>
        <p className="text-neutral-700">
          Tras realizar el corte controlado en el hueso, se corrige el eje hasta
          la posición planificada y se fija con una{' '}
          <strong>placa y tornillos</strong>.
        </p>
        <p className="text-neutral-700">
          La estancia en el hospital suele ser de pocos días. Durante este
          tiempo se controla el dolor, se vigila la herida y se inicia la
          movilización según el plan establecido para cada paciente.
        </p>
      </section>

      {/* 7. Riesgos y posibles complicaciones */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          7. Riesgos y posibles complicaciones
        </h2>
        <p className="text-neutral-700">
          Como cualquier cirugía, la osteotomía tiene riesgos, aunque la mayoría
          de los pacientes evoluciona de forma favorable. Entre las posibles
          complicaciones se incluyen:
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <strong>Dolor e inflamación</strong> en las primeras semanas.
          </li>
          <li>
            <strong>Hematomas o problemas de la herida</strong> (sangrado,
            infección), que se tratan con curas y medicación específica si es
            necesario.
          </li>
          <li>
            <strong>Retraso en la consolidación del hueso</strong>, que puede
            requerir controles más prolongados hasta comprobar que el hueso ha
            cerrado por completo.
          </li>
          <li>
            <strong>Necesidad futura de prótesis de rodilla</strong>: aunque la
            osteotomía puede retrasar muchos años esta cirugía, en algunos
            pacientes con el tiempo puede ser necesario colocar una prótesis.
          </li>
        </ul>
      </section>

      {/* 8. Preguntas frecuentes */}
      <section className="border-t border-neutral-200 pt-6 mt-6 space-y-3">
        <h2 className="text-2xl font-semibold text-cota-slate">
          8. Preguntas frecuentes
        </h2>

        <div className="space-y-1">
          <p className="text-neutral-700 font-semibold">
            ¿Voy a llevar tornillos para siempre?
          </p>
          <p className="text-neutral-700">
            La placa y los tornillos pueden permanecer de forma definitiva si no
            dan molestias. En algunos casos se recomienda retirarlos pasado un
            tiempo, según la evolución y la actividad del paciente.
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-neutral-700 font-semibold">
            ¿Podré volver a hacer deporte?
          </p>
          <p className="text-neutral-700">
            El objetivo de la osteotomía es mejorar el dolor y la función.
            Muchos pacientes pueden volver a realizar{' '}
            <strong>deporte de bajo impacto</strong>. Las recomendaciones se
            adaptan de forma individual.
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-neutral-700 font-semibold">
            ¿Cuándo notaré mejoría?
          </p>
          <p className="text-neutral-700">
            La mejoría suele ser progresiva. Hay que tener en cuenta que se
            trata de una cirugía sobre el hueso y la rodilla necesita tiempo
            para adaptarse a la nueva distribución de cargas.
          </p>
        </div>

        <p className="text-neutral-700">
          Si tienes dudas sobre si una osteotomía puede ser una opción en tu
          caso, en CotaClinic valoraremos tu situación de forma individual y te
          explicaremos claramente las alternativas disponibles.
        </p>
      </section>
    </Article>
  );
}
