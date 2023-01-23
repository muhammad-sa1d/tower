/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Raleway': ['Raleway', ],
        'Sans': ['PT Sans', ], 
      },
      backgroundImage: {
        'xxxx': "url('../img/Rectangle.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'regal-black': '#242D37',
      },
      maxWidth: {
        '5/6': '869px',
      },
      fontSize: {
        '5x80': '80px',
      }
    },
  },
  plugins: [],
}
