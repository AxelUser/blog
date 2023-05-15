import { createTheme } from "@vanilla-extract/css"

export const [initialTheme, vars] = createTheme({
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
