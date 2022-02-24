module.exports = {
	siteMetadata: {
		title: `Maltsev's Space`,
		author: `Alexey Maltsev`,
		currentYear: (new Date()).getFullYear(),
		siteUrl: `https://www.maltsev.space`
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap", {
			resolve: 'gatsby-plugin-manifest',
			options: {
				"icon": "src/images/icon.png"
			}
		}, {
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-prismjs`
					}
				]
			}
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp", {
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "images",
				"path": "./src/images/"
			},
			__key: "images"
		}, {
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "pages",
				"path": "./src/pages/"
			},
			__key: "pages"
		}, {
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "blog",
				"path": "./content/"
			},
			__key: "blog"
		}
	]
};