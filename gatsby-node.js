const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
	const { createNode, createNodeField } = actions
	if (node.internal.type == "MarkdownRemark") {
		const slug = path.basename(path.dirname(node.fileAbsolutePath))
		createNodeField({
			node,
			name: "slug",
			value: slug
		})
	}
}