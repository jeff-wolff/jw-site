import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Button from '../components/Button/button.js'

class WorkPostTemplate extends React.Component {
  theme(bg,bgf,p,pf,s,sf,wb,wt) {
    document.documentElement.style.setProperty('--bg', bg);
    document.documentElement.style.setProperty('--bg-faded', bgf);
    document.documentElement.style.setProperty('--primary', p);
    document.documentElement.style.setProperty('--primary-faded', pf);
    document.documentElement.style.setProperty('--secondary', s);
    document.documentElement.style.setProperty('--secondary-faded', sf);
    document.documentElement.style.setProperty('--window-border', wb);
    document.documentElement.style.setProperty('--window-title', wt);
  }
  componentDidMount() {
    const post = this.props.data.markdownRemark
    console.log(post.frontmatter);
    if (post.frontmatter.theme) {
      this.theme(post.frontmatter.tbg,post.frontmatter.tbgf,post.frontmatter.tp,post.frontmatter.tpf,post.frontmatter.ts,post.frontmatter.tsf,post.frontmatter.twb,post.frontmatter.twt);
    }
  }
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const siteURL = post.frontmatter.url
    let coverVideo;
    if (post.frontmatter.featuredVideo != null) {
     coverVideo = <video autoPlay muted loop playsInline className="vid-wrap">
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
       <div className="work-post-title centered-title preload">
         <h1>{post.frontmatter.title}</h1>
       </div>
       <div
        className="work-post-nav"
        style={{ width: '100%', maxWidth: '260px' }}
       >
         
           {
             previous &&
             <Button tiny inlineicon="right" to={previous.fields.slug} rel="prev">
               &uarr; <span>{previous.frontmatter.title}</span> 
             </Button>
           }
         
           {
             next &&
             <Button tiny inlineicon="right" to={next.fields.slug} rel="next">
               &darr; <span>{next.frontmatter.title}</span>
             </Button>
           }
       </div>
       <div className="work-post-website-btn">
         <Button external="true" href={`https://${post.frontmatter.url}`} inlineicon="right">{post.frontmatter.url} <span>&#8599;</span></Button>
       </div>
       <div className="work-post-container container">
       <h5>
        Launched {post.frontmatter.date}
       </h5>
         <div dangerouslySetInnerHTML={{ __html: post.html }} />

         
        
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
        theme
        tbg
        tbgf
        tp
        tpf
        ts
        tsf
        twb
        twt
      }
    }
  }
`
