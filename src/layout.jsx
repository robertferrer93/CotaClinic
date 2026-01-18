// src/layout.jsx
import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ButtonPrimary } from './components/ui.jsx';

function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconX(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Layout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobEquipo, setMobEquipo] = React.useState(false);
  const [mobRodilla, setMobRodilla] = React.useState(false);

  const panelRef = React.useRef(null);

  const closeMobile = React.useCallback(() => {
    setMobileOpen(false);
    setMobEquipo(false);
    setMobRodilla(false);
  }, []);

  // Cerrar con ESC
  React.useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeMobile();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen, closeMobile]);

  // Cerrar al tocar fuera del panel (mobile)
  React.useEffect(() => {
    if (!mobileOpen) return;

    const onPointerDown = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        closeMobile();
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown, { passive: true });

    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, [mobileOpen, closeMobile]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-cota-mist/90 backdrop-blur border-b border-cota-line">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 min-w-0"
            onClick={closeMobile}
          >
            <div className="h-9 w-9 rounded-xl bg-cota-navy grid place-items-center shrink-0">
              <img
                src="/images/logo-cota-white.svg"
                alt="CotaClinic"
                className="h-7 w-auto"
              />
            </div>

            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-semibold tracking-tight text-lg text-cota-navy truncate">
                CotaClinic
              </span>

              {/* Subtítulo: en móvil fuerza salto y quita el · */}
              <span className="text-[11px] text-neutral-500 leading-snug sm:leading-tight">
                Grupo Cabot
                <span className="hidden sm:inline"> · </span>
                <span className="block sm:inline">Expertos en rodilla</span>
              </span>
            </div>
          </Link>

          {/* ================= NAV (DESKTOP) ================= */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
            <a
              href="/#inicio"
              className="hover:text-cota-navy transition-colors"
            >
              Inicio
            </a>

            {/* Dropdown EQUIPO (desktop) */}
            <div className="relative group">
              <a
                href="/#equipo"
                className="hover:text-cota-navy transition-colors"
              >
                Equipo
              </a>

              <div className="absolute left-1/2 top-full pt-3 -translate-x-1/2 w-[92vw] max-w-[560px] hidden md:block opacity-0 pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-200 ease-out">
                <div className="rounded-3xl border border-cota-line bg-white shadow-lift p-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      {
                        id: 'cabot',
                        name: 'Dr. Joaquim Cabot Dalmau',
                        role: 'Cirugía de Rodilla',
                        photo: '/images/team/joaquim_cabot.png',
                      },
                      {
                        id: 'oliver',
                        name: 'Dr. Gabriel Oliver Far',
                        role: 'COT · Rodilla',
                        photo: '/images/team/gabriel_oliver.png',
                      },
                      {
                        id: 'llort',
                        name: 'Dr. Jaume Llort Buira',
                        role: 'COT · Rodilla',
                        photo: '/images/team/jaume_llort.png',
                      },
                      {
                        id: 'ferrer',
                        name: 'Dr. Robert Ferrer Rivero',
                        role: 'Rodilla y Deportiva',
                        photo: '/images/team/robert_ferrer.png',
                      },
                    ].map((d) => (
                      <a
                        key={d.id}
                        href={`/equipo/${d.id}#equipo`}
                        className="group/item flex items-center gap-3 rounded-2xl border border-transparent hover:border-cota-line hover:bg-cota-mist transition-all duration-200 ease-out p-3 hover:-translate-y-0.5 hover:shadow-sm"
                      >
                        <img
                          src={d.photo}
                          alt={d.name}
                          className="h-12 w-12 rounded-2xl object-cover border border-cota-line bg-cota-mist transition-transform duration-200 ease-out group-hover/item:scale-[1.03]"
                        />
                        <div className="leading-tight">
                          <div className="font-semibold text-cota-slate">
                            {d.name}
                          </div>
                          <div className="text-xs text-cota-muted">
                            {d.role}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown RODILLA (desktop) */}
            <div className="relative group">
              <a
                href="/#rodilla"
                className="hover:text-cota-navy transition-colors"
              >
                Rodilla
              </a>

              <div className="absolute left-1/2 top-full pt-3 -translate-x-1/2 w-[92vw] max-w-[820px] hidden md:block opacity-0 pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-200 ease-out">
                <div className="rounded-3xl border border-cota-line bg-white shadow-lift p-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <div className="font-semibold text-cota-slate mb-2">
                        Lesiones deportivas
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <a
                            className="text-cota-navy hover:underline"
                            href="/rodilla/lca"
                          >
                            Rotura LCA/LCP
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-cota-navy hover:underline"
                            href="/rodilla/menisco"
                          >
                            Lesiones meniscales
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-cota-navy hover:underline"
                            href="/rodilla/inestabilidad-rotuliana"
                          >
                            Inestabilidad rotuliana
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-cota-slate mb-2">
                        Preservación articular
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <a
                            className="text-cota-navy hover:underline"
                            href="/rodilla/osteotomias"
                          >
                            Osteotomías
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-cota-navy hover:underline"
                            href="/rodilla/cartilago"
                          >
                            Cartílago
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-cota-navy hover:underline"
                            href="/rodilla/terapias-biologicas"
                          >
                            Terapias biológicas
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-cota-slate mb-2">
                        Cirugía protésica
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <a
                            className="text-cota-navy hover:underline"
                            href="/rodilla/protesis-rodilla"
                          >
                            Prótesis de rodilla
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-cota-navy hover:underline"
                            href="/rodilla/protesis-dolorosa-revision"
                          >
                            Prótesis dolorosa / revisión
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-cota-navy hover:underline"
                            href="/rodilla/robotica"
                          >
                            Asistencia tecnológica
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/#contacto"
              className="hover:text-cota-navy transition-colors"
            >
              Contacto
            </a>
          </nav>

          {/* ================= RIGHT SIDE (MOBILE + CTA) ================= */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Botón hamburguesa (móvil) */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-cota-line bg-white/70 backdrop-blur hover:bg-white transition"
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <IconX className="h-5 w-5" />
              ) : (
                <IconMenu className="h-5 w-5" />
              )}
            </button>

            {/* CTA: en móvil más corto y compacto para que no compita con la marca */}
            <ButtonPrimary
              as="a"
              href="/#contacto"
              className="px-3 py-2 text-sm sm:px-4"
            >
              <span className="inline sm:hidden">Visita</span>
              <span className="hidden sm:inline">Solicitar visita</span>
              <IconArrowRight className="ml-2 h-4 w-4" />
            </ButtonPrimary>
          </div>
        </div>

        {/* ================= MOBILE DRAWER ================= */}
        {mobileOpen && (
          <div className="md:hidden">
            {/* overlay */}
            <button
              type="button"
              className="fixed inset-0 z-40 bg-black/30"
              aria-label="Cerrar menú"
              onClick={closeMobile}
            />
            {/* panel */}
            <div className="fixed top-[64px] left-0 right-0 z-50 px-4 pb-4">
              <div
                ref={panelRef}
                className="rounded-3xl border border-cota-line bg-white shadow-lift p-3"
              >
                <a
                  href="/#inicio"
                  onClick={closeMobile}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-cota-slate hover:bg-cota-mist transition"
                >
                  Inicio
                </a>

                {/* Equipo accordion */}
                <button
                  type="button"
                  onClick={() => setMobEquipo((v) => !v)}
                  className="w-full flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-cota-slate hover:bg-cota-mist transition"
                >
                  <span>Equipo</span>
                  <span className="text-xs text-cota-muted">
                    {mobEquipo ? '—' : '+'}
                  </span>
                </button>
                {mobEquipo && (
                  <div className="px-2 pb-2">
                    {[
                      {
                        id: 'cabot',
                        name: 'Dr. Joaquim Cabot Dalmau',
                        photo: '/images/team/joaquim_cabot.png',
                      },
                      {
                        id: 'oliver',
                        name: 'Dr. Gabriel Oliver Far',
                        photo: '/images/team/gabriel_oliver.png',
                      },
                      {
                        id: 'llort',
                        name: 'Dr. Jaume Llort Buira',
                        photo: '/images/team/jaume_llort.png',
                      },
                      {
                        id: 'ferrer',
                        name: 'Dr. Robert Ferrer Rivero',
                        photo: '/images/team/robert_ferrer.png',
                      },
                    ].map((d) => (
                      <a
                        key={d.id}
                        href={`/equipo/${d.id}#equipo`}
                        onClick={closeMobile}
                        className="flex items-center gap-3 rounded-2xl px-3 py-2 hover:bg-cota-mist transition"
                      >
                        <img
                          src={d.photo}
                          alt={d.name}
                          className="h-10 w-10 rounded-2xl object-cover border border-cota-line bg-cota-mist"
                        />
                        <div className="text-sm text-cota-slate">{d.name}</div>
                      </a>
                    ))}
                    <a
                      href="/#equipo"
                      onClick={closeMobile}
                      className="block mt-1 rounded-2xl px-3 py-2 text-sm text-cota-navy hover:bg-cota-mist transition"
                    >
                      Ver todo el equipo
                    </a>
                  </div>
                )}

                {/* Rodilla accordion */}
                <button
                  type="button"
                  onClick={() => setMobRodilla((v) => !v)}
                  className="w-full flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-cota-slate hover:bg-cota-mist transition"
                >
                  <span>Rodilla</span>
                  <span className="text-xs text-cota-muted">
                    {mobRodilla ? '—' : '+'}
                  </span>
                </button>
                {mobRodilla && (
                  <div className="px-2 pb-2">
                    {[
                      { href: '/rodilla/lca', label: 'Rotura LCA/LCP' },
                      {
                        href: '/rodilla/menisco',
                        label: 'Lesiones meniscales',
                      },
                      {
                        href: '/rodilla/inestabilidad-rotuliana',
                        label: 'Inestabilidad rotuliana',
                      },
                      { href: '/rodilla/osteotomias', label: 'Osteotomías' },
                      { href: '/rodilla/cartilago', label: 'Cartílago' },
                      {
                        href: '/rodilla/terapias-biologicas',
                        label: 'Terapias biológicas',
                      },
                      {
                        href: '/rodilla/protesis-rodilla',
                        label: 'Prótesis de rodilla',
                      },
                      {
                        href: '/rodilla/protesis-dolorosa-revision',
                        label: 'Prótesis dolorosa / revisión',
                      },
                      {
                        href: '/rodilla/robotica',
                        label: 'Asistencia tecnológica',
                      },
                    ].map((it) => (
                      <a
                        key={it.href}
                        href={it.href}
                        onClick={closeMobile}
                        className="block rounded-2xl px-3 py-2 text-sm text-cota-navy hover:bg-cota-mist transition"
                      >
                        {it.label}
                      </a>
                    ))}
                    <a
                      href="/#rodilla"
                      onClick={closeMobile}
                      className="block mt-1 rounded-2xl px-3 py-2 text-sm text-cota-navy hover:bg-cota-mist transition"
                    >
                      Ver la sección Rodilla
                    </a>
                  </div>
                )}

                <a
                  href="/#contacto"
                  onClick={closeMobile}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-cota-slate hover:bg-cota-mist transition"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ================= MAIN ================= */}
      <main className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-10 w-full">
          <Outlet />
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-neutral-600 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} CotaClinic · Todos los derechos
            reservados
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-70">
              Privacidad
            </a>
            <a href="#" className="hover:opacity-70">
              Aviso legal
            </a>
            <a href="#" className="hover:opacity-70">
              Cookies
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
