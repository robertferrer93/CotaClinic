import * as React from 'react';

export default function DoctoraliaReviewsWidget({
  facility = 'grupo-cabot',
  url = 'https://www.doctoralia.es/clinicas/grupo-cabot',
  label = 'GRUPO CABOT',
  saasOnly = true,
  className = '',
}) {
  React.useEffect(() => {
    const SCRIPT_ID = 'zl-widget-s';
    const existing = document.getElementById(SCRIPT_ID);

    const markLoaded = (el) => {
      try {
        el.dataset.loaded = 'true';
      } catch {
        // no-op
      }
    };

    // Si no existe, lo añadimos
    if (!existing) {
      const s = document.createElement('script');
      s.id = SCRIPT_ID;
      s.src = 'https://platform.docplanner.com/js/widget.js';
      s.async = true;
      s.onload = () => markLoaded(s);
      document.body.appendChild(s);
      return;
    }

    // Si ya existe pero no sabemos si está "cargado", intentamos marcarlo al cargar
    if (!existing.dataset?.loaded) {
      existing.addEventListener('load', () => markLoaded(existing), { once: true });
    }

    // En la mayoría de casos el script ya “detecta” el nuevo anchor (SPA).
    // Si alguna vez lo ves sin renderizar, un refresh de página lo fuerza.
  }, []);

  return (
    <div className={className}>
      <a
        className="zl-facility-url"
        href={url}
        rel="nofollow"
        data-zlw-facility={facility}
        data-zlw-type="certificate"
        data-zlw-saas-only={saasOnly ? 'true' : 'false'}
        data-zlw-a11y-title="Opiniones en Doctoralia"
      >
        {label}
      </a>
    </div>
  );
}
