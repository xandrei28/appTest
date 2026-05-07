/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-soft': 'rgba(201,168,76,.10)',
        'gold-border': 'rgba(201,168,76,.22)',

        bg: '#0A0E14',
        'bg-card': '#111820',
        'bg-card-h': '#161E28',
        'bg-surf': '#1A2332',

        tx: '#F0EDE6',
        tx2: '#99A8BA',
        tx3: '#5A6A7E',

        brd: '#1C2636',
        brd2: '#283848',

        ok: '#34D399',
        err: '#EF4444',
        warn: '#F59E0B',
        blue: '#3B82F6',
        purp: '#A78BFA',
        teal: '#14B8A6',

        'ok-s': 'rgba(52,211,153,.10)',
        'err-s': 'rgba(239,68,68,.10)',
        'warn-s': 'rgba(245,158,11,.10)',
        'blue-s': 'rgba(59,130,246,.10)',
        'purp-s': 'rgba(167,139,250,.10)',
        'teal-s': 'rgba(20,184,166,.10)',
        'gold-s': 'rgba(201,168,76,.10)',
      },
      borderRadius: {
        r: '18px',
        rm: '14px',
        rs: '10px',
        rx: '6px',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-up': {
          '0%': { opacity: '0', transform: 'translateY(16px) scale(0.97)' },
          '60%': { transform: 'translateY(-3px) scale(1.01)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.25s ease-out both',
        'bounce-up': 'bounce-up 0.3s ease-out both',
        'slide-up': 'slide-up 0.3s ease-out both',
      },
    },
  },
  plugins: [],
};
