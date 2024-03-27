import { createVar, globalStyle, style } from "@vanilla-extract/css"
import { vars } from "../styles/theme.css"

const linkTextColor = createVar()

export const container = style({
  marginTop: `2rem`,
  display: `flex`,
  gap: `1.5rem`,

  "@media": {
    "(max-width: 650px)": {
      flexDirection: `column`,
    },
  },

  vars: {
    [linkTextColor]: vars.color.text.primary,
  },
})

export const navCard = style({
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${vars.color.border}`,
  borderRadius: "8px",

  padding: ".5rem",

  ":hover": {
    cursor: "pointer",
    vars: {
      [linkTextColor]: vars.color.text.link,
    },
  },

  "@media": {
    "(min-width: 650px)": {
      maxWidth: `300px`,
    },
  },
})

export const navDirectionInfo = style({
  fontSize: "12px",
  fontWeight: "bold",
  color: vars.color.text.secondary,
})

export const navLink = style({
  color: linkTextColor,

  ":hover": {
    color: linkTextColor,
  },
})

globalStyle(`${container} :nth-child(2)`, {
  marginLeft: `auto`,
  alignItems: "flex-end",

  "@media": {
    "(max-width: 650px)": {
      alignItems: "flex-start",
      marginLeft: 0,
    },
  },
})
