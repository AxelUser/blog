import { HeadFC, Link, PageProps, graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import { Seo } from "../../components/seo"

type Collection = {
  title: string
  path: string
}

const ArtPage: React.FC<PageProps<Queries.GalleryCollectionsQuery>> = ({
  data: {
    allFile: { nodes },
  },
}) => {
  var collections: Collection[] = nodes.map(n => ({
    title: n.childrenJson![0]!.title!,
    path: n.relativeDirectory,
  }))
  return (
    <Layout>
      <h1>AI Art</h1>
      {collections.map(c => (
        <Link to={c.path}>{c.title}</Link>
      ))}
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
