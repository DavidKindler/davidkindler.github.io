const urljoin = require("url-join");
const path = require("path");
const config = require("./data/siteConfig");

// let activeEnv =
//   process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
// console.log(`Using environment config: '${activeEnv}'`)
// require("dotenv").config({
//   path: `.env.${activeEnv}`,
// })
// console.log('process.env in gatsby-config', process.env)


module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    author: config.authorName,
    description: config.siteDescription,
    ...config
    // siteUrl: urljoin(config.siteUrl, config.pathPrefix),

    // rssMetadata: {
    //   site_url: urljoin(config.siteUrl, config.pathPrefix),
    //   feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
    //   title: config.siteTitle,
    //   description: config.siteDescription,
    //   // image_url: `${urljoin(
    //   //   config.siteUrl,
    //   //   config.pathPrefix
    //   // )}/logos/logo-512.png`,
    //   copyright: config.copyright
    // },
  },
  plugins: [

    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "assets",
    //     path: `${__dirname}/static/`
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts/`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/content/pages/`
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "drafts",
        path: `${__dirname}/content/draft/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve('./src/templates/post.jsx'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          { resolve: 'gatsby-remark-prismjs' },
          { resolve: 'gatsby-remark-responsive-iframe' },
          { resolve: 'gatsby-remark-copy-linked-files' },
          { resolve: 'gatsby-remark-smartypants' },
          { resolve: 'gatsby-remark-autolink-headers' },
        ],
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-images`],
      },
    },
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       {
    //         resolve: "gatsby-remark-images",
    //         options: {
    //           maxWidth: 900
    //         }
    //       },
    //       {
    //         resolve: "gatsby-remark-responsive-iframe"
    //       },
    //       "gatsby-remark-copy-linked-files",
    //       "gatsby-remark-autolink-headers",
    //       "gatsby-remark-prismjs"
    //     ]
    //   }
    // },


    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: ['*/tags/', '*/categories/'] }]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-twitter",
    // 'gatsby-plugin-antd',
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: config.siteTitle,
    //     short_name: config.siteTitleShort,
    //     description: config.siteDescription,
    //     start_url: config.pathPrefix,
    //     background_color: config.backgroundColor,
    //     theme_color: config.themeColor,
    //     display: "minimal-ui",
    //     icons: [
    //       {
    //         src: "/logos/logo-192.png",
    //         sizes: "192x192",
    //         type: "image/png"
    //       },
    //       {
    //         src: "/logos/logo-512.png",
    //         sizes: "512x512",
    //         type: "image/png"
    //       }
    //     ]
    //   }
    // },
    // "gatsby-plugin-offline",
    // {
    //   resolve: "gatsby-plugin-netlify-cms",
    //   options: {
    //     modulePath: path.resolve("src/netlifycms/index.js"), // default: undefined
    //     enableIdentityWidget: true,
    //     publicPath: "admin",
    //     htmlTitle: "Content Manager",
    //     includeRobots: false
    //   }
    // },
    // {
    //   resolve: "gatsby-plugin-feed",
    //   options: {
    //     setup(ref) {
    //       const ret = ref.query.site.siteMetadata.rssMetadata;
    //       ret.allMarkdownRemark = ref.query.allMarkdownRemark;
    //       ret.generator = "GatsbyJS Advanced Starter";
    //       return ret;
    //     },
    //     query: `
    //     {
    //       site {
    //         siteMetadata {
    //           rssMetadata {
    //             site_url
    //             feed_url
    //             title
    //             description
    //             image_url
    //             copyright
    //           }
    //         }
    //       }
    //     }
    //   `,
    //     feeds: [
    //       {
    //         serialize(ctx) {
    //           const { rssMetadata } = ctx.query.site.siteMetadata;
    //           return ctx.query.allMarkdownRemark.edges.map(edge => ({
    //             categories: edge.node.frontmatter.tags,
    //             date: edge.node.fields.date,
    //             title: edge.node.frontmatter.title,
    //             description: edge.node.excerpt,
    //             url: rssMetadata.site_url + edge.node.fields.slug,
    //             guid: rssMetadata.site_url + edge.node.fields.slug,
    //             custom_elements: [
    //               { "content:encoded": edge.node.html },
    //               { author: config.userEmail }
    //             ]
    //           }));
    //         },
    //         query: `
    //         {
    //           allMarkdownRemark(
    //             limit: 1000,
    //             sort: { order: DESC, fields: [fields___date] },
    //           ) {
    //             edges {
    //               node {
    //                 excerpt
    //                 html
    //                 timeToRead
    //                 fields {
    //                   slug
    //                   date
    //                 }
    //                 frontmatter {
    //                   title
    //                   cover
    //                   date
    //                   category
    //                   tags
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       `,
    //         output: config.siteRss
    //       }
    //     ]
    //   }
    // }
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {

    //         site {
    //           siteMetadata {
    //             rssMetadata {
    //               site_url
    //               feed_url
    //               title
    //               description
    //               image_url
    //               copyright
    //             }
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.edges.map(edge => {
    //             return Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.excerpt,
    //               date: edge.node.frontmatter.date,
    //               url: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               custom_elements: [{ "content:encoded": edge.node.html }],
    //             })
    //           })
    //         },
    //         query: `
    //           {
    //             allMarkdownRemark(
    //               sort: { order: DESC, fields: [frontmatter___date] },
    //             ) {
    //               edges {
    //                 node {
    //                   excerpt
    //                   html
    //                   fields { slug }
    //                   frontmatter {
    //                     title
    //                     date
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: "/rss.xml",
    //         title: "David Kindler Blog",
    //         // optional configuration to insert feed reference in pages:
    //         // if `string` is used, it will be used to create RegExp and then test if pathname of
    //         // current page satisfied this regular expression;
    //         // if not provided or `undefined`, all pages will have feed reference inserted
    //         match: "^/blog/",
    //         // optional configuration to specify external rss feed, such as feedburner
    //         link: "https://feeds.feedburner.com/gatsby/blog",
    //       },
    //     ],
    //   },
    // }

  ]
};
