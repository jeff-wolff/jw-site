import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Img from 'gatsby-image'

import Layout from '../components/layout'
import Button from '../components/Button/button.js'
import BlankWindow from '../components/BlankWindow/blank-window.js'
import MediaQuery from 'react-responsive'

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

  centerWorkTitle() {
    let workTitle = document.getElementById('workTitle');
    let clientHeight = workTitle.clientHeight;
    workTitle.style.top = "calc(50% - "+clientHeight/2+"px)";
  }

  componentDidMount() {
    const post = this.props.data.markdownRemark
    console.log(post.frontmatter);
    this.centerWorkTitle();
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
    const siteURL = post.frontmatter.url
    let coverVideo, lifestyleShot, demoVideoDesktop, demoVideoTablet, demoVideoPhone;
    if (post.frontmatter.featuredVideo != null) {
     coverVideo = <video src={post.frontmatter.featuredVideo.publicURL} autoPlay muted loop playsInline />;
    } else {
     coverVideo = "";
    }
    if (post.frontmatter.demoVideoDesktop != null) {
     demoVideoDesktop = <video src={post.frontmatter.demoVideoDesktop.publicURL} autoPlay muted loop playsInline />;
    } else {
     demoVideoDesktop = "";
    }
    if (post.frontmatter.demoVideoTablet != null) {
     demoVideoTablet = <video src={post.frontmatter.demoVideoTablet.publicURL} autoPlay muted loop playsInline />;
    } else {
     demoVideoTablet = "";
    }
    if (post.frontmatter.demoVideoPhone != null) {
     demoVideoPhone = <video src={post.frontmatter.demoVideoPhone.publicURL} autoPlay muted loop playsInline />;
    } else {
     demoVideoPhone = "";
    }

    if (post.frontmatter.lifestyleShot != null) {
      lifestyleShot = <Img sizes={post.frontmatter.lifestyleShot.childImageSharp.sizes} />;
    } else {
      lifestyleShot= ""
    }

    return (
      <Layout location={this.props.location}>
        <Helmet
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} Website - ${siteTitle}`}
        />

        <div className="vid-wrap" style={{opacity: 0.4}}>{coverVideo}</div>

        <div id="workTitle" className="post-title centered-title preload work-post-title">
          <h1 className="title">{post.frontmatter.title}</h1>
          <div className="website-btn">
            <Button external="true" href={`https://www.${post.frontmatter.url}`} inlineicon="right">www.{post.frontmatter.url} <span>&#8599;</span></Button>
          </div>
        </div>

        <div className="work-post-scrollDown">👇🏻</div>

        <div className="work-post-container">
          <div className="work-post-content">
            <div className="work-post-description-wrap container">
              <div className="work-post-description">
                <h2 className="title">{post.frontmatter.description}</h2>
                <h2 className="h3">Key Points:</h2>
                <div className="desc-content" dangerouslySetInnerHTML={{ __html: post.html }} />
                <div className="desc-info">
                  <p>DATE LAUNCHED<br />{post.frontmatter.date}</p>
                  <p>AGENCY<br />{post.frontmatter.team}</p>
                  <p>ROLE<br />Web Developer</p>
                </div>
              </div>


            </div>
            <figure className="work-post-lifestyle">
              {lifestyleShot}
            </figure>
          </div>
        </div>

        <div className="post-nav container">

        {demoVideoDesktop ? <MediaQuery query="(min-width: 1px)" key="desktop">
            <MediaQuery query="(min-width: 1440px)">
              <BlankWindow 
                bounds='body'
                width={750}
                height={421.875}
                minWidth={359}
                maxWidth={1280}
                lockAspect={1.77777778}
                xOffset={45}
                >
                  {demoVideoDesktop}
              </BlankWindow>
            </MediaQuery>
            <MediaQuery query="(min-width: 768px) and (max-width: 1439px)">
              <BlankWindow 
                bounds='body'
                width={540}
                height={303.75}
                minWidth={224}
                lockAspect={1.77777778}
                yOffset={100}
                xOffset={100}
                >
                  {demoVideoDesktop}
              </BlankWindow>
            </MediaQuery>
            <MediaQuery query="(max-width: 767px)">
              <BlankWindow 
                bounds='body'
                width={280}
                height={157.5}
                minWidth={280}
                lockAspect={1.77777778}
                yOffset={150}
                xOffset={20}
                >
                  {demoVideoDesktop}
              </BlankWindow>
            </MediaQuery>
        </MediaQuery>: ''}
        
        {demoVideoTablet ? <MediaQuery query="(min-width: 1px)" key="tablet">
            <MediaQuery query="(min-width: 1440px)">
              <BlankWindow 
                bounds='body'
                width={384}
                height={512}
                minWidth={320}
                maxWidth={1280}
                lockAspect={0.75}
                xOffset={921}
                >
                  {demoVideoTablet}
              </BlankWindow>
            </MediaQuery>
            <MediaQuery query="(min-width: 768px) and (max-width: 1439px)">
              <BlankWindow 
                bounds='body'
                width={288}
                height={384}
                minWidth={240}
                lockAspect={0.75}
                xOffset={400}
                yOffset={240}
                >
                  {demoVideoTablet}
              </BlankWindow>
            </MediaQuery>
            <MediaQuery query="(max-width: 767px)">
              <BlankWindow 
                bounds='body'
                width={192}
                height={256}
                minWidth={160}
                lockAspect={0.75}
                yOffset={550}
                xOffset={10}
                >
                  {demoVideoTablet}
              </BlankWindow>
            </MediaQuery>
        </MediaQuery>: '' }
        
        {demoVideoPhone ? <MediaQuery query="(min-width: 1px)" key="phone">
            <MediaQuery query="(min-width: 1440px)">
              <BlankWindow 
                bounds='body'
                width={202.1622}
                height={360}
                minWidth={160}
                maxWidth={366}
                lockAspect={0.56325301204819277108433734939759}
                yOffset={100}
                xOffset={750}
                >
                  {demoVideoPhone}
              </BlankWindow>
            </MediaQuery>
            <MediaQuery query="(min-width: 768px) and (max-width: 1439px)">
              <BlankWindow 
                bounds='body'
                width={161.72972928}
                height={288}
                minWidth={140}
                lockAspect={0.56325301204819277108433734939759}
                xOffset={370}
                yOffset={555}
                >
                  {demoVideoPhone}
              </BlankWindow>
            </MediaQuery>
            <MediaQuery query="(max-width: 767px)">
              <BlankWindow 
                bounds='body'
                width={112.312312}
                height={200}
                minWidth={100}
                lockAspect={0.56325301204819277108433734939759}
                yOffset={950}
                xOffset={100}
                >
                  {demoVideoPhone}
              </BlankWindow>
            </MediaQuery>
        </MediaQuery> : ''}
        
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

export default WorkPostTemplate

export const pageQuery = graphql`
  query WorkPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(
    fields: { slug: { eq: $slug } }
    ) {
      id
      excerpt
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        team
        url
        featuredVideo {
          publicURL
        }
        lifestyleShot {
          childImageSharp {
            sizes(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        demoVideoDesktop {
          publicURL
        }
        demoVideoTablet {
          publicURL
        }
        demoVideoPhone {
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
