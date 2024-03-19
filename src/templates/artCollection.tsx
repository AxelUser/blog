import { HeadFC, PageProps, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import React from "react"
import { ArtCollectionPageContext } from "../common/types"
import Gallery, { ImageData } from "../components/gallery"
import Layout, { BioDisplay } from "../components/layout"
import { Seo } from "../components/seo"
import { artCollectionInfo } from "./artCollection.css"

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
    <Layout displayBio={BioDisplay.BeforeContent}>
      <div className={artCollectionInfo}>
        <h1>{pageContext.title}</h1>
        <p>{pageContext.description}</p>
      </div>
      <Gallery images={images} />
    </Layout>
  )
}

export default ArtCollectionPage

export const Head: HeadFC<
  Queries.ArtCollectionImagesQuery,
  ArtCollectionPageContext
> = ({ pageContext }) => {
  return <Seo title={`Art | ${pageContext.title}`} />
}

export const query = graphql`
  query ArtCollectionImages($directory: String) {
    allFile(
      filter: {
        relativeDirectory: { eq: $directory }
        childImageSharp: { id: { ne: null } }
      }
      sort: { ctime: DESC }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
