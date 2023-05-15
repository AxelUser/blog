import { globalStyle, style } from "@vanilla-extract/css"
import { vars } from "../styles/theme.css"

export const navigation = style({
  marginTop: `2rem`,
  display: `flex`,
  gap: `1.5rem`,
  "@media": {
    "(max-width: 650px)": {
      flexDirection: `column`,
    },
  },
})

globalStyle(`${navigation} a`, {
  color: vars.color.text.link,
})

globalStyle(`${navigation} a:hover`, {
  borderBottomWidth: `1px`,
  borderBottomStyle: `solid`,
  borderBottomColor: vars.color.text.link,
})

globalStyle(`${navigation} span`, {
  "@media": {
    "(min-width: 650px)": {
      maxWidth: `300px`,
    },
  },
})

export const linkNext = style({
  marginLeft: `auto`,
  "@media": {
    "(max-width: 650px)": {
      marginLeft: 0,
    },
  },
})
