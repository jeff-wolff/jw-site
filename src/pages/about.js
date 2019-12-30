import React from 'react'

import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Theme from '../components/Theme/theme.js'

import '../components/Window/window.css'
import './about.css'

import AboutPortraitPoster from '../assets/jeffwolff-poster-2020.jpg';
import AboutPortraitWebM from '../assets/jeffwolff-moshed-2020.webm';
import AboutPortraitMp4 from '../assets/jeffwolff-moshed-2020.mp4';
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

  componentDidMount() {
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

    const { songTitle, songArtist } = this.state;
    const lastFmProfileUrl = "https://www.last.fm/user/jeffwolff";

    return (
      <Layout location={this.props.location}>
        <Theme />
        <Helmet
          title={'Creative Website Developer | ' + siteTitle}>
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
            <figure className="profile">
              <video loop muted autoPlay playsInline poster={AboutPortraitPoster}>
                <source src={ AboutPortraitWebM } type="video/webm" />
                <source src={ AboutPortraitMp4 } type="video/mp4" />
              </video>
              <figcaption>
                Jeff&rsquo;s been crafting pixels since 2003
              </figcaption>
            </figure>
            <div className="Rte info">
              <h5>
                San Diego, CA
              </h5>
              <h1 className="title h1">Creative Website Developer</h1>
              <p>Jeff Wolff codes elegant, engaging, and easy-to-use websites with the latest HTML, CSS, and JavaScript. </p>
              <p>Currently listening to:<br /><img src={EqualizerGif} style={{ width: '10px' }} /> <a href={lastFmProfileUrl} target="_blank">{songArtist} - {songTitle}</a><br /><a href={lastFmProfileUrl} target="_blank"><small>powered by last.fm api</small></a></p>
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
      }
    }
  }
`
