import { HeadFC, PageProps, graphql } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"

type GalleryProps = {
  images: ImageData[]
}

type ImageData = {
  name: string
  image: IGatsbyImageData
}

const Gallery: React.FC<GalleryProps> = ({ images }) => (
  <div>
    {images.map(img => (
      <GatsbyImage alt={img.name} image={img.image} />
    ))}
  </div>
)

const ArtPage: React.FC<PageProps<Queries.ArtImagesQuery>> = ({ data }) => {
  const images: ImageData[] = data.allFile.nodes.map(n => ({
    name: n.name,
    image: n.childImageSharp!.gatsbyImageData,
  }))
  return (
    <Layout>
      <h1>AI Art</h1>
      <Gallery images={images} />
    </Layout>
  )
}

export default ArtPage

export const Head: HeadFC = () => {
  return <Seo title="Art" />
}

export const query = graphql`
  query ArtImages {
    allFile(filter: { sourceInstanceName: { eq: "art" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            transformOptions: { cropFocus: ATTENTION, fit: INSIDE }
          )
        }
      }
    }
  }
`
