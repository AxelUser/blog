import { globalStyle, style } from "@vanilla-extract/css"
import { vars } from "./theme.css"

globalStyle(`*`, {
  margin: 0,
})

globalStyle(`body`, {
  color: vars.color.text.primary,
  backgroundColor: vars.color.bg.primary,
  minHeight: `100vh`,
})

globalStyle(`a`, {
  textDecoration: `none`,
  color: `inherit`,
})

globalStyle(`a:hover`, {
  color: `inherit`,
})

export const noScroll = style({
  overflow: "hidden",
})
