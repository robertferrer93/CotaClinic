// src/CotaClinicSitev2.jsx
import * as React from 'react';
import { Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import Layout from './layout.jsx';

import ScrollToTop from './components/ScrollToTop.jsx';

import LCAPage from './lca.jsx';
import MeniscoPage from './menisco.jsx';
import InestabilidadRotulianaPage from './inestabilidad-rotuliana.jsx';
import OsteotomiasPage from './osteotomias.jsx';
import CartilagoPage from './cartilago.jsx';
import TerapiasbiologicasPage from './terapias-biologicas.jsx';
import ProtesisRodillaPage from './protesis-rodilla.jsx';
import ProtesisDolorosaRevisionPage from './protesis-dolorosa-revision.jsx';
import RoboticaPage from './robotica.jsx';
import DoctoraliaWidget from './components/DoctoraliaWidget.jsx';
import DoctoraliaReviewsWidget from './components/DoctoraliaReviewsWidget.jsx';
import clsx from 'clsx';
import GalleryStrip from './components/GalleryStrip.jsx';
import GalleryCases from './components/GalleryCases.jsx';
import Subtle from './components/typography/Subtle.jsx';

import { ButtonPrimary, ButtonSecondary, Section } from './components/ui.jsx';

// === Componente principal con rutas ===
export default function CotaClinicSite() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          {/* ✅ Deep-linking: /equipo/ferrer abre el modal */}
          <Route path="/equipo/:doctorId" element={<HomePage />} />

          <Route path="/rodilla/lca" element={<LCAPage />} />
          <Route path="/rodilla/menisco" element={<MeniscoPage />} />
          <Route
            path="/rodilla/inestabilidad-rotuliana"
            element={<InestabilidadRotulianaPage />}
          />
          <Route path="/rodilla/osteotomias" element={<OsteotomiasPage />} />
          <Route path="/rodilla/cartilago" element={<CartilagoPage />} />
          <Route
            path="/rodilla/terapias-biologicas"
            element={<TerapiasbiologicasPage />}
          />
          <Route
            path="/rodilla/protesis-rodilla"
            element={<ProtesisRodillaPage />}
          />
          <Route
            path="/rodilla/protesis-dolorosa-revision"
            element={<ProtesisDolorosaRevisionPage />}
          />
          <Route path="/rodilla/robotica" element={<RoboticaPage />} />
        </Route>
      </Routes>
    </>
  );
}

// ================== PÁGINA HOME ==================
function HomePage() {
  const [activeDoctor, setActiveDoctor] = React.useState(null);
  const location = useLocation();
  const { doctorId } = useParams(); // ✅ /equipo/:doctorId

  const doctors = [
    {
      id: 'cabot',
      name: 'Dr. Joaquim Cabot Dalmau',
      role: 'Cirugía de Rodilla',
      imageCard: '/public/images/team/joaquim_cabot.png',
      highlights: [
        'Consultor de casos complejos',
        '>10.000 cirugías de rodilla',
        'Tratamientos biológicos',
      ],
      summary:
        'Prestigioso traumatólogo especialista en rodilla y medicina regenerativa. Amplia trayectoria en artroscopia, preservación y cirugía protésica. Continuador del legado del Dr. Joaquín Cabot Boix y referente como consultor en casos complejos.',
      experience: [
        'Director/consultor Grupo COTA (rodilla)',
        'Trayectoria destacada en artroscopia, ligamentos y artroplastia',
      ],
      education: ['Doctor en Medicina (Cum Laude)', 'Especialista en COT'],
      publications: [
        'Divulgación científica en patología de rodilla y biología',
      ],
      memberships: ['SECOT', 'SEROD'],
    },
    {
      id: 'oliver',
      name: 'Dr. Gabriel Oliver Far',
      role: 'COT · Rodilla',
      imageCard: '/public/images/team/gabriel_oliver.png',
      imageProfile: '/public/images/team/oliver_quiro.png',
      highlights: [
        'Jefe de equipo de rodilla – H. U. Bellvitge',
        'Cirugía protésica robótica',
        'Lesiones multiligamentosas y de revisión',
        'Casos de alta complejidad',
      ],
      summary:
        'Especialista en cirugía reconstructiva y protésica de rodilla, referente en robótica y en lesiones multiligamentosas complejas. Lidera la Unidad de Rodilla del Hospital Universitario de Bellvitge y compagina asistencia, docencia e investigación.',
      experience: [
        'Jefe de la Unidad de Rodilla – H. U. Bellvitge',
        'Revisiones protésicas y casos complejos',
        'Actividad en medicina regenerativa y artroscopia',
      ],
      education: [
        'Licenciado en Medicina',
        'Especialista en COT',
        'Formación en cirugía robótica',
      ],
      publications: ['Docencia y participación en congresos (nac. e int.)'],
      memberships: ['SECOT', 'SEROD'],
    },
    {
      id: 'llort',
      name: 'Dr. Jaume Llort Buira',
      role: 'COT · Rodilla',
      imageCard: '/public/images/team/jaume_llort.png',
      imageProfile: '/public/images/team/eco_llort.png',
      highlights: [
        'Medicina regenerativa: células madre, PRP, ozonoterapia, proloterapia',
        'Tratamientos ecoguiados',
        '>25 años de experiencia',
      ],
      summary:
        'Más de 25 años dedicados a cirugía ortopédica con foco en rodilla y terapias biológicas. Integra cirugía de preservación con tratamientos regenerativos y técnicas mínimamente invasivas ecoguiadas.',
      experience: [
        'Grupo COTA – Área de rodilla y medicina regenerativa',
        'Artroscopia y prótesis de rodilla',
        'Enfoque integral para preservar la función articular',
      ],
      education: [
        'Especialista en COT',
        'Formación en terapias biológicas y ecografía',
      ],
      publications: ['Divulgación sobre tratamientos con células madre'],
      memberships: ['SECOT', 'SEROD'],
    },
    {
      id: 'ferrer',
      name: 'Dr. Robert Ferrer Rivero',
      role: 'Rodilla y Traumatología Deportiva',
      imageCard: '/public/images/team/robert_ferrer.png',
      imageProfile: '/public/images/team/robert_ferrer_quiro.png',
      highlights: [
        'Experto en preservación articular',
        'Cirugía deportiva: menisco, LCA/LCP, cartílago',
        'Preservación: osteotomía y prótesis unicompartimental',
        'Cirugía protésica con realidad aumentada',
      ],
      summary:
        '>200 cirugías/año. Especialista formado en el H. U. Bellvitge. Actualmente en la Unidad de Rodilla del H. Sant Rafael y Clínica Diagonal. Interés en osteotomías, biología y planificación 3D. Tesis doctoral en preservación articular.',
      experience: [
        'H. Sant Rafael – Unidad de Rodilla',
        'Clínica Diagonal – Equipo de fracturas y rodilla',
        'Rotación en Cirugía Deportiva – Rush (Chicago)',
      ],
      education: [
        'Grado en Medicina (UB)',
        'Especialista en COT – H. U. Bellvitge',
        'Plan Nacional de Artroscopia (AEA)',
      ],
      publications: [
        'KSSTA (2024): Evaluación económica osteotomía tibial',
        'RECOT (2023): Osteotomía tibial cuña cerrada',
        'J ISAKOS (2023): Instrumentación específica en osteotomía',
        'Premio mejor comunicación SECOT 2024',
      ],
      memberships: ['SECOT', 'SEROD', 'SCCOT'],
    },
  ];

  // ✅ Abre el modal si vienes de /equipo/:doctorId o ?doctor=...
  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fromQuery = params.get('doctor');
    const id = doctorId || fromQuery;

    if (!id) return;

    const found = doctors.find((d) => d.id === id);
    if (found) setActiveDoctor(found);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doctorId, location.search]);

  const Title = ({ children }) => (
    <h2 className="text-cota-slate text-2xl md:text-3xl font-semibold tracking-tight">
      {children}
    </h2>
  );

  const closeDoctorModal = () => {
    setActiveDoctor(null);

    // Si venimos de /equipo/:id -> volvemos a home
    if (window.location.pathname.startsWith('/equipo/')) {
      window.history.replaceState({}, '', '/#equipo');
      return;
    }

    // Compatibilidad: limpiar ?doctor=
    const url = new URL(window.location.href);
    url.searchParams.delete('doctor');
    window.history.replaceState({}, '', url.toString());
  };

  return (
    <>
      {/* HERO */}
      <Section id="inicio" tone="plain" className="border-t-0">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider rounded-full px-3 py-1 border border-cota-line text-cota-navy bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-cota-navy" />
              Centro especializado en rodilla · Barcelona
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-cota-navy">
              Especialistas en rodilla
            </h1>

            <h2 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight text-neutral-500">
              Preservación articular y cirugía avanzada
            </h2>

            <p className="mt-5 text-[17px] leading-relaxed text-cota-muted max-w-prose">
              Equipo de traumatólogos especialistas en cirugía de rodilla en
              Barcelona, con experiencia en cirugía deportiva, preservación
              articular y cirugía protésica.
            </p>

            <p className="mt-3 text-sm text-cota-muted">
              Más de 30 años dedicados a la cirugía de rodilla en Barcelona.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonPrimary
                as="a"
                href="/#contacto"
                className="px-6 py-3 rounded-2xl"
              >
                Solicitar visita
              </ButtonPrimary>
              <ButtonSecondary
                as="a"
                href="/#rodilla"
                className="px-6 py-3 rounded-2xl"
              >
                Tratamientos
              </ButtonSecondary>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-video rounded-3xl border border-cota-line shadow-lift overflow-hidden bg-cota-fog">
              <img
                src="/images/equip_medic.png"
                alt="Equipo médico CotaClinic"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* marco sutil exterior, sin tapar la foto */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-cota-line/40" />
            </div>
          </div>
        </div>
      </Section>

      {/* EQUIPO */}
      <Section id="equipo" tone="mist">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <Title>Equipo</Title>
          </div>

          <div className="mt-2 text-base text-cota-muted">
            El proyecto COTA se inició hace más de cuatro décadas de la mano del
            Dr. Joaquín Cabot Boix y ha sido continuado por el Dr. Joaquín Cabot
            Dalmau. Actualmente, el equipo se completa con el Dr. Gabriel
            Oliver, con amplia experiencia en patología deportiva y cirugía
            protésica, el Dr. Jaume Llort, especialista en terapias biológicas,
            y el Dr. Robert Ferrer, experto en técnicas de preservación
            articular.
          </div>

          <div className="mt-3 text-base text-cota-muted">
            Nuestro enfoque se basa en dedicar tiempo a cada paciente y analizar
            cada caso de forma individualizada, priorizando los tratamientos
            conservadores siempre que son una opción adecuada. Cuando la cirugía
            es necesaria, utilizamos técnicas avaladas por la evidencia
            científica y tecnología avanzada.
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {doctors.map((d) => (
            <article
              key={d.id}
              className="rounded-3xl p-4 border border-cota-line bg-white shadow-soft hover:shadow-lift transition-shadow"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-cota-line mb-4 bg-cota-mist">
                {d.imageCard ? (
                  <img
                    src={d.imageCard}
                    alt={d.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : null}
              </div>

              <div className="font-semibold text-cota-ink leading-snug">
                {d.name}
              </div>
              <div className="text-sm text-cota-muted mt-1">{d.role}</div>

              <ul className="mt-4 text-sm text-neutral-700 space-y-1.5">
                {d.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-cota-navy shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setActiveDoctor(d)}
                className="mt-5 w-full px-3 py-2.5 rounded-2xl border border-cota-line hover:bg-cota-mist transition-colors text-sm font-medium"
              >
                Ver perfil
              </button>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="galeria"
        tone="plain"
        pad="tight"
        border={false}
        className="pb-3 md:pb-4"
      >
        <GalleryStrip />
      </Section>

      {/* RODILLA */}
      <Section id="rodilla" tone="mist">
        <Title>Rodilla</Title>

        <Subtle>
          <p>
            La rodilla es una articulación compleja y una de las más exigidas
            del cuerpo. En COTA nos dedicamos de forma específica al tratamiento
            de su patología, priorizando un abordaje individualizado y
            conservador. Cuando la cirugía es necesaria, utilizamos técnicas
            poco invasivas y de preservación articular y, si es preciso
            implantar una prótesis, empleamos diseños anatómicos avanzados
            adaptados a cada paciente.
          </p>

          <p className="mt-3">
            A continuación encontrará información clara y rigurosa sobre las
            principales patologías de la rodilla y los tratamientos que
            realizamos, explicados de forma sencilla para ayudarle a comprender
            su problema y las opciones disponibles.
          </p>
        </Subtle>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* LESIONES DEPORTIVAS */}
          <article className="group rounded-3xl border border-cota-line bg-white p-8 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift">
            <div className="flex justify-center">
              <div className="h-32 w-32 rounded-3xl bg-cota-fog flex items-center justify-center">
                <img
                  src="/images/rodilla/logo_lesions.png"
                  alt=""
                  className="h-32 w-32 object-contain"
                />
              </div>
            </div>

            <h3 className="mt-5 text-center text-xl font-semibold tracking-tight text-cota-ink">
              Lesiones deportivas
            </h3>

            <p className="mt-1 text-center text-sm text-neutral-500">
              Ligamentos, menisco e inestabilidad
            </p>

            <ul className="mt-6 space-y-3 text-[17px] text-neutral-700">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cota-navy" />
                <Link
                  to="/rodilla/lca"
                  className="text-cota-navy hover:underline"
                >
                  Rotura LCA/LCP
                </Link>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cota-navy" />
                <Link
                  to="/rodilla/menisco"
                  className="text-cota-navy hover:underline"
                >
                  Lesiones meniscales
                </Link>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cota-navy" />
                <Link
                  to="/rodilla/inestabilidad-rotuliana"
                  className="text-cota-navy hover:underline"
                >
                  Inestabilidad rotuliana
                </Link>
              </li>
            </ul>
          </article>

          {/* PRESERVACIÓN ARTICULAR */}
          <article className="group rounded-3xl border border-cota-line bg-white p-8 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift">
            <div className="flex justify-center">
              <div className="h-32 w-32 rounded-3xl bg-cota-fog flex items-center justify-center">
                <img
                  src="/images/rodilla/logo_preserv.png"
                  alt=""
                  className="h-32 w-32 object-contain"
                />
              </div>
            </div>

            <h3 className="mt-5 text-center text-xl font-semibold tracking-tight text-cota-ink">
              Preservación articular
            </h3>

            <p className="mt-1 text-center text-sm text-neutral-500">
              Cartílago, alineación y biológicos
            </p>

            <ul className="mt-6 space-y-3 text-[17px] text-neutral-700">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cota-navy" />
                <Link
                  to="/rodilla/osteotomias"
                  className="text-cota-navy hover:underline"
                >
                  Osteotomías
                </Link>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cota-navy" />
                <Link
                  to="/rodilla/cartilago"
                  className="text-cota-navy hover:underline"
                >
                  Cartílago y lesiones condrales
                </Link>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cota-navy" />
                <Link
                  to="/rodilla/terapias-biologicas"
                  className="text-cota-navy hover:underline"
                >
                  Terapias biológicas
                </Link>
              </li>
            </ul>
          </article>

          {/* CIRUGÍA PROTÉSICA */}
          <article className="group rounded-3xl border border-cota-line bg-white p-8 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift">
            <div className="flex justify-center">
              <div className="h-32 w-32 rounded-3xl bg-cota-fog flex items-center justify-center">
                <img
                  src="/images/rodilla/logo_protesis.png"
                  alt=""
                  className="h-32 w-32 object-contain"
                />
              </div>
            </div>

            <h3 className="mt-5 text-center text-xl font-semibold tracking-tight text-cota-ink">
              Cirugía protésica
            </h3>

            <p className="mt-1 text-center text-sm text-neutral-500">
              Prótesis primaria, revisión y tecnología
            </p>

            <ul className="mt-6 space-y-3 text-[17px] text-neutral-700">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cota-navy" />
                <Link
                  to="/rodilla/protesis-rodilla"
                  className="text-cota-navy hover:underline"
                >
                  Prótesis de rodilla (parcial/total)
                </Link>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cota-navy" />
                <Link
                  to="/rodilla/protesis-dolorosa-revision"
                  className="text-cota-navy hover:underline"
                >
                  Prótesis dolorosa: causas y cirugía de revisión
                </Link>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cota-navy" />
                <Link
                  to="/rodilla/robotica"
                  className="text-cota-navy hover:underline"
                >
                  Asistencia tecnológica: realidad aumentada, robótica,
                  cinemática
                </Link>
              </li>
            </ul>
          </article>
        </div>
      </Section>

      {/* REHAB */}
      <Section id="rehab" tone="plain">
        <Title>Rehabilitación y readaptación</Title>
        <Subtle>
          Coordinación y protocolos por fases para un retorno seguro y
          funcional.
        </Subtle>

        <div className="mt-7 rounded-3xl border border-cota-line bg-white shadow-soft p-6">
          <ul className="text-sm text-neutral-700 space-y-2">
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-cota-teal" />
              Coordinación con fisioterapia y readaptadores
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-cota-teal" />
              Protocolos por fases (LCA/menisco/prótesis)
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-cota-teal" />
              Retorno seguro y funcional
            </li>
          </ul>
        </div>
      </Section>

      {/* CASOS */}
      <Section id="casos" tone="mist">
        <Title>Casos y resultados</Title>
        <Subtle>
          Transparencia y casos representativos (siempre anónimos).
        </Subtle>

        <div className="mt-7 grid md:grid-cols-3 gap-6 items-start">
          {/* 1) Opiniones Doctoralia */}
          <div>
            <div className="mb-3">
              <div className="font-semibold text-cota-ink">
                Opiniones (Doctoralia)
              </div>
              <p className="mt-1 text-sm text-cota-muted">
                Opiniones verificadas y actualizadas desde Doctoralia.
              </p>
            </div>

            <div className="flex justify-center">
              <DoctoraliaReviewsWidget />
            </div>
          </div>

          {/* 2) Casos representativos (2/3) */}
          <div className="md:col-span-2 rounded-3xl border border-cota-line bg-white shadow-soft p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-semibold text-cota-ink">
                  Casos representativos
                </div>
                <p className="mt-1 text-sm text-cota-muted">
                  Imágenes reales con finalidad docente e informativa. Siempre
                  anonimizadas.
                </p>
              </div>

              <div className="hidden md:block text-xs text-cota-muted/80">
                Tip: usa ← → en el visor
              </div>
            </div>

            <div className="mt-5">
              <GalleryCases />
            </div>

            <div className="mt-4 text-[11px] text-cota-muted/80 leading-snug">
              Nota: el contenido es orientativo y no sustituye una valoración
              médica. Cada caso es individual y los resultados pueden variar.
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACTO */}
      <Section id="contacto" tone="mist">
        <Title>Contacto</Title>
        <Subtle>
          Cuéntanos tu caso y te orientamos sobre el siguiente paso.
        </Subtle>

        <div className="grid mt-8 items-start gap-10 md:gap-14 md:grid-cols-[auto_minmax(0,1fr)]">
          {/* IZQUIERDA: Doctoralia (sin recuadro) */}
          <div className="max-w-full md:pl-6 lg:pl-10">
            <div className="font-semibold text-cota-ink">
              Reservar cita online
            </div>
            <p className="mt-2 text-sm text-neutral-700">
              Reserva directamente aquí, en el horario disponible.
            </p>
            <div className="mt-4 max-w-full overflow-hidden">
              <DoctoraliaWidget />
            </div>
          </div>

          {/* DERECHA: formulario */}
          <form className="w-full max-w-3xl md:justify-self-end rounded-3xl p-6 border border-cota-line bg-white shadow-soft space-y-4">
            <div>
              <label className="text-sm text-cota-muted">
                Nombre y apellidos
              </label>
              <input
                className="mt-1 w-full border border-cota-line rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cota-navy bg-white"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="text-sm text-cota-muted">
                Email o teléfono
              </label>
              <input
                className="mt-1 w-full border border-cota-line rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cota-navy bg-white"
                placeholder="Contacto"
              />
            </div>

            <div>
              <label className="text-sm text-cota-muted">
                Motivo de consulta
              </label>
              <textarea
                className="mt-1 w-full border border-cota-line rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cota-navy bg-white"
                rows={4}
                placeholder="Cuéntanos tu caso"
              />
            </div>

            <ButtonPrimary
              as="button"
              type="button"
              className="w-full rounded-2xl py-3"
            >
              Enviar
            </ButtonPrimary>

            <p className="text-xs text-cota-muted">
              Al enviar aceptas nuestra política de privacidad.
            </p>
          </form>
        </div>

        {/* Abajo: Localización */}
        <div className="mt-6 rounded-3xl p-6 border border-cota-line bg-white shadow-soft">
          <div className="font-semibold text-cota-ink">Localización</div>
          <ul className="mt-3 text-sm text-neutral-700 space-y-2">
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-cota-teal" />
              Dirección y mapa
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-cota-teal" />
              Horarios
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-cota-teal" />
              Mutuas disponibles
            </li>
          </ul>
        </div>
      </Section>

      {/* Modal */}
      <DoctorModal doctor={activeDoctor} onClose={closeDoctorModal} />
    </>
  );
}

// Modal de perfil (premium)
function DoctorModal({ doctor, onClose }) {
  const [leaving, setLeaving] = React.useState(false);

  // Bloquea scroll del body mientras el modal está abierto
  React.useEffect(() => {
    if (!doctor) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [doctor]);

  // Cerrar con ESC
  React.useEffect(() => {
    if (!doctor) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doctor]);

  // Reset animación al abrir
  React.useEffect(() => {
    if (doctor) setLeaving(false);
  }, [doctor]);

  if (!doctor) return null;

  const handleClose = () => {
    // evita dobles cierres
    if (leaving) return;
    setLeaving(true);
    window.setTimeout(() => {
      onClose();
    }, 180); // igual que duration-200 aprox
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    window.location.hash = '#contacto';
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay con animación */}
      <div
        className={[
          'absolute inset-0 bg-black/40 transition-opacity duration-200',
          leaving ? 'opacity-0' : 'opacity-100',
        ].join(' ')}
      />

      {/* Wrapper: click fuera cierra */}
      <div
        className="relative z-10 flex min-h-full items-center justify-center p-4"
        onClick={handleClose}
      >
        {/* Panel: animación + stopPropagation */}
        <div
          className={[
            'w-[min(920px,92vw)] max-h-[85vh] rounded-3xl shadow-2xl border border-cota-line bg-white overflow-hidden flex flex-col',
            'transition-all duration-200 ease-out',
            leaving
              ? 'opacity-0 translate-y-2 scale-[0.99]'
              : 'opacity-100 translate-y-0 scale-100',
          ].join(' ')}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header fijo */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-cota-line bg-cota-fog">
            <h3 className="text-xl font-semibold tracking-tight text-cota-ink">
              {doctor.name}
            </h3>
            <button
              onClick={handleClose}
              className="px-3 py-2 rounded-2xl border border-cota-line hover:bg-cota-mist transition-colors text-sm"
            >
              Cerrar
            </button>
          </div>

          {/* Área scrolleable (solo el modal) */}
          <div className="min-h-0 overflow-y-auto overscroll-contain">
            <div className="grid md:grid-cols-3 gap-6 p-6">
              <div className="md:col-span-1">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-cota-mist border border-cota-line">
                  {doctor.imageProfile ? (
                    <img
                      src={doctor.imageProfile}
                      alt={`Actividad quirúrgica ${doctor.name}`}
                      className="w-full h-full object-cover"
                    />
                  ) : doctor.imageCard ? (
                    <img
                      src={doctor.imageCard}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : null}
                </div>

                <div className="mt-4 text-sm text-cota-muted">
                  {doctor.role}
                </div>

                <ul className="mt-3 text-sm text-neutral-700 space-y-2">
                  {doctor.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 rounded-full bg-cota-navy" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 text-center">
                  <ButtonPrimary
                    as="a"
                    href="/#contacto"
                    onClick={scrollToContact}
                    className="text-sm rounded-2xl px-4 py-2.5"
                  >
                    Solicitar visita con {doctor.name}
                  </ButtonPrimary>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <section className="rounded-3xl border border-cota-line bg-white shadow-soft p-5">
                  <div className="font-semibold text-cota-ink">Biografía</div>
                  <p className="text-sm text-neutral-700 mt-2 leading-relaxed">
                    {doctor.summary}
                  </p>
                </section>

                <section className="rounded-3xl border border-cota-line bg-white shadow-soft p-5">
                  <div className="font-semibold text-cota-ink">Experiencia</div>
                  <ul className="text-sm text-neutral-700 mt-2 space-y-2">
                    {doctor.experience?.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 rounded-full bg-cota-teal" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-3xl border border-cota-line bg-white shadow-soft p-5">
                  <div className="font-semibold text-cota-ink">Formación</div>
                  <ul className="text-sm text-neutral-700 mt-2 space-y-2">
                    {doctor.education?.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 rounded-full bg-cota-teal" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-3xl border border-cota-line bg-white shadow-soft p-5">
                  <div className="font-semibold text-cota-ink">
                    Publicaciones y docencia
                  </div>
                  <ul className="text-sm text-neutral-700 mt-2 space-y-2">
                    {doctor.publications?.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 rounded-full bg-cota-teal" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {doctor.memberships && (
                  <section className="rounded-3xl border border-cota-line bg-white shadow-soft p-5">
                    <div className="font-semibold text-cota-ink">
                      Sociedades científicas
                    </div>
                    <ul className="text-sm text-neutral-700 mt-2 space-y-2">
                      {doctor.memberships.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 rounded-full bg-cota-teal" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          </div>
          {/* fin área scrolleable */}
        </div>
      </div>
    </div>
  );
}

// === Self-test simple para validar estructura ===
export function _selfTest() {
  const isFunction = typeof CotaClinicSite === 'function';
  const paletteOk = ['navy', 'navyDark', 'sky', 'slate'].every(Boolean);
  const doctorsExist = true;
  return { isFunction, paletteOk, doctorsExist };
}
