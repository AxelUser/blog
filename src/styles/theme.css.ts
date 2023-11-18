import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css"

export const vars = createThemeContract({
  color: {
    bg: {
      primary: null,
    },
    text: {
      primary: null,
      secondary: null,
      link: null,
      title: null,
    },
    border: null,
  },
})

createGlobalTheme(`:root`, vars, {
  color: {
    bg: {
      primary: `#F8F8FF`,
    },
    text: {
      primary: `#191717`,
      secondary: `#7D7C7C`,
      link: `#EF6262`,
      title: `#EF6262`,
    },
    border: `#737373`,
  },
})

createGlobalTheme(`.dark`, vars, {
  color: {
    bg: {
      primary: `#2e2e2e`,
    },
    text: {
      primary: `#F8F8FF`,
      secondary: `#737373`,
      link: `#e6a627`,
      title: `#e6a627`,
    },
    border: `#737373`,
  },
})
