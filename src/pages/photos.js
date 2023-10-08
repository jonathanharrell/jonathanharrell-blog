import React from 'react';
import {graphql} from "gatsby";

import Layout from "../components/layout";
import {GatsbyImage} from "gatsby-plugin-image";

const Photos = ({ data: { allFile } }) => {
  const images = allFile.edges;

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
          <header className="mb-16">
            <h1>Photos</h1>
          </header>
          <div className="grid grid-cols-3 gap-3">
            {images.map(image => (
              <GatsbyImage
                key={image.node.id}
                image={image.node.childImageSharp.gatsbyImageData}
                alt=""
                loading="lazy"
                className="aspect-square"
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Photos;

// filter: {sourceInstanceName: {eq: "assets"}},

export const pageQuery = graphql`
  query {
    allFile(
      filter: {internal: {mediaType: {eq: "image/jpeg"}}}
      sort: {fields: [name], order: DESC}
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(width: 580)
          }
          id
        }
      }
    }
  }
`;