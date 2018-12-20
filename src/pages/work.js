import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Button from '../components/Button/button.js'
import HomeInfo from '../components/HomeInfo/home-info.js'
import Window from '../components/Window/window.js'
import Media from 'react-media'

class WorkIndex extends React.Component {
  defaultTheme() {
    document.documentElement.style.setProperty('--bg', '#111');
    document.documentElement.style.setProperty('--bg-faded', 'rgba(17, 17, 17, 0.9)');
    document.documentElement.style.setProperty('--primary', 'rgb(255,255,0)');
    document.documentElement.style.setProperty('--primary-faded', 'rgba(255,255,0,.87)');
    document.documentElement.style.setProperty('--secondary', '#000');
    document.documentElement.style.setProperty('--secondary-faded', '#222');
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
          title={`Work - ${siteTitle}`}
          >
        <body className="wrapper-large"/>
        </Helmet>
        <h1 className="centered-title preload">Work</h1>
         {posts.map(({ node: post }) => {
            const title = get(post, 'frontmatter.title') || post.fields.slug
            const windowTitle = "https://www."+post.frontmatter.url+"/";
            let coverVideoURL = "";
            if (post.frontmatter.featuredVideo != null) {
              coverVideoURL = post.frontmatter.featuredVideo.publicURL;
            }
           return (
              <Media query="(min-width: 741px)" key={post.id}>
              {matches =>
                matches ? (
                  <Media query="(min-width: 1440px)">
                    {matches =>
                      matches ? (
                        <Window 
                          title={windowTitle}
                          width={640}
                          height={398}
                          minWidth={359}
                          minHeight={240}
                          maxWidth={1280}
                          maxHeight={758}
                          lockAspect={1.77777778}
                          lockAspectRatioExtraHeight={38}
                          className="work-window"
                          coverVideo={coverVideoURL}
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
                          >
                            <h2 className="h3">{post.frontmatter.title}</h2>
                            <Button tiny to={post.fields.slug} className="window-button work-window-button" inlineicon="right">View Work <span>&rarr;</span></Button>
                        </Window>
                      ) : (
                        <Window 
                          title={windowTitle}
                          width={425}
                          height={277}
                          minWidth={224}
                          minHeight={164}
                          lockAspect={1.77777778}
                          lockAspectRatioExtraHeight={38}
                          className="work-window"
                          coverVideo={coverVideoURL}
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
                          >
                            <h2 className="h3">{post.frontmatter.title}</h2>
                            <Button tiny to={post.fields.slug} className="window-button work-window-button" inlineicon="right">View Work <span>&rarr;</span></Button>
                        </Window>
                      )
                    }
                  </Media>
                ) : (
                  <Window 
                    title={windowTitle}
                    width={267}
                    height={188}
                    minWidth={180}
                    minHeight={139}
                    lockAspect={1.77777778}
                    lockAspectRatioExtraHeight={38}
                    className="work-window"
                    coverVideo={coverVideoURL}
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
                    >
                      <h2 className="h3">{post.frontmatter.title}</h2>
                      <Button tiny to={post.fields.slug} className="window-button work-window-button" inlineicon="right">View Work <span>&rarr;</span></Button>
                  </Window>
                )
              }
            </Media>
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
      </Layout>
    )
  }
}

export default WorkIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
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
