// src/components/DoctoraliaWidget.jsx
import * as React from 'react';

export default function DoctoraliaWidget() {
  React.useEffect(() => {
    // Si ya está cargado, no lo dupliques
    if (document.getElementById('zl-facility-widget')) return;

    const s = document.createElement('script');
    s.id = 'zl-facility-widget';
    s.src = 'https://www.doctoralia.es/platform/js/widget.js';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const url = 'https://www.doctoralia.es/clinicas/grupo-cabot';

  return (
    <div>
      <a
        href={url}
        rel="nofollow"
        data-zl-widget-facility="grupo-cabot"
        data-placement="inline"
        data-zlw-type="facility-calendar-listing-with-saas-only"
      >
        GRUPO CABOT
      </a>

      <p className="mt-3 text-sm text-neutral-500">
        Si no ves el calendario, reserva aquí:{' '}
        <a
          className="text-cota-navy hover:underline"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          Abrir Doctoralia
        </a>
      </p>
    </div>
  );
}
