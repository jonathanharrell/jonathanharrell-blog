import React from 'react';
import {graphql, Link} from "gatsby";

import Layout from "../components/layout";

const Archive = ({ data: { allMdx } }) => {
  const posts = allMdx.edges;

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
          <header className="mb-16">
            <h1>Archive</h1>
          </header>
          <ul className="flex flex-col gap-4">
            {posts.map(post => (
              <li key={post.node.id} className="text-lg leading-relaxed">
                <Link
                  key={post.node.id}
                  to={`/blog/${post.node.slug}`}
                  className="text-red-700 font-semibold"
                >
                  {new Date(post.node.frontmatter.date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                  }).replace(/[^apm\d]+/gi, '-')}
                </Link>
                :&nbsp;
                {post.node.frontmatter.title && (
                  <strong>{post.node.frontmatter.title}</strong>
                )}
                {post.node.frontmatter.title && post.node.excerpt && ' - '}
                {post.node.excerpt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Archive;

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
          excerpt(pruneLength: 100)
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`;