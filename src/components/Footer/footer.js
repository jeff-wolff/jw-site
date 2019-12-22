import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Button from '../Button/button.js'

import './footer.css'

class Footer extends React.Component {
  render() {
    return (
  <footer>
    <StaticQuery
      query={query}
      render={data => (
        <div className="container">
          <div className="footer-top"> </div>
          <div className="footer-middle">
            
            { this.props.isWorkPost || this.props.isPortfolioPage ? 
              <Button size="tiny" to="/portfolio/" inlineicon="right"><span><Img fixed={data.workIcon.childImageSharp.fixed} /></span> Work</Button> : '' }
            <Button size="tiny" to="/about/" inlineicon="right"><span><Img fixed={data.aboutIcon.childImageSharp.fixed} /></span> About</Button>
            <Button size="tiny" to="/notes/" inlineicon="right"><span><Img fixed={data.notesIcon.childImageSharp.fixed} /></span> Notes</Button>
            <Button size="tiny" external="true" href="mailto:hi@jeffwolff.net" inlineicon="right"><span><Img fixed={data.contactIcon.childImageSharp.fixed} /></span> Contact</Button>
          </div>
          <div className="footer-bottom">
            <div className="legal">&copy; Jeff Wolff</div>
            <div className="menu">
              <a href="//last.fm/user/jeffwolff" target="_blank" className="icon-link"><Img fixed={data.lastfmIcon.childImageSharp.fixed} alt="Last.fm" /></a>
              <a href="//linkedin.com/in/jrwolff/" target="_blank" className="icon-link"><Img fixed={data.linkedinIcon.childImageSharp.fixed} alt="LinkedIn" /></a>
              <a href="//twitter.com/jeffwolff" target="_blank" className="icon-link"><Img fixed={data.twitterIcon.childImageSharp.fixed} alt="Twitter" /></a>
              <Link to="/time-machine/" className="icon-link" title="Past Website Versions">⏪</Link>
             </div>
          </div>
        </div>
      )}
    />
  </footer>
  )}
}
export default Footer

const query = graphql`
  query {
    aboutIcon: file(relativePath: { eq: "about-icon.png" }) {
      childImageSharp {
        fixed(width: 16, height: 16) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    workIcon: file(relativePath: { eq: "work-icon.png" }) {
      childImageSharp {
        fixed(width: 16, height: 16) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    notesIcon: file(relativePath: { eq: "notes-icon.png" }) {
      childImageSharp {
        fixed(width: 16, height: 16) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    contactIcon: file(relativePath: { eq: "contact-icon.png" }) {
      childImageSharp {
        fixed(width: 16, height: 16) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    linkedinIcon: file(relativePath: { eq: "linkedin-icon.png" }) {
      childImageSharp {
        fixed(width: 14, height: 14) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    twitterIcon: file(relativePath: { eq: "twitter-icon.png" }) {
      childImageSharp {
        fixed(width: 14, height: 14) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    lastfmIcon: file(relativePath: { eq: "lastfm-icon.png" }) {
      childImageSharp {
        fixed(width: 14, height: 14) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
