const urljoin = require('url-join');

const config = {
  pathPrefix: "/",
  siteUrl: "https://www.maltsev.space",
  siteName: "Maltsev's Blog",
}

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl,
    siteName: config.siteName,
    title: "Useful tips about .Net",
    titleTemplate: `%s — ${config.siteName}`,
    description: "Blog of Alexey Maltsev, full-stack developer from Russia. Here published posts about his experience in web and mobile development with .Net",
    image: urljoin(config.siteUrl, "/seo-image.png"),
    twitter: "@axel_user",
    authorName: "Alexey Maltsev",
    currentYear: (new Date()).getFullYear() // it will be like that for now
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `configs`,
        path: `${__dirname}/src/configs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
          `gatsby-remark-autolink-headers`,
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Maltsev`s Development Blog',
        short_name: 'Maltsev Blog',
        start_url: config.pathPrefix,
        background_color: '#202834',
        theme_color: '#202834',
        display: 'minimal-ui',
        icons: [
          {
            src: urljoin(config.pathPrefix, '/android-chrome-192x192.png?v=6946GROn29'),
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: urljoin(config.pathPrefix, '/android-chrome-512x512.png?v=6946GROn29'),
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
}
