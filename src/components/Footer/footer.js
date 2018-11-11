import React from 'react'
import Button from '../Button/button.js'

import './footer.css'

const Footer = ({}) => (
  <footer>
     <div className="container">
          <Button to="/work/" inlineicon="right"><span>💼</span> Work</Button>
         <Button external="true" href="mailto:hello@jeffwolff.net" inlineicon="right">Contact <span>📧</span></Button>
             
         <p>&copy; Jeff Wolff &bull; <a href="http://jeffwolff.net/v3"><small>view previous site</small></a></p>
             <div className="navigation">
         <a href="//twitter.com/jeffwolff" target="_blank">Twitter</a>  <a href="//linkedin.com/in/jrwolff/" target="_blank">LinkedIn</a>  <a href="//last.fm/user/jeffwolff" target="_blank">Last.fm</a>
             </div>
     </div>
  </footer>
)

export default Footer
