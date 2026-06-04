/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'radikal-dark': '#0f172a',
        'radikal-red': '#dc2626',
        'radikal-gray': '#f8fafc',
      },
      screens: {
        'xs': '375px',
      }
    },
  },
  plugins: [],
};