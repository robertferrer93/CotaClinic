import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../components/ui.jsx';
import { useHead } from '../hooks/useHead';

export default function GraciasPage() {
  useHead({
    title: 'Gracias | Solicitud enviada | CotaSport Clinic',
    description:
      'Hemos recibido tu consulta. Te responderemos lo antes posible.',
  });

  return (
    <Article>
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          Contacto
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          Gracias. Hemos recibido tu consulta.
        </h1>
        <p className="mt-4 text-neutral-600">
          Te responderemos lo antes posible.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            to="/contacto"
            className="text-sm font-medium text-cota-navy hover:underline"
          >
            Volver a Contacto →
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-cota-navy hover:underline"
          >
            Ir al inicio →
          </Link>
        </div>
      </header>
    </Article>
  );
}
