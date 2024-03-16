import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import Bio from "../../components/bio"
import ContentPreview from "../../components/contentPreview"
import Layout from "../../components/layout"
import { Seo } from "../../components/seo"
import { artTitle } from "./index.css"

type Collection = {
  title: string
  description: string
  path: string
}

const ArtPage: React.FC<PageProps<Queries.GalleryCollectionsQuery>> = ({
  data: {
    allFile: { nodes },
  },
}) => {
  var collections: Collection[] = nodes.map(n => ({
    title: n.childrenJson![0]!.title!,
    description: n.childrenJson![0]!.description!,
    path: n.relativeDirectory,
  }))
  return (
    <Layout>
      <Bio />
      <div>
        <h1 className={artTitle}>AI Art</h1>
        {collections.map(c => (
          <ContentPreview
            title={c.title}
            description={c.description}
            link={c.path}
          />
        ))}
      </div>
    </Layout>
  )
}

export default ArtPage

export const Head: HeadFC = () => {
  return <Seo title="Art" />
}

export const query = graphql`
  query GalleryCollections {
    allFile(
      filter: {
        base: { eq: "gallery-index.json" }
        sourceInstanceName: { eq: "art" }
      }
    ) {
      nodes {
        relativeDirectory
        childrenJson {
          title
          description
        }
      }
    }
  }
`
