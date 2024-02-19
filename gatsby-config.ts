import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Maltsev Space`,
    author: `Alexey Maltsev`,
    currentYear: new Date().getFullYear(),
    siteUrl: `https://www.maltsev.space`,
    googleSiteVerification: "8Dy4lxRZAH8BAi86GsiP9mlM_ELJLCh839CXT3W32SI",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-vanilla-extract",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs",
        ],
        extensions: [`.md`, `.mdx`],
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./content/blog",
      },
      __key: "blog",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "art",
        path: "./content/art",
      },
      __key: "art",
    },
  ],
}

export default config
