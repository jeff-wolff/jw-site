const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
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

        // Create work / notes posts pages.
        const posts = result.data.allMarkdownRemark.edges;
        const workPost = path.resolve('./src/templates/work-post.js');
        const notesPost = path.resolve('./src/templates/post.js');
        const workPosts = [], notesPosts = [];
        console.log(posts);
        _.each(posts, (post, index) => {
          if (post.node.frontmatter.posttype === 'work') {
              workPosts.push(post);
          } else {
              notesPosts.push(post);
          }
        })
        // Create pages
        for (var i = workPosts.length - 1; i >= 0; i--) {
          const previous = i === workPosts.length - 1 ? null : workPosts[i + 1].node;
          const next = i === 0 ? null : workPosts[i - 1].node;
          createPage({
              path: workPosts[i].node.fields.slug,
              component: workPost,
              context: {
                slug: workPosts[i].node.fields.slug,
                previous,
                next,
              }
          });
        }
        for (var i = notesPosts.length - 1; i >= 0; i--) {
          const previous = i === notesPosts.length - 1 ? null : notesPosts[i + 1].node;
          const next = i === 0 ? null : notesPosts[i - 1].node;
          createPage({
              path: notesPosts[i].node.fields.slug,
              component: notesPost,
              context: {
                slug: notesPosts[i].node.fields.slug,
                previous,
                next,
              },
          })
        }
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
