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
    --bg-faded: rgba(17, 17, 17, 0.9);
    --primary: rgb(255,255,0);
    --primary-faded: rgba(255,255,0,.87);
    --secondary: #000;
    --secondary-faded: #222;
    --window-border: 190,190,190;
    --window-title: 0,0,0;
    --footer-bg: #000;
  }

  html {
      box-sizing: border-box;
  }
  *, *:after, *:before {
      box-sizing: inherit;
  }
  body {
      margin: 0;
      color: rgba(255,255,255,.96);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 14px;
      line-height: 2.3333333;
      background-color: #000;
      background-color: var(--footer-bg);
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
      box-shadow: inset 0 -.066em 0 0 #ff0;
      box-shadow: inset 0 -.066em 0 0 var(--primary);
      transition: all 125ms ease;
      outline: 0 solid rgba(0,0,0,0);
  }
  a:hover {
      padding: .12em 0 0;
      background: #ff0;
      background: var(--primary);
      color: #333;
      color:  var(--secondary);
      box-shadow: none;
      text-decoration: none;
  }
  a:active {
      position: relative;
      top: 1px;
      background: rgba(255, 255, 0, 0.87);
      background: var(--primary-faded);
      color: #000;
      color: var(--secondary-faded);
  }
  a:visited:not(:hover,:active) {
      color: var(--primary-faded);
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
    margin-top: 0;
  }
  .h1,h1,.h2,h2,.h3,h3,.h4,h4,.h5,h5,.h6,h6 {
      transform: translate3d(0, 0, 0);
      font-size: 1em;
      font-weight: normal;
      margin: 0;
      letter-spacing: 0.025em;
  }
  .Rte .h1,.Rte .h1,.Rte h2,.Rte .h2,.Rte h3,.Rte .h3 {
      margin-top: 2.666667rem;
      margin-bottom: .666667rem;
  }
      
  .Rte h4,.Rte .h4,.Rte h5,.Rte .h5,.Rte h6,.Rte .h6 {
      color: inherit;
      margin-top: 2rem;
      margin-bottom: .5rem;
  }
  h1,.h1 {
      font-weight: bold;
      font-size: 41px;
      line-height: 1.111;
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
      margin-bottom: 75vh;
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
      padding-left: 6%;
      padding-right: 6%;
  }
  @media (min-width: 1440px) {
      .container {
          padding-left: 8%;
          padding-right: 8%;
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
      transition: filter 200ms ease, color 200ms ease, text-shadow 200ms ease;
      user-select: none;
      color: rgba(255, 255, 255, .25);
      position: fixed;
      top: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      transform-style: preserve-3d;
      filter: blur(6px);
  }
  @media (min-width: 1152px) {
    .centered-title {
    }
  }
  .centered-title:hover {
      text-shadow: 0 30px 60px rgba(50,50,93,.25), 0 18px 36px rgba(0,0,0,.3);
      text-shadow: 0 30px 60px rgba(50,50,93,.1), 0 18px 36px rgba(0,0,0,.05);
      color: rgba(255,255, 255, .92);
      filter: blur(0);
  }
  .centered-title.preload {
      color: #fff;
      text-shadow: 0 30px 60px rgba(50,50,93,.25), 0 18px 36px rgba(0,0,0,.3);
      text-shadow: 0 30px 60px rgba(50,50,93,.1), 0 18px 36px rgba(0,0,0,.05);
      filter: blur(0);
      z-index: 0;
  }

  .work-post-title.centered-title {
    
  }
  @media (min-width: 1152px) {
    .work-post-title.centered-title {
      
    }
  }
  .work-post-title h1 {
    
  }
  .work-post-scrollDown {
    font-size: 2.6em;
    position: absolute;
    bottom: 1em;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 768px) {
    .work-post-scrollDown {
      font-size: 4em;
      bottom: 0;
    }
  }
  .work-post-container.container {
    margin-top: 140vh;
    min-height: 180vh;
    padding-bottom: 50px;
    position: relative;
    z-index: 1;
    padding-left: 8%;
    padding-right: 8%;
  }
  @media (min-width: 1152px) {
    .work-post-container.container {
      min-height: 200vh;
    }
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
  .work-post-description {
    display: flex;
    flex-direction: column;
    max-width: 1152px;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    .work-post-description {
      flex-direction: row;
    }
  }
  .work-post-description .desc-info {
    font-size: 12px;
    order: 1;
  }
  @media (min-width: 320px) {
    .work-post-description .desc-info {
      font-size: calc(12px + 3 * ((100vw - 320px) / 1120));
    }
  }
  @media (min-width: 1024px) {
    .work-post-description .desc-info {
      flex: 1 1 25%;
      order: 0;
    }
  }
  @media (min-width: 1440px) {
    .work-post-description .desc-info {
      font-size: 15px;
    }
  }
  .work-post-description .desc-content {
  }
  .work-post-description .desc-content p {
    margin-bottom: 2em;
  }
  @media (min-width: 1024px) {
    .work-post-description .desc-content {
      text-align: justify;
      flex: 1 1 75%;
      padding-left: 6%;
    }
  }
  .work-post-footer {
    position: sticky;
    top: calc(100vh - 69px - 50px);
    display: flex;
    justify-content: space-between;
    max-width: 1920px;
    margin: 0 auto;
  }
  @media (min-width: 1152px) {
    .work-post-footer {
      top: calc(100vh - 90px - 50px);
    }
  }
  .work-post-website-btn {
    flex: 1 1 50%;
  }
  @media (min-width: 768px) {
    .work-post-website-btn {
      max-width: 420px;
    }
  }
  .work-post-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
  @media (min-width: 768px) {
    .work-post-nav {
      width: 40%;
    }
  }
  @media (min-width: 1152px) {
    .work-post-nav {

    }
  }
  .work-post-nav a[class^="button"] {
    overflow: hidden;
    transition: all 125ms ease;
    width: 38px;
  }
  @media (min-width: 1152px) {
    .work-post-nav a[class^="button"] {
      width: 48px; 
    }
  }

  .work-post-nav a[class^="button"] > span {
    transition: all 125ms ease;
    opacity: 0;
    height: 0;
    white-space: nowrap;
  } 

  @media (hover: hover) {
    .work-post-nav a[class^="button"]:hover {
      width: 100%;
      max-width: 260px;
      height: auto;
    }
    .work-post-nav a[class^="button"]:hover > span {
      opacity: 1;
    }
  }
  
  .work-post-nav a[class^="button"][rel="prev"] {
    margin-bottom: 2px;
  }
  .work-post-nav a[class^="button"][rel="prev"]:only-child {
      margin-bottom: 29px;
  }
  .work-post-nav a[class^="button"][rel="next"] {
    margin-top: 2px;
  }
  .work-post-nav a[class^="button"][rel="next"]:only-child {
      margin-top: 29px;
  }
  @media (min-width: 1152px) {
    .work-post-nav a[class^="button"][rel="prev"]:only-child {
        margin-bottom: 37px;
    }
  }
  .demoVideo {
    max-width: 1920px;
    margin: 0 auto;
  }
  video {
    max-width: 100%;
  }
  .work-grid {

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
