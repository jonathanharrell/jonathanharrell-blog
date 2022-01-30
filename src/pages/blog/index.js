import React from 'react';
import {graphql, Link} from "gatsby";

const Blog = ({ data: { allMdx } }) => {
  const posts = allMdx.edges;

  return (
    <div>
      <h1>blog page</h1>
      {posts.map(post => (
        <Link
          key={post.node.id}
          to={`/blog/${post.node.slug}`}
          className="block underline"
        >
          {post.node.frontmatter.title}
        </Link>
      ))}
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
                    }
                }
            }
        }
    }
`;