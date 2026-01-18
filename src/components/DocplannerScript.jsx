import * as React from 'react';

export default function DocplannerScript() {
  React.useEffect(() => {
    const SCRIPT_ID = 'zl-widget-s';
    const SRC = 'https://platform.docplanner.com/js/widget.js';

    const inject = () =>
      new Promise((resolve) => {
        const existing = document.getElementById(SCRIPT_ID);
        if (existing) return resolve(existing);

        const s = document.createElement('script');
        s.id = SCRIPT_ID;
        s.src = SRC;
        s.async = true;
        s.defer = true;
        s.onload = () => resolve(s);
        s.onerror = () => resolve(null);
        document.body.appendChild(s);
      });

    const reinject = () =>
      new Promise((resolve) => {
        const existing = document.getElementById(SCRIPT_ID);
        if (existing) existing.remove();

        const s = document.createElement('script');
        s.id = SCRIPT_ID;
        s.src = SRC;
        s.async = true;
        s.defer = true;
        s.onload = () => resolve(true);
        s.onerror = () => resolve(false);
        document.body.appendChild(s);
      });

    let cancelled = false;

    (async () => {
      await inject();
      if (cancelled) return;

      // “Segundo pase” para que detecte el widget de más abajo
      window.setTimeout(() => {
        if (cancelled) return;
        reinject();
      }, 800);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
