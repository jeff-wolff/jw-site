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
    --bg-faded: rgba(17, 17, 17, 0.8);
    --primary: rgb(255,255,0);
    --primary-faded: rgba(255,255,0,.87);
    --secondary: #000;
    --secondary-faded: #333;
    --window-border: 190,190,190;
    --window-title: 0,0,0;
  }
  html {
      box-sizing: border-box;
  }
  *, *:after, *:before {
      box-sizing: inherit;
  }
  body {
      margin: 0;
      color: rgba(255,255,255,.9);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 14px;
      line-height: 1.789474;
      background-color: #111;
      background-color: var(--bg);
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
  p {
    letter-spacing: 0.075em;
  }
  h1,.h1,h2,h3,h4,h5,h6,p {
      transform: translate3d(0, 0, 0);
      font-size: 1em;
      font-weight: normal;
      margin: 0;
  }
  h1,h2 {
      color: rgba(255,255,255,1);
      margin-top: 2.666667rem;
      margin-bottom: .666667rem;
      font-weight: bold;
  }
      
  h3,h4,h5,h6 {
      color: rgba(255,255,255,.96);
      margin-top: 2rem;
      margin-bottom: .5rem;
  }
  h1,.h1 {
      font-size: 41px;
      line-height: 1;
      letter-spacing: .025em;
  }
  @media (min-width: 320px) {
      h1,.h1 {
        font-size: calc(41px + 119 * ((100vw - 320px) / 1120));
      }
  }
  @media (min-width: 1440px) {
      h1,.h1 {
          font-size: 160px;
      }
  }
  
  h2,h3,h4,h5,h6 {
      font-family: 'IBM Plex Mono';
      font-size: 1.14285714em;
      line-height: 1.2;
      letter-spacing: .025em;
  }

  h2 {
      font-size: 1.28571429em;
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
          font-size: 33px;
      }
  }


  strong {
      color: rgba(255,255,255,.96);
  }

  figure {
      margin: 0;
  }
  figcaption {
    text-transform: uppercase;
  }
  figcaption, small {
      font-size:  12px;
  }
  @media (min-width: 1152px) {
      figcaption, small {
        font-size: calc(12px + 4 * ((100vw - 320px) / 1120));
      }
  }
  @media (min-width: 1440px) {
      figcaption, small {
        font-size: 16px;
      }
  }
  .wrapper {
      transition: 100ms ease background-color;
      min-height: 124vh;
      margin-bottom: 280px;
      margin-top: 114px;
      margin-left: auto;
      margin-right: auto;
      background-color: #111;
      background-color: var(--bg);
  }
  .wrapper.faded {
     background-color: rgba(17, 17, 17, 0.8);
     background-color: var(--bg-faded); 
  }
  @supports (position: sticky) {
      .wrapper {
          margin-top: 0;
      }
  }
  body.no-scrollbar .wrapper {
      max-width: none;
      min-height: calc(100vh - 75px);
  }
  body.no-footer .wrapper {
      max-width: none;
      margin-top: 0;
      margin-bottom: 0;
      width: 100%;
      overflow: auto;
  }
  body.wrapper-large .wrapper {
      height: 290vh;
  }
  @media (min-height: 360px) {
    body.wrapper-large .wrapper {
        height: 260vh;
    }
  }
  @media (min-height: 500px) {
    body.wrapper-large .wrapper {
        height: 190vh;
    }
  }
  @media (min-height: 741px) {
    body.wrapper-large .wrapper {
        height: 150vh;
    }
  }
  .container {
      padding-left: 4.8%;
      padding-right: 4.8%;
  }
  @media (min-width: 1440px) {
      .container {
          padding-left: 8.5%;
          padding-right: 8.5%;
      }
  }

  .vid-wrap {
    opacity: .4;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    mix-blend-mode: exclusion;
  }

  .centered-title {
      transition:  all 200ms ease;
      user-select: none;
      color: rgba(255, 255, 255, .25);
      position: sticky;
      top: 100px;
      padding-left: 4.8%;
      padding-right: 4.8%;
      margin: 0;
      text-align: center;
  }
  @media (min-width: 1152px) {
    .centered-title {
      top: 160px;
    }
  }
  .centered-title:hover {
      text-shadow: 3px 4px 0.1rem rgba(0,0,0,.35);
      color: rgba(255,255, 255, .92);
  }
  .centered-title.preload {
      z-index: 2;
      color: #fff;
      text-shadow: 3px 4px 1rem rgba(0,0,0,.35);
  }
  .work-post-title.centered-title {
    top: 280px;
  }
  @media (min-width: 1152px) {
    .work-post-title.centered-title {
      top: 380px;
      padding: 0 8.5%;
    }
  }
  .work-post-title h1 {
    display: inline;
  }
  .work-post-website-btn {
    position: sticky;
    top: calc(100vh - 70px - 1rem);
    width: calc(100% - 2rem);
    max-width: 320px;
    float: right;
    margin-right: 1rem;
    margin-bottom: 1rem;
    z-index: 2;
  }
  @media (min-width: 1152px) {
    .work-post-website-btn {
      top: calc(100vh - 88px - 2rem);
      max-width: 480px;
      width: calc(100% - 4rem);
      margin-right: 2rem;
      margin-bottom: 2rem;
    }
  }
  .work-post-container {
    margin-top: 120vh;
  }

  video {
    max-width: 100%;
  }
`;



class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const workPath = `${__PATH_PREFIX__}/work/`
    let header
    let footer
    let innerHeader

    if (location.pathname === workPath) {
      header = (
        <Header isWorkPage={true} />
      )
    } else {
      header = (
        <Header  />
      )
    }
    footer = (
      <Footer />
    )
    return (
      <div>
        <div className="wrapper">
        {header}
        {children}
        </div>
        {footer}
      </div>
    )
  }
}

export default Template
