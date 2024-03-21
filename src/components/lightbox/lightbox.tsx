import { GatsbyImage } from "gatsby-plugin-image"
import React, { useContext } from "react"
import { closeModal, fullImage, modal } from "./lightbox.css"
import { LightboxContext } from "./lightboxContext"

const Lightbox: React.FC = () => {
  var { currentImage, hide } = useContext(LightboxContext)

  if (currentImage == null) return null

  return (
    <div className={modal}>
      <span className={closeModal} onClick={() => hide()}>
        &times;
      </span>
      <GatsbyImage
        className={fullImage}
        alt=""
        image={currentImage}
        objectFit="contain"
      />
    </div>
  )
}

export default Lightbox
