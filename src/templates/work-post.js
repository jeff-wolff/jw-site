import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Theme from '../components/Theme/theme.js'

import './work-post.css';

import Typist from 'react-typist';
import Img from 'gatsby-image'
import Button from '../components/Button/button.js'
import BlankWindow from '../components/BlankWindow/blank-window.js'
import MediaQuery from 'react-responsive'

class WorkPostTemplate extends React.Component {

  centerWorkTitle() {
    let workTitle = document.getElementById('workTitle');
    let clientHeight = workTitle.clientHeight;
    workTitle.style.top = "calc(50% - "+clientHeight/2+"px)";
  }

  componentDidMount() {
    this.centerWorkTitle();
  }

  onHeaderTyped() {
    let titleWrap = document.getElementsByClassName('work-post-title-wrap')[0];
    let btn = document.getElementsByClassName('website-btn')[0];
    
    setTimeout(function() {
      // Change zindex
      titleWrap.classList.remove('preload');
      // Show website-btn transition
      btn.style.visibility = "initial"
      if (btn) btn.classList.remove('faded');
    },500);

  }

  setTheme() {
    const post = this.props.data.markdownRemark
    let theme = ""
    if (post.frontmatter.theme) {
      theme = <Theme textColor={'rgba(255,255,255,.96)'} bg={post.frontmatter.tbg} bgFaded={post.frontmatter.tbgf} primary={post.frontmatter.tp} primaryFaded={post.frontmatter.tpf} secondary={post.frontmatter.ts} secondaryFaded={post.frontmatter.tsf} windowBorder={post.frontmatter.twb} windowTitle={post.frontmatter.twt} footerBg={post.frontmatter.tfbg} />
    } else {
      theme = <Theme />
    }
    return theme
  }

  render() {
    const { previous, next } = this.props.pageContext
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const theme = this.setTheme();
    const post = this.props.data.markdownRemark
    const postTitle = post.frontmatter.title
    const postDescription = post.excerpt
    const postWebsiteUrl = post.frontmatter.url
    let coverVideo = "", lifestyleShot = "", demoVideoDesktop = "", demoVideoTablet = "", demoVideoPhone = ""
    // Define media
    if (post.frontmatter.featuredVideo != null) {
     coverVideo = <video src={post.frontmatter.featuredVideo.publicURL} autoPlay muted loop playsInline style={{opacity: 0.2}} />;
    }
    if (post.frontmatter.demoVideoDesktop != null) {
     demoVideoDesktop = <video src={post.frontmatter.demoVideoDesktop.publicURL} autoPlay muted loop playsInline />;
    }
    if (post.frontmatter.demoVideoTablet != null) {
     demoVideoTablet = <video src={post.frontmatter.demoVideoTablet.publicURL} autoPlay muted loop playsInline />;
    }
    if (post.frontmatter.demoVideoPhone != null) {
     demoVideoPhone = <video src={post.frontmatter.demoVideoPhone.publicURL} autoPlay muted loop playsInline />;
    }
    if (post.frontmatter.lifestyleShot != null) {
      lifestyleShot = <Img sizes={post.frontmatter.lifestyleShot.childImageSharp.sizes} />;
    }

    return (
      <Layout location={this.props.location}>
        {theme}
        <Helmet
          title={`${postTitle} Website - ${siteTitle}`}>
          <meta name="description" content={postDescription} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@jeffwolff" />
          <meta property="og:url" content={`${this.props.data.site.siteMetadata.siteUrl}${this.props.location.pathname}`} />
          <meta property="og:title" content={`${postTitle} Website - ${siteTitle}`} />
          <meta property="og:description" content={postDescription} />
          <meta property="og:image" content={`${this.props.data.site.siteMetadata.siteUrl}${post.frontmatter.lifestyleShot.childImageSharp.sizes.src}`} />
          <body className="wrapper-work-post"/>
        </Helmet>
        <div className="work-down-arrow">
          <p><MediaQuery query="(min-width: 1025px)">[↑] Drag & Resize Windows<br /></MediaQuery>[↓]<MediaQuery query="(min-width: 1025px)"> Read More</MediaQuery></p>
        </div>
        <div className="vid-wrap">
          {coverVideo}
          <MediaQuery query="(min-width: 1025px)">
          {demoVideoPhone ? <BlankWindow 
                  width={112.312312}
                  height={200}
                  minWidth={100}
                  maxWidth={366}
                  lockAspect={0.56325301204819277108433734939759}
                  >
                    {demoVideoPhone}
                </BlankWindow> : ''}
          {demoVideoDesktop ? <BlankWindow 
                  width={280}
                  height={157.5}
                  minWidth={280}
                  lockAspect={1.77777778}
                  >
                    {demoVideoDesktop}
                </BlankWindow> : ''}
          {demoVideoTablet ? <BlankWindow 
                  bounds='body'
                  width={192}
                  height={256}
                  minWidth={160}
                  maxWidth={440}
                  lockAspect={0.75}
                  >
                    {demoVideoTablet}
                </BlankWindow> : ''}
            </MediaQuery>
        </div>

        <div className="work-post-title-wrap post-title centered-title preload" id="workTitle">
          <h1 className="title">
            <Typist 
            startDelay={1200}
            avgTypingDelay={150}
            cursor={{
                blink: false,
                element: '_',
                hideWhenDone: true,
                hideWhenDoneDelay: 150
            }} onTypingDone={this.onHeaderTyped}>{postTitle}</Typist>
          </h1>
          <div className="website-btn faded" style={{ visibility: 'hidden' }}>
            {postWebsiteUrl ? <Button noref="true" href={`https://www.${postWebsiteUrl}`} inlineicon="right">{`www.${postWebsiteUrl}`} <span>&#8599;</span></Button> : '' }
          </div>


        </div>

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

        <figure className="work-post-lifestyle-wrap">
          {lifestyleShot}
        </figure>

      {/*  <div className="work-post-demo-wrap">
          {demoVideoDesktop ? <MediaQuery query="(min-width: 1px)" key="desktop">
              <MediaQuery query="(min-width: 1440px)">
                <BlankWindow 
                  bounds='body'
                  width={750}
                  height={421.875}
                  minWidth={359}
                  maxWidth={1280}
                  lockAspect={1.7902097902097902097902097902098}
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
                  minWidth={300}
                  maxWidth={1000}
                  lockAspect={1.77777778}
                  yOffset={100}
                  xOffset={10}
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
                  maxWidth={768}
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
                  minWidth={200}
                  maxWidth={540}
                  lockAspect={0.75}
                  xOffset={20}
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
                  maxWidth={440}
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
                  yOffset={0}
                  xOffset={0}
                  >
                    {demoVideoPhone}
                </BlankWindow>
              </MediaQuery>
              <MediaQuery query="(min-width: 768px) and (max-width: 1439px)">
                <BlankWindow 
                  bounds='body'
                  width={161.72972928}
                  height={288}
                  minWidth={100}
                  maxWidth={366}
                  lockAspect={0.56325301204819277108433734939759}
                  xOffset={76}
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
                  maxWidth={366}
                  lockAspect={0.56325301204819277108433734939759}
                  yOffset={400}
                  xOffset={100}
                  >
                    {demoVideoPhone}
                </BlankWindow>
              </MediaQuery>
          </MediaQuery> : ''}
        </div>*/}

        <div className="work-post-nav-wrap post-nav container">
              <div className="work-post-nav">{
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
                }</div>
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
        siteUrl
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
