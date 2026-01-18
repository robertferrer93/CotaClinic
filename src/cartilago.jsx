// src/cartilago.jsx
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';

export default function CartilagoPage() {
  return (
    <Article>
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          Rodilla
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          Lesiones osteocondrales de rodilla
        </h1>

        <p className="mt-4 text-neutral-600">
          Explicamos de forma sencilla qué son las lesiones osteocondrales, por
          qué producen dolor y qué opciones de tratamiento utilizamos en
          CotaClinic, desde técnicas biológicas de una sola etapa hasta injertos
          osteocondrales.
        </p>

        <div className="mt-5">
          <Link to="/" className="text-sm text-cota-navy hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* ¿Qué es una lesión osteocondral? */}
      <section className="mb-10 space-y-3">
        <h2 className="text-xl font-semibold text-cota-slate">
          ¿Qué es una lesión osteocondral?
        </h2>
        <p className="text-neutral-700">
          Una lesión osteocondral es un daño que afecta al cartílago y al hueso
          subcondral, que es la capa de hueso justo por debajo del cartílago. El
          cartílago no se regenera por sí mismo y, cuando también se lesiona el
          hueso, pueden aparecer dolor crónico, inflamación y limitación para
          las actividades diarias o el deporte.
        </p>
      </section>

      {/* Por qué se producen */}
      <section className="mb-10 space-y-3">
        <h2 className="text-xl font-semibold text-cota-slate">
          ¿Por qué se producen?
        </h2>
        <p className="text-neutral-700">
          Las causas más habituales de las lesiones osteocondrales en la rodilla
          son:
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>Traumatismos o giros bruscos durante el deporte.</li>
          <li>Osteocondritis disecante.</li>
          <li>Degeneración progresiva del cartílago.</li>
          <li>Inestabilidad o alteraciones en la alineación de la rodilla.</li>
        </ul>
      </section>

      {/* Síntomas más frecuentes */}
      <section className="mb-10 space-y-3">
        <h2 className="text-xl font-semibold text-cota-slate">
          Síntomas más frecuentes
        </h2>
        <p className="text-neutral-700">
          No todas las lesiones osteocondrales producen síntomas, pero cuando
          son significativas suelen manifestarse como:
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>Dolor mecánico al cargar, bajar escaleras o al hacer deporte.</li>
          <li>Hinchazón recurrente (&quot;rodilla que se inflama&quot;).</li>
          <li>Sensación de enganche o bloqueo.</li>
          <li>Dificultad para correr, saltar o arrodillarse.</li>
          <li>En algunos casos, sensación de fallo o inestabilidad.</li>
        </ul>
      </section>

      {/* Diagnóstico */}
      <section className="mb-10 space-y-3">
        <h2 className="text-xl font-semibold text-cota-slate">
          ¿Cómo se diagnostican?
        </h2>
        <p className="text-neutral-700">
          El diagnóstico combina la historia clínica, la exploración y las
          pruebas de imagen:
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>
            <span className="font-semibold">Exploración clínica:</span>{' '}
            valoración del dolor, movilidad, estabilidad y derrame articular.
          </li>
          <li>
            <span className="font-semibold">Radiografías:</span> para valorar el
            hueso y descartar artrosis avanzada.
          </li>
          <li>
            <span className="font-semibold">Resonancia magnética (RM):</span>{' '}
            clave para medir el tamaño y la profundidad del defecto de cartílago
            y hueso subcondral.
          </li>
          <li>
            <span className="font-semibold">TAC:</span> en casos complejos o
            cuando se planifican injertos osteocondrales de gran tamaño.
          </li>
        </ul>
      </section>

      {/* Tratamientos disponibles (visión general) */}
      <section className="mb-10 space-y-3">
        <h2 className="text-xl font-semibold text-cota-slate">
          Tratamientos disponibles
        </h2>
        <p className="text-neutral-700">
          La elección del tratamiento depende del tamaño y la profundidad del
          defecto, de si afecta al hueso subcondral, de la edad, el nivel de
          actividad y los síntomas del paciente. De forma sencilla, podemos
          dividir las opciones en tratamiento conservador y tratamientos
          quirúrgicos.
        </p>
      </section>

      {/* Tratamiento conservador */}
      <section className="mb-10 space-y-3">
        <h2 className="text-xl font-semibold text-cota-slate">
          Tratamiento conservador
        </h2>
        <p className="text-neutral-700">
          Se utiliza en lesiones pequeñas o en pacientes de menor demanda
          funcional. No regenera el cartílago, pero puede mejorar los síntomas:
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>Fisioterapia específica y fortalecimiento muscular.</li>
          <li>Ajustes de carga y modificaciones en la actividad deportiva.</li>
          <li>
            Infiltraciones (ácido hialurónico o PRP, según la indicación).
          </li>
        </ul>
      </section>

      {/* Tratamientos quirúrgicos */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl font-semibold text-cota-slate">
          Tratamientos quirúrgicos
        </h2>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-cota-slate">
            Microfractura / estimulación medular
          </h3>
          <p className="text-neutral-700">
            Consiste en realizar pequeños orificios en el hueso subcondral para
            estimular la formación de tejido reparador que rellene el defecto.
            Suele indicarse en lesiones pequeñas y en pacientes jóvenes. El
            tejido que se forma no es cartílago hialino, por lo que su
            durabilidad puede ser limitada en defectos más grandes.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cota-slate">
            Técnicas con matriz biológica (Chondro-Gide®, Chondrofiller®, PACI)
          </h3>
          <p className="text-neutral-700">
            Son técnicas que utilizan una matriz o biomaterial que actúa como un
            andamio para guiar la regeneración del cartílago. En la mayoría de
            los casos se realizan en una sola cirugía.
          </p>

          <div className="space-y-1">
            <h4 className="text-base font-semibold text-cota-slate">
              AMIC con Chondro-Gide®
            </h4>
            <p className="text-neutral-700">
              Tras realizar microfracturas en el defecto, se coloca una membrana
              de colágeno (Chondro-Gide®) sobre la zona dañada. Esto ayuda a que
              el tejido reparador se organice mejor y mejore la calidad de la
              reparación.
            </p>
            <p className="text-neutral-700">
              Suele indicarse en lesiones de cartílago de espesor completo, de
              tamaño pequeño o moderado, con el hueso subcondral relativamente
              conservado.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-semibold text-cota-slate">
              Chondrofiller®
            </h4>
            <p className="text-neutral-700">
              Es un biomaterial de colágeno moldeable que se adapta a la forma
              del defecto y lo rellena. Está pensado para lesiones bien
              delimitadas, cuando se busca una técnica en un solo tiempo
              quirúrgico sin necesidad de injertos osteocondrales.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-semibold text-cota-slate">
              Técnica PACI (cartílago particulado + matriz PRP)
            </h4>
            <p className="text-neutral-700">
              Se basa en mezclar pequeños fragmentos de cartílago del propio
              paciente con una matriz bioactiva de plasma rico en plaquetas
              (PRP). Esta mezcla se coloca dentro del defecto, donde actúa como
              un andamio activo para la regeneración del cartílago.
            </p>
            <p className="text-neutral-700">
              Suele indicarse en pacientes jóvenes, con lesiones condales u
              osteocondrales de cierto tamaño (grados III–IV), cuando se desea
              evitar técnicas en dos tiempos o injertos más complejos.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-cota-slate">
            Fijación del fragmento osteocondral
          </h3>
          <p className="text-neutral-700">
            En algunos casos, la lesión se debe a un fragmento de cartílago y
            hueso que se ha desprendido (por ejemplo, en la osteocondritis
            disecante). Si el fragmento es viable, puede recolocarse y fijarse,
            preservando así el cartílago original del paciente.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-cota-slate">
            Autoinjerto osteocondral (OATS / mosaicoplastia)
          </h3>
          <p className="text-neutral-700">
            Consiste en trasplantar pequeños cilindros de cartílago y hueso del
            propio paciente desde una zona sana de la rodilla hacia la zona
            dañada.
          </p>
          <p className="text-neutral-700">
            Se indica en defectos pequeños o moderados (aproximadamente entre 1
            y 4 cm²), bien delimitados, especialmente en pacientes jóvenes y
            activos, con muy buenos resultados de retorno a la actividad.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-cota-slate">
            Aloinjerto osteocondral (OCA)
          </h3>
          <p className="text-neutral-700">
            En las lesiones más grandes o complejas se puede utilizar un
            aloinjerto osteocondral, es decir, cartílago y hueso procedente de
            un donante.
          </p>
          <p className="text-neutral-700">
            Está indicado en defectos grandes (mayores de 4 cm²), en
            multilesiones o cuando ya se han realizado cirugías previas. Permite
            reconstruir defectos amplios sin dañar otras zonas de la rodilla.
          </p>
        </div>
      </section>

      {/* Qué técnica usamos en CotaClinic */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl font-semibold text-cota-slate">
          ¿Qué técnica utilizamos en CotaClinic?
        </h2>
        <p className="text-neutral-700">
          En CotaClinic seguimos las recomendaciones de sociedades
          internacionales como ISAKOS y la evidencia científica más reciente
          para indicar cada tratamiento. No existe una única técnica válida para
          todos los pacientes; elegimos la mejor opción según:
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700">
          <li>Tamaño y profundidad del defecto.</li>
          <li>Grado de afectación del hueso subcondral.</li>
          <li>Edad y nivel deportivo.</li>
          <li>
            Alineación de la rodilla (varo/valgo), estado del menisco y
            ligamentos.
          </li>
          <li>Expectativas y situación de cada paciente.</li>
        </ul>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-cota-slate">
            De forma general (algoritmo resumido)
          </h3>
          <ul className="list-disc list-inside space-y-1 text-neutral-700">
            <li>
              <span className="font-semibold">
                Lesiones pequeñas (&lt; 1–2 cm²) y poca profundidad:
              </span>{' '}
              microfractura.
            </li>
            <li>
              <span className="font-semibold">
                Lesiones condales de espesor completo, bien delimitadas, con
                hueso subcondral conservado (2–4 cm²):
              </span>{' '}
              técnicas con matriz biológica (Chondro-Gide®, Chondrofiller® o
              PACI), normalmente en una sola cirugía.
            </li>
            <li>
              <span className="font-semibold">
                Lesiones osteocondrales de 1–4 cm² con afectación del hueso:
              </span>{' '}
              autoinjerto osteocondral (OATS).
            </li>
            <li>
              <span className="font-semibold">
                Defectos grandes (&gt; 4 cm²) o cirugías de revisión:
              </span>{' '}
              aloinjerto osteocondral (OCA).
            </li>
          </ul>
          <p className="text-neutral-700">
            Además de tratar el defecto de cartílago y hueso, revisamos y
            corregimos cuando es necesario los ejes de la pierna, la estabilidad
            de la rodilla y el estado de los meniscos, y diseñamos un programa
            de rehabilitación individualizado para optimizar la recuperación.
          </p>
        </div>
      </section>
    </Article>
  );
}
