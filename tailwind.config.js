// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cota: {
          // Brand
          navy: '#0B375F',
          navyDark: '#072743',

          // Premium light backgrounds (para alternar secciones)
          sky: '#E9F1FA', // el que ya tienes (bien para detalles)
          mist: '#F4F7FA', // azul muy claro, más premium para fondos alternos
          fog: '#FAFCFF', // casi blanco, útil para separar aún más

          // Text
          slate: '#2D3648',
          ink: '#0F172A', // títulos muy legibles (tipo slate-900)
          muted: '#667085', // texto secundario elegante

          // Lines / borders
          line: '#D6E3F0',

          // Accent (muy controlado, para iconos o pequeños highlights)
          teal: '#0F766E',
          tealSoft: '#E7F6F4',
        },
      },

      fontFamily: {
        // Texto (se queda DM Sans)
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],

        // Títulos premium (elige 1; yo usaría Source Serif 4 o DM Serif Display)
        serif: [
          '"Source Serif 4"',
          '"DM Serif Display"',
          'ui-serif',
          'Georgia',
          'serif',
        ],
      },

      borderRadius: {
        // radios más “clínica privada”
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },

      boxShadow: {
        // sombras muy sutiles (premium, nada “SaaS”)
        soft: '0 1px 2px rgba(16,24,40,0.06), 0 4px 12px rgba(16,24,40,0.06)',
        lift: '0 2px 6px rgba(16,24,40,0.08), 0 18px 40px rgba(16,24,40,0.08)',
      },
    },
  },
  plugins: [],
};
