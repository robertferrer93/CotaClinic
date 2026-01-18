import * as React from 'react';

export default function DoctoraliaWidget() {
  const url = 'https://www.doctoralia.es/clinicas/grupo-cabot';

  return (
    <div>
      <a
        href={url}
        rel="nofollow"
        data-zlw-facility="grupo-cabot"
        data-zlw-type="facility-calendar-listing-with-saas-only"
        data-zlw-placement="inline"
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
