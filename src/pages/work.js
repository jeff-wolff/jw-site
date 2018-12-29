import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Button from '../components/Button/button.js'
import HomeInfo from '../components/HomeInfo/home-info.js'
import Window from '../components/Window/window.js'
import MediaQuery from 'react-responsive'

class WorkIndex extends React.Component {
  defaultTheme() {
    document.documentElement.style.setProperty('--bg', '#252525');
    document.documentElement.style.setProperty('--bg-faded', 'rgba(51, 51, 51, 0.9)');
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
    // window.addEventListener('scroll', this.removeTitle);
  }
  componentWillUnmount() {
    // window.removeEventListener('scroll', this.removeTitle);
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
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Work - ${siteTitle}`}
          >
        <body className="wrapper-work"/>
        </Helmet>
        <div className="work-title centered-title preload">
          <h1 className=" ">Work</h1>
        </div>
         {posts.map(({ node: post }) => {
            const title = get(post, 'frontmatter.title') || post.fields.slug
            const windowTitle = "https://www."+post.frontmatter.url+"/";
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
                      width={640}
                      height={400}
                      minWidth={359}
                      minHeight={240}
                      maxWidth={1280}
                      maxHeight={758}
                      lockAspect={1.77777778}
                      lockAspectRatioExtraHeight={38}
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
                      enableResize={false}
                      >
                        <h2 className="h3">{post.frontmatter.title}</h2>
                        <Button size="tiny" to={post.fields.slug} className="window-button work-window-button" inlineicon="right">View Work <span>&rarr;</span></Button>
                    </Window>
                  </MediaQuery>
                  <MediaQuery query="(min-width: 741px) and (max-width: 1339px)">
                    <Window 
                      title={windowTitle}
                      width={425}
                      height={279}
                      minWidth={224}
                      minHeight={164}
                      lockAspect={1.77777778}
                      lockAspectRatioExtraHeight={38}
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
                      enableResize={false}
                      >
                        <h2 className="h3">{post.frontmatter.title}</h2>
                        <Button size="tiny" to={post.fields.slug} className="window-button work-window-button" inlineicon="right">View Work <span>&rarr;</span></Button>
                    </Window>
                  </MediaQuery>
                  <MediaQuery query="(max-width: 740px)">
                    <Window 
                      title={windowTitle}
                      width={267}
                      height={190}
                      minWidth={180}
                      minHeight={139}
                      lockAspect={1.77777778}
                      lockAspectRatioExtraHeight={38}
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
                      enableResize={false}
                      >
                        <h2 className="h3">{post.frontmatter.title}</h2>
                        <Button size="tiny" to={post.fields.slug} className="window-button work-window-button" inlineicon="right">View Work <span>&rarr;</span></Button>
                    </Window>
                  </MediaQuery>
              </MediaQuery>

          
  
          
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
