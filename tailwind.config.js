/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1a2b44',
        'brand-light': '#f5efe3',
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(to right, #f97316, #f59e0b)',
        'gradient-red-orange': 'linear-gradient(to right, #ef4444, #f97316)',
      },
    },
  },
  plugins: [],
}
