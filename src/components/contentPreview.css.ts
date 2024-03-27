import { style } from "@vanilla-extract/css"
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

  ":hover": {
    backgroundColor: vars.color.text.primary,
    color: vars.color.bg.primary,
  },
})

export const meta = style({
  display: `flex`,
  gap: `1.6rem`,
  color: vars.color.text.secondary,
})

export const contentCoverImageContainer = style({
  zIndex: -1,
  position: "absolute",
  maxWidth: "400px",
})

export const contnetCoverImage = style({})

export const previewTitle = style({
  marginTop: `1rem`,
  marginBottom: 0,
})

export const previewDescription = style({
  marginTop: `1rem`,
  marginBottom: `1rem`,
})
