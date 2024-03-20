import { GatsbyImage } from "gatsby-plugin-image"
import React, { useContext } from "react"
import { closeModal, fullImage, modal } from "./lightbox.css"
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
