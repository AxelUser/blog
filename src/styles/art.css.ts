import { style } from "@vanilla-extract/css"
import { vars } from "./theme.css"

export const artTitle = style({
  paddingLeft: vars.paddings.contentLeft,
  paddingRight: vars.paddings.contentRight,
})
