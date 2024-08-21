/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'text-slide-2': 'text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-3': 'text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-4': 'text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-5': 'text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-6': 'text-slide-6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-7': 'text-slide-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-8': 'text-slide-8 20s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
        'text-slide-5': {
          '0%, 22%': {
            transform: 'translateY(0%)',
          },
          '22%, 44%': {
            transform: 'translateY(-25%)',
          },
          '44%, 66%': {
            transform: 'translateY(-50%)',
          },
          '66%, 88%': {
            transform: 'translateY(-75%)',
          },
          '88% 100%': {
            transform: 'translateY(-100%)',
          }
        },
        // Add other keyframes if needed
      },
    },
  },
  plugins: [],
}
