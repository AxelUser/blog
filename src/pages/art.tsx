import { HeadFC, PageProps, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"

const ArtPage: React.FC<PageProps<Queries.ArtImagesQuery>> = ({
  data: {
    allFile: { nodes: images },
  },
}) => (
  <Layout>
    <h1>AI Art</h1>
    {images.map(img => (
      <GatsbyImage
        alt={img.name}
        image={img.childImageSharp?.gatsbyImageData!}
      />
    ))}
  </Layout>
)

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
          gatsbyImageData
        }
      }
    }
  }
`
