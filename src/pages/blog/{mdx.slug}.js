import React from "react"
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import Layout from "../../components/layout";

export default function BlogPost({
 data: {mdx}
}) {
  const {frontmatter, body} = mdx;
  const {date, title, tags = []} = frontmatter;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Layout>
      <div className="container mx-auto py-24 px-8 md:px-0">
        <article>
          <header className="mb-8 sm:mb-12 md:mb-16">
            <p className="mb-2 font-idealSans text-sm font-medium text-center">
              {formattedDate}
            </p>
            <h1 className="max-w-[22ch] mx-auto px-['12.5%'] font-idealSans text-3xl sm:text-4xl lg:text-5xl xl:leading-[1.125] font-medium tracking-tight text-center">
              {title}
            </h1>
            <p className="mt-2 font-idealSans text-sm text-center">
              {tags.join(', ')}
            </p>
          </header>
          <div className="article-body">
            <MDXRenderer>
              {body}
            </MDXRenderer>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
    query ($id: String!) {
        mdx(id: { eq: $id }) {
            slug
            body
            frontmatter {
                date
                title
                description
                tags
            }
        }
    }
`;
