import React from 'react'

import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HomeInfo from '../components/HomeInfo/home-info.js';
import socialImage from '../assets/social-wolf.jpg';

class Index extends React.Component {
  defaultTheme() {
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    document.documentElement.style.setProperty('--bg', '#151515');
    document.documentElement.style.setProperty('--bg-faded', '33, 33, 33');
    document.documentElement.style.setProperty('--primary', 'rgb(255,255,0)');
    document.documentElement.style.setProperty('--primary-faded', 'rgba(255,255,0,.78)');
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
    const siteTagline = get(this, 'props.data.site.siteMetadata.tagline')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout location={this.props.location}>
        <Helmet
          title={siteTitle + ' - ' + siteTagline}>
          <meta name="description" content={siteDescription} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@jeffwolff" />
          <meta property="og:url" content={`${this.props.data.site.siteMetadata.siteUrl}${this.props.location.pathname}`} />
          <meta property="og:title" content={siteTitle + ' - ' + siteTagline} />
          <meta property="og:description" content={siteDescription} />
          <meta property="og:image" content={`${socialImage}`} />
          <meta name="google" content="notranslate" />
        </Helmet>
        <HomeInfo />
      </Layout>
    )
  }
}

export default Index
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        tagline
        siteUrl
      }
    }
  }
`
