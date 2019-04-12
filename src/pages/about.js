import React from 'react'

import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Button from '../components/Button/button.js'

import '../components/Window/window.css'
import './about.css'

import AboutPortraitPoster from '../assets/jeffwolff-poster.jpg';
import AboutPortraitWebM from '../assets/jeffwolff-moshed.webm';
import AboutPortraitMp4 from '../assets/jeffwolff-moshed.mp4';
import EqualizerGif from '../assets/eq.gif';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      songTitle: null,
      songArtist: null,
      songURL: null
    }
  }
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
    fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jeffwolff&api_key=205e52324c3a9f7e346a7c34dca5e8d8&format=json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            songTitle: result.recenttracks.track[0].name,
            songArtist: result.recenttracks.track[0].artist['#text'],
            songURL: result.recenttracks.track[0].url,
          });
        },
        (error) => {
          console.log('Last.fm api error');
        }
      )
  }
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    const { songTitle, songArtist, songURL } = this.state;

    return (
      <Layout location={this.props.location}>
        <Helmet
          title={'About ' + siteTitle}>
          <meta name="description" content={siteDescription} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@jeffwolff" />
          <meta property="og:url" content={`${this.props.data.site.siteMetadata.siteUrl}${this.props.location.pathname}`} />
          <meta property="og:title" content={'About ' + siteTitle} />
          <meta property="og:description" content={siteDescription} />
          <meta property="og:image" content={`${this.props.data.site.siteMetadata.siteUrl}${AboutPortraitPoster}`} />
          <meta name="google" content="notranslate" />
        </Helmet>

        <div className="about-me container">
          <div className="content">
            <video loop muted autoPlay playsInline className="profile" poster={AboutPortraitPoster}>
              <source src={ AboutPortraitWebM } type="video/webm" />
              <source src={ AboutPortraitMp4 } type="video/mp4" />
            </video>
            <div className="info">
              <h2>About Jeff Wolff</h2>
              <p>I have been designing and developing digital experiences for brands, agencies, and start-ups for over 10 years. A &ldquo;creative developer&rdquo; at heart, my passion is creating elegant, engaging, and easy-to-use websites through well-crafted code.</p>
              <p>Some clients I have had the pleasure to work with are <Link to="/ripcurl/">Rip Curl</Link>, <Link to="/vans/">Vans</Link>, <Link to="/gomacro/">GoMacro</Link>, <Link to="/sunbelt-rentals/">Sunbelt Rentals</Link>, and <Link to="/cuker/">Cuker Agency</Link>.</p>
              <p>Currently listening to:<br /><img src={EqualizerGif} style={{ width: '10px' }} /> <a href={songURL} target="_blank">{songArtist} - {songTitle}</a><br /><a href="https://www.last.fm/user/jeffwolff" target="_blank"><small>powered by last.fm api</small></a></p>
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
        <div className="container" style={{
          minHeight: '50vh'
        }}>
          <div className="window" style={{
            maxWidth: '460px',
            margin: '0 auto'
          }}
          >
            <div className="window-title"><div className="content">Navigation</div></div>
            <div className="window-content">
              <h3>Where would you like to go next?</h3>
              <p><Button to="/work/" size="tiny">Work</Button>&nbsp;&nbsp;OR&nbsp;&nbsp;<Button to="/notes/" size="tiny">Notes</Button></p>
            </div>
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
        siteUrl
      }
    }
  }
`
