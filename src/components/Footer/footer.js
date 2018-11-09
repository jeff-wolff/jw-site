import React from 'react'
import Link from 'gatsby-link'

import './footer.css'

const Footer = ({}) => (
  <footer>
    <div className="navigation">
      
      <Link to="/work/"><small>view my work</small></Link>
      <h2 className="h1"><a href="mailto:hello@jeffwolff.net" target="_blank">hello@jeffwolff.net</a></h2>
      <p>&copy; Jeff Wolff &bull; <a href="http://jeffwolff.net/v3"><small>view previous site</small></a></p>
      <a href="//twitter.com/jeffwolff" target="_blank">Twitter</a>  <a href="//linkedin.com/in/jrwolff/" target="_blank">LinkedIn</a>  <a href="//last.fm/user/jeffwolff" target="_blank">Last.fm</a>
    </div>
  </footer>
)

export default Footer
