import React, { useContext } from "react"
import { closeModal, modal } from "./lightbox.css"
import LightboxContext from "./lightboxConext"

const Lightbox: React.FC = () => {
  var { isShown, hide } = useContext(LightboxContext)

  if (!isShown) return null

  return (
    <div className={modal}>
      <span className={closeModal} onClick={() => hide()}>
        &times;
      </span>
    </div>
  )
}

export default Lightbox
