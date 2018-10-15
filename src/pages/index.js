import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Button from '../components/Button/button.js'
import HomeInfo from '../components/HomeInfo/home-info.js';
import Window from '../components/Window/window.js';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}>
        <body className="no-footer" />
        </Helmet>
        <HomeInfo />
        <div>
         {posts.map(({ node: post }) => {
           const title = get(post, 'frontmatter.title') || post.fields.slug
           const windowTitle = post.frontmatter.title+" - "+post.excerpt;
           return (
            <Window 
                key={post.id} id={post.id} 
                title={windowTitle}
                width={320}
                height={261}
                minWidth={320}
                minHeight={261}
                lockAspect
                className="work-window"
            >                
                <Button tiny to={post.fields.slug} className="button">View Work</Button>
            </Window>
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
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
