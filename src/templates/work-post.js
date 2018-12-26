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
    // window.addEventListener('scroll', this.throttle(this.removeTitle,50));
  }
  componentWillUnmount() {
    // window.removeEventListener('scroll', this.throttle(this.removeTitle,50));
  }
  throttle(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
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
     coverVideo = <video src={post.frontmatter.featuredVideo.publicURL} autoPlay muted loop playsInline />;
    } else {
     coverVideo = "";
    }

    
    return (
      <Layout location={this.props.location}>
        <Helmet
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} Website - ${siteTitle}`}
        />
        <div className="vid-wrap">{coverVideo}</div>
       <div className="work-post-title centered-title container preload">
         <h1 className="title">{post.frontmatter.title}</h1>
       </div>

      <div className="work-post-scrollDown">👇🏻</div>
       
      <div className="work-post-container Rte">
        <div className="work-post-content">
          <div className="work-post-description container narrow">
          <div className="desc-info">
            <p>Company: {post.frontmatter.title}<br />
            Date: {post.frontmatter.date}<br />
            Team: {post.frontmatter.team}</p>
          </div>
          <div className="desc-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <div className="demoVideo">
            {coverVideo}
          </div>
        </div>
        <div className="work-post-footer container">
          <div className="website-btn">
            <Button external="true" href={`https://www.${post.frontmatter.url}`} inlineicon="right">{post.frontmatter.url} <span>&#8599;</span></Button>
          </div>
        </div>
        <div className="work-post-footer-cta container">
          <div className="work-post-title centered-title preload">
            <h2 className="h1 title">{post.frontmatter.title}</h2>
          </div>
        </div>
      </div>
      <div className="work-post-nav container">
        {
            previous &&
            <Button className="prev-btn" size="small" to={previous.fields.slug} rel="prev">
              <span>&larr;</span>  Prev: {previous.frontmatter.title}
            </Button>
          }
          {
            next &&
            <Button className="next-btn" size="small" to={next.fields.slug} rel="next">
              Next: {next.frontmatter.title} <span>&rarr;</span>
            </Button>
          }
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
