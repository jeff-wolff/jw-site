import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HomeInfo from '../components/HomeInfo/home-info.js';
import Window from '../components/Window/window.js';
// import AboutPortrait from '../assets/jeffwolff-moshed.webm';
import AboutPortrait from '../assets/jeffwolff-moshedyellow.webm';

class Index extends React.Component {
  defaultTheme() {
    document.documentElement.style.setProperty('--bg', '#151515');
    document.documentElement.style.setProperty('--bg-faded', '33, 33, 33');
    document.documentElement.style.setProperty('--primary', 'rgb(255,255,0)');
    document.documentElement.style.setProperty('--primary-faded', 'rgba(255,255,0,.87)');
    document.documentElement.style.setProperty('--secondary', '#000');
    document.documentElement.style.setProperty('--secondary-faded', '#222');
    document.documentElement.style.setProperty('--window-border', '190,190,190');
    document.documentElement.style.setProperty('--window-title', '0,0,0');
    document.documentElement.style.setProperty('--footer-bg', '#111');
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
          meta={[{ name: 'description', content: siteDescription } ]}
          title={siteTitle + ' - ' + siteTagline}>
          <meta name="google" content="notranslate" />
        </Helmet>

        <HomeInfo />
        <div className="about-me container">
            <div className="content">
              <video src={ AboutPortrait } loop muted autoPlay playsInline className="profile" />
              <div className="info">
                <h2>About Jeff Wolff</h2>
                <p>I've been designing and developing digital experiences for over 5 years across a variety of industries. I believe great websites come from a constant focus on the user's experience and an intuitive UI. </p>
                <p>Some of the clients I've worked with include Rip Curl, Vans, GoMacro, Sunbelt Rentals, and Little Giraffe.</p>
                <p>Check out <Link to="/work/">my work</Link> or <Link to="/notes/">my notes</Link>.</p>
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
