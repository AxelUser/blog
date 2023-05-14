import { globalStyle, style } from "@vanilla-extract/css"
import { vars } from "./theme.css"

export const container = style({
  display: `flex`,
  flexDirection: `column`,
  height: `100vh`,
  justifyContent: `center`,
  alignItems: `center`,
})

globalStyle(`${container} a`, {
  marginTop: `3rem`,
  color: vars.color.text.link,
  borderBottomWidth: `1px`,
  borderBottomStyle: `solid`,
  borderBottomColor: `transparent`,
})

globalStyle(`${container} a:hover`, {
  color: vars.color.text.link,
  borderBottomColor: vars.color.text.link,
})
