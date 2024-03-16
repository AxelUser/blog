import { HeadFC, PageProps, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import React from "react"
import { ArtCollectionPageContext } from "../common/types"
import Gallery, { ImageData } from "../components/gallery"
import Layout from "../components/layout"
import { Seo } from "../components/seo"

const ArtCollectionPage: React.FC<
  PageProps<Queries.ArtCollectionImagesQuery, ArtCollectionPageContext>
> = ({ data, pageContext }) => {
  const images: ImageData[] = data.allFile.nodes
    .filter(n => getImage(n.childImageSharp) != null)
    .map(n => ({
      name: n.name,
      image: n.childImageSharp!.gatsbyImageData,
    }))
  return (
    <Layout>
      <h1>{pageContext.title}</h1>
      <p>{pageContext.description}</p>
      <Gallery images={images} />
    </Layout>
  )
}

export default ArtCollectionPage

export const Head: HeadFC = () => {
  return <Seo title="Art" />
}

export const query = graphql`
  query ArtCollectionImages($directory: String) {
    allFile(
      filter: { relativeDirectory: { eq: $directory } }
      sort: { ctime: DESC }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            height: 400
            transformOptions: { cropFocus: ATTENTION, fit: INSIDE }
          )
        }
      }
    }
  }
`
