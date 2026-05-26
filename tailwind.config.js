/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory:        '#FDFBF7',
        'ivory-warm': '#F5EFE0',
        saffron:      '#E8751A',
        'saffron-lt': '#F59E0B',
        crimson:      '#8B0000',
        gold:         '#D4AF37',
        'gold-lt':    '#F0D060',
        forest:       '#1A4332',
        charcoal:     '#2C2C2C',
        maroon:       '#722F37',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Inter', 'sans-serif'],
      },
      animation: {
        'border-beam':    'border-beam calc(var(--duration)*1s) infinite linear',
        'shimmer-sweep':  'shimmer-sweep 2.4s ease-in-out infinite',
        'beam-spin':      'beam-spin 10s linear infinite',
        'gradient-shift': 'gradient-shift 4s linear infinite',
        'ripple-ring':    'ripple-ring var(--ring-dur,2.4s) ease calc(var(--ring-i,0)*.08s) infinite',
      },
      keyframes: {
        'border-beam': {
          '100%': { 'offset-distance': '100%' },
        },
        'shimmer-sweep': {
          '0%':   { 'background-position': '-200% 0' },
          '100%': { 'background-position':  '200% 0' },
        },
        'beam-spin': {
          '0%':   { transform: 'rotate(0deg)'   },
          '100%': { transform: 'rotate(360deg)' },
        },
        'gradient-shift': {
          '0%':   { 'background-position': '0% 50%'   },
          '100%': { 'background-position': '300% 50%' },
        },
        'ripple-ring': {
          '0%, 100%': { transform: 'translate(-50%,-50%) scale(1)'  },
          '50%':      { transform: 'translate(-50%,-50%) scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
};
