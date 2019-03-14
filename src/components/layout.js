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
      margin: 0 0 1em;
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
      min-height: 260vh;
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
  @media (min-height: 768px) {
    body.wrapper-work .wrapper {
        height: 145vh;
    }
  }
  @media (min-height: 1024px) {
    body.wrapper-work .wrapper {
        // height: 160vh;
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
    // width: 100%;
    // height: 100vh;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    text-align: center;
    transform-style: preserve-3d;
    transform : translate3d(0, 0, 0);
  }
  .centered-title {
      filter: blur(.5em);
      color: rgba(255,255,255,.5);
      opacity: 0.4;
  }
  @media (hover: hover), (-moz-touch-enabled: 0) {
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
      z-index: 2;
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
    // display: flex;
    // align-items: center;
    // width: 100%;
    // height: 100vh;
    position: sticky;
    top: 0;
    top: calc(50% - 115px);
    width: fit-content;
    margin: 0 auto 60px;
  }
  @media (min-width: 768px) {
    .work-post-title.container {
      padding: 0;
    }
  }
  .work-post-title .title {
    margin-bottom: 0;
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
      height: 125vw;
      max-height: 1024px;
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
        max-width: 660px;
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
    max-width: 429px;
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
  .work-post-lifestyle img{
    object-fit: cover;
    height: 100%;
  }
  @media (min-width: 1024px) {
    .work-post-lifestyle {
      height: auto;
    }
  }
  .work-post-nav {
    z-index: 1;
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 100%;
    padding-bottom: 20px;
    height: 100vh;
    
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

  .noise-grain {
      display: block;
      overflow: hidden;
  }

  .noise-grain>* {
      z-index: -1;
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
  
  // @media (min-width: 640px) {
  //     .wrapper:after {
  //         opacity:0.6;
  //     }
  // }
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
  }
  .about-me .profile {
    
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

  .about-me form {
    margin: 12rem auto;
    max-width: none;
    width: 100%;
    padding: 50px 60px 60px;
    border: 1px solid #ff0;
    border: 1px solid var(--primary-faded);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 768px) {
    .about-me form {
      width: 75%;
    }
  }
  @media (min-width: 1024px) {
    .about-me form {
      width: 50%;
    }
  }
  .about-me label {
    color:  #ff0;
    color: var(--primary);
  }
  .about-me input,
  .about-me button {
      background: none;
      border: solid #ff0;
      border: solid var(--primary-faded);
      border-width: 0 0 1px;
      color:  #ff0;
      color: var(--primary);
      padding: 1em 0;
      outline: none;
      width: calc(100% - 48px);
      height: 48px;
      max-width: 360px;
      margin: 0;
  }
  .about-me button {
      cursor: pointer;
      padding: 0 1em;
      width:  48px;
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
        <div className="noise-grain"></div>
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
