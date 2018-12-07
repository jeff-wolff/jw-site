import React from 'react'
import Link from 'gatsby-link'
import Button from '../Button/button.js'
import styled from 'styled-components'

import './header.css'


class Header extends React.Component {
  render() {
    let navigation;
    if (this.props.isWorkPage) {
      navigation = "";
    } else {
      navigation = <div className="navigation">
                     <Link to="/work/" tiny>Work</Link>
                   </div>;
    }
    return (
      <div className="header">
        <Link
          to="/"
          className="logo"
          style={{
            color: '#fff',
          }}
        >
          <span>Je</span>ff<span> Wol</span>ff
        </Link>

        {navigation}

      </div>
    )
  }
}

export default Header
