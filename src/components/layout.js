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
    // Base
    --bg: #111;
    --bg-faded: rgba(17, 17, 17, 0.8);
    --primary: rgb(255,255,0);
    --primary-faded: rgba(255,255,0,.87);
    --secondary: #000;
    --secondary-faded: #333;
    --window-border: 190,190,190;
    --window-title: 0,0,0;
    // Rip Curl
    --bg: #962313;
    --bg-faded: rgba(150, 35, 19, 0.8);
    --primary: #00ffff;
    --primary-faded: rgba(0, 255, 255, 1);
    --secondary: #d24936;
    --secondary-faded: rgba(210, 73, 54, 0.87);
    --window-border: 31,222,222;
    --window-title: 150, 35, 19;
    // Vans
    --bg: rgb(181, 179, 179);
    --bg-faded: rgba(150, 35, 19, 0.8);
    --primary: #000;
    --primary-faded: rgba(0, 0, 0, 0.87);
    --secondary: #fff;
    --secondary-faded: rgba(255,255,255,.87);
    --window-border: 105, 103, 103;
    --window-title: 255,255,255;
    // Sunbelt
    --bg: #00401d;
    --bg-faded: rgba(0, 104, 48, 0.8);
    --primary: #ffe113;
    --primary-faded: rgba(255, 225, 19, 0.87);
    --secondary: #006830;
    --secondary-faded: #005830;
    --window-border: 255, 225, 19;
    --window-title: 0, 0, 0;
    // GoMacro
    --bg: #61503e;
    --bg-faded: rgba(0, 104, 48, 0.8);
    --primary: #fb7e26;
    --primary-faded: rgba(251, 126, 38, 0.87);
    --secondary: #fff;
    --secondary-faded: rgb(255,255,255,.87);
    --window-border: 227, 109, 24;
    --window-title: 0, 0, 0;
    // Cuker
    --bg: #252525;
    --bg-faded: rgba(37, 37, 37, 0.8);
    --primary: #fb3737;
    --primary-faded: rgba(251, 55, 55, 0.87);
    --secondary: #fff;
    --secondary-faded: #ddd;
    --window-border: 251, 55, 55;
    --window-title: 0, 0, 0;
  }
  html {
      box-sizing: border-box;
  }
  *, *:after, *:before {
      box-sizing: inherit;
  }
  body {
      margin: 0;
      color: rgba(255,255,255,.87);
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
      color:  var(--secondary);
      box-shadow: none;
      text-decoration: none;
  }
  a:active {
      position: relative;
      top: 1px;
      color: #000;
      color: var(--secondary-faded);
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
    
  }
  h1,.h1,h2,h3,.h3,h4,.h4,h5,.h5,h6,.h6,p {
      transform: translate3d(0, 0, 0);
      font-size: 1em;
      font-weight: normal;
      margin: 0;
      letter-spacing: 0.025em;
  }
  h1,.h1,h2,.h2,h3,.h3 {
      margin-top: 2.666667rem;
      margin-bottom: .666667rem;
  }
      
  h4,.h4,h5,.h5,h6,.h6 {
      color: inherit;
      margin-top: 2rem;
      margin-bottom: .5rem;
  }
  h1,.h1 {
      font-weight: bold;
      font-size: 41px;
      line-height: 1.17;
  }
  @media (min-width: 320px) {
      h1,.h1 {
        font-size: calc(41px + 95 * ((100vw - 320px) / 1120));
      }
  }
  @media (min-width: 1440px) {
      h1,.h1 {
          font-size: 136px;
      }
  }
  
  h2,.h2,h3,.h3,.h4,h4 {
      font-family: 'IBM Plex Mono';
      font-size: 1.14285714em;
      line-height: 1.5;
  }

  h2,.h2 {
      font-size: 1.28571429em;
  }
  @media (min-width: 375px) {
      h2,.h2 {
          font-size: 1.5em;
      }
  }

  @media (min-width: 375px) {
      h3,.h3 {
          font-size: 1.25em;
      }
  }

  h4,.h4 {
    color: rgba(255,255,255,.96)
  }
  @media (min-width: 375px) {
      h4,.h4 {
          font-size: 1.125em;
      }
  }

  h5,.h5,figcaption {
    text-transform: uppercase;
    font-size: .875em;
    letter-spacing: .25em;
  }

  strong {
      color: rgba(255,255,255,.96);
  }

  figure {
      margin: 0;
  }
  small {
      font-size:  12px;
  }
  @media (min-width: 1152px) {
      small {
        font-size: calc(12px + 4 * ((100vw - 320px) / 1120));
      }
  }
  @media (min-width: 1440px) {
      small {
        font-size: 16px;
      }
  }
  .wrapper {
      transition: 100ms ease background-color;
      min-height: 124vh;
      margin-bottom: 60vh;
      margin-top: 114px;
      margin-left: auto;
      margin-right: auto;
      background-color: #111;
      background-color: var(--bg);
  }
  @media (min-height: 1280px) {
      .wrapper {
        margin-bottom: 50vh;
      }
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
  @media (min-width: 1152px) {
      .container {
          padding-left: 5.6%;
          padding-right: 5.6%;
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
      display: table;
      margin: 0 auto;
      text-align: center;
      transform-style: preserve-3d;
      filter: blur(6px);
  }
  @media (min-width: 1152px) {
    .centered-title {
      top: 160px;
    }
  }
  .centered-title:hover {
      text-shadow: 0 30px 60px rgba(50,50,93,.25), 0 18px 36px rgba(0,0,0,.3);
      color: rgba(255,255, 255, .92);
      filter: blur(0);
  }
  .centered-title.preload {
      z-index: 2;
      color: #fff;
      text-shadow: 0 30px 60px rgba(50,50,93,.25), 0 18px 36px rgba(0,0,0,.3);
      filter: blur(0);
  }
  .work-post-title.centered-title {
    top: 260px;
  }
  @media (min-width: 1152px) {
    .work-post-title.centered-title {
      top: 300px;
      padding: 0 5.6%;
    }
  }
  .work-post-title h1 {
    
  }
  .work-post-website-btn {
    position: sticky;
    top: calc(100vh - 70px - 20px);
    width: calc(100% - 9.6%);
    max-width: 320px;
    float: right;
    margin-right: 4.8%;
    margin-bottom: 20px;
    z-index: 2;
  }
  @media (min-width: 1152px) {
    .work-post-website-btn {
      top: calc(100vh - 88px - 5.6%);
      max-width: 460px;
      width: calc(100% - 5.6%);
      margin-right: 5.6%;
      margin-bottom: 30px;
    }
  }
  .work-post-container {
    margin-top: 120vh;
    min-height: 240vh;
  }
  @media (min-width: 1440px) {
    .work-post-container.container {
      padding-left: 12%;
      padding-right: 12%;
    }
  }
  @media (min-width: 1920px) {
    .work-post-container.container {
      padding-left: 15%;
      padding-right: 15%;
    }
  }
  @media (min-width: 375px) {
    .work-post-container h3, .work-post-container .h3 {
      font-size: calc(1.25em + .75vw);
    }
  }
  @media (min-width: 1152px) {
    .work-post-container h3, .work-post-container .h3 {
      font-size: calc(1.25em + 1.25vw);
    }
  }
  @media (min-width: 1920px) {
    .work-post-container h3, .work-post-container .h3 {
      font-size: calc(1.25em + 1.5vw);
    }
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
