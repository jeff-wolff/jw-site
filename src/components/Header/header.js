import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import './header.css'


const Header = () => (
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
    <div className="navigation">
      <Link to="/work/">Work</Link>
    </div>
  </div>
)

export default Header
