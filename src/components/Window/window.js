import React from 'react'
import { Link, graphql } from 'gatsby'
import Rnd from 'react-rnd';
import classNames from 'classnames';

import './window.css'

const windowGlobal = typeof window !== 'undefined' && window;

let globalZIndex = 1;
let count = 0;
let positions = [];
let hasPoints = false;

class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width ? this.props.width : 280,
      height: this.props.height ? this.props.height : 280,
      lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight ? this.props.lockAspectRatioExtraHeight : 0,
      lockAspect: this.props.lockAspect ? this.props.lockAspect : false,
      oldHeight: 0,
      x: 0,
      y: 0,
      dragging: false,
      resizing: false,
      enableResize: this.props.enableResize === undefined || this.props.enableResize == true ? true : false,
      isCollapsed: this.props.isCollapsed ? this.props.isCollapsed : false,
      bgColor: this.props.bgColor ? this.props.bgColor : "var(--bg-faded)",
      titleColor: this.props.titleColor ? this.props.titleColor : "var(--window-title)",
      borderColor: this.props.borderColor ? this.props.borderColor : "var(--window-border)",
      secondaryColor: this.props.secondaryColor ? this.props.secondaryColor : "var(--secondary)",
      coverVideoURL: this.props.coverVideo ? this.props.coverVideo : "",
      favIconURL: this.props.favIcon ? this.props.favIcon : ""
    }

    this.theme = this.theme.bind(this);
    this.collision = this.collision.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.handlePreventTouchmoveWhenPanning = this.handlePreventTouchmoveWhenPanning.bind(this);
  }

  defaultTheme() {
    // setTimeout(function(){
      document.documentElement.style.setProperty('--bg', '#151515');
      document.documentElement.style.setProperty('--bg-faded', '21, 21, 21');
      document.documentElement.style.setProperty('--primary', '#ff0');
      document.documentElement.style.setProperty('--primary-faded', 'rgba(255,255,0,.87)');
      document.documentElement.style.setProperty('--secondary', '#2828ef');
      document.documentElement.style.setProperty('--secondary-faded', '#1414ab');
      document.documentElement.style.setProperty('--window-border', '190,190,190');
      document.documentElement.style.setProperty('--window-title', '0,0,0');
      document.documentElement.style.setProperty('--footer-bg', '#111');
      let metaThemeColor = document.querySelector("meta[name=theme-color]");
      metaThemeColor.setAttribute("content", getComputedStyle(document.documentElement).getPropertyValue('--bg'));
    // },125);
  }

  theme() {
    // console.log('theme changed');
    // setTimeout(function(){
      document.documentElement.style.setProperty('--bg', this.props.tbg);
      document.documentElement.style.setProperty('--bg-faded', this.props.tbgf);
      document.documentElement.style.setProperty('--primary', this.props.tp);
      document.documentElement.style.setProperty('--primary-faded', this.props.tpf);
      document.documentElement.style.setProperty('--secondary', this.props.ts);
      document.documentElement.style.setProperty('--secondary-faded', this.props.tsf);
      document.documentElement.style.setProperty('--window-border', this.props.twb);
      document.documentElement.style.setProperty('--window-title', this.props.twt);
      document.documentElement.style.setProperty('--footer-bg', this.props.tfbg);
      let metaThemeColor = document.querySelector("meta[name=theme-color]");
      metaThemeColor.setAttribute("content", getComputedStyle(document.documentElement).getPropertyValue('--bg'));
    // }.bind(this),125);
  }

  collision() {
      let x = Math.floor(Math.random() * Math.floor((windowGlobal.innerWidth - this.state.width - 32))),
          y = count+(this.props.yOffset ? this.props.yOffset :  Math.floor(Math.random() * Math.floor((windowGlobal.innerHeight - this.state.height - 32))));
          if (this.props.xOffset) {
            while(this.props.xOffset > x) {
              x = this.props.xOffset;
            }
          }
          // console.log(x,y);
          // y = Math.floor(Math.random() * Math.floor((windowGlobal.innerHeight - this.state.height - 103)));
      positions.push({
        width: this.state.width,
        height: this.state.height,
        x: x,
        y: y
      })
      setTimeout(() => {
        this.setState({
          x: x,
          y: y
        });
      }, 10);
  }

  toggleCollapse() {
    const currentState = this.state.isCollapsed;
    this.setState({ isCollapsed: !currentState });
  }

  handlePreventTouchmoveWhenPanning(event) {
   if (this.state.dragging || this.state.resizing) {
     event.preventDefault();
   }
  };

  componentDidMount() {
    this.collision();
    count = Math.floor(100 + Math.random() * Math.floor(200));
    window.document.body.addEventListener('touchmove', this.handlePreventTouchmoveWhenPanning, {
       passive: false
     });
  }

  componentWillUnmount () {
   window.document.body.removeEventListener('touchmove', this.handlePreventTouchmoveWhenPanning, {
     passive: false
   });
  }

  render() {
    return(
      <Rnd  
          className={
            classNames(
                this.props.className, 
                this.state.resizing ? "react-draggable-resizing" : "", 
                this.state.dragging ? "dragging" : "", 
                this.state.enableResize ? "" : "no-resize",
                this.state.isCollapsed ? "collapsed" : ""
              )
          }
          key={this.props.id}
          default={{
            width: this.state.width,
            height: this.state.height,
            x: this.state.x,
            y: this.state.y
          }}
          style={{
            backgroundColor: 'rgb('+this.state.borderColor+')',
            zIndex: globalZIndex
          }}
          bounds={this.props.bounds ? this.props.bounds : "parent"}
          minWidth={this.props.minWidth ? this.props.minWidth : 200}
          minHeight={!this.state.isCollapsed ? (this.props.minHeight ? this.props.minHeight : 86) : 22}
          maxWidth={this.props.maxWidth}
          lockAspectRatioExtraHeight={this.state.lockAspectRatioExtraHeight}
          lockAspectRatio={this.state.lockAspect}
          size={{
            width: this.state.width,
            height: !this.state.isCollapsed ? this.state.height : 0
          }}
          position={{
            x: this.state.x,
            y: this.state.y
          }}
          resizeHandleClasses={{
            bottomLeft: 'window-resizer',
            bottomRight: 'window-resizer'
          }}
          resizeHandleStyles={{
            bottom: {'display':'none'},
            bottomLeft: {
              'width':'32px',
              'height':'32px',
              'bottom':'-4px',
              'left':'-4px',
              'color': this.state.borderColor
            },
            bottomRight: {
              'width':'32px',
              'height':'32px',
              'bottom':'-4px',
              'right':'-4px',
              'color': this.state.borderColor
            },
            left: {'display':'none'},
            right: {'display':'none'},
            top: {'display':'none'},
            topLeft: {'display':'none'},
            topRight: {'display':'none'},
          }}
          enableResizing={{ bottomRight: this.state.enableResize }}
          onDrag={(e, d) => { 
            this.setState({ x: d.x, y: d.y })
            if (this.props.theme && this.state.dragging) {
              this.theme(); 
            }
          }}
          onDragStart={(e, d) => { 
            globalZIndex = globalZIndex+1;
            this.setState({ dragging: true })
            if (this.refs.coverVid) {
              this.refs.coverVid.autoplay = true;
              let playPromise = this.refs.coverVid.play();
             
              if (playPromise !== undefined) {
                playPromise.then(_ => {

                })
                .catch(error => {
                  // Auto-play was prevented
                });
              }
            }
            
          }}
          onDragStop={(e, d) => { 
            this.setState({ dragging: false })
          }}
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              width: ref.offsetWidth,
              height: ref.offsetHeight,
              ...position,
            });
          }}
          onResizeStart={() => { this.setState({ resizing: true }) }}
          onResizeStop={() => { 
            this.setState({ resizing: false }) 
          }}
          onMouseEnter={() => { 
            if (this.refs.coverVid) {
              let playPromise = this.refs.coverVid.play();
              if (playPromise !== undefined) {
                playPromise.then(_ => {
                  this.refs.coverVid.autoplay = true;
                })
                .catch(error => {
                  // Auto-play was prevented
                });
              }
            } 
            if (this.props.theme) {
              this.theme(); 
            }
          }}
          onMouseLeave={() => { 
            if (this.refs.coverVid) {
              this.refs.coverVid.pause();
            } 
            if (this.props.theme) {
              this.defaultTheme(); 
            }
          }}
          onTouchStart={() => { 
            if (this.props.theme && !this.state.dragging) {
              this.theme(); 
            }
          }}
      >
          <div className="window-title"
              style={{
                  color: 'rgb('+this.state.titleColor+')',
                  backgroundColor: this.state.primaryColor,
              }}
          >
            <div className="content">
              {/*<small>{Math.round(this.state.width)}x{Math.round(this.state.height)}</small> - */}
              {this.state.favIconURL ? <img src={this.state.favIconURL} className="favicon" /> : "" }
              {this.props.title}
            </div>
          </div>
          <label 
            htmlFor={this.props.id}
            className="window-collapse"
            style={{
              // borderLeft: '2px solid rgba('+this.state.borderColor+',1)',
              // backgroundColor: this.state.bgColor,
              color: 'rgb('+this.state.titleColor+')'
            }}
            >
            <input 
              type="checkbox"
              id={this.props.id}
              onChange={this.toggleCollapse}
              checked={this.state.isCollapsed ? "checked" : ""}
             />
            <span className="icon"></span>
          </label>
          {/*<div className="window-resizer-icon" style={{ color: 'rgb('+this.state.titleColor+')' }}>&#9499;</div>*/}
          <div className="window-content" style={{ 
                  backgroundColor: 'rgba('+this.state.bgColor+',.62)'
              }}
          >
            {this.props.children}
          </div>
          {this.state.coverVideoURL ? <div className="window-video">
            <video muted loop playsInline ref="coverVid">
              <source src={this.state.coverVideoURL} type="video/mp4" />
            </video>
          </div> : ""}
      </Rnd>
    )
  }
}
export default Window
