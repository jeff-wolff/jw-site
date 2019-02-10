import React from 'react'
import {styled, injectGlobal} from 'styled-components'
// import { Link } from 'gatsby'
// import classNames from 'classnames';

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
    --text-color: rgba(255,255,255,.96);
    --bg: #151515;
    --bg-faded: 21, 21, 21;
    --primary: #ff0;
    --primary-faded: rgba(255,255,0,.87);
    --secondary: #000080;
    --secondary-faded: #1414ab;
    --window-border: 190,190,190;
    --window-title: 255,255,255;
    --footer-bg: #111;
  }
  ::-moz-selection {
      background-color: var(--primary);
  }
  ::selection {
      background-color: var(--primary);
  }
  html {
      box-sizing: border-box;
  }
  *, *:after, *:before {
      box-sizing: inherit;
  }
  body {
      margin: 0;
      color: var(--text-color);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 14px;
      line-height: 1.8;
      background-color: #000;
      background-color: var(--footer-bg);
  }
  // @media (min-width: 320px) {
  //     body {
  //       font-size: calc(14px + 5 * ((100vw - 320px) / 1120));
  //     }
  // }
  // @media (min-width: 1440px) {
  //     body {
  //         font-size: 19px;
  //     }
  // }
  strong {
      color: var(--text-color);
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
      color: #212121;
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
  input, textarea, button {
    border-radius: 0;
    font-family: inherit;
    font-size: inherit;
  }
  img {
      width: 100%;
      height: auto;
  }
  ul,ol {
      margin: .5em 0;
      padding: 0 0 0 1em;
  }
  ol {
      list-style-position: inside;
      padding: 0;
  }
  li {
      margin-bottom: 1em;
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
    margin-bottom: 1.25rem;
  }
  video {
    max-width: 100%;
  }
  .h1,h1,.h2,h2,.h3,h3,.h4,h4,.h5,h5,.h6,h6 {
      transform: translate3d(0, 0, 0);
      font-size: 1em;
      line-height: 1.6;
      font-weight: normal;
      margin: 0;
      letter-spacing: 0;
  }
  .Rte h1,.Rte .h1,.Rte h2,.Rte .h2,.Rte h3,.Rte .h3 {
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
      font-size: 49px;
      line-height: 1.111;
  }
  @media (min-width: 320px) {
      h1,.h1 {
        font-size: calc(49px + 47 * ((100vw - 320px) / 1120));
      }
  }
  @media (min-width: 1440px) {
      h1,.h1 {
          font-size: 96px;
      }
  }
  .Rte h1, .Rte .h1 {
    font-size: 1.4em;
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
    color: var(--text-color);
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
  figure {
      margin: 0;
  }
  small {
      font-size:  11px;
  }
  .wrapper {
      transition: 100ms ease background-color;
      min-height: 124vh;
      margin-bottom: 82vh;
      margin-top: 114px;
      margin-left: auto;
      margin-right: auto;
      background-color: #212121;
      background-color: var(--bg);
  }
  @media (min-width: 1152px) {
      .wrapper {
        margin-bottom: 360px;
      }
  }
  @supports (position: sticky) {
      .wrapper {
          margin-top: 0;
      }
  }
  body.wrapper-work .wrapper {
      height: 290vh;
  }
  @media (min-height: 360px) {
    body.wrapper-work .wrapper {
        height: 260vh;
    }
  }
  @media (min-height: 500px) {
    body.wrapper-work .wrapper {
        height: 230vh;
    }
  }
  @media (min-height: 1024px) {
    body.wrapper-work .wrapper {
        height: 160vh;
    }
  }
  .container {
      padding-left: 6%;
      padding-right: 6%;
  }
  .vid-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .vid-wrap video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: exclusion;
  }
  .centered-title {
    transition: filter 500ms ease, color 275ms ease, opacity 500ms ease, text-shadow 275ms ease;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    transform-style: preserve-3d;
    transform : translate3d(0, 0, 0);
  }
  @media (hover: hover), (-moz-touch-enabled: 0) {
    .centered-title {
        filter: blur(.5em);
        color: rgba(255,255,255,.5);
        opacity: 0.4;
    }
    .centered-title:hover {
        text-shadow: 0 30px 60px rgba(50,50,93,.25), 0 18px 36px rgba(0,0,0,.3);
        text-shadow: 0 30px 60px rgba(50,50,93,.1), 0 18px 36px rgba(0,0,0,.05);
        color: rgba(255,255, 255, .92);
        filter: blur(0);
        opacity: .92;
    }
  }
  .centered-title.preload {
      color: #fff;
      text-shadow: 0 30px 60px rgba(50,50,93,.25), 0 18px 36px rgba(0,0,0,.3);
      text-shadow: 0 30px 60px rgba(50,50,93,.1), 0 18px 36px rgba(0,0,0,.05);
      filter: blur(0);
      z-index: 0;
      opacity: 1;
  }
  .centered-title.work-title {
    position: sticky;
    top: 0;
    justify-content: flex-start;
    padding-top: 160px;
  }
  @media (min-width: 1152px) {
    .centered-title.work-title {
      padding-top: 220px;
    }
  }
  .work-post-title {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: sticky;
    top: 0;
  }
  .work-post-scrollDown {
    font-size: 2.6em;
    z-index: 1;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 768px) {
    .work-post-scrollDown {
      font-size: 1.9em;
    }
  }
  .work-post-container {
    margin-bottom: 100vh;
  }
  .work-post-description-wrap {
    position: relative;
    min-height: 300vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 768px) {
    .work-post-description-wrap {
      min-height: 0;
      height: 125vh;
      max-height: 1024px;
    }
  }
  .work-post-description-wrap:before {
    width: 100%;
    height: 100%;
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-image: linear-gradient(rgba(var(--bg-faded), 0),
                                      rgba(var(--bg-faded), .99) 40%,
                                      var(--bg) 100%);
  }
  .work-post-description {
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .work-post-description p:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 1024px) {
    .work-post-description {
        max-width: 660px;
        width: 50%;
    }
  }
  .work-post-description .desc-info {
    display: flex;
    flex-wrap: wrap;
    max-width: fit-content;
    width: 100%;
    margin-top: 1rem;
  }
  @media (min-width: 1024px) {
    .work-post-description .desc-info {

    }
  }

  .work-post-description .desc-content {
  }
  @media (min-width: 1024px) {
    .work-post-description .desc-content {
      // max-width: 65ch;
    }
  }
  @media (min-width: 1024px) {
    .work-post-description .desc-info {

    }
  }

  .work-post-description .desc-content {
  }
  @media (min-width: 1024px) {
    .work-post-description .desc-content {
      // max-width: 65ch;
    }
  }
  .work-post-description .desc-info p {
    margin-right: 2rem;
    margin-bottom: 2rem;
  }
  .work-post-description .desc-info p:first-child {
    width: 100%;
    margin-right: 0;
  }
  @media (min-width: 1024px) {
    .work-post-description .desc-info p {
      width: calc(33.33333% - 2rem);
    }
  }
  .work-post-description .desc-info p:first-child {
      width: 100%;
      margin-right: 0;
  }
  @media (min-width: 1024px) {
    .work-post-description .desc-info p {
        width: calc(33.33333% - 2rem);
    }
    .work-post-description .desc-content {
      text-align: justify;
    }
  }
  @media (min-width: 1280px) {
    .work-post-description .desc-info {
      align-self: flex-start;
    }
    .work-post-description .desc-info p:last-child {
      margin-right: 0;
    }
  }
  .website-btn {
    margin: 0 auto;
    width: auto;
    max-width: 429px;
    margin-top: 30px;
    word-break: break-all;
  }
  @media (min-width: 768px) {
    .website-btn {
      margin-top: 50px;
    }
  }
  .work-post-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 20px;
    padding-top: 80vh;
  }
  .work-post-nav .next-btn,
  .work-post-nav .prev-btn {
    display: flex;
    width: 49%;
  }
  @media (max-width: 640px) {
    .work-post-nav .next-btn:only-child,
    .work-post-nav .prev-btn:only-child {
      width: 100%;
    }
  }
  .work-post-nav .next-btn {
    margin-left: auto;
  }
  @media (min-width: 640px) {
    .work-post-nav .next-btn,
    .work-post-nav .prev-btn {
      display: inline-block;
      width: auto;
    }
  }
  @media (min-width: 1440px) {
    .work-post-nav .next-btn,
    .work-post-nav .prev-btn {
        max-width: 432px;
    }
  }
  // .work-post-nav .prev-btn span {
  //   margin-left: -1em;
  // }
  // .work-post-nav .next-btn span {
  //   margin-right: -1em;
  // }

  .demoVideo {
    position: relative;
    z-index: 1;
  }
  .demoVideo video {
    width: 100%;
  }

  .work-post-footer-cta {
    margin-bottom: 50vh;
  }


  .show-for-mobile {
    display: none;
  }
  @media (max-width: 640px) {
    .show-for-mobile {
      display: block;
    }
  }
  .text-center {
    text-align: center;
  }

  body.error-page {
    font-family: Verdana, Helvetica, Arial, sans-serif;
    font-size: 11px;
    line-height: 1.5;
    background: #fff;
    color: #000;
    padding: 30px;
  }
  body.error-page img {
    width: auto;
  }
  body.error-page h1 {
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 1.25rem;
    margin-top: .5rem;
  }
  body.error-page h1 .icon {
    vertical-align: top;
    margin-top: -.3333rem;
    margin-right: 0.9999rem;
  }
  body.error-page ul {
    margin-left: .333rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  @media (min-width: 768px) {
    body.error-page ul {
      margin-left: 1.5rem;
    }
  }
  body.error-page li {
    margin-bottom: 0.16666rem;
  }
  body.error-page p {
    font-size: 11px;
    margin-bottom: .5rem;
  }
  body.error-page a {
    color: #f00;
    box-shadow: inset 0 -.066em 0 0 #f00;
  }
  body.error-page hr {
    margin: 1.5rem 0;
    border-color: #fff;
    border-width: 2px 0 0 0;
  }
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const workPath = `${__PATH_PREFIX__}/work/`
    let header
    let footer

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
