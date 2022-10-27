/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a4ef23",

          secondary: "#b6f477",

          accent: "#80e5a3",

          neutral: "#1C242B",

          "base-100": "#F7F5FA",

          info: "#486FE5",

          success: "#1E8F4A",

          warning: "#EFAD2A",

          error: "#F40B3A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
