const colors = require('tailwindcss/colors')
module.exports = {
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        red: colors.red,
        yellow: colors.amber,
        blue: colors.blue,
        green: colors.green,
        orange: colors.orange,
        
        'cuthair-red': '#FEE2E2',
        'cuthair-orange-dark': '#F1A75B',
        'cuthair-orange-light': '#EF9A44',
        'cuthair-yellow': '#FEFEE2',
        'cuthair-green': '#E2FEE2',
        'cuthair-blue': '#E2FEF0'
      },
      extend: {
        backgroundImage: {
         'logo': "url('./assets/images/salon.png')",
         'footer-texture': "url('/img/footer-texture.png')",
        }
      }
    }
  }