import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import Gallery, { ImageData } from "../components/gallery"
import Layout from "../components/layout"
import { Seo } from "../components/seo"

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
