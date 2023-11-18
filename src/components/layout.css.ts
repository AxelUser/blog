import { globalStyle, style } from "@vanilla-extract/css"
import { vars } from "../styles/theme.css"

export const container = style({
  display: `flex`,
  flexDirection: `column`,
  maxWidth: `700px`,
  margin: `auto`,
})

export const themeToggle = style({
  paddingBottom: `6px`,
  cursor: `pointer`,
})

globalStyle(`header`, {
  display: `flex`,
  height: `5rem`,
  alignItems: `center`,
  justifyContent: `space-between`,
})

globalStyle(`header > *`, {
  marginLeft: `1.1rem`,
  marginRight: `1.1rem`,
})

globalStyle(`header nav`, {
  display: `flex`,
  rowGap: `1.1rem`,
  fontWeight: `bold`,
})

globalStyle(`header nav a`, {
  fontSize: `1.05rem`,
  paddingBottom: `6px`,
  color: vars.color.text.primary,
})

globalStyle(`header nav a:hover`, {
  borderBottomWidth: `2px`,
  paddingBottom: `4px`,
  borderBottomStyle: `solid`,
  borderBottomColor: vars.color.text.primary,
})

globalStyle(`footer`, {
  marginTop: `2rem`,
  marginBottom: `1.3rem`,
  display: `flex`,
  justifyContent: `center`,
})
