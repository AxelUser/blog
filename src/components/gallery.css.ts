import { style } from "@vanilla-extract/css"

export const container = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridAutoRows: "200px",
  gap: "10px",
})

export const imageCard = style({
  selectors: {
    "&:nth-child(2)": {
      gridColumn: "3",
      gridRow: "2 / 4",
    },
    "&:nth-child(5)": {
      gridColumn: "1 / 3",
      gridRow: "1 / 3",
    },
  },
})
