import { GatsbyBrowser } from "gatsby"
import React from "react"
import LightboxProvider from "../components/lightbox/lightboxProvider"

export const RootElementWrapper: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return <LightboxProvider>{element}</LightboxProvider>
}

export default RootElementWrapper
