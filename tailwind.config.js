/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        f1: "#757575",
        f2: "#484848",
        f3: "#6C6B6B",
        f4: "#16457E",
        f5: "#eff8ff",
        f7: "#F2F4F0",
      },
    },
    screens: {
      max1: { max: "1500px" },
      max2: { max: "1400px" },
      max3: { max: "1300px" },
      max4: { max: "1000px" },
      max5: { max: "900px" },
      max6: { max: "800px" },
      max7: { max: "700px" },
      max8: { max: "600px" },
      max9: { max: "500px" },
      max10: { max: "400px" },
      max11: { max: "360px" },
    },
  },
  plugins: [],
};
