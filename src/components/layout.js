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
    --bg: #151515;
    --bg-faded: 33, 33, 33;
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
      color: rgba(255,255,255,.96);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 14px;
      line-height: 1.6;
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
      margin: 2em 0;
      padding: 0 0 0 1em;
  }
  ol {
      list-style-position: inside;
      padding: 0;
  }
  li {
      margin-bottom: .5em;
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
      font-size:  11px;
  }
  // @media (min-width: 1152px) {
  //     small {
  //       font-size: calc(12px + 4 * ((100vw - 320px) / 1120));
  //     }
  // }
  // @media (min-width: 1440px) {
  //     small {
  //       font-size: 16px;
  //     }
  // }
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
  html.spazz .wrapper,
  html.spazz footer {
    animation: spazz 10s steps(1) infinite;
  }
  html.spazz2 .wrapper,
  html.spazz2 footer {
    animation: spazz 6s steps(1) infinite;
  }
  html.spazz3 .wrapper,
  html.spazz3 footer {
    animation: spazz 2s steps(1) infinite;
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
    opacity: .4;
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
      // user-select: none;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      transform-style: preserve-3d;
      transform : translate3d(0, 0, 0);

  }
  @media (hover: hover) {
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

  .work-title.centered-title {
    position: sticky;
    top: 0;
    justify-content: flex-start;
    padding-top: 160px;
  }
  @media (min-width: 1152px) {
    .work-title.centered-title {
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
  @media (min-width: 768px) {
    .work-post-title .title {
      
    }
  }
  @media (min-width: 1280px) {
    .work-post-title .title {
      
    }
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
  .work-post-content {
  }
  .work-post-description-wrap {
    position: relative;
    min-height: 150vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
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
  @media (min-width: 768px) {
    .work-post-description {
        
    }
    .work-post-description:before {

    }
  }
  @media (min-width: 1024px) {
    .work-post-description {
        flex-direction: row;
    }
  }
  .work-post-description .desc-info {
    display: flex;
    flex-wrap: wrap;    
    font-size: 78.5714%;
    max-width: fit-content;
    width: 100%;
    margin-bottom: 1rem;
  }
  @media (min-width: 1024px) {
    .work-post-description .desc-info {
      align-self: center;
      width: 66.6667%;
      // margin-right: 6rem;
      margin-bottom: 0;
    }
  }

  .work-post-description .desc-content {
  }
  @media (min-width: 1024px) {
    .work-post-description .desc-content {
      max-width: 65ch;
    }
  }
  .work-post-description .desc-info p {
    margin-right: 4rem;
    margin-bottom: 2rem;
  }
  @media (min-width: 1024px) {
    .work-post-description .desc-info p {
        width: auto;
    }
    .work-post-description .desc-content {
      text-align: justify;
    }
  }
  @media (min-width: 1280px) {
    .work-post-description .desc-info {
      align-self: flex-start;
      margin-right: 2rem;
    }
    .work-post-description .desc-info p:last-child {
      margin-right: 0;
    }
  }
  @media (min-width: 1440px) {
    .work-post-description .desc-info {
      margin-right: 6rem;
    }
  }
  @media (min-width: 1600px) {
    .work-post-description .desc-info {
      margin-right: 9rem;
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
  @media (min-width: 1152px) {
    .website-btn {
      
    }
  }
  @media (min-width: 1440px) {
    .website-btn {
      
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
    justify-content: center;
    max-width: 349px;
    width: calc(50% - 3%);
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
  @media (min-width: 1920px) {
    .work-post-nav .next-btn,
    .work-post-nav .prev-btn {
      
    }
  }
 
  .work-post-nav .prev-btn span {
    margin-left: -1em;
  }
  
  .work-post-nav .next-btn span {
    margin-right: -1em;
  }

  .demoVideo { 
    z-index: 1;
    position: relative;
  }
  .demoVideo video {
    width: 100%;
  }
  @media (min-width: 1024px) {
    .demoVideo {
      
    }
  }
  @media (min-width: 1920px) {
    .demoVideo {
    }
  }

  video {
    max-width: 100%;
  }
  .work-grid {

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

  @keyframes spazz {
    0% {
      -webkit-filter:  hue-rotate(334.8deg);
              filter:  hue-rotate(334.8deg);
      background-color: #66c9ff;
      -webkit-transform: translate(7px, 5px) scale(1.025);
              transform: translate(7px, 5px) scale(1.025);
    }
    1% {
      -webkit-filter:  saturate(5.77) hue-rotate(57.6deg);
              filter:  saturate(5.77) hue-rotate(57.6deg);
      background-color: #ffb866;
      -webkit-transform: translate(4px, 9px) scale(1.009);
              transform: translate(4px, 9px) scale(1.009);
    }
    3% {
      -webkit-filter:  hue-rotate(320.4deg);
              filter:  hue-rotate(320.4deg);
      background-color: #c2ff66;
      -webkit-transform: translate(11px, -9px) scale(1.019);
              transform: translate(11px, -9px) scale(1.019);
    }
    5% {
      -webkit-filter:  hue-rotate(79.2deg);
              filter:  hue-rotate(79.2deg);
      background-color: #f766ff;
      -webkit-transform: translate(5px, -11px) scale(1.018);
              transform: translate(5px, -11px) scale(1.018);
    }
    6% {
      -webkit-filter:  saturate(5.32) hue-rotate(10.8deg) contrast(1.99);
              filter:  saturate(5.32) hue-rotate(10.8deg) contrast(1.99);
      background-color: #87ff66;
      -webkit-transform: translate(8px, -7px) scale(1.015);
              transform: translate(8px, -7px) scale(1.015);
    }
    7% {
      -webkit-filter:  hue-rotate(151.2deg);
              filter:  hue-rotate(151.2deg);
      background-color: #66ffc9;
      -webkit-transform: translate(11px, 10px) scale(1.023);
              transform: translate(11px, 10px) scale(1.023);
    }
    8% {
      -webkit-filter:  hue-rotate(25.2deg);
              filter:  hue-rotate(25.2deg);
      background-color: #66ff9c;
      -webkit-transform: translate(-7px, 2px) scale(1.012);
              transform: translate(-7px, 2px) scale(1.012);
    }
    10% {
      -webkit-filter:  saturate(5.32) hue-rotate(169.2deg);
              filter:  saturate(5.32) hue-rotate(169.2deg);
      background-color: #ff7d66;
      -webkit-transform: translate(11px, 7px) scale(1.013);
              transform: translate(11px, 7px) scale(1.013);
    }
    14% {
      -webkit-filter:  hue-rotate(165.6deg);
              filter:  hue-rotate(165.6deg);
      background-color: #66ffdb;
      -webkit-transform: translate(1px, 7px) scale(1.02);
              transform: translate(1px, 7px) scale(1.02);
    }
    15% {
      -webkit-filter:  hue-rotate(118.8deg);
              filter:  hue-rotate(118.8deg);
      background-color: #ffb866;
      -webkit-transform: translate(14px, 10px) scale(1.008);
              transform: translate(14px, 10px) scale(1.008);
    }
    16% {
      -webkit-filter:  hue-rotate(54deg);
              filter:  hue-rotate(54deg);
      background-color: #ff66e0;
      -webkit-transform: translate(-7px, 3px) scale(1.019);
              transform: translate(-7px, 3px) scale(1.019);
    }
    17% {
      -webkit-filter:  hue-rotate(244.8deg);
              filter:  hue-rotate(244.8deg);
      background-color: #ff66ff;
      -webkit-transform: translate(3px, -2px) scale(1.025);
              transform: translate(3px, -2px) scale(1.025);
    }
    18% {
      -webkit-filter:  hue-rotate(190.8deg);
              filter:  hue-rotate(190.8deg);
      background-color: #78ff66;
      -webkit-transform: translate(-4px, -11px) scale(1.024);
              transform: translate(-4px, -11px) scale(1.024);
    }
    19% {
      -webkit-filter:  hue-rotate(280.8deg) contrast(6.04);
              filter:  hue-rotate(280.8deg) contrast(6.04);
      background-color: #66e3ff;
      -webkit-transform: translate(-13px, -3px) scale(1.05);
              transform: translate(-13px, -3px) scale(1.05);
    }
    21% {
      -webkit-filter:  saturate(3.7) hue-rotate(277.2deg);
              filter:  saturate(3.7) hue-rotate(277.2deg);
      background-color: #ba66ff;
      -webkit-transform: translate(5px, 8px) scale(1.008);
              transform: translate(5px, 8px) scale(1.008);
    }
    23% {
      -webkit-filter:  hue-rotate(241.2deg) invert(1);
              filter:  hue-rotate(241.2deg) invert(1);
      background-color: #6687ff;
      -webkit-transform: translate(15px, -10px) scale(1.023);
              transform: translate(15px, -10px) scale(1.023);
    }
    24% {
      -webkit-filter:  hue-rotate(248.4deg);
              filter:  hue-rotate(248.4deg);
      background-color: #66a8ff;
      -webkit-transform: translate(-3px, -3px) scale(1.016);
              transform: translate(-3px, -3px) scale(1.016);
    }
    25% {
      -webkit-filter:  saturate(2.08) hue-rotate(75.6deg) contrast(4.87) brightness(74%);
              filter:  saturate(2.08) hue-rotate(75.6deg) contrast(4.87) brightness(74%);
      background-color: #66c2ff;
      -webkit-transform: translate(11px, -11px) scale(1.019);
              transform: translate(11px, -11px) scale(1.019);
    }
    26% {
      -webkit-filter:  saturate(5.59);
              filter:  saturate(5.59);
      background-color: #66ffab;
      -webkit-transform: translate(6px, 11px) scale(1.01);
              transform: translate(6px, 11px) scale(1.01);
    }
    29% {
      -webkit-filter:  hue-rotate(118.8deg);
              filter:  hue-rotate(118.8deg);
      background-color: #94ff66;
      -webkit-transform: translate(15px, -14px) scale(1.013);
              transform: translate(15px, -14px) scale(1.013);
    }
    30% {
      -webkit-filter:  hue-rotate(219.6deg);
              filter:  hue-rotate(219.6deg);
      background-color: #ff7366;
      -webkit-transform: translate(-9px, -6px) scale(1.024);
              transform: translate(-9px, -6px) scale(1.024);
    }
    31% {
      -webkit-filter:  hue-rotate(64.8deg) contrast(8.74);
              filter:  hue-rotate(64.8deg) contrast(8.74);
      background-color: #ff668a;
      -webkit-transform: translate(13px, 8px) scale(1.018);
              transform: translate(13px, 8px) scale(1.018);
    }
    32% {
      -webkit-filter:  hue-rotate(201.6deg);
              filter:  hue-rotate(201.6deg);
      background-color: #66ff73;
      -webkit-transform: translate(13px, 8px) scale(1.025);
              transform: translate(13px, 8px) scale(1.025);
    }
    33% {
      -webkit-filter:  hue-rotate(151.2deg);
              filter:  hue-rotate(151.2deg);
      background-color: #66ffdb;
      -webkit-transform: translate(-1px, 7px) scale(1.024);
              transform: translate(-1px, 7px) scale(1.024);
    }
    36% {
      -webkit-filter:  hue-rotate(86.4deg);
              filter:  hue-rotate(86.4deg);
      background-color: #99ff66;
      -webkit-transform: translate(9px, 4px) scale(1.019);
              transform: translate(9px, 4px) scale(1.019);
    }
    39% {
      -webkit-filter:  hue-rotate(115.2deg) contrast(4.69);
              filter:  hue-rotate(115.2deg) contrast(4.69);
      background-color: #fff766;
      -webkit-transform: translate(3px, 12px) scale(1.018);
              transform: translate(3px, 12px) scale(1.018);
    }
    41% {
      -webkit-filter:  hue-rotate(36deg);
              filter:  hue-rotate(36deg);
      background-color: #66fff7;
      -webkit-transform: translate(-14px, 2px) scale(1.011);
              transform: translate(-14px, 2px) scale(1.011);
    }
    42% {
      -webkit-filter:  saturate(3.52) hue-rotate(270deg);
              filter:  saturate(3.52) hue-rotate(270deg);
      background-color: #66ffba;
      -webkit-transform: translate(-7px, 10px) scale(1.018);
              transform: translate(-7px, 10px) scale(1.018);
    }
    45% {
      -webkit-filter:  hue-rotate(151.2deg);
              filter:  hue-rotate(151.2deg);
      background-color: #ab66ff;
      -webkit-transform: translate(-5px, -2px) scale(1.016);
              transform: translate(-5px, -2px) scale(1.016);
    }
    46% {
      -webkit-filter:  saturate(10) hue-rotate(345.6deg);
              filter:  saturate(10) hue-rotate(345.6deg);
      background-color: #94ff66;
      -webkit-transform: translate(4px, -4px) scale(1.018);
              transform: translate(4px, -4px) scale(1.018);
    }
    49% {
      -webkit-filter:  saturate(9.73) hue-rotate(100.8deg);
              filter:  saturate(9.73) hue-rotate(100.8deg);
      background-color: #666bff;
      -webkit-transform: translate(-12px, 15px) scale(1.023);
              transform: translate(-12px, 15px) scale(1.023);
    }
    50% {
      -webkit-filter:  hue-rotate(216deg) brightness(40.5%);
              filter:  hue-rotate(216deg) brightness(40.5%);
      background-color: #d666ff;
      -webkit-transform: translate(-10px, 9px) scale(1.014);
              transform: translate(-10px, 9px) scale(1.014);
    }
    51% {
      -webkit-filter:  hue-rotate(342deg);
              filter:  hue-rotate(342deg);
      background-color: #8cff66;
      -webkit-transform: translate(-1px, -11px) scale(1.02);
              transform: translate(-1px, -11px) scale(1.02);
    }
    53% {
      -webkit-filter:  saturate(7.3) hue-rotate(50.4deg);
              filter:  saturate(7.3) hue-rotate(50.4deg);
      background-color: #cfff66;
      -webkit-transform: translate(-7px, 5px) scale(1.014);
              transform: translate(-7px, 5px) scale(1.014);
    }
    55% {
      -webkit-filter:  saturate(1.9) hue-rotate(309.6deg);
              filter:  saturate(1.9) hue-rotate(309.6deg);
      background-color: #66ffa8;
      -webkit-transform: translate(-2px, 9px) scale(1.012);
              transform: translate(-2px, 9px) scale(1.012);
    }
    56% {
      -webkit-filter:  saturate(3.7) hue-rotate(61.2deg) contrast(7.03);
              filter:  saturate(3.7) hue-rotate(61.2deg) contrast(7.03);
      background-color: #66adff;
      -webkit-transform: translate(-13px, -14px) scale(1.006);
              transform: translate(-13px, -14px) scale(1.006);
    }
    57% {
      -webkit-filter:  hue-rotate(331.2deg);
              filter:  hue-rotate(331.2deg);
      background-color: #66edff;
      -webkit-transform: translate(-12px, 3px) scale(1.024);
              transform: translate(-12px, 3px) scale(1.024);
    }
    58% {
      -webkit-filter:  hue-rotate(244.8deg);
              filter:  hue-rotate(244.8deg);
      background-color: #ff668c;
      -webkit-transform: translate(-9px, 12px) scale(1.006);
              transform: translate(-9px, 12px) scale(1.006);
    }
    59% {
      -webkit-filter:  hue-rotate(201.6deg);
              filter:  hue-rotate(201.6deg);
      background-color: #f5ff66;
      -webkit-transform: translate(-13px, -5px) scale(1.007);
              transform: translate(-13px, -5px) scale(1.007);
    }
    60% {
      -webkit-filter:  hue-rotate(90deg);
              filter:  hue-rotate(90deg);
      background-color: #66ff9e;
      -webkit-transform: translate(2px, 1px) scale(1.02);
              transform: translate(2px, 1px) scale(1.02);
    }
    61% {
      -webkit-filter:  hue-rotate(248.4deg);
              filter:  hue-rotate(248.4deg);
      background-color: #73ff66;
      -webkit-transform: translate(-6px, 14px) scale(1.011);
              transform: translate(-6px, 14px) scale(1.011);
    }
    63% {
      -webkit-filter:  hue-rotate(180deg);
              filter:  hue-rotate(180deg);
      background-color: #ba66ff;
      -webkit-transform: translate(-11px, -14px) scale(1.011);
              transform: translate(-11px, -14px) scale(1.011);
    }
    64% {
      -webkit-filter:  hue-rotate(86.4deg);
              filter:  hue-rotate(86.4deg);
      background-color: #80ff66;
      -webkit-transform: translate(11px, -4px) scale(1.024);
              transform: translate(11px, -4px) scale(1.024);
    }
    66% {
      -webkit-filter:  hue-rotate(169.2deg);
              filter:  hue-rotate(169.2deg);
      background-color: #66ffeb;
      -webkit-transform: translate(11px, 4px) scale(1.016);
              transform: translate(11px, 4px) scale(1.016);
    }
    67% {
      -webkit-filter:  saturate(6.58) hue-rotate(147.6deg);
              filter:  saturate(6.58) hue-rotate(147.6deg);
      background-color: #6670ff;
      -webkit-transform: translate(-8px, -13px) scale(1.012);
              transform: translate(-8px, -13px) scale(1.012);
    }
    68% {
      -webkit-filter:  saturate(2.89) hue-rotate(68.4deg);
              filter:  saturate(2.89) hue-rotate(68.4deg);
      background-color: #66f5ff;
      -webkit-transform: translate(4px, -11px) scale(1.018);
              transform: translate(4px, -11px) scale(1.018);
    }
    69% {
      -webkit-filter:  hue-rotate(50.4deg);
              filter:  hue-rotate(50.4deg);
      background-color: #ffd666;
      -webkit-transform: translate(-14px, 6px) scale(1.022);
              transform: translate(-14px, 6px) scale(1.022);
    }
    70% {
      -webkit-filter:  hue-rotate(241.2deg);
              filter:  hue-rotate(241.2deg);
      background-color: #bfff66;
      -webkit-transform: translate(6px, 6px) scale(1.007);
              transform: translate(6px, 6px) scale(1.007);
    }
    71% {
      -webkit-filter:  hue-rotate(266.4deg) contrast(4.06);
              filter:  hue-rotate(266.4deg) contrast(4.06);
      background-color: #7a66ff;
      -webkit-transform: translate(-14px, 7px) scale(1.014);
              transform: translate(-14px, 7px) scale(1.014);
    }
    73% {
      -webkit-filter:  hue-rotate(176.4deg);
              filter:  hue-rotate(176.4deg);
      background-color: #ff66db;
      -webkit-transform: translate(-1px, 5px) scale(1.019);
              transform: translate(-1px, 5px) scale(1.019);
    }
    74% {
      -webkit-filter:  hue-rotate(10.8deg);
              filter:  hue-rotate(10.8deg);
      background-color: #668aff;
      -webkit-transform: translate(-7px, 13px) scale(1.021);
              transform: translate(-7px, 13px) scale(1.021);
    }
    75% {
      -webkit-filter:  hue-rotate(133.2deg);
              filter:  hue-rotate(133.2deg);
      background-color: #66ff6b;
      -webkit-transform: translate(-5px, -11px) scale(1.007);
              transform: translate(-5px, -11px) scale(1.007);
    }
    76% {
      -webkit-filter:  hue-rotate(201.6deg);
              filter:  hue-rotate(201.6deg);
      background-color: #8c66ff;
      -webkit-transform: translate(11px, 12px) scale(1.011);
              transform: translate(11px, 12px) scale(1.011);
    }
    77% {
      -webkit-filter:  hue-rotate(21.6deg);
              filter:  hue-rotate(21.6deg);
      background-color: #ff66c9;
      -webkit-transform: translate(6px, 10px) scale(1.008);
              transform: translate(6px, 10px) scale(1.008);
    }
    79% {
      -webkit-filter:  saturate(4.69) hue-rotate(140.4deg);
              filter:  saturate(4.69) hue-rotate(140.4deg);
      background-color: #66e8ff;
      -webkit-transform: translate(1px, 10px) scale(1.018);
              transform: translate(1px, 10px) scale(1.018);
    }
    81% {
      -webkit-filter:  hue-rotate(158.4deg);
              filter:  hue-rotate(158.4deg);
      background-color: #6694ff;
      -webkit-transform: translate(15px, 12px) scale(1.019);
              transform: translate(15px, 12px) scale(1.019);
    }
    83% {
      -webkit-filter:  saturate(3.79) hue-rotate(183.6deg);
              filter:  saturate(3.79) hue-rotate(183.6deg);
      background-color: #f566ff;
      -webkit-transform: translate(-9px, -5px) scale(1.015);
              transform: translate(-9px, -5px) scale(1.015);
    }
    84% {
      -webkit-filter:  hue-rotate(201.6deg);
              filter:  hue-rotate(201.6deg);
      background-color: #69ff66;
      -webkit-transform: translate(13px, -11px) scale(1.017);
              transform: translate(13px, -11px) scale(1.017);
    }
    85% {
      -webkit-filter:  hue-rotate(32.4deg);
              filter:  hue-rotate(32.4deg);
      background-color: #ffdb66;
      -webkit-transform: translate(1px, 1px) scale(1.009);
              transform: translate(1px, 1px) scale(1.009);
    }
    86% {
      -webkit-filter:  hue-rotate(147.6deg);
              filter:  hue-rotate(147.6deg);
      background-color: #a666ff;
      -webkit-transform: translate(0px, 1px) scale(1.008);
              transform: translate(0px, 1px) scale(1.008);
    }
    88% {
      -webkit-filter:  hue-rotate(298.8deg);
              filter:  hue-rotate(298.8deg);
      background-color: #de66ff;
      -webkit-transform: translate(7px, 3px) scale(1.006);
              transform: translate(7px, 3px) scale(1.006);
    }
    91% {
      -webkit-filter:  hue-rotate(302.4deg);
              filter:  hue-rotate(302.4deg);
      background-color: #ff8a66;
      -webkit-transform: translate(13px, -10px) scale(1.023);
              transform: translate(13px, -10px) scale(1.023);
    }
    92% {
      -webkit-filter:  hue-rotate(165.6deg);
              filter:  hue-rotate(165.6deg);
      background-color: #96ff66;
      -webkit-transform: translate(6px, -2px) scale(1.02);
              transform: translate(6px, -2px) scale(1.02);
    }
    93% {
      -webkit-filter:  hue-rotate(25.2deg) invert(1);
              filter:  hue-rotate(25.2deg) invert(1);
      background-color: #ff66ad;
      -webkit-transform: translate(-3px, -3px) scale(1.011);
              transform: translate(-3px, -3px) scale(1.011);
    }
    94% {
      -webkit-filter:  hue-rotate(345.6deg);
              filter:  hue-rotate(345.6deg);
      background-color: #ff6670;
      -webkit-transform: translate(-8px, 4px) scale(1.009);
              transform: translate(-8px, 4px) scale(1.009);
    }
    95% {
      -webkit-filter:  hue-rotate(334.8deg) brightness(54.5%);
              filter:  hue-rotate(334.8deg) brightness(54.5%);
      background-color: #d6ff66;
      -webkit-transform: translate(7px, 7px) scale(1.015);
              transform: translate(7px, 7px) scale(1.015);
    }
    96% {
      -webkit-filter:  hue-rotate(352.8deg);
              filter:  hue-rotate(352.8deg);
      background-color: #6670ff;
      -webkit-transform: translate(-5px, 7px) scale(1.025);
              transform: translate(-5px, 7px) scale(1.025);
    }
    98% {
      -webkit-filter:  hue-rotate(64.8deg);
              filter:  hue-rotate(64.8deg);
      background-color: #bf66ff;
      -webkit-transform: translate(3px, 12px) scale(1.012);
              transform: translate(3px, 12px) scale(1.012);
    }
    100% {
      -webkit-filter:  hue-rotate(234deg) contrast(5.5);
              filter:  hue-rotate(234deg) contrast(5.5);
      background-color: #ff66b3;
      -webkit-transform: translate(4px, -12px) scale(1.017);
              transform: translate(4px, -12px) scale(1.017);
    }
  }
  body.error-page {
    // #008080
    background: #0000aa;
    color: #fff;
    letter-spacing: .05em;
  }
  .error-page .bs-wrapper {
    display: flex;
    height: 100vh;
    align-items: center;
  }
  .error-page .bs-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.5;
    font-weight: bold;
    margin: 0 auto;
    padding: 32px;
    max-width: 640px;
    max-height: 480px;
    width: 100%;
  }
  .error-page .bs-content ul {
    position: relative;
    list-style: none;
    margin: 1em 0 1em 1em;
  }
  .error-page .bs-content ul li::before {
    content: '*';
    position: absolute;
    left: -1em;
  }
  .error-page .bs-content p:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    .error-page .bs-content {
      padding: 32px;
    }
  }
  @media (min-width: 1024px) {
    .error-page .bs-content {
      max-height: none;
      max-width: none;
      width: 960px;
      height: 720px;
      padding: 104px;
    }
  }
  @media (min-width: 1440px) {
    .error-page .bs-content {
      width: 1024px;
      height: 768px;
      padding: 136px;
    }
  }
  .error-page .bs-content h1 {
    display: inline-block;
    color: #0000aa;
    background: #aaaaaa;
    text-align: center;
    padding: .129em .517em;
    font-size: 1em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
  }
  .error-page .bs-cursor {
    animation: blink 300ms ease infinite;
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .text-center {
    text-align: center;
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
