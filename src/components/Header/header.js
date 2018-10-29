import React from 'react'
import Link from 'gatsby-link'
import Button from '../Button/button.js'
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
      <Button to="/work/" small>Work</Button>
    </div>
  </div>
)

export default Header
