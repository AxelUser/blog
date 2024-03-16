import { globalStyle, style } from "@vanilla-extract/css"
import { vars } from "../styles/theme.css"

export const container = style({
  borderBottomWidth: `1px`,
  borderBottomStyle: `dotted`,
  borderBottomColor: vars.color.border,
  minHeight: `11.1rem`,
  paddingTop: `2rem`,
  paddingBottom: `0.28rem`,
  paddingLeft: vars.paddings.contentLeft,
  paddingRight: vars.paddings.contentRight,
})

export const meta = style({
  display: `flex`,
  gap: `1.6rem`,
  color: vars.color.text.secondary,
})

globalStyle(`${container}:hover`, {
  backgroundColor: vars.color.text.primary,
  color: vars.color.bg.primary,
})

globalStyle(`${container} h1`, {
  marginTop: `1rem`,
  marginBottom: 0,
})

globalStyle(`${container} p`, {
  marginTop: `1rem`,
  marginBottom: `1rem`,
})
