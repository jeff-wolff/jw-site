import React from 'react'
import Button from '../Button/button.js'

import './footer.css'

const Footer = ({}) => (
  <footer>
     <div className="container">
        <div className="local-navigation">
          <Button to="/work/" inlineicon="right"><span>💼</span> Work</Button>
          <Button external="true" href="mailto:hello@jeffwolff.net" inlineicon="right">Contact <span>📧</span></Button>
        </div>
        <div className="navigation">
            <p>&copy; Jeff Wolff &bull; <a href="http://jeffwolff.net/v3"><small>view previous site</small></a></p>
            <div className="menu">
                <a href="//twitter.com/jeffwolff" target="_blank">Twitter</a>
                <a href="//linkedin.com/in/jrwolff/" target="_blank">LinkedIn</a>
                <a href="//last.fm/user/jeffwolff" target="_blank">Last.fm</a>
             </div>
        </div>
     </div>
  </footer>
)

export default Footer
