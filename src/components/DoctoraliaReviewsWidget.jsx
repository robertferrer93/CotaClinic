import * as React from 'react';
import { loadDocplanner } from '../lib/docplanner';

export default function DoctoraliaReviewsWidget({
  facility = 'grupo-cabot',
  url = 'https://www.doctoralia.es/clinicas/grupo-cabot',
  label = 'GRUPO CABOT',
  saasOnly = true,
  className = '',
  type = 'certificate', // por si algún día quieres otro tipo de widget
}) {
  const hostRef = React.useRef(null);
  const [instanceKey, setInstanceKey] = React.useState(0);
  const didInitRef = React.useRef(false);

  React.useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    const init = async () => {
      // 1) Fuerza recrear el <a> para que el script lo detecte
      setInstanceKey((k) => k + 1);

      // 2) Carga/reinyecta el script:
      //    - primera vez: normal
      //    - siguientes: force=true para que re-escanee el DOM (cuando hay 2 widgets)
      await loadDocplanner({ force: didInitRef.current });
      didInitRef.current = true;
    };

    // Inicializa cuando entra en pantalla (scroll)
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          init();
          io.disconnect(); // solo una vez
        }
      },
      { threshold: 0.15 }
    );

    io.observe(el);

    // Fallback por si ya es visible al cargar (o iOS raro con observers)
    const t = window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      const visible = r.top < window.innerHeight && r.bottom > 0;
      if (visible) {
        init();
        io.disconnect();
      }
    }, 50);

    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={hostRef} className={className}>
      <a
        key={instanceKey}
        className="zl-facility-url"
        href={url}
        rel="nofollow"
        data-zlw-facility={facility}
        data-zlw-type={type}
        data-zlw-saas-only={saasOnly ? 'true' : 'false'}
        data-zlw-a11y-title="Opiniones en Doctoralia"
      >
        {label}
      </a>
    </div>
  );
}
