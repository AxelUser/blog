import { style } from "@vanilla-extract/css"
import { vars } from "./theme.css"

export const container = style({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  margin: `auto`,
})

export const backLink = style({
  marginTop: `3rem`,
  color: vars.color.text.link,
  borderBottomWidth: `1px`,
  borderBottomStyle: `solid`,
  borderBottomColor: `transparent`,

  ":hover": {
    color: vars.color.text.link,
    borderBottomColor: vars.color.text.link,
  },
})
