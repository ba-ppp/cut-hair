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
        indigo: colors.indigo,
        pink: colors.pink,
        purple: colors.purple,
        
        'cuthair-red': '#FEE2E2',
        'cuthair-orange-dark': '#F1A75B',
        'cuthair-orange-light': '#EF9A44',
        'cuthair-yellow': '#FEFEE2',
        'cuthair-green': '#E2FEE2',
        'cuthair-blue': '#E2FEF0',

        'admin-pink': 'linear-gradient(#F7CFC8, #EBA79F)',
        'admin-blue': 'linear-gradient(#ADDAE4, #60AFBF)',
      },
      extend: {
        backgroundImage: {
         'logo': "url('./assets/images/salon.png')",
         'footer-texture': "url('/img/footer-texture.png')",
        }
      }
    }
  }