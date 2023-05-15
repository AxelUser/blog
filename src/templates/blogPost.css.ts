import { globalStyle, style } from "@vanilla-extract/css"
import { vars } from "../styles/theme.css"

export const container = style({
  padding: `0.5rem 1.1rem 2rem 1.1rem`,
})

globalStyle(`${container} > h1`, {
  marginTop: `1.5rem`,
  color: vars.color.text.title,
})

export const text = style({
  borderBottomWidth: `1px`,
  borderBottomStyle: `dotted`,
  borderBottomColor: vars.color.border,
})

globalStyle(`${text} a`, {
  color: vars.color.text.link,
})

globalStyle(`${text} a:hover`, {
  borderBottomWidth: `1px`,
  borderBottomStyle: `solid`,
  borderBottomColor: vars.color.text.link,
})

globalStyle(`a.anchor`, {
  fill: vars.color.text.primary,
  paddingRight: `7px`,
})

globalStyle(`a.anchor:hover`, {
  borderBottom: `none`,
})

export const meta = style({
  color: vars.color.text.secondary,
  display: `flex`,
  gap: `1.5rem`,
  fontSize: `1rem`,
})
