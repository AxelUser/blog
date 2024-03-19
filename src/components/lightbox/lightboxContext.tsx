import { IGatsbyImageData } from "gatsby-plugin-image"
import React, { createContext, useEffect, useState } from "react"
import { noScroll } from "../../styles/global.css"

export type LightboxContextProps = {
  currentImage: IGatsbyImageData | null
  show: (image: IGatsbyImageData) => void
  hide: () => void
}

export const LightboxContext = createContext<LightboxContextProps>({
  currentImage: null,
  show: () => {},
  hide: () => {},
})

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  var [currentImage, setImage] = useState<IGatsbyImageData | null>(null)

  useEffect(() => {
    var html = document.getElementsByTagName("html")[0]
    if (currentImage != null) {
      html.classList.add(noScroll)
    } else {
      html.classList.remove(noScroll)
    }
  }, [currentImage])

  return (
    <LightboxContext.Provider
      value={{
        currentImage: currentImage,
        show: image => setImage(image),
        hide: () => setImage(null),
      }}
    >
      {children}
    </LightboxContext.Provider>
  )
}
