import React from 'react'
import { Link } from 'gatsby'
import Button from '../Button/button.js'

import './footer.css'

const Footer = ({}) => (
  <footer>
     <div className="container">
        <div className="footer-top">        </div>
        <div className="footer-middle">
          <Button size="tiny" to="/work/" inlineicon="left"><span>💼</span> Work</Button>
          <Button size="tiny" to="/notes/" inlineicon="left"><span>📔</span> Notes</Button>
          <Button size="tiny" external="true" href="mailto:hi@jeffwolff.net" inlineicon="left"><span>💌</span> Contact</Button>
          
        </div>
        <div className="footer-bottom">
            <div className="legal">&copy; Jeff Wolff</div>
            <div className="menu">
                <a href="//last.fm/user/jeffwolff" target="_blank">Last.fm</a>
                <a href="//linkedin.com/in/jrwolff/" target="_blank">LinkedIn</a>
                <a href="//twitter.com/jeffwolff" target="_blank">Twitter</a>
                <a href="http://jeffwolff.net/time_machine.html" target="_blank" className="rewind" title="Past Website Versions">⏪</a>
             </div>
        </div>
     </div>
  </footer>
)

export default Footer
