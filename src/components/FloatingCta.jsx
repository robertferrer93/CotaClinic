import * as React from 'react';
import { Link } from 'react-router-dom';

export default function FloatingCta({
  to = '/contacto',
  label = 'Solicitar visita',
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 pb-[max(env(safe-area-inset-bottom),12px)]">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border border-cota-mist bg-cota-mist shadow-lg p-3 flex items-center justify-between gap-3">
          <div className="text-sm text-neutral-700">
            ¿Quieres que lo valoremos en consulta?
          </div>

          <Link
            to={to}
            className="shrink-0 inline-flex items-center justify-center rounded-xl bg-cota-navy px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            {label}
          </Link>
        </div>
      </div>
    </div>
  );
}
