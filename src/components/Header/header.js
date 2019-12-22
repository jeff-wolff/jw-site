import React from 'react'
import Link from 'gatsby-link'

import './header.css'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link
          to="/"
          className="logo"
        >
          J<span>eff </span>W<span>olff</span>
        </Link>

        <ul className="navigation">
        { !this.props.isPortfolioPage && !this.props.isWorkPost ? 
          <li><Link to="/notes/">Notes</Link></li> : '' }
        { this.props.isWorkPost ? 
          <li><Link to="/portfolio/">Work</Link></li> : '' }
          <li><a href="mailto:hi@jeffwolff.net">Contact</a></li>
        </ul>

      </div>
    )
  }
}

export default Header
