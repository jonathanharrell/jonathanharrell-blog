import React from 'react';
import {graphql, Link} from "gatsby";

const Blog = ({ data: { allMdx } }) => {
  const posts = allMdx.edges;

  return (
    <div className="container mx-auto py-8">
      <h1>Blog</h1>
      <div className="grid grid-cols-4 gap-8">
        {posts.map(post => (
          <Link
            key={post.node.id}
            to={`/blog/${post.node.slug}`}
            className="block underline"
          >
            {post.node.frontmatter.thumbnail?.publicURL && (
              <img src={post.node.frontmatter.thumbnail.publicURL} alt=""/>
            )}
            {post.node.frontmatter.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blog;

export const pageQuery = graphql`
    query {
        allMdx(
            filter: {frontmatter: {templateKey: {eq: "post"}}}
            sort: {fields: frontmatter___date, order: DESC}
        ) {
            edges {
                node {
                    id
                    slug
                    frontmatter {
                        title
                        thumbnail {
                          publicURL
                        }
                    }
                }
            }
        }
    }
`;