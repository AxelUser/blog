import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React, { useContext, useEffect, useState } from "react"
import { useSwipeable } from "react-swipeable"
import {
  closeModal,
  content,
  fullImage,
  modal,
  navigationButton,
  nextButton,
  prevButton,
} from "./lightbox.css"
import { LightboxContext } from "./lightboxContext"

type LightboxProps = {
  images: IGatsbyImageData[]
}

const Lightbox: React.FC<LightboxProps> = ({ images }) => {
  var { currentImage, show, hide } = useContext(LightboxContext)

  if (currentImage == null) return null

  const supportNavigation = images && images.length > 1

  const [currentImageIdx, setCurrentImageIdx] = useState(
    supportNavigation ? images.findIndex(img => img == currentImage) : 0
  )

  useEffect(() => {
    if (supportNavigation) {
      show(images[currentImageIdx])
    }
  }, [currentImageIdx])

  const showPrev = () => {
    if (currentImageIdx - 1 < 0) {
      setCurrentImageIdx(images.length - 1)
    } else {
      setCurrentImageIdx(currentImageIdx - 1)
    }
  }

  const showNext = () => {
    setCurrentImageIdx((currentImageIdx + 1) % images.length)
  }

  var swipeHandlers = useSwipeable({
    onSwipedLeft: () => showNext(),
    onSwipedRight: () => showPrev(),
  })

  return (
    <div className={modal}>
      <span className={closeModal} onClick={() => hide()}>
        &times;
      </span>
      <div className={content} {...swipeHandlers}>
        {supportNavigation && (
          <span
            className={`${navigationButton} ${prevButton}`}
            onClick={() => showPrev()}
          >
            &#10094;
          </span>
        )}
        <GatsbyImage
          className={fullImage}
          alt=""
          image={currentImage}
          objectFit="contain"
        />
        {supportNavigation && (
          <span
            className={`${navigationButton} ${nextButton}`}
            onClick={() => showNext()}
          >
            &#10095;
          </span>
        )}
      </div>
    </div>
  )
}

export default Lightbox
