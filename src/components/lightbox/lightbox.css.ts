import { createVar, style } from "@vanilla-extract/css"

export const modal = style({
  position: "fixed",
  zIndex: 1,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  overflow: "auto",
  backgroundColor: "#000000f2",

  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
})

export const closeModal = style({
  color: "white",
  position: "fixed",
  top: "10px",
  right: "25px",
  fontSize: "35px",
  fontWeight: "bold",

  ":hover": {
    cursor: "pointer",
  },
})

const buttonMargin = createVar()

export const content = style({
  display: "flex",
  flexDirection: "row",
  width: "100vw",
  vars: {
    [buttonMargin]: "5rem",
  },
})

export const navigationButton = style({
  cursor: "pointer",
  fontSize: "35px",
  fontWeight: "bold",
  userSelect: "none",

  "@media": {
    "(pointer:coarse)": {
      display: "none",
    },
  },
})

export const prevButton = style({
  margin: `auto 0 auto ${buttonMargin}`,
})

export const nextButton = style({
  margin: `auto ${buttonMargin} auto 0`,
})

export const fullImage = style({
  margin: "auto",
  maxWidth: "80vw",
  maxHeight: "80vh",
})
