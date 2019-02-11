const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const workPost = path.resolve('./src/templates/work-post.js');
    const notesPost = path.resolve('./src/templates/post.js');
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    posttype
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create work posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        _.each(posts, (post, index) => {
          if (post.node.frontmatter.posttype === 'work') {
              const previous = index === posts.length - 1 ? null : posts[index + 1].node;
              const next = index === 0 ? null : posts[index - 1].node;
              createPage({
                  path: post.node.fields.slug,
                  component: workPost,
                  context: {
                    slug: post.node.fields.slug,
                    previous,
                    next,
                  }
              });
          } else {
              createPage({
                  path: post.node.fields.slug,
                  component: notesPost,
                  context: {
                    slug: post.node.fields.slug
                  },
              })
          }
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
