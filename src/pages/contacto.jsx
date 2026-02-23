import React, { useState, lazy } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useHead } from '../hooks/useHead';
import ContactSection from '../components/ContactSection.jsx';
import { trackEvent } from '../analytics';
import DocplannerScript from '../components/DocplannerScript.jsx';

const DoctoraliaWidget = lazy(() =>
  import('../components/DoctoraliaWidget.jsx')
);

export default function ContactoPage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');

  useHead({
    title: 'Contacto | Solicitar visita en CotaSport Clinic - Barcelona',
    description:
      'Solicita visita en CotaSport Clinic (Barcelona). Reserva online o envía tu consulta para valoración y segunda opinión.',
  });

  return (
    <div className="w-full bg-white">
      {/* Contenedor estilo Home */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
            Contacto
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
            Solicitar visita en CotaSport Clinic
          </h1>
          <p className="mt-4 text-neutral-600">
            Reserva cita online o envía tu consulta. Si ya tienes resonancia
            (RMN) o informes, no olvides traerlos a la visita.
          </p>

          <div className="mt-5">
            <Link to="/" className="text-sm text-cota-navy hover:underline">
              ← Volver al inicio
            </Link>
          </div>
        </header>

        <DocplannerScript />

        <ContactSection
          DoctoraliaWidget={DoctoraliaWidget}
          loadDoctoralia={true}
          status={status}
          setStatus={setStatus}
          trackEvent={trackEvent}
          sectionId="contacto-page"
          onSuccess={() => navigate('/gracias')}
          variant="ebedded" // si quieres el bloque grande con borde/sombra
          // variant="embedded" // si NO quieres tarjeta exterior
        />
      </div>
    </div>
  );
}
