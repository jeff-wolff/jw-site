import React from 'react'
import Link from 'gatsby-link'

import './header.css'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        { this.props.isWorkPost || this.props.isPortfolioPage ? 
          <Link
            to="/portfolio/"
            className="logo"
          >
            J<span>eff </span>W<span>olff</span>
          </Link>
        :
          <Link
            to="/"
            className="logo"
          >
            J<span>eff </span>W<span>olff</span>
          </Link>
        }
          
        { !this.props.isPortfolioPage && !this.props.isWorkPost ? 
        <ul className="navigation">
          <li><Link to="/notes/">Notes</Link></li>
          <li><a href="mailto:hi@jeffwolff.net">Contact</a></li>
        </ul> : '' }
        { this.props.isPortfolioPage ? 
        <ul className="navigation">
          <li><a href="/" target="_blank">Home</a></li>
          <li><Link to="/portfolio/">Portfolio</Link></li> 
          <li><a href="mailto:hi@jeffwolff.net">Contact</a></li>
        </ul> : '' }
        { this.props.isWorkPost ? 
        <ul className="navigation">
          <li><Link to="/portfolio/">Portfolio</Link></li> 
          <li><a href="mailto:hi@jeffwolff.net">Contact</a></li>
        </ul> : '' }
      </div>
    )
  }
}

export default Header
