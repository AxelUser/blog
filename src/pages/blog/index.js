import * as React from 'react'
import Layout from '../../components/layout'
import PostsList from '../../components/postsList'

const BlogPage = () => {
	return (
		<Layout pageTitle="Blog">
			<PostsList />
		</Layout>
	)
}

export default BlogPage