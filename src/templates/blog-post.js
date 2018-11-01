import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Button from '../components/Button/button.js'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
       <div className="work-post-container container">
          <h1>{post.frontmatter.title}</h1>
          <Button inlineicon="right" to="#">www.sunbeltrentals.com <span>↗</span></Button><br /><br />
          <Button to="#">www.sunbeltrentals.com</Button>
         <p
           style={{
             // ...scale(-1 / 5),
             display: 'block',
             // marginBottom: rhythm(1),
             // marginTop: rhythm(-1),
           }}
         >
           {post.frontmatter.date}
         </p>
         <div dangerouslySetInnerHTML={{ __html: post.html }} />
         <hr
           style={{
             // marginBottom: rhythm(1),
           }}
         />
         
         <ul
           style={{
             display: 'flex',
             flexWrap: 'wrap',
             justifyContent: 'space-between',
             listStyle: 'none',
             padding: 0,
           }}
         >
           <li>
             {
               previous &&
               <Button tiny inlineicon="left" to={previous.fields.slug} rel="prev">
                 <span>←</span> {previous.frontmatter.title}
               </Button>
             }
           </li>
           <li>
             {
               next &&
               <Button tiny inlineicon="right" to={next.fields.slug} rel="next">
                 {next.frontmatter.title} <span>→</span>
               </Button>
             }
           </li>
         </ul>
       </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
