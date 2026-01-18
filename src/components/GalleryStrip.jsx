// src/components/GalleryStrip.jsx
import * as React from 'react';

export default function GalleryStrip({ contained = true }) {
  const items = [
    {
      title: 'Ecografía diagnostica',
      src: '/images/gallery/eco_llort.png',
      ratio: '3/4',
    },
    {
      title: 'Explicación de caso',
      src: '/images/gallery/explicacio_oliver.png',
      ratio: '4/3',
    },
    {
      title: 'Explicación sutura meniscal',
      src: '/images/gallery/explicacio_sutura.png',
      ratio: '4/3',
    },
    {
      title: 'Explicando tratamiento realizado',
      src: '/images/gallery/explicacio_ttm_realitzat.png',
      ratio: '4/3',
    },
    {
      title: 'Exploración',
      src: '/images/gallery/exploracio_ferrer.png',
      ratio: '4/3',
    },
    { title: 'Quirófano', src: '/images/gallery/quiro_1.png', ratio: '4/3' },
    { title: 'Quirófano', src: '/images/gallery/quiro_2.png', ratio: '3/4' },
    { title: 'Quirófano', src: '/images/gallery/quiro_3.png', ratio: '4/3' },
  ];

  const loop = React.useMemo(() => [...items, ...items], [items]);
  const [openIdx, setOpenIdx] = React.useState(null);

  const trackRef = React.useRef(null);

  // velocidades
  const BASE_SPEED = 0.5; // px por tick
  const FAST_SPEED = 6.0;

  const speedRef = React.useRef(BASE_SPEED);
  const holdingRef = React.useRef(false);

  // pausa por hover y por lightbox abierto
  const hoverPausedRef = React.useRef(false);

  // tamaños
  const BASE_H = 220;
  const V_EXTRA = 14;

  // Autoplay robusto por intervalo
  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    el.scrollLeft = 1;

    const id = window.setInterval(() => {
      const node = trackRef.current;
      if (!node) return;

      if (hoverPausedRef.current || openIdx !== null) return;

      const half = node.scrollWidth / 2;
      if (!half || half < 50) return;

      node.scrollLeft += speedRef.current;

      if (node.scrollLeft >= half) node.scrollLeft -= half;
      if (node.scrollLeft < 0) node.scrollLeft += half;
    }, 16);

    return () => window.clearInterval(id);
  }, [openIdx]);

  // Lightbox: ESC + ← →
  React.useEffect(() => {
    if (openIdx === null) return;

    const onKey = (e) => {
      if (e.key === 'Escape') setOpenIdx(null);
      if (e.key === 'ArrowRight') setOpenIdx((i) => (i + 1) % items.length);
      if (e.key === 'ArrowLeft')
        setOpenIdx((i) => (i - 1 + items.length) % items.length);
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIdx, items.length]);

  // Carrusel: click nudge + hold acelera
  const nudge = (dir, e) => {
    e.preventDefault();
    e.stopPropagation();
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 420, behavior: 'smooth' });
  };

  const hold = (dir, e) => {
    e.preventDefault();
    e.stopPropagation();
    holdingRef.current = true;
    speedRef.current = dir * FAST_SPEED;
  };

  const releaseHold = () => {
    if (!holdingRef.current) return;
    holdingRef.current = false;
    speedRef.current = BASE_SPEED;
  };

  // Lightbox prev/next
  const lightboxPrev = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    setOpenIdx((i) => (i - 1 + items.length) % items.length);
  };

  const lightboxNext = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    setOpenIdx((i) => (i + 1) % items.length);
  };

  return (
    <div className="relative">
      {/* LIGHTBOX */}
      {openIdx !== null && (
        <div className="fixed inset-0 z-[80]">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Cerrar"
            onClick={() => setOpenIdx(null)}
          />

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl">
              <div className="relative rounded-3xl overflow-hidden bg-black shadow-lift border border-white/10">
                <img
                  src={items[openIdx].src}
                  alt={items[openIdx].title}
                  className="w-full h-auto object-contain max-h-[82vh]"
                  draggable={false}
                />

                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    type="button"
                    onClick={lightboxPrev}
                    className="m-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 hover:bg-white/15 text-white transition"
                    aria-label="Anterior"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        d="M14 6l-6 6 6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    type="button"
                    onClick={lightboxNext}
                    className="m-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 hover:bg-white/15 text-white transition"
                    aria-label="Siguiente"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        d="M10 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-white/90">
                <div className="text-sm font-medium">
                  {items[openIdx].title}
                </div>
                <button
                  type="button"
                  onClick={() => setOpenIdx(null)}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-white/10 hover:bg-white/15 transition"
                  aria-label="Cerrar"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-1 text-xs text-white/60">
                Tip: usa ← → para cambiar de foto
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FLECHAS CARRUSEL */}
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center z-10">
        <button
          type="button"
          aria-label="Anterior"
          className="pointer-events-auto hidden md:inline-flex items-center justify-center h-10 w-10 rounded-2xl border border-cota-line bg-white/80 backdrop-blur shadow-soft hover:bg-white transition"
          onClick={(e) => nudge(-1, e)}
          onMouseDown={(e) => hold(-1, e)}
          onMouseUp={releaseHold}
          onMouseLeave={releaseHold}
          onTouchStart={(e) => hold(-1, e)}
          onTouchEnd={releaseHold}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="h-5 w-5"
          >
            <path
              d="M14 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center z-10">
        <button
          type="button"
          aria-label="Siguiente"
          className="pointer-events-auto inline-flex items-center justify-center h-10 w-10 rounded-2xl border border-cota-line bg-white/80 backdrop-blur shadow-soft hover:bg-white transition"
          onClick={(e) => nudge(1, e)}
          onMouseDown={(e) => hold(1, e)}
          onMouseUp={releaseHold}
          onMouseLeave={releaseHold}
          onTouchStart={(e) => hold(1, e)}
          onTouchEnd={releaseHold}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="h-5 w-5"
          >
            <path
              d="M10 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* FADE */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-white to-transparent z-10" />

      {/* TRACK (pausa si cursor encima) */}
      <div
        ref={trackRef}
        className={`
          overflow-x-auto
          [-ms-overflow-style:none] [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          ${contained ? 'px-2' : '-mx-6 px-6'}
        `}
        style={{ WebkitOverflowScrolling: 'touch' }}
        onMouseEnter={() => (hoverPausedRef.current = true)}
        onMouseLeave={() => (hoverPausedRef.current = false)}
        onTouchStart={() => (hoverPausedRef.current = true)}
        onTouchEnd={() => (hoverPausedRef.current = false)}
      >
        <div
          className="flex items-center gap-3"
          style={{ width: 'max-content' }}
        >
          {loop.map((it, idx) => {
            const realIdx = idx % items.length;

            const h = it.ratio === '3/4' ? BASE_H + V_EXTRA : BASE_H;
            const w =
              it.ratio === '3/4' ? Math.round(h * 0.75) : Math.round(h * 1.333);

            return (
              <button
                key={`${it.src}-${idx}`}
                type="button"
                onClick={() => setOpenIdx(realIdx)}
                className="group shrink-0 text-left"
                aria-label={`Abrir foto: ${it.title}`}
              >
                <div
                  className="
                    rounded-3xl overflow-hidden border border-cota-line bg-white
                    shadow-soft transition-all duration-200 group-hover:-translate-y-0.5
                    group-hover:shadow-lift
                  "
                  style={{ width: w }}
                >
                  <div
                    className="bg-cota-mist overflow-hidden"
                    style={{ height: h }}
                  >
                    <img
                      src={it.src}
                      alt={it.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                      draggable={false}
                    />
                  </div>
                </div>

                <div className="mt-1 text-[12px] font-medium text-cota-muted">
                  {it.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
