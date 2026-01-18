let lastReinject = 0;

export function loadDocplanner({ force = false } = {}) {
  const SCRIPT_ID = 'zl-widget-s';
  const SRC = 'https://platform.docplanner.com/js/widget.js';

  return new Promise((resolve) => {
    const existing = document.getElementById(SCRIPT_ID);

    if (existing && !force) return resolve(true);

    // evita reinyecciones seguidas
    const now = Date.now();
    if (force && now - lastReinject < 800) return resolve(true);
    if (force) lastReinject = now;

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
}

