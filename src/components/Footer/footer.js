import React from 'react'
import { Link } from 'gatsby'

import './footer.css'

const Footer = ({}) => (
  <footer>
     <div className="container">
        <span className="footer-top">
          <a href="http://jeffwolff.net/v3" target="_blank">view previous site</a>
          <div className="footer-top-right">
            <Link to="/work/" size="tiny" inlineicon="left"><span>💼</span> Work</Link><Link to="/notes/" size="tiny" inlineicon="left"><span>📔</span> Notes</Link><Link external="true" href="mailto:hello@jeffwolff.net" size="tiny" inlineicon="left"><span>📫</span> Contact</Link>
          </div>
        </span>
        <div className="footer-middle">
          
            <form>
              <div>
                <label for="email" className="h2">Let me keep you posted.</label>
              </div>
              <div>
                <input type="text" id="email" placeholder="Your e-mail" />
              </div>
            </form>
        </div>
        <div className="footer-bottom">
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
