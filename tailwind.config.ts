import type { Config } from 'tailwindcss'

const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        "half-transparent": "rgba(0, 0, 0, 0.5)",
        main: "#0099ff",
      },
      backgroundImage: {
        "footer-bg": "url('/images/bg/footer-bg.png')",
        "news-letter": "url('/img/banner/newsletter.jpg')",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      colors: {
        main: "#0099ff",
        paragraf: colors.gray[300],
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },

    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
}
export default config
