import React from 'react'
import styled, {injectGlobal} from 'styled-components'
import { Link } from 'gatsby'
import classNames from 'classnames';

// import '../fonts/_fonts.css';
// import './layout.css'
import * as fonts from '../fonts/fonts.js'

import '../utils/ie11-polyfill.js'

import Header from './Header/header.js'
import Footer from './Footer/footer.js'

injectGlobal`
  @font-face {
    font-family: 'IBM Plex Mono';
    src: url('${fonts.IBMPlexMonoWoff2}') format('woff2'),
      url('${fonts.IBMPlexMono}') format('woff');
  }
  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    src: url('${fonts.IBMPlexMonoItalicWoff2}') format('woff2'),
      url('${fonts.IBMPlexMonoItalic}') format('woff');
  }
  @font-face {
    font-family: 'IBM Plex Mono';
    font-weight: bold;
    src: url('${fonts.IBMPlexMonoBoldWoff2}') format('woff2'),
      url('${fonts.IBMPlexMonoBold}') format('woff');
  }
  @font-face {
    font-family: 'IBM Plex Mono';
    font-weight: bold;
    font-style: italic;
    src: url('${fonts.IBMPlexMonoBoldItalicWoff2}') format('woff2'),
      url('${fonts.IBMPlexMonoBoldItalic}') format('woff');
  }
  :root {
    --bg: #111;
    --bg-faded: #222;
    --primary: rgb(255,255,0);
    --primary-faded: rgba(255,255,0,.87);
    --secondary: #000;
    --secondary-faded: #333;
    --window: 255,255,255;
  }
  .gatsby-wrap {
    background: #111;
    background: var(--bg);
  }
  .blog-post-container a {
    color: var(--bg);
    box-shadow:  0 .1em 0 var(--bg);
  }
  html {
      box-sizing: border-box;
  }
  *, *:after, *:before {
      box-sizing: inherit;
  }

  body {
      margin: 0;
      color: rgba(255,255,255,.88);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 14px;
      line-height: 1.789474;
  }
  @media (min-width: 320px) {
      body {
        font-size: calc(14px + 5 * ((100vw - 320px) / 1120));
      }
  }
  @media (min-width: 1440px) {
      body {
          font-size: 19px;
      }
  }

  body.no-footer {
    
  }
  body.no-footer footer {
    display: none;
  }
  body.no-scrollbar::-webkit-scrollbar { width: 0 !important }
  body.no-scrollbar { -ms-overflow-style: none;  }
  body.no-scrollbar { overflow: -moz-scrollbars-none; }
  body.react-draggable-transparent-selection {

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

  img {
      width: 100%;
      height: auto;
  }
  ul,ol {
      margin: 2em 0;
      padding: 0 0 0 1em;
  }
  ol {
      list-style-position: inside;
      padding: 0;
  }
  li {
      margin-bottom: .25em;
      font-size: 1em;
  }
  li > * {
      font-size: 1em;
  }


  a > strong {
      color:  inherit;
  }

  h1,h2,h3,h4,h5,h6,p {
      transform: translate3d(0, 0, 0);
      font-size: 1em;
      font-weight: normal;
      margin: 0 0 2em;
  }
  h1,h2,h3,h4,h5,h6 {
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: -0.025em;
      letter-spacing: 0.024em;
  }


  h1,h2 {
      color: rgba(255,255,255,1);
      margin-top: 2.666667rem;
      margin-bottom: .666667rem;
  }
  h3,h4,h5,h6 {
      color: rgba(255,255,255,.96);
      margin-top: 2rem;
      margin-bottom: .5rem;
  }



  h1 {
      font-size: 41px;
      line-height: 1;
      letter-spacing: .1em;
  }
  @media (min-width: 320px) {
      h1 {
        font-size: calc(41px + 63 * ((100vw - 320px) / 1120));
      }
  }
  @media (min-width: 1440px) {
      h1 {
          font-size: 104px;
      }
  }

  h2 {
      font-size: 1.28571429em;
      line-height: 1.25;
  }
  @media (min-width: 375px) {
      h2 {
          font-size: 1.5em;
      }
  }
  @media (min-width: 768px) {
      h2 {
          font-size: 2.66666667em;
      }
  }
  @media (min-width: 1440px) {
      h2 {
          font-size: 2.88888889em;
      }
  }

  h3,h4,h5,h6 {
      font-family: 'IBM Plex Mono';
      font-size: 1.14285714em;
      line-height: 1.25;
  }
  @media (min-width: 375px) {
      h3 {
          font-size: 1.28571429em;
      }
  }
  @media (min-width: 768px) {
      h3 {
          font-size: 1em;
      }
  }
  @media (min-width: 1440px) {
      h3 {
          font-size: 1em;
      }
  }


  strong {
      color: rgba(255,255,255,.96);
  }

  figure {
      margin: 0;
  }
  figcaption, small {
      font-size:  10px;
  }


  .wrapper {
      min-height: 100vh;
      max-width: 1920px;
      margin-bottom: 42vh;
      margin-top: 114px;
      margin-left: auto;
      margin-right: auto;
  }
  @supports (position: sticky) {
      .wrapper {
          margin-top: 0;
      }
  }
  .no-scrollbar .wrapper {
      max-width: none;
      min-height: calc(100vh - 75px);
  }
  .no-footer .wrapper {
      max-width: none;
      margin-top: 0;
      margin-bottom: 0;
      width: 100%;
      height: 120vh;
  }
  .container {
      padding-left: 4.8%;
      padding-right: 4.8%;
  }
  @media (min-width: 1152px) {
      .container {
          padding-left: 8.5%;
          padding-right: 8.5%;
      }
  }

  h1.centered-title {
      transition:  all 200ms ease;
      user-select: none;
      color: rgba(0, 0, 0, .24);
  }
  h1.centered-title:hover {
      text-shadow: 3px 4px 0.1rem rgba(0,0,0,.35);
      color: rgba(255,255, 255, .92);
  }
  h1.centered-title.preload {
      z-index: 2;
      color: #fff;
      text-shadow: 3px 4px 1rem rgba(0,0,0,.35);
  }

`;



class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/work/`
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
