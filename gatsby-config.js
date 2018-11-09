const config = {
  pathPrefix: "/blog"
}

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: "Maltsev's",
  },
  plugins: [
    `gatsby-plugin-less`,
    'gatsby-plugin-react-svg',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true
            }          
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',        
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Maltsev`s Development Blog',
        short_name: 'Maltsev Blog',
        start_url: config.pathPrefix,
        background_color: '#ef3507',
        theme_color: '#ef3507',
        display: 'minimal-ui',
        icons: [
          {
            src: config.pathPrefix + '/android-chrome-192x192.png?v=6946GROn29',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: config.pathPrefix + '/android-chrome-512x512.png?v=6946GROn29',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
}
