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
  html {
      box-sizing: border-box;
  }
  *, *:after, *:before {
      box-sizing: inherit;
  }

  body {
      color: rgba(255,255,255,.84);
      margin: 0;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 14px;
      line-height: 1.666667;
      overscroll-behavior-y: contain;
  }

  @media (min-width: 768px) {
      body {
          font-size: 18px;
          line-height: 1.8;
      }
  }

  @media (min-width: 1152px) {
      body {
          font-size: 22px;
          line-height: 2;
      }
  }

  @media (min-width: 1440px) {
      body {
          font-size: 26px;
          line-height: 2.1;
      }
  }


  body.no-footer {
      position: fixed;
      overflow-y: hidden;
      
  }
  body.no-scrollbar::-webkit-scrollbar { width: 0 !important }
  body.no-scrollbar { -ms-overflow-style: none;  }
  body.no-scrollbar { overflow: -moz-scrollbars-none; }


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
      margin: 0 0 2em;
  }
  @media (min-width: 768px) {
   /*    h1,h2,h3,h4,h5,h6,p {
          font-size: 1r;
      } */
  }
  @media (min-width: 768px) {
      /* h1,h2,h3,h4,h5,h6 {
          font-size: 14px;
      } */
  }
  @media (min-width: 1440px) {
      /* h1,h2,h3,h4,h5,h6 {
          font-size: 15px;
      } */
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
      font-size: 1.71428571em;
      line-height: 1.06667;
      letter-spacing: 0.012em;
  }
  @media (min-width: 375px) {
      h1 {
          font-size: 2.14285714em;
      }
  }
  @media (min-width: 768px) {
      h1 {
          font-size: 2.77777778em;
      }
  }
  @media (min-width: 1440px) {
      h1 {
          font-size: 5em;
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
  /* 

  h4 {
      font-size: 14px;
      line-height: 1.25;
  }
  @media (min-width: 375px) {
      h4 {
          font-size: 15px;
      }
  }
  @media (min-width: 768px) {
      h4 {
          font-size: 16px;
      }
  }

   */


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
      overflow-x: hidden;
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
  .no-footer .wrapper {
      max-width: none;
      margin-top: 0;
      width: 100vw;
      height: calc(100vh - 52px);
      height: 100vh;
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


  .container.blog-post-container,
  .blog-post-container > h1 {
      padding-left: 7.5vw;
      padding-right: 7.5vw;
  }

  @media (min-width: 1440px) {
      .container.blog-post-container,
      .blog-post-container > h1  {
          padding-left: 10vw;
          padding-right: 10vw;
      }
  }
  .blog-post-container .blog-post {
      max-width: 52rem;
      margin: calc(90vh - 114px) auto 60px;
      position: relative;
      z-index: 2;
      color: #333;
      background: white;
      padding: calc(.01em + 16px) 6% 1rem;
  }
  @media (min-width: 768px) {
      .blog-post-container .blog-post {
          padding: calc(.01em + 40px) 80px calc(1rem + 40px);
      }
  }
  .blog-post-container strong,
  .blog-post-container h2,
  .blog-post-container h3,
  .blog-post-container h4,
  .blog-post-container h5,
  .blog-post-container h6 {
      color: rgba(0,0,0,.96);
  }
  .blog-post-container a > * { color: inherit; }
  .blog-post-container > h1 {
      transition: all 200ms ease;
      margin: 0;
      text-align: center;
      position: fixed;
      left: 50%;
      top: 50%;
      width: 100%;
      max-width: 2560px;
      transform: translate3d(-50%,-50%,0);
      z-index: 1;
  }
  .blog-post-container > h1.disabled,
  .blog-post-container:hover > h1 {
      filter: blur(4px);
      opacity: .1;
      z-index: 1;
  }
  @media (min-width: 1152px) {
      .blog-post-container > h1.disabled,
      .blog-post-container:hover > h1 {
          filter: blur(8px);
      }
  }

  /* Centered Container */
  .centered-container {
      position: sticky;
      top: 50%;
      left: 0;
      width: 100%;
      transform: translateY(-50%);
  }
  .centered-title {
      position: fixed;
      top: 50%;
      left: 50%;
      display: inline-block;
      transform: translate3d(-50%,-50%,0);
      margin: 0;
  }
  h1.centered-title {
      transition:  all 200ms ease;
      user-select: none;
      font-size: 60px;
      letter-spacing: -.03em;
      color: rgba(0, 0, 0, .24);
  }
  @media (min-width: 375px) {
      h1.centered-title {
          font-size: 72px;
      }
  }
  @media (min-width: 768px) {
      h1.centered-title {
          font-size: 100px;
      }
  }
  @media (min-width: 1024px) {
      h1.centered-title {
          font-size: 140px;
      }
  }
  @media (min-width: 1440px) {
      h1.centered-title {
          font-size: 190px; 
      }
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

  /* Home */
  .home-content {
      z-index: 3;
      position: absolute;
      bottom: 20vh;
      width: 100%;
      display: flex;
      justify-content: center;
  }
  .home-btn {
      margin: 0 10px 1rem 10px;
      user-select: none;
  }
  @media (min-width: 375px) {
      .home-btn {
          margin: 0 20px 1rem 20px;
      }
  }

  @media (min-width: 768px) {
      .home-btn {
          margin: 0 30px 1rem 30px;
      }
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
