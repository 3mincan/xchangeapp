// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: [
    //
    "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}", // path to vechaiui
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  // add VechaiUI plugin
  plugins: [
    require("@tailwindcss/forms"),
    require("@vechaiui/core"),
    require("@tailwindcss/typography"),
    // ...
  ],
};
