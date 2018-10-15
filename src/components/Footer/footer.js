import React from 'react'
import Link from 'gatsby-link'

import './footer.css'

const Footer = ({}) => (
  <footer>
    <div className="navigation">
      <Link to="/work/">Work</Link>  <Link to="/posts/">Posts</Link>
    </div>
  </footer>
)

export default Footer
