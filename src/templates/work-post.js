import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Button from '../components/Button/button.js'

class WorkPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const siteURL = post.frontmatter.url
    let coverVideo;
    if (post.frontmatter.featuredVideo != null) {
     coverVideo = <video autoPlay muted loop style={{ position: 'absolute', top: '0', left: '0', width: '100%', opacity: '0.25' }}>
             <source src={post.frontmatter.featuredVideo.publicURL} type="video/mp4" />
           </video>;
    } else {
     coverVideo = "";
    }
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} Website - ${siteTitle}`}
        />
        {coverVideo}
       <div className="work-post-container container">
          <h1>{post.frontmatter.title}</h1>
          <Button external="true" href={`https://${post.frontmatter.url}`} inlineicon="right">{post.frontmatter.url} <span>↗</span></Button>

         <p
           style={{
             // ...scale(-1 / 5),
             display: 'block',
             // marginBottom: rhythm(1),
             // marginTop: rhythm(-1),
           }}
         >
          Launched on: {post.frontmatter.date}
          
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

export default WorkPostTemplate

export const pageQuery = graphql`
  query WorkPostBySlug($slug: String!) {
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
        url
        featuredVideo {
          publicURL
        }
      }
    }
  }
`
