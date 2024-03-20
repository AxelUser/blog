import { GatsbyImage } from "gatsby-plugin-image"
import React, { useContext } from "react"
import { closeModal, fullImage, lightboxContent, modal } from "./lightbox.css"
import { LightboxContext } from "./lightboxContext"

export type LightboxProps = {
  onHidden?: () => void
}

const Lightbox: React.FC<LightboxProps> = ({ onHidden }) => {
  var { currentImage, hide } = useContext(LightboxContext)

  if (currentImage == null) return null

  const close = () => {
    hide()
    if (onHidden != null) {
      onHidden()
    }
  }

  return (
    <div className={modal}>
      <span className={closeModal} onClick={() => close()}>
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
