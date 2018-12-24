import React from 'react'
import Button from '../Button/button.js'

import './footer.css'

const Footer = ({}) => (
  <footer>
     <div className="container">
        <span className="right-nav">
          <a href="http://jeffwolff.net/v3" target="_blank">view previous site</a>
        </span>
        <div className="local-navigation">
          <Button to="/work/" inlineicon="right"><span>💼</span> Work</Button>
          <Button to="/posts/" inlineicon="right"><span>📔</span> Posts</Button>
          <Button external="true" href="mailto:hello@jeffwolff.net" inlineicon="right"><span>📫</span> Contact</Button>
        </div>
        <div className="navigation">
            <p>&copy; Jeff Wolff</p>
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
