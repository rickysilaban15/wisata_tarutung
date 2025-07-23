/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-primary': {
          DEFAULT: '#006CEB',
          dark: '#0058c2',
        },
        'brand-secondary': '#F5EFE6',
        'brand-accent': '#F4A261',
        'text-primary': '#1A202C',
        'text-secondary': '#4A5568',
        'bg-light': '#FFFFFF',
        'bg-dark': '#121212',
        'card-dark': '#1E1E1E',
        'border-light': '#E2E8F0',
        'border-dark': '#2D3748',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      keyframes: {
  flicker: {
    '0%, 100%': {
      opacity: '1',
      textShadow: '0 0 10px #f97316, 0 0 20px #fb923c, 0 0 30px #facc15',
    },
    '50%': {
      opacity: '0.8',
      textShadow: '0 0 5px #f97316, 0 0 10px #fb923c, 0 0 15px #facc15',
    },
  },
  glow: {
    '0%, 100%': {
      textShadow: '0 0 6px #60a5fa, 0 0 12px #3b82f6, 0 0 20px #1e3a8a',
      color: '#e0f2fe',
    },
    '50%': {
      textShadow: '0 0 4px #93c5fd, 0 0 10px #3b82f6, 0 0 18px #1e3a8a',
      color: '#bae6fd',
    },
  },
},
animation: {
  flicker: 'flicker 1.5s infinite',
  glow: 'glow 2s ease-in-out infinite',
},

    },
  },
  plugins: [],
}
