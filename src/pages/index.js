import React from 'react'

import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Theme from '../components/Theme/theme.js'
import HomeInfo from '../components/HomeInfo/home-info.js';
import socialImage from '../assets/social-wolf.jpg';

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteTagline = get(this, 'props.data.site.siteMetadata.tagline')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout location={this.props.location}>
        <Theme />
        <Helmet
          title={siteTitle + ' - ' + siteTagline}>
          <meta name="description" content={siteDescription} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@jeffwolff" />
          <meta property="og:url" content={`${this.props.data.site.siteMetadata.siteUrl}${this.props.location.pathname}`} />
          <meta property="og:title" content={siteTitle + ' - ' + siteTagline} />
          <meta property="og:description" content={siteDescription} />
          <meta property="og:image" content={`${this.props.data.site.siteMetadata.siteUrl}${socialImage}`} />
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
