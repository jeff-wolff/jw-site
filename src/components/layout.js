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
    --bg: #252525;
    --bg-faded: rgba(51, 51, 51, 0.9);
    --primary: rgb(255,255,0);
    --primary-faded: rgba(255,255,0,.87);
    --secondary: #000;
    --secondary-faded: #222;
    --window-border: 190,190,190;
    --window-title: 0,0,0;
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
      color: rgba(255,255,255,.96);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 14px;
      line-height: 2;
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
      color: #252525;
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
      line-height: 1.6;
      font-weight: normal;
      margin: 0;
      letter-spacing: 0;
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
      margin-bottom: 82vh;
      margin-top: 114px;
      margin-left: auto;
      margin-right: auto;
      background-color: #252525;
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
  .wrapper.faded {
     background-color: rgba(51, 51, 51, 0.8);
     background-color: var(--bg-faded); 
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
  .container.narrow {
    padding-left: 12%;
    padding-right: 12%;
  }
  @media (min-width: 1440px) {
      .container.narrow {
          padding-left: 24%;
          padding-right: 24%;
      }
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
      transition: filter 200ms ease, color 200ms ease, text-shadow 200ms ease;
      // user-select: none;
      color: rgba(255, 255, 255, .25);
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      transform-style: preserve-3d;
      transform : translate3d(0, 0, 0);
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
    min-height: 200vh;
  }

  .work-post-title .title {
    position: sticky;
    top: 40vh;
    margin-top: -100vh;
    margin-bottom: 100px;
  }
  .work-post-scrollDown {
    font-size: 2.6em;
    z-index: 1;
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
  .work-post-description {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 150vh;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    .work-post-description {

    }
    .work-post-description:before {

    }
  }
  @media (min-width: 1920px) {
    .work-post-description.container {

    }
  }
  .work-post-description .desc-info {
    z-index: 1;
    font-size: 12px;
  }
  .work-post-description .desc-info p {
    margin-bottom: 3em;
  }
  @media (min-width: 320px) {
    .work-post-description .desc-info {
      font-size: calc(12px + 3 * ((100vw - 320px) / 1120));
    }
  }
  @media (min-width: 1024px) {
    .work-post-description .desc-info {
      order: 0;
    }
  }
  @media (min-width: 1440px) {
    .work-post-description .desc-info {
      font-size: 15px;
    }
  }
  .work-post-description .desc-content {
    max-width: 65ch;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
  }
  .work-post-description .desc-content p {
    margin-bottom: 2em;
  }
  .work-post-description .desc-content p:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 1024px) {
    .work-post-description .desc-content {
      text-align: justify;
    }
  }
  .website-btn {
    margin: 0 auto;
    width: 88%;
    max-width: 540px;
  }
  @media (min-width: 768px) {
    .website-btn {
      margin-bottom: 56px;
    }
  }
  @media (min-width: 1152px) {
    .website-btn {
      margin-bottom: 72px;
    }
  }
  @media (min-width: 1440px) {
    .website-btn {
      width: calc(50% - 8%);
    }
  }
  .work-post-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding-top: 60px;
    padding-bottom: 50vh;
  }

  .work-post-nav .next-btn,
  .work-post-nav .prev-btn {
    width: calc(50% - 3%);
    text-align: center;
  }
  .work-post-nav .next-btn {
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .work-post-nav .next-btn,
    .work-post-nav .prev-btn {
      
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
      -webkit-transform: translate(7px, 5px) scale(1.25);
              transform: translate(7px, 5px) scale(1.25);
    }
    1% {
      -webkit-filter:  saturate(5.77) hue-rotate(57.6deg);
              filter:  saturate(5.77) hue-rotate(57.6deg);
      background-color: #ffb866;
      -webkit-transform: translate(4px, 9px) scale(1.09);
              transform: translate(4px, 9px) scale(1.09);
    }
    3% {
      -webkit-filter:  hue-rotate(320.4deg);
              filter:  hue-rotate(320.4deg);
      background-color: #c2ff66;
      -webkit-transform: translate(11px, -9px) scale(1.19);
              transform: translate(11px, -9px) scale(1.19);
    }
    5% {
      -webkit-filter:  hue-rotate(79.2deg);
              filter:  hue-rotate(79.2deg);
      background-color: #f766ff;
      -webkit-transform: translate(5px, -11px) scale(1.18);
              transform: translate(5px, -11px) scale(1.18);
    }
    6% {
      -webkit-filter:  saturate(5.32) hue-rotate(10.8deg) contrast(1.99);
              filter:  saturate(5.32) hue-rotate(10.8deg) contrast(1.99);
      background-color: #87ff66;
      -webkit-transform: translate(8px, -7px) scale(1.15);
              transform: translate(8px, -7px) scale(1.15);
    }
    7% {
      -webkit-filter:  hue-rotate(151.2deg);
              filter:  hue-rotate(151.2deg);
      background-color: #66ffc9;
      -webkit-transform: translate(11px, 10px) scale(1.23);
              transform: translate(11px, 10px) scale(1.23);
    }
    8% {
      -webkit-filter:  hue-rotate(25.2deg);
              filter:  hue-rotate(25.2deg);
      background-color: #66ff9c;
      -webkit-transform: translate(-7px, 2px) scale(1.12);
              transform: translate(-7px, 2px) scale(1.12);
    }
    10% {
      -webkit-filter:  saturate(5.32) hue-rotate(169.2deg);
              filter:  saturate(5.32) hue-rotate(169.2deg);
      background-color: #ff7d66;
      -webkit-transform: translate(11px, 7px) scale(1.13);
              transform: translate(11px, 7px) scale(1.13);
    }
    14% {
      -webkit-filter:  hue-rotate(165.6deg);
              filter:  hue-rotate(165.6deg);
      background-color: #66ffdb;
      -webkit-transform: translate(1px, 7px) scale(1.2);
              transform: translate(1px, 7px) scale(1.2);
    }
    15% {
      -webkit-filter:  hue-rotate(118.8deg);
              filter:  hue-rotate(118.8deg);
      background-color: #ffb866;
      -webkit-transform: translate(14px, 10px) scale(1.08);
              transform: translate(14px, 10px) scale(1.08);
    }
    16% {
      -webkit-filter:  hue-rotate(54deg);
              filter:  hue-rotate(54deg);
      background-color: #ff66e0;
      -webkit-transform: translate(-7px, 3px) scale(1.19);
              transform: translate(-7px, 3px) scale(1.19);
    }
    17% {
      -webkit-filter:  hue-rotate(244.8deg);
              filter:  hue-rotate(244.8deg);
      background-color: #ff66ff;
      -webkit-transform: translate(3px, -2px) scale(1.25);
              transform: translate(3px, -2px) scale(1.25);
    }
    18% {
      -webkit-filter:  hue-rotate(190.8deg);
              filter:  hue-rotate(190.8deg);
      background-color: #78ff66;
      -webkit-transform: translate(-4px, -11px) scale(1.24);
              transform: translate(-4px, -11px) scale(1.24);
    }
    19% {
      -webkit-filter:  hue-rotate(280.8deg) contrast(6.04);
              filter:  hue-rotate(280.8deg) contrast(6.04);
      background-color: #66e3ff;
      -webkit-transform: translate(-13px, -3px) scale(1.5);
              transform: translate(-13px, -3px) scale(1.5);
    }
    21% {
      -webkit-filter:  saturate(3.7) hue-rotate(277.2deg);
              filter:  saturate(3.7) hue-rotate(277.2deg);
      background-color: #ba66ff;
      -webkit-transform: translate(5px, 8px) scale(1.08);
              transform: translate(5px, 8px) scale(1.08);
    }
    23% {
      -webkit-filter:  hue-rotate(241.2deg) invert(1);
              filter:  hue-rotate(241.2deg) invert(1);
      background-color: #6687ff;
      -webkit-transform: translate(15px, -10px) scale(1.23);
              transform: translate(15px, -10px) scale(1.23);
    }
    24% {
      -webkit-filter:  hue-rotate(248.4deg);
              filter:  hue-rotate(248.4deg);
      background-color: #66a8ff;
      -webkit-transform: translate(-3px, -3px) scale(1.16);
              transform: translate(-3px, -3px) scale(1.16);
    }
    25% {
      -webkit-filter:  saturate(2.08) hue-rotate(75.6deg) contrast(4.87) brightness(74%);
              filter:  saturate(2.08) hue-rotate(75.6deg) contrast(4.87) brightness(74%);
      background-color: #66c2ff;
      -webkit-transform: translate(11px, -11px) scale(1.19);
              transform: translate(11px, -11px) scale(1.19);
    }
    26% {
      -webkit-filter:  saturate(5.59);
              filter:  saturate(5.59);
      background-color: #66ffab;
      -webkit-transform: translate(6px, 11px) scale(1.1);
              transform: translate(6px, 11px) scale(1.1);
    }
    29% {
      -webkit-filter:  hue-rotate(118.8deg);
              filter:  hue-rotate(118.8deg);
      background-color: #94ff66;
      -webkit-transform: translate(15px, -14px) scale(1.13);
              transform: translate(15px, -14px) scale(1.13);
    }
    30% {
      -webkit-filter:  hue-rotate(219.6deg);
              filter:  hue-rotate(219.6deg);
      background-color: #ff7366;
      -webkit-transform: translate(-9px, -6px) scale(1.24);
              transform: translate(-9px, -6px) scale(1.24);
    }
    31% {
      -webkit-filter:  hue-rotate(64.8deg) contrast(8.74);
              filter:  hue-rotate(64.8deg) contrast(8.74);
      background-color: #ff668a;
      -webkit-transform: translate(13px, 8px) scale(1.18);
              transform: translate(13px, 8px) scale(1.18);
    }
    32% {
      -webkit-filter:  hue-rotate(201.6deg);
              filter:  hue-rotate(201.6deg);
      background-color: #66ff73;
      -webkit-transform: translate(13px, 8px) scale(1.25);
              transform: translate(13px, 8px) scale(1.25);
    }
    33% {
      -webkit-filter:  hue-rotate(151.2deg);
              filter:  hue-rotate(151.2deg);
      background-color: #66ffdb;
      -webkit-transform: translate(-1px, 7px) scale(1.24);
              transform: translate(-1px, 7px) scale(1.24);
    }
    36% {
      -webkit-filter:  hue-rotate(86.4deg);
              filter:  hue-rotate(86.4deg);
      background-color: #99ff66;
      -webkit-transform: translate(9px, 4px) scale(1.19);
              transform: translate(9px, 4px) scale(1.19);
    }
    39% {
      -webkit-filter:  hue-rotate(115.2deg) contrast(4.69);
              filter:  hue-rotate(115.2deg) contrast(4.69);
      background-color: #fff766;
      -webkit-transform: translate(3px, 12px) scale(1.18);
              transform: translate(3px, 12px) scale(1.18);
    }
    41% {
      -webkit-filter:  hue-rotate(36deg);
              filter:  hue-rotate(36deg);
      background-color: #66fff7;
      -webkit-transform: translate(-14px, 2px) scale(1.11);
              transform: translate(-14px, 2px) scale(1.11);
    }
    42% {
      -webkit-filter:  saturate(3.52) hue-rotate(270deg);
              filter:  saturate(3.52) hue-rotate(270deg);
      background-color: #66ffba;
      -webkit-transform: translate(-7px, 10px) scale(1.18);
              transform: translate(-7px, 10px) scale(1.18);
    }
    45% {
      -webkit-filter:  hue-rotate(151.2deg);
              filter:  hue-rotate(151.2deg);
      background-color: #ab66ff;
      -webkit-transform: translate(-5px, -2px) scale(1.16);
              transform: translate(-5px, -2px) scale(1.16);
    }
    46% {
      -webkit-filter:  saturate(10) hue-rotate(345.6deg);
              filter:  saturate(10) hue-rotate(345.6deg);
      background-color: #94ff66;
      -webkit-transform: translate(4px, -4px) scale(1.18);
              transform: translate(4px, -4px) scale(1.18);
    }
    49% {
      -webkit-filter:  saturate(9.73) hue-rotate(100.8deg);
              filter:  saturate(9.73) hue-rotate(100.8deg);
      background-color: #666bff;
      -webkit-transform: translate(-12px, 15px) scale(1.23);
              transform: translate(-12px, 15px) scale(1.23);
    }
    50% {
      -webkit-filter:  hue-rotate(216deg) brightness(40.5%);
              filter:  hue-rotate(216deg) brightness(40.5%);
      background-color: #d666ff;
      -webkit-transform: translate(-10px, 9px) scale(1.14);
              transform: translate(-10px, 9px) scale(1.14);
    }
    51% {
      -webkit-filter:  hue-rotate(342deg);
              filter:  hue-rotate(342deg);
      background-color: #8cff66;
      -webkit-transform: translate(-1px, -11px) scale(1.2);
              transform: translate(-1px, -11px) scale(1.2);
    }
    53% {
      -webkit-filter:  saturate(7.3) hue-rotate(50.4deg);
              filter:  saturate(7.3) hue-rotate(50.4deg);
      background-color: #cfff66;
      -webkit-transform: translate(-7px, 5px) scale(1.14);
              transform: translate(-7px, 5px) scale(1.14);
    }
    55% {
      -webkit-filter:  saturate(1.9) hue-rotate(309.6deg);
              filter:  saturate(1.9) hue-rotate(309.6deg);
      background-color: #66ffa8;
      -webkit-transform: translate(-2px, 9px) scale(1.12);
              transform: translate(-2px, 9px) scale(1.12);
    }
    56% {
      -webkit-filter:  saturate(3.7) hue-rotate(61.2deg) contrast(7.03);
              filter:  saturate(3.7) hue-rotate(61.2deg) contrast(7.03);
      background-color: #66adff;
      -webkit-transform: translate(-13px, -14px) scale(1.06);
              transform: translate(-13px, -14px) scale(1.06);
    }
    57% {
      -webkit-filter:  hue-rotate(331.2deg);
              filter:  hue-rotate(331.2deg);
      background-color: #66edff;
      -webkit-transform: translate(-12px, 3px) scale(1.24);
              transform: translate(-12px, 3px) scale(1.24);
    }
    58% {
      -webkit-filter:  hue-rotate(244.8deg);
              filter:  hue-rotate(244.8deg);
      background-color: #ff668c;
      -webkit-transform: translate(-9px, 12px) scale(1.06);
              transform: translate(-9px, 12px) scale(1.06);
    }
    59% {
      -webkit-filter:  hue-rotate(201.6deg);
              filter:  hue-rotate(201.6deg);
      background-color: #f5ff66;
      -webkit-transform: translate(-13px, -5px) scale(1.07);
              transform: translate(-13px, -5px) scale(1.07);
    }
    60% {
      -webkit-filter:  hue-rotate(90deg);
              filter:  hue-rotate(90deg);
      background-color: #66ff9e;
      -webkit-transform: translate(2px, 1px) scale(1.2);
              transform: translate(2px, 1px) scale(1.2);
    }
    61% {
      -webkit-filter:  hue-rotate(248.4deg);
              filter:  hue-rotate(248.4deg);
      background-color: #73ff66;
      -webkit-transform: translate(-6px, 14px) scale(1.11);
              transform: translate(-6px, 14px) scale(1.11);
    }
    63% {
      -webkit-filter:  hue-rotate(180deg);
              filter:  hue-rotate(180deg);
      background-color: #ba66ff;
      -webkit-transform: translate(-11px, -14px) scale(1.11);
              transform: translate(-11px, -14px) scale(1.11);
    }
    64% {
      -webkit-filter:  hue-rotate(86.4deg);
              filter:  hue-rotate(86.4deg);
      background-color: #80ff66;
      -webkit-transform: translate(11px, -4px) scale(1.24);
              transform: translate(11px, -4px) scale(1.24);
    }
    66% {
      -webkit-filter:  hue-rotate(169.2deg);
              filter:  hue-rotate(169.2deg);
      background-color: #66ffeb;
      -webkit-transform: translate(11px, 4px) scale(1.16);
              transform: translate(11px, 4px) scale(1.16);
    }
    67% {
      -webkit-filter:  saturate(6.58) hue-rotate(147.6deg);
              filter:  saturate(6.58) hue-rotate(147.6deg);
      background-color: #6670ff;
      -webkit-transform: translate(-8px, -13px) scale(1.12);
              transform: translate(-8px, -13px) scale(1.12);
    }
    68% {
      -webkit-filter:  saturate(2.89) hue-rotate(68.4deg);
              filter:  saturate(2.89) hue-rotate(68.4deg);
      background-color: #66f5ff;
      -webkit-transform: translate(4px, -11px) scale(1.18);
              transform: translate(4px, -11px) scale(1.18);
    }
    69% {
      -webkit-filter:  hue-rotate(50.4deg);
              filter:  hue-rotate(50.4deg);
      background-color: #ffd666;
      -webkit-transform: translate(-14px, 6px) scale(1.22);
              transform: translate(-14px, 6px) scale(1.22);
    }
    70% {
      -webkit-filter:  hue-rotate(241.2deg);
              filter:  hue-rotate(241.2deg);
      background-color: #bfff66;
      -webkit-transform: translate(6px, 6px) scale(1.07);
              transform: translate(6px, 6px) scale(1.07);
    }
    71% {
      -webkit-filter:  hue-rotate(266.4deg) contrast(4.06);
              filter:  hue-rotate(266.4deg) contrast(4.06);
      background-color: #7a66ff;
      -webkit-transform: translate(-14px, 7px) scale(1.14);
              transform: translate(-14px, 7px) scale(1.14);
    }
    73% {
      -webkit-filter:  hue-rotate(176.4deg);
              filter:  hue-rotate(176.4deg);
      background-color: #ff66db;
      -webkit-transform: translate(-1px, 5px) scale(1.19);
              transform: translate(-1px, 5px) scale(1.19);
    }
    74% {
      -webkit-filter:  hue-rotate(10.8deg);
              filter:  hue-rotate(10.8deg);
      background-color: #668aff;
      -webkit-transform: translate(-7px, 13px) scale(1.21);
              transform: translate(-7px, 13px) scale(1.21);
    }
    75% {
      -webkit-filter:  hue-rotate(133.2deg);
              filter:  hue-rotate(133.2deg);
      background-color: #66ff6b;
      -webkit-transform: translate(-5px, -11px) scale(1.07);
              transform: translate(-5px, -11px) scale(1.07);
    }
    76% {
      -webkit-filter:  hue-rotate(201.6deg);
              filter:  hue-rotate(201.6deg);
      background-color: #8c66ff;
      -webkit-transform: translate(11px, 12px) scale(1.11);
              transform: translate(11px, 12px) scale(1.11);
    }
    77% {
      -webkit-filter:  hue-rotate(21.6deg);
              filter:  hue-rotate(21.6deg);
      background-color: #ff66c9;
      -webkit-transform: translate(6px, 10px) scale(1.08);
              transform: translate(6px, 10px) scale(1.08);
    }
    79% {
      -webkit-filter:  saturate(4.69) hue-rotate(140.4deg);
              filter:  saturate(4.69) hue-rotate(140.4deg);
      background-color: #66e8ff;
      -webkit-transform: translate(1px, 10px) scale(1.18);
              transform: translate(1px, 10px) scale(1.18);
    }
    81% {
      -webkit-filter:  hue-rotate(158.4deg);
              filter:  hue-rotate(158.4deg);
      background-color: #6694ff;
      -webkit-transform: translate(15px, 12px) scale(1.19);
              transform: translate(15px, 12px) scale(1.19);
    }
    83% {
      -webkit-filter:  saturate(3.79) hue-rotate(183.6deg);
              filter:  saturate(3.79) hue-rotate(183.6deg);
      background-color: #f566ff;
      -webkit-transform: translate(-9px, -5px) scale(1.15);
              transform: translate(-9px, -5px) scale(1.15);
    }
    84% {
      -webkit-filter:  hue-rotate(201.6deg);
              filter:  hue-rotate(201.6deg);
      background-color: #69ff66;
      -webkit-transform: translate(13px, -11px) scale(1.17);
              transform: translate(13px, -11px) scale(1.17);
    }
    85% {
      -webkit-filter:  hue-rotate(32.4deg);
              filter:  hue-rotate(32.4deg);
      background-color: #ffdb66;
      -webkit-transform: translate(1px, 1px) scale(1.09);
              transform: translate(1px, 1px) scale(1.09);
    }
    86% {
      -webkit-filter:  hue-rotate(147.6deg);
              filter:  hue-rotate(147.6deg);
      background-color: #a666ff;
      -webkit-transform: translate(0px, 1px) scale(1.08);
              transform: translate(0px, 1px) scale(1.08);
    }
    88% {
      -webkit-filter:  hue-rotate(298.8deg);
              filter:  hue-rotate(298.8deg);
      background-color: #de66ff;
      -webkit-transform: translate(7px, 3px) scale(1.06);
              transform: translate(7px, 3px) scale(1.06);
    }
    91% {
      -webkit-filter:  hue-rotate(302.4deg);
              filter:  hue-rotate(302.4deg);
      background-color: #ff8a66;
      -webkit-transform: translate(13px, -10px) scale(1.23);
              transform: translate(13px, -10px) scale(1.23);
    }
    92% {
      -webkit-filter:  hue-rotate(165.6deg);
              filter:  hue-rotate(165.6deg);
      background-color: #96ff66;
      -webkit-transform: translate(6px, -2px) scale(1.2);
              transform: translate(6px, -2px) scale(1.2);
    }
    93% {
      -webkit-filter:  hue-rotate(25.2deg) invert(1);
              filter:  hue-rotate(25.2deg) invert(1);
      background-color: #ff66ad;
      -webkit-transform: translate(-3px, -3px) scale(1.11);
              transform: translate(-3px, -3px) scale(1.11);
    }
    94% {
      -webkit-filter:  hue-rotate(345.6deg);
              filter:  hue-rotate(345.6deg);
      background-color: #ff6670;
      -webkit-transform: translate(-8px, 4px) scale(1.09);
              transform: translate(-8px, 4px) scale(1.09);
    }
    95% {
      -webkit-filter:  hue-rotate(334.8deg) brightness(54.5%);
              filter:  hue-rotate(334.8deg) brightness(54.5%);
      background-color: #d6ff66;
      -webkit-transform: translate(7px, 7px) scale(1.15);
              transform: translate(7px, 7px) scale(1.15);
    }
    96% {
      -webkit-filter:  hue-rotate(352.8deg);
              filter:  hue-rotate(352.8deg);
      background-color: #6670ff;
      -webkit-transform: translate(-5px, 7px) scale(1.25);
              transform: translate(-5px, 7px) scale(1.25);
    }
    98% {
      -webkit-filter:  hue-rotate(64.8deg);
              filter:  hue-rotate(64.8deg);
      background-color: #bf66ff;
      -webkit-transform: translate(3px, 12px) scale(1.12);
              transform: translate(3px, 12px) scale(1.12);
    }
    100% {
      -webkit-filter:  hue-rotate(234deg) contrast(5.5);
              filter:  hue-rotate(234deg) contrast(5.5);
      background-color: #ff66b3;
      -webkit-transform: translate(4px, -12px) scale(1.17);
              transform: translate(4px, -12px) scale(1.17);
    }
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
