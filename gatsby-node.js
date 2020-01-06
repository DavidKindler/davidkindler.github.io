/* eslint "no-console": "off" */

const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const { createFilePath } = require('gatsby-source-filesystem')
const siteConfig = require("./data/siteConfig");

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//     if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {

//       if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
//         const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
//         if (!date.isValid) {
//           console.warn(`WARNING: Invalid date.`, node.frontmatter);
//         } else {
//           createNodeField({ node, name: "date", value: date.toISOString() });
//         }
//       }
//     }
//   }
// }


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === "MarkdownRemark" || node.internal.type === 'Mdx') {

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter") && Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      createNodeField({ node, name: "slug", value: slug });
    } else {
      const fileNode = getNode(node.parent);
      const parsedFilePath = path.parse(fileNode.relativePath);
      if (
        Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
        Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
      ) {
        slug = `/${_.kebabCase(node.frontmatter.title)}`;
      } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
      } else if (parsedFilePath.dir === "") {
        slug = `/${parsedFilePath.name}/`;
      } else {
        slug = `/${parsedFilePath.dir}/`;
      }
    }


    if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
      const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
      if (!date.isValid) {
        console.warn(`WARNING: Invalid date.`, node.frontmatter);
      } else {
        createNodeField({ node, name: "date", value: date.toISOString() });
      }
    }
    // }
  }

  // if (node.internal.type === "Mdx") {
  //   const value = createFilePath({ node, getNode })
  //   createNodeField({
  //     // Name of the field you are adding
  //     name: "slug",
  //     // Individual MDX node
  //     node,
  //     // Generated value based on filepath with "blog" prefix. you
  //     // don't need a separating "/" before the value because
  //     // createFilePath returns a path with the leading "/".
  //     value,
  //   })
  // }

};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const postPage = path.resolve("src/templates/post.jsx");
  const tagPage = path.resolve("src/templates/tag.jsx");
  const pagePage = path.resolve("src/templates/page.jsx");
  const categoryPage = path.resolve("src/templates/category.jsx");
  const listingPage = path.resolve("./src/templates/listing.jsx");

  // Get a full list of markdown posts
  // const markdownQueryResultFOO = await graphql(`
  //   {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           fileAbsolutePath
  //           fields {
  //             slug
  //           }
  //           frontmatter {
  //             cover
  //             slug
  //             title
  //             tags
  //             category
  //             date
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // const markdownQueryResult = await graphql(`
  //   {
  //     allMarkdown: allMdx(
  //       sort: { fields: [frontmatter___date], order: DESC }
  //       limit: 1000
  //     ) {
  //       edges {
  //         node {
  //           fileAbsolutePath
  //           fields {
  //             slug
  //             date
  //           }
  //           frontmatter {
  //             cover
  //             slug
  //             title
  //             tags
  //             category
  //             date
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const markdownQueryResult = await graphql(`
  {
    allMarkdown: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          fileAbsolutePath
          fields {
            slug
            date
          }
          frontmatter {
            title
            slug
            tags
          }
        }
      }
    }
  }
`)

  if (markdownQueryResult.errors) {
    reporter.panic(markdownQueryResult.errors)
  }

  // if (markdownQueryResult.errors) {
  //   console.error(markdownQueryResult.errors);
  //   throw markdownQueryResult.errors;
  // }

  const tagSet = new Set();
  const categorySet = new Set();
  // const draftSet = new Set();

  // const markdownFiles = markdownQueryResult.data.allMarkdownRemark.edges
  const markdownFiles = markdownQueryResult.data.allMarkdown.edges

  const postsEdges = markdownFiles.filter(item =>
    item.node.fileAbsolutePath.includes('/content/posts/')
  )

  const pagesEdges = markdownFiles.filter(item =>
    item.node.fileAbsolutePath.includes('/content/pages/')
  )

  const draftsEdges = markdownFiles.filter(item =>
    item.node.fileAbsolutePath.includes('/content/draft/')
  )
  // const postsEdges = markdownQueryResult.data.allMarkdownRemark.edges;

  // Sort posts
  postsEdges.sort((postA, postB) => {
    const dateA = moment(
      postA.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    const dateB = moment(
      postB.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;

    return 0;
  });

  // Paging
  const { postsPerPage } = siteConfig;
  const pageCount = Math.ceil(postsEdges.length / postsPerPage);

  [...Array(pageCount)].forEach((_val, pageNum) => {
    createPage({
      path: pageNum === 0 ? `/` : `/${pageNum + 1}/`,
      component: listingPage,
      context: {
        limit: postsPerPage,
        skip: pageNum * postsPerPage,
        pageCount,
        currentPageNum: pageNum + 1
      }
    });
  });

  // Post page creating
  postsEdges.forEach((edge, index) => {
    // Generate a list of tags
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach(tag => {
        tagSet.add(tag);
      });
    }


    // Generate a list of categories
    if (edge.node.frontmatter.category) {
      categorySet.add(edge.node.frontmatter.category);
    }

    // Create post pages
    const nextID = index + 1 < postsEdges.length ? index + 1 : 0;
    const prevID = index - 1 >= 0 ? index - 1 : postsEdges.length - 1;
    const nextEdge = postsEdges[nextID];
    const prevEdge = postsEdges[prevID];

    createPage({
      path: edge.node.fields.slug,
      // path: edge.node.frontmatter.slug,
      component: postPage,
      context: {
        slug: edge.node.fields.slug,
        // slug: edge.node.frontmatter.slug,
        nexttitle: nextEdge.node.frontmatter.title,
        nextslug: nextEdge.node.fields.slug,
        // nextslug: nextEdge.node.frontmatter.slug,
        prevtitle: prevEdge.node.frontmatter.title,
        prevslug: prevEdge.node.fields.slug
        // prevslug: prevEdge.node.frontmatter.slug
      }
    });
  });

  // //  Create /page pages
  // pagesEdges.forEach(edge => {
  //   createPage({
  //     path: `/page/${_.kebabCase(edge.node.fields.slug)}/`,
  //     component: pagePage,
  //     context: { edge }
  //   });
  // });

  // //  Create /draft pages
  // draftsEdges.forEach(edge => {
  //   createPage({
  //     path: `/draft/${_.kebabCase(edge.node.frontmatter.slug)}/`,
  //     component: pagePage,
  //     context: { edge }
  //   });
  // });


  //  Create tag pages
  tagSet.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagPage,
      context: { tag }
    });
  });

  // Create category pages
  categorySet.forEach(category => {
    createPage({
      path: `/categories/${_.kebabCase(category)}/`,
      component: categoryPage,
      context: { category }
    });
  });
};
