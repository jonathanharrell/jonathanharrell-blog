import React from 'react';
import {graphql, Link} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";

import Layout from "../../components/layout";

const Blog = ({ data: { allMdx } }) => {
  const posts = allMdx.edges;

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
          <header className="mb-16">
            <h1>Blog</h1>
          </header>
          <div className="flex flex-col gap-16">
            {posts.map(post => (
              <article>
                <header className={post.node.frontmatter.title ? 'mb-8' : 'mb-4'}>
                  {post.node.frontmatter.title && (
                    <Link
                      key={post.node.id}
                      to={`/blog/${post.node.slug}`}
                    >
                      <h2 className="mb-3 text-4xl font-medium font-idealSans">
                        {post.node.frontmatter.title}
                      </h2>
                    </Link>
                  )}
                  <Link
                    key={post.node.id}
                    to={`/blog/${post.node.slug}`}
                    className="block text-xl font-semibold font-idealSans"
                  >
                    {new Date(post.node.frontmatter.date).toLocaleDateString(undefined, {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                    <span className="ml-1 font-semibold text-red-700">#</span>
                  </Link>
                </header>
                <div className="article-body prose lg:prose-lg max-w-none mx-auto">
                  <MDXRenderer>
                    {post.node.body}
                  </MDXRenderer>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
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
                    body
                    frontmatter {
                        date
                        title
                    }
                }
            }
        }
    }
`;