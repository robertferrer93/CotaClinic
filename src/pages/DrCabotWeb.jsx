export default function DrCabotWeb() {
  return (
    <div className="relative min-h-screen bg-neutral-100">
      {/* Imagen congelada de la web antigua */}
      <div
        className="pt-24 flex justify-center"
        style={{ pointerEvents: 'none' }}
      >
        <img
          src="/legacy/drcabot-desktop.png"
          alt=""
          className="w-full max-w-6xl shadow-md"
          draggable="false"
        />
      </div>

      {/* Overlay centrado (ÚNICO elemento clicable) */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
        <a
          href="https://cotasportclinic.com"
          className="w-full max-w-4xl bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-12 md:p-16 text-center transition hover:scale-[1.01]"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 leading-tight">
            Hemos cambiado de nombre a
          </h2>

          <div className="text-5xl md:text-6xl font-extrabold text-blue-900 mt-4 tracking-tight">
            CotaSport Clinic
          </div>

          <p className="mt-8 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Visita la nueva web para seguir accediendo a nuestros servicios
            especializados en cirugía de rodilla.
          </p>

          {/* Imagen nueva debajo del texto */}
          <div className="mt-10">
            <img
              src="/legacy/screencapture_webnova.png"
              alt="Equipo CotaSport Clinic"
              className="mx-auto w-full rounded-2xl shadow-lg"
            />
          </div>

          <div className="mt-10 inline-flex items-center justify-center rounded-xl bg-blue-900 px-8 py-4 text-white text-xl font-semibold shadow hover:opacity-95 transition">
            Acceder a la nueva web →
          </div>
        </a>
      </div>
    </div>
  );
}
