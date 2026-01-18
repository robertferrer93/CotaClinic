// src/components/GalleryCases.jsx
import * as React from 'react';

export default function GalleryCases({ contained = true }) {
  const items = [
    {
      title: 'Rotura horizontal de menisco interno',
      caption: 'Rotura horizontal de menisco interno',
      src: '/images/cases/1_rupt_BAMI.jpg',
    },
    {
      title: 'Sutura de menisco interno',
      caption: 'Sutura de menisco interno',
      src: '/images/cases/2_rupt_BAMI_sutura.jpg',
    },
    {
      title: 'Reconstrucción LCA y LCP',
      caption: 'Reconstrucción ligamentos cruzado anterior y posterior',
      src: '/images/cases/3_LCA_LCP.jpg',
    },
    {
      title: 'Pastilla ósea de injerto rotuliano',
      caption:
        'Detalle de pastilla ósea de injerto rotuliano (ligamento cruzado)',
      src: '/images/cases/4_plastiaHTH_pastilla.jpg',
    },
    {
      title: 'LCA con tendón rotuliano',
      caption: 'Ligamento cruzado con tendón rotuliano',
      src: '/images/cases/5_plastiaHTH.jpg',
    },
    {
      title: 'LCA con isquiotibial',
      caption: 'Ligamento cruzado con isquiotibial',
      src: '/images/cases/6_plastia_isquios.jpg',
    },
    {
      title: 'Sinovialización del LCA',
      caption: 'Sinovialización del ligamento cruzado al año',
      src: '/images/cases/7_sinovialitzacioLCA.jpg',
    },
    {
      title: 'Rotura pediculada del menisco',
      caption: 'Rotura pediculada del menisco',
      src: '/images/cases/8_rupt_pediculada.jpg',
    },
    {
      title: 'Meniscectomía de rotura pediculada',
      caption: 'Meniscectomía de rotura pediculada',
      src: '/images/cases/9_meniscectomia_pediculada.jpg',
    },
    {
      title: 'Detalle de sutura meniscal',
      caption: 'Detalle de sutura meniscal',
      src: '/images/cases/10_sutura_dispositiu.jpg',
    },
    {
      title: 'Raíz meniscal antes de reducir',
      caption: 'Raíz meniscal antes de reducir',
      src: '/images/cases/11_arrel_1.jpg',
    },
    {
      title: 'Raíz meniscal post reducción',
      caption: 'Raíz meniscal post reducción',
      src: '/images/cases/12_arrel_2.jpg',
    },
    {
      title: 'Rotura meniscal libro abierto',
      caption: 'Rotura meniscal "libro abierto"',
      src: '/images/cases/13_sutura_fora_dins_1.jpg',
    },
    {
      title: 'Pasos sutura fuera-dentro',
      caption: 'Pasos sutura fuera-dentro',
      src: '/images/cases/14_sutura_fora_dins_2.jpg',
    },
    {
      title: '1r punto fuera-dentro',
      caption: '1r punto fuera-dentro',
      src: '/images/cases/15_sutura_fora_dins_3.jpg',
    },
    {
      title: '2º punto fuera-dentro',
      caption: '2º punto fuera-dentro',
      src: '/images/cases/16_sutura_fora_dins_4.jpg',
    },
    {
      title: '3r punto fuera-dentro',
      caption: '3r punto fuera-dentro',
      src: '/images/cases/17_sutura_fora_dins_5.jpg',
    },
    {
      title: 'Detalle mosaicoplastia',
      caption: 'Detalle mosaicoplastia',
      src: '/images/cases/18_mosaico_1.jpg',
    },
    {
      title: 'Mosaicoplastia realizada',
      caption: 'Mosaicoplastia realizada',
      src: '/images/cases/19_mosaico_2.jpg',
    },
    {
      title: 'Prótesis unicompartimental de rodilla',
      caption: 'Protesis unicompartimental de rodilla',
      src: '/images/cases/20_puc.jpg',
    },
  ];

  const loop = React.useMemo(() => [...items, ...items], [items]);
  const [openIdx, setOpenIdx] = React.useState(null);
  const trackRef = React.useRef(null);

  const BASE_SPEED = 0.5;
  const FAST_SPEED = 6.0;
  const speedRef = React.useRef(BASE_SPEED);
  const holdingRef = React.useRef(false);
  const hoverPausedRef = React.useRef(false);

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

  const nudge = (dir, e) => {
    e.preventDefault();
    e.stopPropagation();
    trackRef.current?.scrollBy({ left: dir * 420, behavior: 'smooth' });
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

  return (
    <div className="relative overflow-x-hidden">
      {/* FADE (opcional, pero ayuda y no rompe nada) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10" />

      {/* TRACK */}
      <div
        ref={trackRef}
        className={`
          w-full max-w-full min-w-0
          overflow-x-auto overscroll-x-contain touch-pan-x
          [-ms-overflow-style:none] [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          ${contained ? 'px-2' : 'px-2 md:-mx-6 md:px-6'}
        `}
        style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
        onMouseEnter={() => (hoverPausedRef.current = true)}
        onMouseLeave={() => (hoverPausedRef.current = false)}
        onTouchStart={() => (hoverPausedRef.current = true)}
        onTouchEnd={() => (hoverPausedRef.current = false)}
      >
        <div className="flex items-start gap-3 w-max">
          {loop.map((it, idx) => (
            <button
              key={`${it.src}-${idx}`}
              type="button"
              onClick={() => setOpenIdx(idx % items.length)}
              className="group shrink-0 text-left"
            >
              <div className="w-[280px] sm:w-[320px] rounded-3xl overflow-hidden border border-cota-line bg-white shadow-soft group-hover:shadow-lift">
                <div className="aspect-[3/2] bg-black overflow-hidden">
                  <img
                    src={it.src}
                    alt={it.caption}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    draggable={false}
                  />
                </div>
              </div>

              <div className="mt-1 text-[11px] text-cota-muted/80 max-w-[280px] sm:max-w-[320px] leading-snug">
                {it.caption}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* FLECHAS */}
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center z-10">
        <button
          type="button"
          className="pointer-events-auto hidden md:inline-flex h-10 w-10 rounded-2xl border border-cota-line bg-white/80"
          onClick={(e) => nudge(-1, e)}
          onMouseDown={(e) => hold(-1, e)}
          onMouseUp={releaseHold}
          onMouseLeave={releaseHold}
          onTouchStart={(e) => hold(-1, e)}
          onTouchEnd={releaseHold}
        >
          ‹
        </button>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center z-10">
        <button
          type="button"
          className="pointer-events-auto inline-flex h-10 w-10 rounded-2xl border border-cota-line bg-white/80"
          onClick={(e) => nudge(1, e)}
          onMouseDown={(e) => hold(1, e)}
          onMouseUp={releaseHold}
          onMouseLeave={releaseHold}
          onTouchStart={(e) => hold(1, e)}
          onTouchEnd={releaseHold}
        >
          ›
        </button>
      </div>
    </div>
  );
}
