import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Typist from 'react-typist';
import Button from '../components/Button/button.js'
import Window from '../components/Window/window.js'
import MediaQuery from 'react-responsive'

class PortfolioIndex extends React.Component {
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

  componentDidMount() {
    this.defaultTheme();
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const pageDescription = "A selection of websites I've made."
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    let yCount = 175;
    return (
      <Layout location={this.props.location}>
        <Helmet
          title={`Portfolio - ${siteTitle}`}
          >
          <meta name="description" content={pageDescription} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@jeffwolff" />
          <meta property="og:url" content={`${this.props.data.site.siteMetadata.siteUrl}${this.props.location.pathname}`} />
          <meta property="og:title" content={`Portfolio - ${siteTitle}`} />
          <meta property="og:description" content={pageDescription} />
          <body className="wrapper-work"/>
        </Helmet>

        <div className="index-title centered-title preload">
          <h1 className="title">
            <Typist 
            startDelay={750}
            avgTypingDelay={130}
            cursor={{
                blink: false,
                element: '_',
                hideWhenDone: true,
                hideWhenDoneDelay: 150
            }}>Work</Typist>
          </h1>
        </div>

        {posts.map(({ node: post }) => {
          const title = get(post, 'frontmatter.title') || post.fields.slug
          const windowTitle = title;
          let coverVideoURL, favIconURL;
          if (post.frontmatter.featuredVideo != null) {
            coverVideoURL = post.frontmatter.featuredVideo.publicURL;
          }
          if (post.frontmatter.favIcon != null) {
            favIconURL = post.frontmatter.favIcon.publicURL;
          }
          return (
            <MediaQuery query="(min-width: 1px)" key={post.id}>
              <MediaQuery query="(min-width: 1440px)">
                <Window 
                  title={windowTitle}
                  width={450}
                  height={275}
                  minWidth={300}
                  maxWidth={1279}
                  lockAspect={1.77777778}
                  lockAspectRatioExtraHeight={22}
                  className="work-window"
                  coverVideo={coverVideoURL}
                  favIcon={favIconURL}
                  theme={post.frontmatter.theme}
                  tbg={post.frontmatter.tbg}
                  tbgf={post.frontmatter.tbgf}
                  tp={post.frontmatter.tp}
                  tpf={post.frontmatter.tpf}
                  ts={post.frontmatter.ts}
                  tsf={post.frontmatter.tsf}
                  twb={post.frontmatter.twb}
                  twt={post.frontmatter.twt}
                  tfbg={post.frontmatter.tfbg}
                  yOffset={yCount+=4 + Math.floor(Math.random() * 100)}
                  >
                    <h2 className="h3">{post.frontmatter.title}</h2>
                    <Button size="tiny" to={post.fields.slug} className="window-button work-window-button" inlineicon="right">View Work <span>&rarr;</span></Button>
                </Window>
              </MediaQuery>
              <MediaQuery query="(min-width: 741px) and (max-width: 1439px)">
                <Window 
                  title={windowTitle}
                  width={359}
                  height={224}
                  minWidth={224}
                  lockAspect={1.77777778}
                  lockAspectRatioExtraHeight={22}
                  className="work-window"
                  coverVideo={coverVideoURL}
                  favIcon={favIconURL}
                  theme={post.frontmatter.theme}
                  tbg={post.frontmatter.tbg}
                  tbgf={post.frontmatter.tbgf}
                  tp={post.frontmatter.tp}
                  tpf={post.frontmatter.tpf}
                  ts={post.frontmatter.ts}
                  tsf={post.frontmatter.tsf}
                  twb={post.frontmatter.twb}
                  twt={post.frontmatter.twt}
                  tfbg={post.frontmatter.tfbg}
                  yOffset={yCount+=Math.floor(Math.random() * 50)}
                  >
                    <h2 className="h3">{post.frontmatter.title}</h2>
                    <Button size="tiny" to={post.fields.slug} className="window-button work-window-button" inlineicon="right">View Work 3 <span>&rarr;</span></Button>
                </Window>
              </MediaQuery>
              <MediaQuery query="(max-width: 740px)">
                <Window 
                  title={windowTitle}
                  width={267}
                  height={173}
                  minWidth={180}
                  lockAspect={1.77777778}
                  lockAspectRatioExtraHeight={22}
                  className="work-window"
                  coverVideo={coverVideoURL}
                  favIcon={favIconURL}
                  theme={post.frontmatter.theme}
                  tbg={post.frontmatter.tbg}
                  tbgf={post.frontmatter.tbgf}
                  tp={post.frontmatter.tp}
                  tpf={post.frontmatter.tpf}
                  ts={post.frontmatter.ts}
                  tsf={post.frontmatter.tsf}
                  twb={post.frontmatter.twb}
                  twt={post.frontmatter.twt}
                  tfbg={post.frontmatter.tfbg}
                  yOffset={yCount+=25}
                  >
                    <h2 className="h3">{post.frontmatter.title}</h2>
                    <Button size="tiny" to={post.fields.slug} className="window-button work-window-button" inlineicon="right">View Work <span>&rarr;</span></Button>
                </Window>
              </MediaQuery>
            </MediaQuery>
          )
        })}
      </Layout>
    )
  }
}

export default PortfolioIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC },
      filter: {frontmatter: { posttype: {eq: "work"} } }
      ){
      edges {
        node {
          excerpt(pruneLength: 50)
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            url
            favIcon {
              publicURL
            }
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
    }
  }
`
