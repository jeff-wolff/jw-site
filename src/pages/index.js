import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HomeInfo from '../components/HomeInfo/home-info.js';
import Window from '../components/Window/window.js';

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
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle + ' - ' + siteTagline}>
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
