// src/components/DoctoraliaWidget.jsx
import * as React from 'react';
import { loadDocplanner } from '../lib/docplanner';

export default function DoctoraliaWidget() {
  const hostRef = React.useRef(null);
  const [instanceKey, setInstanceKey] = React.useState(0);
  const didInitRef = React.useRef(false);

  const url = 'https://www.doctoralia.es/clinicas/grupo-cabot';

  React.useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    const init = async () => {
      // recrea el <a> para que el script lo detecte
      setInstanceKey((k) => k + 1);

      // primera vez: carga normal; después: reinyección para re-scan
      await loadDocplanner({ force: didInitRef.current });
      didInitRef.current = true;
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          init();
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={hostRef}>
      <a
        key={instanceKey}
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
