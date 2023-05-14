import { createTheme } from "@vanilla-extract/css"

export const rootColors = {
  dark1: `rgb(35, 35, 35)`,
  dark2: `rgb(60, 60, 60)`,
  dark3: `rgb(120, 120, 120)`,
  white: `rgb(210, 210, 210)`,
  yellow: `rgb(218, 165, 32)`,
}

export const [initialTheme, vars] = createTheme({
  color: {
    bg: {
      primary: rootColors.dark1,
    },
    text: {
      primary: rootColors.white,
      secondary: rootColors.dark3,
      link: rootColors.yellow,
      title: rootColors.yellow,
    },
    border: rootColors.dark3,
  },
})
