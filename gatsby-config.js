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
          'gatsby-transformer-remark',
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: 'transparent',
              linkImagesToOriginal: true,
              maxWidth: 1200,
              quality: 100,
              withWebp: true,
              withAvif: true,
              wrapperStyle(image) {
                let maxImageWidth;
                if (image.aspectRatio < 1) maxImageWidth = image.aspectRatio * 1000;
                else maxImageWidth = 1000;

                return `max-width: clamp(200px, calc(${
                  image.aspectRatio
                }* 80vh), ${
                  Math.round(maxImageWidth * 10) / 10
                }px); max-height: 1000px;`;
              },
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
        "name": "assets",
        "path": "./static/assets"
      },
    },
  ]
};