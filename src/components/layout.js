import React from 'react'
import {styled, injectGlobal} from 'styled-components'
// import { Link } from 'gatsby'
// import classNames from 'classnames';
import noisePNG from '../assets/noise.png'

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
    --window-title-height: 22px;
    --footer-bg: #000;
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
  @media (min-width: 320px) {
      body {
        font-size: calc(14px + 3 * ((100vw - 320px) / 1120));
      }
  }
  @media (min-width: 1440px) {
      body {
          font-size: 17px;
      }
  }
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
  a.no-style {
    box-shadow: none;
  }
  a.no-style:hover {
    padding: 0;
    background: none;
  }
  a > strong {
      color:  inherit;
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
  p {
    margin-top: 0;
    margin-bottom: 1.75rem;
  }
  ul,ol {
      margin: 0 0 1.75rem 0;
      padding: 0;
      list-style-position: outside;
  }
  ol {
  }
  @media (max-width: 767px) {
    ul, ol {
        margin-left: 1.75rem;
    }
  }
  li {
      margin-bottom: 0.875rem;
  }
  li > p {
    margin-bottom: 0.875rem
  }
  pre {
    overflow: auto;
  }
  blockquote {
    margin-left: -1.75rem;
    margin-right: 1.75rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 1.42188rem;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.75rem;
    font-size: 1.20112rem;
    line-height: 1.75rem;
    color: inherit;
    font-style: italic;
    border-left: 0.32813rem solid hsla(0,0%,0%,0.9);
    border-left-color: inherit;
    opacity: 0.8;
  }
  hr {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: calc(1.75rem - 1px);
      background: rgb(var(--window-border));
      border: none;
      height: 1px;
  }
  video {
    max-width: 100%;
  }
  .h1,h1,.h2,h2,.h3,h3,.h4,h4,.h5,h5,.h6,h6 {
      transform: translate3d(0, 0, 0);
      font-size: 1em;
      line-height: 1.25;
      font-weight: bold;
      margin: 3.5rem 0 1.75rem;
      letter-spacing: 0;
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
    font-size: 2.5rem;
  }
  h2,.h2 {
      font-size: 1.7rem;
  }
  h3,.h3 {
    font-size: 1.4427rem;
  }
  h4,.h4 {
    font-size: 1rem;
    color: var(--text-color);
  }
  h5,.h5,figcaption {
    text-transform: uppercase;
    font-size: 0.83255rem;
    letter-spacing: .25em;
  }
  h6,.h6 {
    font-size: 0.75966rem;
  }
  figure {
      margin: 0;
  }
  small {
      font-size:  11px;
  }
  .wrapper {
      transition: 100ms ease background-color;
      min-height: 100vh;
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
      min-height: 290vh;
  }
  @media (min-height: 360px) {
    body.wrapper-work .wrapper {
        min-height: 260vh;
    }
  }
  @media (min-height: 500px) {
    body.wrapper-work .wrapper {
        min-height: 230vh;
    }
  }
  @media (min-height: 768px) {
    body.wrapper-work .wrapper {
        min-height: 145vh;
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
    text-align: center;
    transform-style: preserve-3d;
    transform : translate3d(0, 0, 0);
    // user-select: none;
    color: rgba(255,255,255,.02);
    text-shadow: none;
    will-change: transform;
  }
  .centered-title.preload {
      color: #fff;
      text-shadow: 0 2px 24px rgba(21,21,21,0.05), 2px 4px 29px rgba(0,0,0,.15);
      z-index: 2;
  }
  .centered-title.index-title {
    position: sticky;
    top: 160px;
    justify-content: flex-start;
    margin-bottom: 125px;
  }
  @media (min-width: 1152px) {
    .centered-title.index-title {
      top: 220px;
    }
  }
  .post-title {
    position: sticky;
    top: 0;
    top: calc(50% - 115px);
    width: fit-content;
    margin: 0 auto 125px;
  }
  .post-title .title {
    margin-bottom: 0;
  }
  .post-title .date {
    display: block;
    font-size: 25%;
    margin-bottom: 1.75rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    text-align: left;
  }
  .work-post-scrollDown {
    font-size: 2.6em;
    z-index: 2;
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
    margin-top: 125vh;
  }
  @media (max-width: 640px) {
    .work-post-content {
      // position: relative;
      // z-index: 1;
      // background-color: var(--bg);
      // background-color: var(--footer-bg);
    }
  }
  .work-post-title {
    padding: 0 20px;
  }
  .work-post-description-wrap {
    position: relative;
    min-height: 300vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 640px) {
    .work-post-description-wrap {
      min-height: 250vw;
    }
  }
  @media (min-width: 768px) {
    .work-post-description-wrap {
      min-height: 0;
      height: 150vw;
      max-height: 1500px;
    }
  }
  .work-post-description {
    position: relative;
    z-index: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    .work-post-description {
        margin: 0 auto;
        max-width: 1024px;
    }
  }
  .work-post-description > * {
    z-index: 1;
  }
  .work-post-description-wrap:before {
    width: 100%;
    height: calc(100% + 25vh);
    content: " ";
    position: absolute;
    top: -25vh;
    left: 0;
    z-index: 3;
    background-image: linear-gradient(rgba(var(--bg-faded), 0),
                                      rgba(var(--bg-faded), 1) 30%,
                                      var(--bg) 100%);
  }
  .work-post-description p:last-child {
    margin-bottom: 0;
  }
  .work-post-description .title {
    margin-bottom: 2rem;
  }
  .work-post-description .desc-info {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 2rem;
  }
  @media (min-width: 1024px) {
    .work-post-description .desc-info {

    }
  }

  .work-post-description .desc-content {
  }
  .work-post-description .desc-content ul, 
  .work-post-description  .desc-content ol {
      margin-top: 0;
  }
  .work-post-description .desc-content {
  }
  .work-post-description .desc-info p {
    margin-right: 2rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    .work-post-description .desc-info p {
      width: calc(33.33333% - 2rem);
    }
  }

  @media (min-width: 1024px) {
    .work-post-description .desc-info p {
        width: calc(33.33333% - 2rem);
    }
    .work-post-description .desc-content {
      text-align: justify;
      max-width: 820px;
    }
  }
  @media (min-width: 1152px) {
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
    width: fit-content;
    // max-width: 429px;
    margin-top: 20px;
    word-break: break-all;
  }
  @media (min-width: 1152px) {
    .website-btn {
      margin-top: 30px;
    }
  }

  .work-post-lifestyle {
    height: 100vh;
  }
  .work-post-lifestyle img, 
  .work-post-lifestyle .gatsby-image-wrapper {
    object-fit: cover;
    height: 100%;
  }
  @media (min-width: 1024px) {
    .work-post-lifestyle {
      height: auto;
    }
  }
  .post-nav {
    z-index: 1;
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 100%;
    padding-bottom: 20px;
    height: 200vh;
    min-height: 1500px;
  }
  @media (min-width: 768px) {
    .post-nav {
      height: 150vh;
    }
  }
  @media (min-width: 1152px) {
    .post-nav {
      height: 100vh;
    }
  }
  .post-nav .next-btn,
  .post-nav .prev-btn {
    display: flex;
    width: 49%;
  }
  @media (max-width: 640px) {
    .post-nav .next-btn:only-child,
    .post-nav .prev-btn:only-child {
      width: 100%;
    }
  }
  .post-nav .next-btn {
    margin-left: auto;
  }
  @media (min-width: 640px) {
    .post-nav .next-btn,
    .post-nav .prev-btn {
      display: inline-block;
      width: auto;
    }
  }
  @media (min-width: 1440px) {
    .post-nav .next-btn,
    .post-nav .prev-btn {
        max-width: 432px;
    }
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

  @keyframes grain {
      0%, 100% {
          transform: translate(0, 0)
      }

      10% {
          transform: translate(-5%, -10%)
      }

      20% {
          transform: translate(-15%, 5%)
      }

      30% {
          transform: translate(7%, -25%)
      }

      40% {
          transform: translate(-5%, 25%)
      }

      50% {
          transform: translate(-15%, 10%)
      }

      60% {
          transform: translate(15%, 0%)
      }

      70% {
          transform: translate(0%, 15%)
      }

      80% {
          transform: translate(3%, 35%)
      }

      90% {
          transform: translate(-10%, 10%)
      }
  }

  .wrapper:after {
      transition: opacity 500ms ease;
      animation: grain 1s steps(10) infinite;
      background: url('${noisePNG}');
      content: "";
      display: block;
      height: 300%;
      left: -100%;
      position: fixed;
      top: -100%;
      width: 300%;
      z-index: 0;
      opacity: 0.6;
  }

  .wrapper.fade-noise:after {
    opacity: 0;
  }
  .wrapper.disable-noise:after {
    z-index: -201;
  }

  .about-me {
    position: relative;
    z-index: 2;
    margin-top: 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .about-me .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 20vh;
    margin-bottom: 20vh;
  }
  .about-me .profile {
    width: 100%;
    margin-bottom: 3rem;
  }
  @media (min-width: 1024px) {
    .about-me {
      flex-direction: row;
    }
    .about-me .profile {
      width: 30%;
      margin-left: 10%;
      margin-right: 10%;
      margin-bottom: 0;
    }
    .about-me .info {
      width: 40%;
      margin-right: 10%;
    }
  }
  .notes-container {
    position: relative;
    z-index: 1;
    padding: 0 30px;
    max-width:56rem;
    margin: 75vh auto 0;
  }
  @media (min-width: 768px) {
    .notes-container {
      padding-left: 60px;
      padding-right: 60px;
    }
  }
  .notes-post-title {
    text-align: left;
    margin-left: 0;
  }
  .notes-nav {
    // margin-top: 50vh;
  }
  .note-index-container {
    margin: 180px 0 0 0;
    padding-bottom: 180px;
  }
  .note-card {
    background: rgba(var(--bg-faded),.98);
    border: 1px dashed rgba(255,255,255,.5);
    padding: 2rem;
    margin: 0 auto 3.5rem;
    position: relative;
    text-align: center;
    z-index: 2; 
    width: 90%;
    max-width: 768px;
  }
  @media (min-width: 768px) {
    .note-card {
      padding: 4rem;
    }
  }
  .note-card .title {
    margin: 0 0 0.875rem;
  }
  .note-card a[class^="button"] {
    width: fit-content;
    margin: 0 auto;
  }

  /**
   * If you already use line highlighting
   */

  /* Adjust the position of the line numbers */
  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.8em;
  }

  /**
   * If you only want to use line numbering
   */

  .gatsby-highlight {
    background-color: #2d2d2d;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }

`;

class Template extends React.Component {
  throttle(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }
  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.throttle(this.trackScrolling, 50));
    const wrappedElement = document.getElementsByClassName('wrapper')[0];
    if (this.isBottom(wrappedElement)) {
      wrappedElement.classList.add('fade-noise');
      setTimeout(function(){
        wrappedElement.classList.add('disable-noise');
      },250);
    } else {
      wrappedElement.classList.remove('disable-noise','fade-noise');
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.throttle(this.trackScrolling, 50));
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementsByClassName('wrapper')[0];
    if (this.isBottom(wrappedElement)) {
      wrappedElement.classList.add('fade-noise');
      setTimeout(function(){
        wrappedElement.classList.add('disable-noise');
      },250);
    } else {
      wrappedElement.classList.remove('disable-noise','fade-noise');
    }
  };
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
