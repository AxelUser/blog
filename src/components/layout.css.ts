import { globalStyle, style } from "@vanilla-extract/css"
import { vars } from "../styles/theme.css"

export const container = style({
  display: `flex`,
  flexDirection: `column`,
  maxWidth: `700px`,
  margin: `auto`,
  minHeight: `100vh`,
})

export const navBar = style({
  display: `flex`,
  gap: `1.5rem`,
  padding: `1.45rem ${vars.paddings.contentRight} 1rem ${vars.paddings.contentLeft}`,
  fontWeight: `bold`,
})

export const navBarLink = style({
  fontSize: `1.05rem`,
  paddingBottom: `0.3rem`,
  color: vars.color.text.primary,

  "::after": {
    content: ``,
    display: `block`,
    height: `2px`,
    width: `100%`,
    background: vars.color.text.primary,
    opacity: 0,
    transition: `all 0.2s`,
    pointerEvents: `none`,
  },

  selectors: {
    "&:hover::after": {
      opacity: 1,
    },
  },
})

globalStyle(`${container} footer`, {
  marginTop: `auto`,
})

globalStyle(`${container} footer small`, {
  marginTop: `2rem`,
  marginBottom: `1.3rem`,
  display: `flex`,
  justifyContent: `center`,
})
