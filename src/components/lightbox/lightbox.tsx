import { GatsbyImage } from "gatsby-plugin-image"
import React, { useContext } from "react"
import { closeModal, fullImage, lightboxContent, modal } from "./lightbox.css"
import { LightboxContext } from "./lightboxContext"

const Lightbox: React.FC = () => {
  var { currentImage, hide } = useContext(LightboxContext)

  if (currentImage == null) return null

  return (
    <div className={modal}>
      <span className={closeModal} onClick={() => hide()}>
        &times;
      </span>
      <div className={lightboxContent}>
        <GatsbyImage
          className={fullImage}
          alt=""
          image={currentImage}
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default Lightbox
