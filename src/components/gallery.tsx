import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React, { useContext } from "react"
import { container, imageCardPortrait } from "./gallery.css"
import Lightbox from "./lightbox/lightbox"
import { LightboxContext } from "./lightbox/lightboxContext"

type GalleryProps = {
  images: ImageData[]
}

export type ImageData = {
  name: string
  image: IGatsbyImageData
  originalUrl: string
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  var { show } = useContext(LightboxContext)

  return (
    <div className={container}>
      <Lightbox />
      {images.map(img => (
        <div
          className={imageCardPortrait}
          onClick={() => show(img.originalUrl)}
        >
          <GatsbyImage alt={img.name} image={img.image} />
        </div>
      ))}
    </div>
  )
}

export default Gallery
