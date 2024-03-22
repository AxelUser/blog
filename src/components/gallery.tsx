import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React, { useContext, useEffect, useMemo } from "react"
import { useQueryParamString } from "react-use-query-param-string"
import { container, imageCardPortrait } from "./gallery.css"
import Lightbox from "./lightbox/lightbox"
import { LightboxContext } from "./lightbox/lightboxContext"

type GalleryProps = {
  images: ImageData[]
}

export type ImageData = {
  name: string
  image: IGatsbyImageData
}

const imageQueryKey = "image"

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const { show, currentImage } = useContext(LightboxContext)
  const [displayedImage, setDisplayedImage, initialized, clearDisplayedImage] =
    useQueryParamString(imageQueryKey, "")

  // Show image when page is loaded with "img" query
  useEffect(() => {
    if (initialized) {
      const foundImage = images.find(imgData => imgData.name === displayedImage)

      if (foundImage) {
        show(foundImage.image)
        setDisplayedImage(foundImage.name)
      }
    }
  }, [displayedImage, initialized])

  // Update "img" query parameter when image is shown
  useEffect(() => {
    if (currentImage) {
      const foundImage = images.find(imgData => imgData.image === currentImage)

      if (foundImage) {
        setDisplayedImage(foundImage.name)
      }
    } else {
      clearDisplayedImage()
    }
  }, [currentImage])

  const imageData = useMemo(() => {
    return images.map(img => img.image)
  }, images)

  return (
    <div className={container}>
      <Lightbox images={imageData} />
      {images.map(img => (
        <div className={imageCardPortrait} onClick={() => show(img.image)}>
          <GatsbyImage alt={img.name} image={img.image} />
        </div>
      ))}
    </div>
  )
}

export default Gallery
