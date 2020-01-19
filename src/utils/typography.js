import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Alegreya Sans SC', 'sans-serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['400', '700']
    },
    {
      name: 'Alegreya Sans SC',
      styles: ['800']
    },
    {
      name: 'Work Sans',
      styles: ['200']
    }
  ]
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
