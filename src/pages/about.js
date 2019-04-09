import React from 'react'

import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import './about.css'

import AboutPortraitWebM from '../assets/jeffwolff-moshed.webm';
import AboutPortraitMp4 from '../assets/jeffwolff-moshed.mp4';

class About extends React.Component {
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
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout location={this.props.location}>
        <Helmet
          meta={[{ name: 'description', content: siteDescription } ]}
          title={'About ' + siteTitle}>
          <meta name="google" content="notranslate" />
        </Helmet>

        <div className="about-me container">
          <div className="content">
            <video loop muted autoPlay playsInline className="profile">
              <source src={ AboutPortraitWebM } type="video/webm" />
              <source src={ AboutPortraitMp4 } type="video/mp4" />
            </video>
            <div className="info">
              <h2>About Jeff Wolff</h2>
              <p>I've been designing and developing digital experiences for over 10 years across a variety of industries. I believe great websites come from a constant focus on the user's experience and an intuitive UI. </p>
              <p>Some of the clients I have worked with are <Link to="/ripcurl/">Rip Curl</Link>, <Link to="/vans/">Vans</Link>, <Link to="/gomacro/">GoMacro</Link>, <Link to="/sunbelt-rentals/">Sunbelt Rentals</Link>, and <Link to="/cuker/">Cuker Agency</Link>.</p>
              <p>Also, check out <Link to="/work/">my work</Link> or <Link to="/notes/">my notes</Link>.</p>
            </div>
            {/*<form action="https://jeffwolff.us14.list-manage.com/subscribe/post?u=6949907028cc1a50c6174c10d&amp;id=f07f2fd12a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                  <div>
                    <label htmlFor="mce-EMAIL" className="h4">Let me keep you updated:</label>
                  </div>
                  <div>
                    <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="Your e-mail" />
                    <button type="submit" name="subscribe" id="mc-embedded-subscribe">&rarr;</button>
                  </div>
                </form>*/}
          </div>
        </div>
      </Layout>
    )
  }
}

export default About
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
