import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "JetBrains Mono",
      styles: ["300"],
    },
  ],
  bodyFontFamily: ["JetBrains Mono", "monospace"],
  headerFontFamily: ["JetBrains Mono", "monospace"],
  baseLineHeight: 1.7,
  baseFontSize: "16px",
  overrideStyles: ({ rhythm }) => ({
    h1: {
      paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
      marginBottom: rhythm(3 / 4),
      marginTop: rhythm(1.5),
    },
    h2: {
      paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
      marginBottom: rhythm(1 / 4),
      marginTop: rhythm(1),
    },
    "h3,h4,h5,h6": {
      marginBottom: rhythm(1 / 2),
      marginTop: rhythm(1),
    },
    "ol,ul": {
      marginLeft: rhythm(1.25),
    },
    // children ol, ul
    "li>ol,li>ul": {
      marginLeft: rhythm(1.25),
    },
    p: {
      marginTop: rhythm(1),
      marginBottom: rhythm(1),
    },
  }),
})

export default typography
