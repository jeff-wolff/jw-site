import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Button from '../components/Button/button.js'
import HomeInfo from '../components/HomeInfo/home-info.js'
import Window from '../components/Window/window.js'
import Media from 'react-media'

class PostIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const metatitle = "WORK - "+siteTitle;

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={metatitle}>
        <body className="no-footer" />
        </Helmet>
        <div className="container">
            <h1 className="centered-title preload">Work</h1>
        </div>
         {posts.map(({ node: post }) => {
           const title = get(post, 'frontmatter.title') || post.fields.slug
           const windowTitle = post.frontmatter.title+" - "+post.excerpt;
           return (
            <Media query="(min-width: 768px)" key={post.id}>
              {matches =>
                matches ? (
                  <Window 
                    title={windowTitle}
                    width={484}
                    height={310}
                    minWidth={222}
                    minHeight={135}
                    lockAspect
                    className="work-window"
                    >
                      <Button tiny to={post.fields.slug} className="button">View Work</Button>
                  </Window>
                ) : (
                  <Window 
                    title={windowTitle}
                    width={242}
                    height={155}
                    minWidth={222}
                    minHeight={135}
                    lockAspect
                    className="work-window"
                    >
                      <Button tiny to={post.fields.slug} className="button">View Work</Button>
                  </Window>
                )
              }
            </Media>
             // <div key={post.fields.slug}>
             //   <h3
             //     style={{
             //       marginBottom: rhythm(1 / 4),
             //     }}
             //   >
             //     <Link style={{ boxShadow: 'none' }} to={post.fields.slug}>
             //       {title}
             //     </Link>
             //   </h3>
             //   <small>{post.frontmatter.date}</small>
             //   <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
             // </div>
           )
         })}
      </Layout>
    )
  }
}

export default PostIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          excerpt(pruneLength: 75)
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
