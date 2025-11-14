/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#8B5CF6',
        'brand-blue': '#3B82F6',
        'brand-pink': '#EC4899',
        'brand-teal': '#14B8A6',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      keyframes: {
        'gradient-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 6s ease infinite',
      },
    },
  },
  plugins: [],
}