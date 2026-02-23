// src/components/ContactSection.jsx
import React, { Suspense } from 'react';
import { ButtonPrimary } from './ui.jsx';

export default function ContactSection({
  DoctoraliaWidget,
  loadDoctoralia,
  status,
  setStatus,
  trackEvent,
  sectionId = 'contacto',
  onSuccess,
  variant = 'embedded', // 'embedded' (como home) | 'card'
}) {
  const Wrapper = ({ children }) =>
    variant === 'card' ? (
      <div className="rounded-3xl border border-cota-line bg-white shadow-soft p-6 md:p-8">
        {children}
      </div>
    ) : (
      <div>{children}</div>
    );
  return (
    <section id={sectionId} className="scroll-mt-24">
      <Wrapper>
        <div className="rounded-3xl border border-cota-line bg-white shadow-soft p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-cota-slate">Contacto</h2>
          <p className="mt-2 text-sm text-neutral-700">
            Cuéntanos tu caso y te orientamos sobre el siguiente paso.
          </p>

          <div className="grid mt-8 items-start gap-10 md:gap-12 md:grid-cols-[0.85fr_1.15fr]">
            {/* Doctoralia */}
            <div className="w-full">
              <div className="font-semibold text-cota-ink">
                Reservar cita online
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                Reserva directamente aquí, en el horario disponible.
              </p>

              <div className="mt-4 w-full">
                {loadDoctoralia ? (
                  <Suspense
                    fallback={
                      <div className="h-[420px] rounded-3xl border border-cota-line bg-white" />
                    }
                  >
                    <div className="mt-4">
                      <div className="rounded-3xl border border-cota-line bg-white p-4">
                        <DoctoraliaWidget />
                      </div>
                    </div>
                  </Suspense>
                ) : (
                  <div className="h-[420px] rounded-3xl border border-cota-line bg-white" />
                )}
              </div>
            </div>

            {/* Formulario */}
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (status === 'sending') return;

                const form = e.currentTarget;
                if (!form) return;

                setStatus('sending');

                const formData = new FormData(form);
                const payload = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  phone: formData.get('phone'),
                  message: formData.get('message'),
                };

                try {
                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                  });

                  const data = await res.json().catch(() => ({}));
                  if (!res.ok || !data.ok) throw new Error('Request failed');

                  form.reset();
                  setStatus('ok');

                  trackEvent?.('generate_lead', {
                    event_category: 'form',
                    event_label: sectionId,
                    has_email: Boolean(payload.email),
                    has_phone: Boolean(payload.phone),
                  });

                  if (onSuccess) onSuccess();

                  setTimeout(() => setStatus('idle'), 6000);
                } catch (err) {
                  setStatus('error');
                }
              }}
              className="w-full md:max-w-none rounded-3xl p-6 border border-cota-line bg-white shadow-soft space-y-4"
            >
              <div>
                <label className="text-sm text-cota-muted">
                  Nombre y apellidos
                </label>
                <input
                  name="name"
                  required
                  onChange={() => status !== 'idle' && setStatus('idle')}
                  className="mt-1 w-full border border-cota-line rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cota-navy bg-white"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-cota-muted">Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={() => status !== 'idle' && setStatus('idle')}
                    className="mt-1 w-full border border-cota-line rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cota-navy bg-white"
                    placeholder="email@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="text-sm text-cota-muted">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    onChange={() => status !== 'idle' && setStatus('idle')}
                    className="mt-1 w-full border border-cota-line rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cota-navy bg-white"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-cota-muted">
                  Motivo de consulta
                </label>
                <textarea
                  name="message"
                  required
                  onChange={() => status !== 'idle' && setStatus('idle')}
                  className="mt-1 w-full min-h-[160px] border border-cota-line rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cota-navy bg-white"
                  rows={6}
                  placeholder="Cuéntanos tu caso (síntomas, tiempo de evolución, pruebas realizadas...)"
                />
              </div>

              <ButtonPrimary
                as="button"
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-2xl py-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar'}
              </ButtonPrimary>

              {status === 'ok' && (
                <div className="text-sm text-green-700 space-y-1">
                  <p>Enviado. Hemos recibido tu consulta.</p>
                  <p className="text-xs text-cota-muted">
                    Te responderemos lo antes posible.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <p className="text-sm text-red-700">
                  No se pudo enviar. Revisa los datos e inténtalo de nuevo.
                </p>
              )}

              <p className="text-xs text-cota-muted">
                Al enviar aceptas nuestra política de privacidad.
              </p>
            </form>
          </div>

          {/* Localización */}
          <div className="mt-10 rounded-3xl p-6 border border-cota-line bg-white shadow-soft">
            <div className="font-semibold text-cota-ink">Localización</div>

            <div className="mt-4 grid gap-6 md:grid-cols-[0.9fr_1.4fr] md:items-start">
              <div className="order-1 md:order-2">
                <div className="rounded-3xl overflow-hidden border border-cota-line bg-white shadow-soft">
                  <iframe
                    title="Mapa CotaSport Clinic"
                    className="w-full h-[260px] md:h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Carrer%20de%20la%20Mare%20de%20D%C3%A9u%20de%20la%20Salut%2078%204%C2%BAB%20Barcelona%2008024&output=embed"
                  />
                </div>

                <a
                  className="mt-3 inline-flex text-sm font-medium text-cota-navy hover:underline"
                  href="https://www.google.com/maps/search/?api=1&query=Carrer%20de%20la%20Mare%20de%20D%C3%A9u%20de%20la%20Salut%2078%204%C2%BAB%20Barcelona%2008024"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver en Google Maps →
                </a>
              </div>

              <div className="order-2 md:order-1">
                <div className="space-y-5 text-sm text-neutral-700">
                  <div>
                    <div className="font-semibold text-cota-ink">Dirección</div>
                    <div className="mt-1">
                      Carrer de la Mare de Déu de la Salut, 78 · 4ºB
                      <br />
                      08024 · Barcelona
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-cota-ink">Teléfono</div>
                    <a
                      className="mt-1 inline-flex hover:underline"
                      href="tel:+34932199451"
                    >
                      +34 932 19 94 51
                    </a>
                  </div>

                  <div>
                    <div className="font-semibold text-cota-ink">Horarios</div>
                    <ul className="mt-2 space-y-1">
                      <li>Lunes: 16:00 – 19:00 h</li>
                      <li>Martes: 10:00 – 19:00 h</li>
                      <li>Miércoles: 10:00 – 19:00 h</li>
                      <li>Jueves: 10:00 – 13:00 h</li>
                    </ul>
                    <div className="mt-2 text-xs text-cota-muted">
                      Atención con cita previa.
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-cota-ink">
                      Mutuas y aseguradoras
                    </div>
                    <ul className="mt-2 columns-1 sm:columns-2 gap-8 [column-fill:_balance]">
                      <li className="break-inside-avoid mb-1">Adeslas</li>
                      <li className="break-inside-avoid mb-1">Aegon Salud</li>
                      <li className="break-inside-avoid mb-1">
                        Asistencia Sanitaria Colegial
                      </li>
                      <li className="break-inside-avoid mb-1">AXA</li>
                      <li className="break-inside-avoid mb-1">Caser</li>
                      <li className="break-inside-avoid mb-1">
                        Cigna Healthcare España
                      </li>
                      <li className="break-inside-avoid mb-1">Cosalud</li>
                      <li className="break-inside-avoid mb-1">DKV Seguros</li>
                      <li className="break-inside-avoid mb-1">Mapfre</li>
                      <li className="break-inside-avoid mb-1">
                        Mutua General de Catalunya
                      </li>
                      <li className="break-inside-avoid mb-1">Occident</li>
                      <li className="break-inside-avoid mb-1">Sanitas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Localización */}
        </div>
      </Wrapper>
    </section>
  );
}
