import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HomeInfo from '../components/HomeInfo/home-info.js';
import Window from '../components/Window/window.js';

class Index extends React.Component {
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
    const siteTagline = get(this, 'props.data.site.siteMetadata.tagline')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout location={this.props.location}>
        <Helmet
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle + ' - ' + siteTagline}>
          <meta http-equiv="Content-Language" content="en_US" />
        </Helmet>
        <HomeInfo />
        <div className="container">
          <h1 className="home-logo">Jeff Wolff_</h1>
        </div>
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
      }
    }
  }
`
