import { style } from "@vanilla-extract/css"

export const container = style({
  display: "block",
  columns: "12rem",
  gap: "1rem",
})

export const imageCardPortrait = style({
  marginBottom: "1rem",
  breakInside: "avoid",
})
