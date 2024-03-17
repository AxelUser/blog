import { style } from "@vanilla-extract/css"

export const modal = style({
  position: "fixed",
  zIndex: 1,
  paddingTop: "100px",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  overflow: "auto",
  backgroundColor: "#000000f2",
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

export const lightboxContent = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
})

export const fullImage = style({
  margin: "auto",
  maxWidth: "80vw",
  maxHeight: "80vh",
})