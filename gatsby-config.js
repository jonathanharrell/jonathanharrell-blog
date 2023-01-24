module.exports = {
  siteMetadata: {
    title: `Jonathan Harrell`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "UA-106163304-1"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    'gatsby-remark-images',
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: 'transparent',
              linkImagesToOriginal: false,
              maxWidth: 1300,
              wrapperStyle: ''
            },
          },
        ],
        rehypePlugins: [
          require("rehype-highlight"),
          require("rehype-slug"),
          [
            require("rehype-autolink-headings"),
            {
              test: ['h2']
            }
          ]
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "path": "./src/images/"
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "path": "./src/pages/"
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "path": "./content/posts"
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "path": "./static/assets"
      },
    },
  ]
};