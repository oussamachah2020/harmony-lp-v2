/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "*.{js,ts,jsx,tsx,mdx}"],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#4250D8',
            light: '#5A67E0',
            dark: '#3642C0',
            50: '#ECEEFF',
            100: '#D8DDFF',
            200: '#B1B9FF',
            300: '#8A94FF',
            400: '#6370FF',
            500: '#4250D8',
            600: '#3642C0',
            700: '#2A34A8',
            800: '#1F2790',
            900: '#141A78',
          }
        },
      },
    },
    plugins: [],
  }
  