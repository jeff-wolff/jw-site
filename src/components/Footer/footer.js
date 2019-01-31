import React from 'react'
import { Link } from 'gatsby'

import './footer.css'

const Footer = ({}) => (
  <footer>
     <div className="container">
        <div className="footer-top">
          <div className="footer-top-left">
            <a href="http://jeffwolff.net/time_machine.html" target="_blank" className="rewind">⏪</a>
          </div>
          <div className="footer-top-right">
            <Link to="/work/"><span>💼</span> Work</Link>
            <Link to="/notes/"><span>📔</span> Notes</Link>
            <a href="mailto:hi@jeffwolff.net"><span>✉️</span> Contact</a>
          </div>
        </div>
        <div className="footer-middle">
          <form action="https://jeffwolff.us14.list-manage.com/subscribe/post?u=6949907028cc1a50c6174c10d&amp;id=f07f2fd12a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
            <div>
              <label htmlFor="mce-EMAIL" className="h2">Let me keep you updated.</label>
            </div>
            <div>
              <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="Your e-mail" />
              <button type="submit" name="subscribe" id="mc-embedded-subscribe">&rarr;</button>
            </div>
          </form>
        </div>
        <div className="footer-bottom">
            <p>&copy; Jeff Wolff</p>
            <div className="menu">
                <a href="//last.fm/user/jeffwolff" target="_blank">Last.fm</a>
                <a href="//linkedin.com/in/jrwolff/" target="_blank">LinkedIn</a>
                <a href="//twitter.com/jeffwolff" target="_blank">Twitter</a>
             </div>
        </div>
     </div>
  </footer>
)

export default Footer
