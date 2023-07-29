/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'anim-in': {
          '0%': {
            width: '0px',
            height: '0px',
            borderRadius: '100%',
            opacity: '20%',
          },
          '100%': {
            opacity: '0%',
            borderRadius: '0',
            width: '600px',
            height: '600px',
          },
        },
      },
    },
  },
  plugins: [],
}

