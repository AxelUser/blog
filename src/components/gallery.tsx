import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import * as React from "react"
import { container, imageCard } from "./gallery.css"

type GalleryProps = {
  images: ImageData[]
}

export type ImageData = {
  name: string
  image: IGatsbyImageData
}

const Gallery: React.FC<GalleryProps> = ({ images }) => (
  <div className={container}>
    {images.map(img => (
      <div className={imageCard}>
        <GatsbyImage alt={img.name} image={img.image} />
      </div>
    ))}
  </div>
)

export default Gallery
