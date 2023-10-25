/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // xsm: "400px",
      sm: "320px",
      md: "640px",
      lg: "1024px",
      xlg: "1440px",
    },
    extend: {
      backgroundColor: {
        darkgray: "rgb(9,4,22)",
        lightgray: "rgb(15,17,32)",
        lightBackgroundPurple: "rgb(20,20,42)",
        lighterProjectPanel: "rgb(40,40,62);",
        hoverProject: "rgb(39, 30, 77)",
        projectTools: "rgb(30, 25, 60)",
      },
      textColor: {
        lightpurple: "rgb(123, 74, 226)",
        lighterpurple: "rgb(153, 104, 256)",
      },
      height: {
        photo: "510px",
        projectHeight: "460px",
      },
      width: {
        photo: "510px",
        projectWidth: "320px",
      },
      borderColor: {
        lightPurple: "rgb(123, 74, 226)",
        lighterpurple: "rgb(153, 104, 256)",
        lightBorderPurple: "rgb(32,36,63)",
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".smooth-scroll": {
          scrollBehavior: "smooth",
        },
      });
    },
  ],
};
