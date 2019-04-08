import React from 'react'
import PageTransition from 'gatsby-v2-plugin-page-transitions';
import {styled, injectGlobal} from 'styled-components'
// import { Link } from 'gatsby'
// import classNames from 'classnames';
import noisePNG from '../assets/noise.png'
import curDefault from '../assets/cur.png'
import curPointer from '../assets/cur-pointer.png'
import curMove from '../assets/cur-move.png'
import curNotAllowed from '../assets/cur-not-allowed.png'
import curResizeNWSE from '../assets/cur-nwse-resize.png'
import curResizeNESW from '../assets/cur-nesw-resize.png'
import curResizeNS from '../assets/cur-ns-resize.png'
import curResizeEW from '../assets/cur-ew-resize.png'

import * as fonts from '../fonts/fonts.js'

import 'babel-polyfill'
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
    --primary-faded: rgba(255,255,0,.78);
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
  html.spazz {
    animation: spazz 5s steps(1) infinite;
  }
  *, *:after, *:before {
      box-sizing: inherit;
  }
  body {
      margin: 0;
      color: #fff;
      color: var(--text-color);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 14px;
      line-height: 1.9;
      background-color: #000;
      background-color: var(--footer-bg);
      cursor: url('${curDefault}'), default;
  }
  .work-window, .react-draggable {
    cursor: url('${curMove}') 21 21, move !important;
  }
  .window-resizer {
    cursor: url('${curResizeNWSE}') 16 16, nwse-resize !important;
    z-index: 2;
  }
  .window-resizer-2 {
    cursor: url('${curResizeNESW}') 16 16, nesw-resize !important;
    z-index: 2;
  }
  .window-resizer-3 {
    cursor: url('${curResizeNS}') 9 22, ns-resize !important;
  }
  .window-resizer-4 {
    cursor: url('${curResizeEW}') 22 9, ew-resize !important;
  }
  *:disabled {
    cursor: url('${curNotAllowed}') 21 21, not-allowed;
  }
  @media (min-width: 320px) {
      body {
        font-size: calc(14px + 2 * ((100vw - 320px) / 1120));
      }
  }
  @media (min-width: 1440px) {
      body {
          font-size: 16px;
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
      cursor: url('${curPointer}'), pointer;
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
  @media (max-width: 1151px) {
    ul {
      margin-left: 1.25rem;
    }
    ol {
      margin-left: 1.667rem;
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
    margin: 0;
    padding-bottom: 0;
    padding-left: 1.42188rem;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.75rem;
    font-size: 1.1rem;
    line-height: 1.9;
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
      line-height: 1.4;
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
    font-size: 1.3rem;
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
      margin: 0 0 1.75rem;
  }
  small {
      font-size:  11px;
  }
  .wrapper {
      transition: 100ms ease background-color;
      min-height: 100vh;
      // margin-bottom: 82vh;
      margin-top: 114px;
      margin-left: auto;
      margin-right: auto;
      background-color: #212121;
      background-color: var(--bg);
      overscroll-behavior: none;
      -webkit-overflow-scrolling: auto;
      position: relative;
      z-index: 2;
  }
  @media (min-width: 1152px) {
      .wrapper {
        // margin-bottom: 360px;
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
        min-height: 200vh;
    }
  }
  @media (min-height: 1440px) {
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
    height: 100vh;
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
    text-align: center;
    transform-style: preserve-3d;
    transform : translate3d(0, 0, 0);
    will-change: transform;
  }
  .centered-title .title {
    transform: translate3d(0,0,0);
    will-change: transform;
    transition: opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1), color 200ms cubic-bezier(0.4, 0.0, 0.2, 1), text-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
    color: #fff;
    color: var(--text-color);
    text-shadow: none;
    margin: 0;
    opacity: 0;
  }
  .centered-title.preload {
      z-index: 2;
  }
  .centered-title.preload .title {
    // color: #fff;
    // color: var(--text-color);
    opacity: 1;
    filter: none;
  }
  .centered-title.index-title {
    position: sticky;
    top: 180px;
    justify-content: flex-start;
    width: auto;
    width: fit-content;
    margin: 0 auto 125px;
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
    z-index: 1;
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
    margin-top: 100vh;
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
    user-select: none;
  }
  .work-post-title .title {
    text-shadow: 0 4px 6px rgba(21,21,21,0.11), 0 1px 3px rgba(0,0,0,.08);
  }
  .work-post-title .website-btn {
    box-shadow: 0 4px 6px rgba(21,21,21,0.11), 0 1px 3px rgba(0,0,0,.08);
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
    transform: translate3d(0, 0, 0);
    position: relative;
    z-index: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
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
    transform: translate3d(0, 0, 0);
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
    font-weight: normal;
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
    margin-bottom: 0;
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
  .work-demo-section {
    background: var(--bg);
    z-index: 2;
    position: relative;
    height: 100vh;
  }
  .post-nav {
    z-index: 1;
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 100%;
    padding-bottom: 20px;
    height: 100vh;
    min-height: 900px;
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
      width: auto;
    }
  }
  @media (min-width: 1440px) {
    .post-nav .next-btn,
    .post-nav .prev-btn {
        max-width: 432px;
    }
  }
  
  .work-post-nav {
    display: flex;
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

  body:not(.wrapper-work-post) .wrapper:after {
      transition: opacity 100ms cubic-bezier(0.4, 0.0, 0.2, 1);
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
      opacity: .4;
  }

  .wrapper.fade-noise:after {
    opacity: .15;
  }
  .wrapper.disable-noise:after {
    display: none !important;
  }

  .about-me {
    position: relative;
    z-index: 2;
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
    padding-top: 56px;
    margin-bottom: 20vh;
  }
  .about-me .profile {
    width: 100%;
  }
  @media (min-width: 1024px) {
    .about-me {
      flex-direction: row;
      min-height: 100vh;
    }
    .about-me .profile {
      max-width: 760px;
      width: 60%;
      // margin-left: 10%;
      // margin-right: 10%;
      margin-bottom: 0;
    }
    .about-me .info {
      width: 35%;
      margin-left: 5%;
    }
  }
  .notes-container-wrap {
    background: var(--bg);
    position: relative;
    z-index: 2;
    margin-top: 50vh;
  }
  .notes-container {
    padding: 60px 30px 100px;
    max-width:56rem;
    margin: 0 auto;
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
  @media (min-width: 1440px) {
    .notes-post-title {
      max-width: 80%;
    }
  }
  .notes-nav {
    // margin-top: 50vh;
  }
  .note-index-container {
    margin: 260px 0 0 0;
    padding-bottom: 240px;
  }
  .note-card {
    background: rgba(var(--bg-faded),.98);
    border: 1px dashed rgba(255,255,255,.5);
    padding: 2rem;
    margin: 0 auto 3.5rem;
    position: relative;
    text-align: left;
    z-index: 2; 
    width: 90%;
    max-width: 768px;
  }
  @media (min-width: 768px) {
    .note-card {
      text-align: center;
      padding: 4rem;
    }
  }
  .note-card .title {
    margin: 0 0 0.875rem;
  }
  .note-card a[class^="button"] {
    width: 100%;
  }
  @media (min-width: 768px) {
    .note-card a[class^="button"] {
      width: auto;
      width: fit-content;
      margin: 0 auto;
    }
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

  // .gatsby-highlight {
  //   background-color: #2d2d2d;
  //   border-radius: 0.3em;
  //   margin: 0.5em 0;
  //   padding: 1em;
  //   overflow: auto;
  // }
  .gatsby-highlight {
      margin-bottom: 1.75rem;
      border-radius: 6px;
      background: #2d2d2d;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }

  :not(pre)>code[class*=language-] {
      border-radius: .3em;
      // background: var(--inlineCode-bg);
      // color: var(--inlineCode-text);
      padding: .15em .25em;
      white-space: normal;
  }

  @keyframes spazz {
      0% {
        -webkit-filter:  hue-rotate(334.8deg);
                filter:  hue-rotate(334.8deg);
        background-color: #66c9ff;
        transform: translate(7px, 5px) scale(1.025);
      }
      1% {
        -webkit-filter:  saturate(5.77) hue-rotate(57.6deg);
                filter:  saturate(5.77) hue-rotate(57.6deg);
        background-color: #ffb866;
        transform: translate(4px, 9px) scale(1.009);
      }
      3% {
        -webkit-filter:  hue-rotate(320.4deg);
                filter:  hue-rotate(320.4deg);
        background-color: #c2ff66;
        transform: translate(11px, -9px) scale(1.019);
      }
      5% {
        -webkit-filter:  hue-rotate(79.2deg);
                filter:  hue-rotate(79.2deg);
        background-color: #f766ff;
        transform: translate(5px, -11px) scale(1.018);
      }
      6% {
        -webkit-filter:  saturate(5.32) hue-rotate(10.8deg) contrast(1.99);
                filter:  saturate(5.32) hue-rotate(10.8deg) contrast(1.99);
        background-color: #87ff66;
        transform: translate(8px, -7px) scale(1.015);
      }
      7% {
        -webkit-filter:  hue-rotate(151.2deg);
                filter:  hue-rotate(151.2deg);
        background-color: #66ffc9;
        transform: translate(11px, 10px) scale(1.023);
      }
      8% {
        -webkit-filter:  hue-rotate(25.2deg);
                filter:  hue-rotate(25.2deg);
        background-color: #66ff9c;
        transform: translate(-7px, 2px) scale(1.012);
      }
      10% {
        -webkit-filter:  saturate(5.32) hue-rotate(169.2deg);
                filter:  saturate(5.32) hue-rotate(169.2deg);
        background-color: #ff7d66;
        transform: translate(11px, 7px) scale(1.013);
      }
      14% {
        -webkit-filter:  hue-rotate(165.6deg);
                filter:  hue-rotate(165.6deg);
        background-color: #66ffdb;
        transform: translate(1px, 7px) scale(1.02);
      }
      15% {
        -webkit-filter:  hue-rotate(118.8deg);
                filter:  hue-rotate(118.8deg);
        background-color: #ffb866;
        transform: translate(14px, 10px) scale(1.008);
      }
      16% {
        -webkit-filter:  hue-rotate(54deg);
                filter:  hue-rotate(54deg);
        background-color: #ff66e0;
        transform: translate(-7px, 3px) scale(1.019);
      }
      17% {
        -webkit-filter:  hue-rotate(244.8deg);
                filter:  hue-rotate(244.8deg);
        background-color: #ff66ff;
        transform: translate(3px, -2px) scale(1.025);
      }
      18% {
        -webkit-filter:  hue-rotate(190.8deg);
                filter:  hue-rotate(190.8deg);
        background-color: #78ff66;
        transform: translate(-4px, -11px) scale(1.024);
      }
      19% {
        -webkit-filter:  hue-rotate(280.8deg) contrast(6.04);
                filter:  hue-rotate(280.8deg) contrast(6.04);
        background-color: #66e3ff;
        transform: translate(-13px, -3px) scale(1.05);
      }
      21% {
        -webkit-filter:  saturate(3.7) hue-rotate(277.2deg);
                filter:  saturate(3.7) hue-rotate(277.2deg);
        background-color: #ba66ff;
        transform: translate(5px, 8px) scale(1.008);
      }
      23% {
        -webkit-filter:  hue-rotate(241.2deg) invert(1);
                filter:  hue-rotate(241.2deg) invert(1);
        background-color: #6687ff;
        transform: translate(15px, -10px) scale(1.023);
      }
      24% {
        -webkit-filter:  hue-rotate(248.4deg);
                filter:  hue-rotate(248.4deg);
        background-color: #66a8ff;
        transform: translate(-3px, -3px) scale(1.016);
      }
      25% {
        -webkit-filter:  saturate(2.08) hue-rotate(75.6deg) contrast(4.87) brightness(74%);
                filter:  saturate(2.08) hue-rotate(75.6deg) contrast(4.87) brightness(74%);
        background-color: #66c2ff;
        transform: translate(11px, -11px) scale(1.019);
      }
      26% {
        -webkit-filter:  saturate(5.59);
                filter:  saturate(5.59);
        background-color: #66ffab;
        transform: translate(6px, 11px) scale(1.01);
      }
      29% {
        -webkit-filter:  hue-rotate(118.8deg);
                filter:  hue-rotate(118.8deg);
        background-color: #94ff66;
        transform: translate(15px, -14px) scale(1.013);
      }
      30% {
        -webkit-filter:  hue-rotate(219.6deg);
                filter:  hue-rotate(219.6deg);
        background-color: #ff7366;
        transform: translate(-9px, -6px) scale(1.024);
      }
      31% {
        -webkit-filter:  hue-rotate(64.8deg) contrast(8.74);
                filter:  hue-rotate(64.8deg) contrast(8.74);
        background-color: #ff668a;
        transform: translate(13px, 8px) scale(1.018);
      }
      32% {
        -webkit-filter:  hue-rotate(201.6deg);
                filter:  hue-rotate(201.6deg);
        background-color: #66ff73;
        transform: translate(13px, 8px) scale(1.025);
      }
      33% {
        -webkit-filter:  hue-rotate(151.2deg);
                filter:  hue-rotate(151.2deg);
        background-color: #66ffdb;
        transform: translate(-1px, 7px) scale(1.024);
      }
      36% {
        -webkit-filter:  hue-rotate(86.4deg);
                filter:  hue-rotate(86.4deg);
        background-color: #99ff66;
        transform: translate(9px, 4px) scale(1.019);
      }
      39% {
        -webkit-filter:  hue-rotate(115.2deg) contrast(4.69);
                filter:  hue-rotate(115.2deg) contrast(4.69);
        background-color: #fff766;
        transform: translate(3px, 12px) scale(1.018);
      }
      41% {
        -webkit-filter:  hue-rotate(36deg);
                filter:  hue-rotate(36deg);
        background-color: #66fff7;
        transform: translate(-14px, 2px) scale(1.011);
      }
      42% {
        -webkit-filter:  saturate(3.52) hue-rotate(270deg);
                filter:  saturate(3.52) hue-rotate(270deg);
        background-color: #66ffba;
        transform: translate(-7px, 10px) scale(1.018);
      }
      45% {
        -webkit-filter:  hue-rotate(151.2deg);
                filter:  hue-rotate(151.2deg);
        background-color: #ab66ff;
        transform: translate(-5px, -2px) scale(1.016);
      }
      46% {
        -webkit-filter:  saturate(10) hue-rotate(345.6deg);
                filter:  saturate(10) hue-rotate(345.6deg);
        background-color: #94ff66;
        transform: translate(4px, -4px) scale(1.018);
      }
      49% {
        -webkit-filter:  saturate(9.73) hue-rotate(100.8deg);
                filter:  saturate(9.73) hue-rotate(100.8deg);
        background-color: #666bff;
        transform: translate(-12px, 15px) scale(1.023);
      }
      50% {
        -webkit-filter:  hue-rotate(216deg) brightness(40.5%);
                filter:  hue-rotate(216deg) brightness(40.5%);
        background-color: #d666ff;
        transform: translate(-10px, 9px) scale(1.014);
      }
      51% {
        -webkit-filter:  hue-rotate(342deg);
                filter:  hue-rotate(342deg);
        background-color: #8cff66;
        transform: translate(-1px, -11px) scale(1.02);
      }
      53% {
        -webkit-filter:  saturate(7.3) hue-rotate(50.4deg);
                filter:  saturate(7.3) hue-rotate(50.4deg);
        background-color: #cfff66;
        transform: translate(-7px, 5px) scale(1.014);
      }
      55% {
        -webkit-filter:  saturate(1.9) hue-rotate(309.6deg);
                filter:  saturate(1.9) hue-rotate(309.6deg);
        background-color: #66ffa8;
        transform: translate(-2px, 9px) scale(1.012);
      }
      56% {
        -webkit-filter:  saturate(3.7) hue-rotate(61.2deg) contrast(7.03);
                filter:  saturate(3.7) hue-rotate(61.2deg) contrast(7.03);
        background-color: #66adff;
        transform: translate(-13px, -14px) scale(1.006);
      }
      57% {
        -webkit-filter:  hue-rotate(331.2deg);
                filter:  hue-rotate(331.2deg);
        background-color: #66edff;
        transform: translate(-12px, 3px) scale(1.024);
      }
      58% {
        -webkit-filter:  hue-rotate(244.8deg);
                filter:  hue-rotate(244.8deg);
        background-color: #ff668c;
        transform: translate(-9px, 12px) scale(1.006);
      }
      59% {
        -webkit-filter:  hue-rotate(201.6deg);
                filter:  hue-rotate(201.6deg);
        background-color: #f5ff66;
        transform: translate(-13px, -5px) scale(1.007);
      }
      60% {
        -webkit-filter:  hue-rotate(90deg);
                filter:  hue-rotate(90deg);
        background-color: #66ff9e;
        transform: translate(2px, 1px) scale(1.02);
      }
      61% {
        -webkit-filter:  hue-rotate(248.4deg);
                filter:  hue-rotate(248.4deg);
        background-color: #73ff66;
        transform: translate(-6px, 14px) scale(1.011);
      }
      63% {
        -webkit-filter:  hue-rotate(180deg);
                filter:  hue-rotate(180deg);
        background-color: #ba66ff;
        transform: translate(-11px, -14px) scale(1.011);
      }
      64% {
        -webkit-filter:  hue-rotate(86.4deg);
                filter:  hue-rotate(86.4deg);
        background-color: #80ff66;
        transform: translate(11px, -4px) scale(1.024);
      }
      66% {
        -webkit-filter:  hue-rotate(169.2deg);
                filter:  hue-rotate(169.2deg);
        background-color: #66ffeb;
        transform: translate(11px, 4px) scale(1.016);
      }
      67% {
        -webkit-filter:  saturate(6.58) hue-rotate(147.6deg);
                filter:  saturate(6.58) hue-rotate(147.6deg);
        background-color: #6670ff;
        transform: translate(-8px, -13px) scale(1.012);
      }
      68% {
        -webkit-filter:  saturate(2.89) hue-rotate(68.4deg);
                filter:  saturate(2.89) hue-rotate(68.4deg);
        background-color: #66f5ff;
        transform: translate(4px, -11px) scale(1.018);
      }
      69% {
        -webkit-filter:  hue-rotate(50.4deg);
                filter:  hue-rotate(50.4deg);
        background-color: #ffd666;
        transform: translate(-14px, 6px) scale(1.022);
      }
      70% {
        -webkit-filter:  hue-rotate(241.2deg);
                filter:  hue-rotate(241.2deg);
        background-color: #bfff66;
        transform: translate(6px, 6px) scale(1.007);
      }
      71% {
        -webkit-filter:  hue-rotate(266.4deg) contrast(4.06);
                filter:  hue-rotate(266.4deg) contrast(4.06);
        background-color: #7a66ff;
        transform: translate(-14px, 7px) scale(1.014);
      }
      73% {
        -webkit-filter:  hue-rotate(176.4deg);
                filter:  hue-rotate(176.4deg);
        background-color: #ff66db;
        transform: translate(-1px, 5px) scale(1.019);
      }
      74% {
        -webkit-filter:  hue-rotate(10.8deg);
                filter:  hue-rotate(10.8deg);
        background-color: #668aff;
        transform: translate(-7px, 13px) scale(1.021);
      }
      75% {
        -webkit-filter:  hue-rotate(133.2deg);
                filter:  hue-rotate(133.2deg);
        background-color: #66ff6b;
        transform: translate(-5px, -11px) scale(1.007);
      }
      76% {
        -webkit-filter:  hue-rotate(201.6deg);
                filter:  hue-rotate(201.6deg);
        background-color: #8c66ff;
        transform: translate(11px, 12px) scale(1.011);
      }
      77% {
        -webkit-filter:  hue-rotate(21.6deg);
                filter:  hue-rotate(21.6deg);
        background-color: #ff66c9;
        transform: translate(6px, 10px) scale(1.008);
      }
      79% {
        -webkit-filter:  saturate(4.69) hue-rotate(140.4deg);
                filter:  saturate(4.69) hue-rotate(140.4deg);
        background-color: #66e8ff;
        transform: translate(1px, 10px) scale(1.018);
      }
      81% {
        -webkit-filter:  hue-rotate(158.4deg);
                filter:  hue-rotate(158.4deg);
        background-color: #6694ff;
        transform: translate(15px, 12px) scale(1.019);
      }
      83% {
        -webkit-filter:  saturate(3.79) hue-rotate(183.6deg);
                filter:  saturate(3.79) hue-rotate(183.6deg);
        background-color: #f566ff;
        transform: translate(-9px, -5px) scale(1.015);
      }
      84% {
        -webkit-filter:  hue-rotate(201.6deg);
                filter:  hue-rotate(201.6deg);
        background-color: #69ff66;
        transform: translate(13px, -11px) scale(1.017);
      }
      85% {
        -webkit-filter:  hue-rotate(32.4deg);
                filter:  hue-rotate(32.4deg);
        background-color: #ffdb66;
        transform: translate(1px, 1px) scale(1.009);
      }
      86% {
        -webkit-filter:  hue-rotate(147.6deg);
                filter:  hue-rotate(147.6deg);
        background-color: #a666ff;
        transform: translate(0px, 1px) scale(1.008);
      }
      88% {
        -webkit-filter:  hue-rotate(298.8deg);
                filter:  hue-rotate(298.8deg);
        background-color: #de66ff;
        transform: translate(7px, 3px) scale(1.006);
      }
      91% {
        -webkit-filter:  hue-rotate(302.4deg);
                filter:  hue-rotate(302.4deg);
        background-color: #ff8a66;
        transform: translate(13px, -10px) scale(1.023);
      }
      92% {
        -webkit-filter:  hue-rotate(165.6deg);
                filter:  hue-rotate(165.6deg);
        background-color: #96ff66;
        transform: translate(6px, -2px) scale(1.02);
      }
      93% {
        -webkit-filter:  hue-rotate(25.2deg) invert(1);
                filter:  hue-rotate(25.2deg) invert(1);
        background-color: #ff66ad;
        transform: translate(-3px, -3px) scale(1.011);
      }
      94% {
        -webkit-filter:  hue-rotate(345.6deg);
                filter:  hue-rotate(345.6deg);
        background-color: #ff6670;
        transform: translate(-8px, 4px) scale(1.009);
      }
      95% {
        -webkit-filter:  hue-rotate(334.8deg) brightness(54.5%);
                filter:  hue-rotate(334.8deg) brightness(54.5%);
        background-color: #d6ff66;
        transform: translate(7px, 7px) scale(1.015);
      }
      96% {
        -webkit-filter:  hue-rotate(352.8deg);
                filter:  hue-rotate(352.8deg);
        background-color: #6670ff;
        transform: translate(-5px, 7px) scale(1.025);
      }
      98% {
        -webkit-filter:  hue-rotate(64.8deg);
                filter:  hue-rotate(64.8deg);
        background-color: #bf66ff;
        transform: translate(3px, 12px) scale(1.012);
      }
      100% {
        -webkit-filter:  hue-rotate(234deg) contrast(5.5);
                filter:  hue-rotate(234deg) contrast(5.5);
        background-color: #ff66b3;
        transform: translate(4px, -12px) scale(1.017);
      }
    }

    .ie-warning {
      display: none;
    }
    @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
       .ie-warning {
            display: block;
            background: red;
            padding: 60px;
            text-align: center;
       }
    }

    .Typist .Cursor {
        display: inline-block;
    }
    .Typist .Cursor--blinking {
        opacity: 1;
        animation: blink 1s linear infinite;
    }
    @keyframes blink {
      0% { opacity:1; }
      50% { opacity:0; }
      100% { opacity:1; }
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
      <PageTransition
        defaultStyle={{
             transition: 'opacity 200ms ease',
             opacity: '0'
           }}
           transitionStyles={{
             entering: { 
              animation: 'spazz 4s steps(1) infinite',
              textTransform: 'uppercase',
              opacity: '.8'
               },
             entered: { animation: 'none', opacity: '1' },
             exiting: { animation: 'spazz 4s steps(1) infinite' },
           }}
           transitionTime={400}>
        <div className="wrapper">
        <div className="ie-warning">You are using an outdated browser. Some features may be missing. Update to the latest version of Chrome, Firefox, or Safari for the full experience.</div>
        {header}
        {children}
        </div>
        {footer}
      </PageTransition>
      </div>
    )
  }
}

export default Template
