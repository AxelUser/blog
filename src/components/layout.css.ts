import { globalStyle, style } from "@vanilla-extract/css"
import { vars } from "../styles/theme.css"

export const container = style({
  display: `flex`,
  flexDirection: `column`,
  maxWidth: `700px`,
  margin: `auto`,
})

globalStyle(`header`, {
  display: `flex`,
})

globalStyle(`header nav`, {
  padding: `1.45rem 1.1rem`,
  fontWeight: `bold`,
})

globalStyle(`header nav a`, {
  fontSize: `1.05rem`,
  paddingBottom: `0.3rem`,
  color: vars.color.text.primary,
})

globalStyle(`header nav a:hover`, {
  borderBottomWidth: `2px`,
  borderBottomStyle: `solid`,
  borderBottomColor: vars.color.text.primary,
})

globalStyle(`footer`, {
  marginTop: `2rem`,
  marginBottom: `1.3rem`,
  display: `flex`,
  justifyContent: `center`,
})
