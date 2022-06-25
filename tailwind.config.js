const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],// 偵測哪些樣版內容
  theme: {
    extend: {
      colors: {
        'gray': colors.zinc
      },
      fontFamily: {
        sans: ['Noto Sans TC', ...fontFamily.sans]
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ],
}
