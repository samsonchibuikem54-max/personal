/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./portfolio-tailwind.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan-custom': '#38bdf8',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
