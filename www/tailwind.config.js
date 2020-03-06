module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          "100": `#f5f5f5`,
          "200": `#eeeeee`,
          "300": `#e0e0e0`,
          "400": `#bdbdbd`,
          "500": `#9e9e9e`,
          "600": `#757575`,
          "700": `#616161`,
          "800": `#424242`,
          "900": `#212121`,
        },
        primary: `#3340FF`,
      },
      boxShadow: {
        blue: `inset 0 -1px 0 rgba(0,0,0,0.1), 0 1px 2px rgba(28,35,139,0.1), 0 2px 5px rgba(41,52,204,0.2)`,
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '104': '27rem',
        '112': '30rem',
        '120': '33rem',
      },
    },
  },
  variants: {
    margin: [`responsive`, `last`],
  },
  plugins: [],
}
