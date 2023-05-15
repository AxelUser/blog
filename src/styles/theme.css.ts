import { createGlobalTheme } from "@vanilla-extract/css"

export const vars = createGlobalTheme(`:root`, {
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
