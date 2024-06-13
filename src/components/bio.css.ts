import { globalStyle, style } from "@vanilla-extract/css"
import { vars } from "../styles/theme.css"

export const container = style({
  borderWidth: `1px`,
  borderStyle: `solid`,
  borderRadius: `10px`,
  borderColor: vars.color.border,
  padding: `1rem`,
  marginBottom: `1rem`,
})

export const glowingText = style({
  color: vars.color.text.primary,
  textShadow: `0 0 12px ${vars.color.text.link}`,
})

globalStyle(`${container} a`, {
  color: vars.color.text.link,
})

globalStyle(`${container} a:hover`, {
  borderBottomWidth: `1px`,
  borderBottomStyle: `solid`,
  borderBottomColor: vars.color.text.link,
})

globalStyle(`${container} p`, {
  marginTop: `0.75rem`,
  marginBottom: `0.75rem`,
})

globalStyle(`${container} p:first-child`, {
  marginTop: 0,
})

globalStyle(`${container} p:last-child`, {
  marginBottom: 0,
})
