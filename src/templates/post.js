import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Button from '../components/Button/button.js'
import Window from '../components/Window/window.js'

import MediaQuery from 'react-responsive'

class PostTemplate extends React.Component {
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
  componentWillUnmount() {
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} Website - ${siteTitle}`}
        />
        <div className="container"  style={{paddingTop:'200px'}}>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </div>
      
        <div className="container">
          {
              previous &&
              <Button className="prev-btn" size="small" inlineicon="left" to={previous.fields.slug} rel="prev">
                <span>Prev:</span> {previous.frontmatter.title}
              </Button>
            }
            {
              next &&
              <Button className="next-btn" size="small" inlineicon="left"to={next.fields.slug} rel="next">
                <span>Next:</span> {next.frontmatter.title}
              </Button>
            }
        </div>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
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
