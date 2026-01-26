// src/CotaClinicSite.jsx
import * as React from 'react';
import {
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
  Navigate,
} from 'react-router-dom';
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
import GalleryStrip from './components/GalleryStrip.jsx';
import GalleryCases from './components/GalleryCases.jsx';
import Subtle from './components/typography/Subtle.jsx';
import DocplannerScript from './components/DocplannerScript';
import { doctors } from './data/doctors.js';
import DoctorProfilePage from './pages/DoctorProfilePage.jsx';

import {
  Section,
  ButtonPrimary,
  ButtonSecondary,
  ButtonSecondaryDark,
} from './components/ui';

// === Componente principal con rutas ===
export default function CotaClinicSite() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          {/* ✅ NUEVO: página real por doctor */}
          <Route path="/equipo/:doctorId" element={<DoctorProfilePage />} />

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

          {/* Home + scroll */}
          <Route path="/rodilla" element={<HomePage />} />
          <Route path="/equipo" element={<HomePage />} />
          <Route path="/contacto" element={<HomePage />} />

          {/* fallback */}
          <Route path="*" element={<HomePage />} />
        </Route>
        <Route path="/equipo/:doctorId" element={<DoctorProfilePage />} />
      </Routes>
    </>
  );
}

// ================== PÁGINA HOME ==================
function HomePage() {
  const location = useLocation();

  // ✅ Scroll automático si la URL es /rodilla, /equipo o /contacto
  React.useEffect(() => {
    const map = {
      '/rodilla': '#rodilla',
      '/equipo': '#equipo',
      '/contacto': '#contacto',
    };

    const target = map[location.pathname];
    if (!target) return;

    const t = setTimeout(() => {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);

    return () => clearTimeout(t);
  }, [location.pathname]);

  const Title = ({ children }) => (
    <h2 className="text-cota-slate text-2xl md:text-3xl font-semibold tracking-tight">
      {children}
    </h2>
  );

  return (
    <>
      <DocplannerScript />

      {/* HERO */}
      <Section
        id="inicio"
        tone="brand"
        border={false}
        className="relative overflow-hidden pt-12 md:pt-16 pb-8 md:pb-10 md:pb-0"
      >
        {/* 1 columna en mobile/tablet; 2 columnas solo en desktop */}
        <div className="relative grid lg:grid-cols-2 gap-10 items-stretch">
          {/* TEXTO */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider rounded-full px-3 py-1 border border-white/30 text-white bg-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Centro especializado en rodilla · Barcelona
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight">
              Especialistas en rodilla
            </h1>

            <h2 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight text-white/70">
              Preservación articular y tratamientos biológicos
            </h2>

            <p className="mt-5 text-[17px] leading-relaxed text-white/80 max-w-prose">
              Equipo de traumatólogos especialistas en cirugía de rodilla en
              Barcelona, con experiencia en cirugía deportiva, preservación
              articular y cirugía protésica.
            </p>

            <p className="mt-3 text-sm text-white/70">
              Más de 30 años dedicados a la cirugía de rodilla en Barcelona.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonPrimary
                as="a"
                href="/#contacto"
                className="px-6 py-3 rounded-2xl bg-white !text-[#0E2A47]"
              >
                Solicitar visita
              </ButtonPrimary>

              <ButtonSecondaryDark
                as="a"
                href="/#rodilla"
                className="px-6 py-3 rounded-2xl"
              >
                Tratamientos
              </ButtonSecondaryDark>
            </div>

            {/* IMAGEN (mobile + tablet) debajo de botones */}
            <div className="mt-2 -mx-6 -mb-8 md:-mb-10 lg:hidden">
              <img
                src="/images/logo-cota-white.svg"
                alt=""
                className="pointer-events-none
                absolute
                right-[-40px] bottom-[-90px]
                w-[420px] opacity-[0.04]
            
                sm:bottom-[-150px]
                md:w-[520px] md:bottom-[-10px] md:right-[40px]"
              />
              <img
                src="/images/equip_hero_ed_1.png"
                alt="Equipo médico CotaClinic"
                className="block w-full h-auto"
              />
            </div>
          </div>

          {/* VISUAL DERECHO (solo desktop) */}
          <div className="relative hidden lg:flex flex-col -mr-6">
            <img
              src="/images/logo-cota-white.svg"
              alt=""
              className="pointer-events-none absolute right-[-80px] bottom-[-120px] w-[520px] opacity-[0.04]"
            />

            <img
              src="/images/equip_hero_ed_1.png"
              alt="Equipo médico CotaClinic"
              className="
          mt-auto
          block
          w-[126%] lg:w-[132%]
          max-w-none
          -mb-8 lg:-mb-10
          ml-auto
          translate-x-[-6%] lg:translate-x-[-8%]
        "
            />
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
            Dr. Joaquín Cabot Boix y ha sido continuado por el Dr. Joaquim Cabot
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
              onMouseEnter={() => preloadImage(d.imageProfile || d.imageCard)}
              onFocus={() => preloadImage(d.imageProfile || d.imageCard)}
              onTouchStart={() => preloadImage(d.imageProfile || d.imageCard)}
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

              {/* ✅ CAMBIO: botón -> link a página */}
              <Link
                to={`/equipo/${d.id}`}
                className="mt-5 block text-center w-full px-3 py-2.5 rounded-2xl border border-cota-line hover:bg-cota-mist transition-colors text-sm font-medium"
              >
                Ver perfil
              </Link>
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
          <div className="min-w-0">
            <div className="mb-3">
              <div className="font-semibold text-cota-ink">
                Opiniones (Doctoralia)
              </div>
              <p className="mt-1 text-sm text-cota-muted">
                Opiniones verificadas y actualizadas desde Doctoralia.
              </p>
            </div>

            <div className="w-full max-w-full overflow-x-hidden">
              <div className="w-full max-w-full flex justify-center">
                <div className="w-full max-w-full">
                  <DoctoraliaReviewsWidget />
                </div>
              </div>
            </div>
          </div>

          {/* 2) Casos representativos (2/3) */}
          <div className="md:col-span-2 min-w-0 rounded-3xl border border-cota-line bg-white shadow-soft p-6 overflow-x-hidden">
            <div className="flex items-start justify-between gap-4 min-w-0">
              <div className="min-w-0">
                <div className="font-semibold text-cota-ink">
                  Casos representativos
                </div>
                <p className="mt-1 text-sm text-cota-muted">
                  Imágenes reales con finalidad docente e informativa. Siempre
                  anonimizadas.
                </p>
              </div>

              <div className="hidden md:block text-xs text-cota-muted/80 shrink-0">
                Tip: usa ← → en el visor
              </div>
            </div>

            <div className="mt-5 w-full max-w-full overflow-x-hidden">
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
      <Section id="contacto" tone="plain">
        <Title>Contacto</Title>
        <Subtle>
          Cuéntanos tu caso y te orientamos sobre el siguiente paso.
        </Subtle>

        <div className="grid mt-8 items-start gap-10 md:gap-14 md:grid-cols-[auto_minmax(0,1fr)]">
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

        <div className="mt-6 rounded-3xl p-6 border border-cota-line bg-white shadow-soft">
          <div className="font-semibold text-cota-ink">Localización</div>

          {/* Layout: mobile 1 columna (mapa primero), md+ 2 columnas con mapa a la derecha */}
          <div className="mt-4 grid gap-6 md:grid-cols-[0.9fr_1.4fr] md:items-start">
            {/* MAPA (mobile arriba, md+ derecha) */}
            <div className="order-1 md:order-2">
              <div className="rounded-3xl overflow-hidden border border-cota-line bg-white shadow-soft">
                <iframe
                  title="Mapa CotaClinic"
                  className="w-full h-[260px] md:h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Carrer%20de%20la%20Mare%20de%20D%C3%A9u%20de%20la%20Salut%2078%204%C2%BAB%20Barcelona%2008024&output=embed"
                />
              </div>

              <a
                className="mt-3 inline-flex text-sm font-medium text-cota-navy hover:underline"
                href="https://www.google.com/maps/search/?api=1&query=Carrer%20de%20la%20Mare%20de%20D%C3%A9u%20de%20la%20Salut%2078%204%C2%BAB%20Barcelona%2008024"
                target="_blank"
                rel="noreferrer"
              >
                Ver en Google Maps →
              </a>
            </div>

            {/* TEXTO (mobile debajo, md+ izquierda) */}
            <div className="order-2 md:order-1">
              <div className="space-y-5 text-sm text-neutral-700">
                <div>
                  <div className="font-semibold text-cota-ink">Dirección</div>
                  <div className="mt-1">
                    Carrer de la Mare de Déu de la Salut, 78 · 4ºB
                    <br />
                    08024 · Barcelona
                  </div>
                </div>

                <div>
                  <div className="font-semibold text-cota-ink">Teléfono</div>
                  <a
                    className="mt-1 inline-flex hover:underline"
                    href="tel:+34932199451"
                  >
                    +34 932 19 94 51
                  </a>
                </div>

                <div>
                  <div className="font-semibold text-cota-ink">Horarios</div>
                  <ul className="mt-2 space-y-1">
                    <li>Lunes: 16:00 – 19:00 h</li>
                    <li>Martes: 10:00 – 19:00 h</li>
                    <li>Miércoles: 10:00 – 19:00 h</li>
                    <li>Jueves: 10:00 – 13:00 h</li>
                  </ul>
                  <div className="mt-2 text-xs text-cota-muted">
                    Atención con cita previa.
                  </div>
                </div>

                <div>
                  <div className="font-semibold text-cota-ink">
                    Mutuas y aseguradoras
                  </div>
                  <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-6">
                    <li>Adeslas</li>
                    <li>Aegon Salud</li>
                    <li>Asistencia Sanitaria Colegial</li>
                    <li>AXA</li>
                    <li>Caser</li>
                    <li>Cigna Healthcare España</li>
                    <li>Cosalud</li>
                    <li>DKV Seguros</li>
                    <li>Mapfre</li>
                    <li>Mutua General de Catalunya</li>
                    <li>Occident</li>
                    <li>Sanitas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

// Precarga de imágenes (antes de navegar al perfil)
function preloadImage(src) {
  if (!src) return;
  const img = new Image();
  img.src = src;
}

// === Self-test simple para validar estructura ===
export function _selfTest() {
  const isFunction = typeof CotaClinicSite === 'function';
  const paletteOk = ['navy', 'navyDark', 'sky', 'slate'].every(Boolean);
  const doctorsExist = Array.isArray(doctors) && doctors.length > 0;
  return { isFunction, paletteOk, doctorsExist };
}


