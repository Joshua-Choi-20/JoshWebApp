/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'young-josh': "url('./src/assets/young_josh_1.PNG')",
        'store-josh':"url('./src/assets/store_josh.PNG')",
        'college-josh':"url('./src/assets/college_josh.PNG')",
        'beach-josh':"url('./src/assets/beach_josh.PNG')",
        'birthday-josh':"url('./src/assets/birthday_josh.PNG')",
        'sunglass-josh':"url('./src/assets/sunglass_josh.PNG')",
        'young-josh-mobile':"url('./src/assets/young_josh_1_mobile.PNG')"
      }

    },
  },
  plugins: [],
}
