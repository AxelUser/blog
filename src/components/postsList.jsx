import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Tag from './tag';

const PostPreview = ({ title, preview, tags, date, link }) => (
	<li>
		<time>{date}</time>
		<div>
			{tags.map((tag, index) => <Tag key={index} name={tag} />)}
		</div>
		<Link to={link}>
			<h1>
				{title}
			</h1>
			<h4>{preview}</h4  >
		</Link>
	</li>
)

const PostsList = () => (
	<StaticQuery
		query={
			graphql`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: {frontmatter: {draft: {ne: true}}}
          ) {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                  tags
                  date(formatString: "DD MMMM, YYYY")
                  preview
                }
                fields {
                  slug
                }
              }
            }
          }
        }
    `}

		render={data => {
			const getTagCaption = (tagName) => {
				var mapping = data.allTagsMapJson.edges.map(edge => {
					return { name: edge.node.name, caption: edge.node.caption }
				});
				var found = mapping.filter(map => map.name === tagName);
				return found.length > 0 ? found[0].caption : tagName;
			}

			return (
				<div>
					<ol>
						{data.allMarkdownRemark.edges.map(({ node }) => (
							<li>
								<Link to={`/blog/${node.fields.slug}`}>
									{node.frontmatter.title}
								</Link>
							</li>
						))}
					</ol>
				</div>
			)
		}}
	/>
)

export default PostsList;