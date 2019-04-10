import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'

import './post.css';

// import Button from '../components/Button/button.js'
// import Window from '../components/Window/window.js'

// import MediaQuery from 'react-responsive'

class PostTemplate extends React.Component {
  // fadeTitle() {
  //   if (document.querySelector('.notes-container')) {
  //     let containerTop = document.querySelector('.notes-container').getBoundingClientRect().top,
  //         containerBottom = document.querySelector('.notes-container').getBoundingClientRect().bottom,
  //         titleBottom = document.getElementById('title').getBoundingClientRect().bottom,
  //         titleTop = document.getElementById('title').getBoundingClientRect().top;

  //     if (titleBottom < containerTop || titleTop > containerBottom) {
  //        document.getElementById('title').classList.add('preload');
  //     } else {
  //        document.getElementById('title').classList.remove('preload');
  //     }
  //   }
  // }
  defaultTheme() {
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      document.documentElement.style.setProperty('--bg', '#151515');
      document.documentElement.style.setProperty('--bg-faded', '21, 21, 21');
      document.documentElement.style.setProperty('--primary', '#ff0');
      document.documentElement.style.setProperty('--primary-faded', 'rgba(255,255,0,.78)');
      document.documentElement.style.setProperty('--secondary', '#2828ef');
      document.documentElement.style.setProperty('--secondary-faded', '#1414ab');
      document.documentElement.style.setProperty('--window-border', '190,190,190');
      document.documentElement.style.setProperty('--window-title', '0,0,0');
      document.documentElement.style.setProperty('--footer-bg', '#000');
      let metaThemeColor = document.querySelector("meta[name=theme-color]");
      metaThemeColor.setAttribute("content", getComputedStyle(document.documentElement).getPropertyValue('--bg'));
  }
  theme(tc,bg,bgf,p,pf,s,sf,wb,wt,fbg) {
    document.documentElement.style.setProperty('--text-color', tc);
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
  centerTitle() {
    let title = document.getElementById('title');
    let clientHeight = title.clientHeight;
    title.style.top = "calc(50% - "+clientHeight/2+"px)";
  }
  componentDidMount() {
    const post = this.props.data.markdownRemark;
    // console.log(post.frontmatter);
    this.centerTitle();
    // this.fadeTitle();
    if (post.frontmatter.theme) {
      this.theme(post.frontmatter.ttc,post.frontmatter.tbg,post.frontmatter.tbgf,post.frontmatter.tp,post.frontmatter.tpf,post.frontmatter.ts,post.frontmatter.tsf,post.frontmatter.twb,post.frontmatter.twt,post.frontmatter.tfbg);
    } else {
      this.defaultTheme();
    }
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const postTitle = post.frontmatter.title;
    const postDescription = post.excerpt
    // const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
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
