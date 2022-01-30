import React from "react"
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import Layout from "../../components/layout";

export default function BlogPost({
 data: {mdx}
}) {
  const {frontmatter, body} = mdx;
  const {date, title, description} = frontmatter;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Layout>
      <div className="container mx-auto py-24 px-8 sm:px-16 md:px-0">
        <article>
          <header>
            <p className="mb-4 md:mb-6 font-idealSans text-sm md:text-base text-center text-red-500">
              {formattedDate}
            </p>
            <h1 className="max-w-sm md:max-w-md lg:max-w-lg mx-auto px-['12.5%'] font-idealSans text-3xl md:text-4xl xl:text-5xl xl:leading-[1.125] font-semibold tracking-tight text-center text-gray-900">
              {title}
            </h1>
            <p className="max-w-sm mx-auto mt-4 md:mt-6 font-idealSans text-sm md:text-base leading-6 md:leading-7 italic text-center">
              {description}
            </p>
          </header>
          <hr className="md:max-w-xs xl:max-w-sm mx-auto my-8 sm:my-12 md:mt-16"/>
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
            }
        }
    }
`;