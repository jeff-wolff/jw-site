import React from 'react'
import styled, {injectGlobal} from 'styled-components'
import { Link } from 'gatsby'
import classNames from 'classnames';

import '../fonts/fonts.css'
import './layout.css'

import '../utils/ie11-polyfill.js'

import Header from './Header/header.js'
import Footer from './Footer/footer.js'

injectGlobal`
  :root {
    --bg: #111;
    --bg-faded: #222;
    --primary: rgb(255,255,0);
    --primary-faded: rgba(255,255,0,.87);
    --secondary: #000;
    --secondary-faded: #333;
    --window: 255,255,255;
  }
  p {
    color: rgba(255,255,255,.68);
  }
  a {
      color: #ff0;
      color:  var(--primary);
      text-decoration: none;
      box-shadow:  0 .1em 0 #ff0;
      box-shadow:  0 .1em 0 var(--primary);
      transition: all 125ms ease;
      outline: 0 solid rgba(0,0,0,0);
  }
  a:hover {
      padding: .12em 0 0;
      background: rgba(255, 255, 0, 0.87);
      background: var(--primary-faded);
      color: #333;
      color:  var(--secondary-faded);
      box-shadow: none;
      text-decoration: none;
  }
  a:active {
      position: relative;
      top: 1px;
  }
  .wrapper {
    // background-color: #111;
    // background-color: var(--bg);
  }
  .gatsby-wrap {
    background: #111;
    background: var(--bg);
  }
  .header {
    background-color: #111;
    background-color: var(--bg);
  }
  .navigation > a {
    color: rgba(255,255,255,.8);
    &:hover {
      color: #fff;
    }
  }
  .blog-post-container a {
    color: var(--bg);
    box-shadow:  0 .1em 0 var(--bg);
  }
`;



class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    let footer
    let innerHeader

    if (location.pathname === rootPath) {
      innerHeader = (
        <Header />
      )
      footer = (
        <Footer />
      )
    } else {
      header = (
        <Header />
      )
      footer = (
        <Footer />
      )
    }
    return (
      <div className="gatsby-wrap">
        {header}
        <div className="wrapper">
        {innerHeader}
        {children}
        </div>
        {footer}
      </div>
    )
  }
}

export default Template
