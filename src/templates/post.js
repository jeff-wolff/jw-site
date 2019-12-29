import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Theme from '../components/Theme/theme.js'

import './post.css';


class PostTemplate extends React.Component {
  centerTitle() {
    let title = document.getElementById('title');
    let clientHeight = title.clientHeight;
    title.style.top = "calc(50% - "+clientHeight/2+"px)";
  }
  setTheme() {
    const post = this.props.data.markdownRemark
    let theme = ""
    if (post.frontmatter.theme) {
      theme = <Theme textColor={post.frontmatter.ttc} bg={post.frontmatter.tbg} bgFaded={post.frontmatter.tbgf} primary={post.frontmatter.tp} primaryFaded={post.frontmatter.tpf} secondary={post.frontmatter.ts} secondaryFaded={post.frontmatter.tsf} windowBorder={post.frontmatter.twb} windowTitle={post.frontmatter.twt} footerBg={post.frontmatter.tfbg} />
    } else {
      theme = <Theme />
    }
    return theme
  }
  componentDidMount() {
    this.centerTitle();
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const postTitle = post.frontmatter.title
    const postDescription = post.excerpt
    const theme = this.setTheme();
    // const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        {theme}
        <Helmet
          title={`${postTitle} - ${siteTitle}`}>
          <meta name="description" content={postDescription} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@jeffwolff" />
          <meta property="og:url" content={`${this.props.data.site.siteMetadata.siteUrl}${this.props.location.pathname}`} />
          <meta property="og:title" content={`${postTitle} - ${siteTitle}`} />
          <meta property="og:description" content={postDescription} />
        </Helmet>
        <div className="notes-post-title post-title centered-title container preload" id="title">
          <h1 className="title"><span className="date">{post.frontmatter.date}</span>{postTitle}</h1>
        </div>
        <div className="test"></div>
        <div className="notes-container-wrap">
          <div className="Rte notes-container">
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </div>
        </div>
      {/*<div className="notes-nav post-nav container">
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
        </div>*/}
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
        siteUrl
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
        ttc
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
