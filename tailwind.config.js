const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
    },
    fontFamily: {
      body: ["Poppins", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      screens: {
        'sm': '476px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  // plugins: [ require('@tailwindcss/forms')],
};