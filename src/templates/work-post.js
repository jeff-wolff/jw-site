import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Button from '../components/Button/button.js'

class WorkPostTemplate extends React.Component {
  theme(bg,bgf,p,pf,s,sf,wb,wt,fbg) {
    document.documentElement.style.setProperty('--bg', bg);
    document.documentElement.style.setProperty('--bg-faded', bgf);
    document.documentElement.style.setProperty('--primary', p);
    document.documentElement.style.setProperty('--primary-faded', pf);
    document.documentElement.style.setProperty('--secondary', s);
    document.documentElement.style.setProperty('--secondary-faded', sf);
    document.documentElement.style.setProperty('--window-border', wb);
    document.documentElement.style.setProperty('--window-title', wt);
    document.documentElement.style.setProperty('--footer-bg', fbg);
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content", getComputedStyle(document.documentElement).getPropertyValue('--bg'));
  }
  componentDidMount() {
    const post = this.props.data.markdownRemark
    console.log(post.frontmatter);
    if (post.frontmatter.theme) {
      this.theme(post.frontmatter.tbg,post.frontmatter.tbgf,post.frontmatter.tp,post.frontmatter.tpf,post.frontmatter.ts,post.frontmatter.tsf,post.frontmatter.twb,post.frontmatter.twt,post.frontmatter.tfbg);
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
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} Website - ${siteTitle}`}
        />
        {coverVideo}
       <div className="work-post-title centered-title preload">
         <h1>{post.frontmatter.title}</h1>
       </div>
       <div
        className="work-post-nav">
         
           {
             previous &&
             <Button tiny inlineicon="right" to={previous.fields.slug} rel="prev">
               &larr; <span>Prev: {previous.frontmatter.title}</span> 
             </Button>
           }
         
           {
             next &&
             <Button tiny inlineicon="right" to={next.fields.slug} rel="next">
               &rarr; <span>Next: {next.frontmatter.title}</span>
             </Button>
           }
       </div>
       <div className="work-post-website-btn">
         <Button external="true" href={`https://www.${post.frontmatter.url}`} inlineicon="right">{post.frontmatter.url} <span>&#8599;</span></Button>
       </div>
       <div className="work-post-container container Rte">
         <p>Company: {post.frontmatter.title}</p>
         <p>Date: {post.frontmatter.date}</p>
         <p>Team: {post.frontmatter.team}</p>
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
        team
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
        tfbg
      }
    }
  }
`
