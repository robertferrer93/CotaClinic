// src/pages/DoctorProfilePage.jsx
import * as React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { doctors } from '../data/doctors.js';
import { ButtonPrimary, Section } from '../components/ui.jsx';

export default function DoctorProfilePage() {
  const { doctorId } = useParams(); // 👈 coincide con /equipo/:doctorId
  const doctor = doctors.find((d) => d.id === doctorId);

  React.useEffect(() => {
    if (!doctor) return;
    document.title = `${doctor.name} | Traumatólogo especialista en rodilla | CotaClinic Barcelona`;
  }, [doctor]);

  if (!doctor) return <Navigate to="/equipo" replace />;

  const src = doctor.imageProfile || doctor.imageCard;

  return (
    <Section tone="plain" className="border-t-0">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6">
          <Link to="/equipo" className="text-sm underline text-cota-navy">
            ← Volver al equipo
          </Link>
        </div>

        <div className="grid md:grid-cols-[320px_1fr] gap-8 items-start">
          {/* Columna izquierda */}
          <div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-cota-line bg-cota-mist">
              {src ? (
                <img
                  src={src}
                  alt={
                    doctor.imageProfile
                      ? `Actividad quirúrgica ${doctor.name}`
                      : `Foto de ${doctor.name}`
                  }
                  className={[
                    'w-full h-full object-cover',
                    doctor.imageProfile ? '' : 'object-top',
                  ].join(' ')}
                />
              ) : null}
            </div>

            {doctor.highlights?.length ? (
              <div className="mt-5 space-y-2 text-sm">
                {doctor.highlights.map((h, i) => (
                  <div key={i} className="text-neutral-700">
                    • {h}
                  </div>
                ))}
              </div>
            ) : null}

            <div className="mt-6">
              <ButtonPrimary
                as="a"
                href="/#contacto"
                className="w-full justify-center rounded-2xl px-5 py-3"
              >
                Solicitar visita con {doctor.name}
              </ButtonPrimary>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="space-y-6">
            <header className="rounded-3xl border border-cota-line bg-white p-6 shadow-soft">
              <h1 className="text-3xl font-semibold text-cota-ink">
                {doctor.name}
              </h1>
              <p className="mt-1 text-cota-muted">{doctor.role}</p>
            </header>

            <SectionCard title="Biografía" text={doctor.summary} />
            <ListCard title="Experiencia" items={doctor.experience} />
            <ListCard title="Formación" items={doctor.education} />
            <ListCard
              title="Publicaciones y docencia"
              items={doctor.publications}
            />
            <ListCard
              title="Sociedades científicas"
              items={doctor.memberships}
            />
             <ListCard
              title="Becas y premios"
              items={doctor.premios}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function SectionCard({ title, text }) {
  if (!text) return null;
  return (
    <div className="rounded-3xl border border-cota-line bg-white p-6 shadow-soft">
      <h2 className="text-lg font-semibold text-cota-ink">{title}</h2>
      <p className="mt-2 text-neutral-700 leading-relaxed">{text}</p>
    </div>
  );
}

function ListCard({ title, items }) {
  if (!items?.length) return null;
  return (
    <div className="rounded-3xl border border-cota-line bg-white p-6 shadow-soft">
      <h2 className="text-lg font-semibold text-cota-ink">{title}</h2>
      <ul className="mt-3 space-y-2 text-neutral-700">
        {items.map((it, i) => (
          <li key={i}>• {it}</li>
        ))}
      </ul>
    </div>
  );
}
