import React from 'react'
import { Link, graphql } from 'gatsby'
import Rnd from 'react-rnd';
import classNames from 'classnames';
import Window from '../Window/window.js'

const windowGlobal = typeof window !== 'undefined' && window;

let globalZIndex = 1;
let positions = [];

class BlankWindow extends Window {
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
    }
  }
  collision() {
      let x =  Math.floor(Math.random() * Math.floor(windowGlobal.innerWidth - this.state.width - 50)),
          y = (this.props.yOffset ? this.props.yOffset :  Math.floor(Math.random() * Math.floor(windowGlobal.innerHeight - this.state.height)));
      if (this.props.xOffset) {
        while(this.props.xOffset > x) {
          x = this.props.xOffset;
        }
      }
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
      }, 600);
  }
  handlePreventTouchmoveWhenPanning(event) {
   if (this.state.dragging || this.state.resizing) {
     event.preventDefault();
   }
  };
  componentDidMount() {
    this.collision();
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
            // backgroundColor: 'rgb('+this.state.borderColor+')',
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
          resizeHandleStyles={{
            bottomLeft: {
              'bottom':'-6px',
              'left':'-6px',
              'width': '32px',
              'height': '32px'
            },
            bottomRight: {
              'bottom':'-6px',
              'right':'-6px',
              'width': '32px',
              'height': '32px'
            },
            topLeft: {
              'top':'-6px',
              'left':'-6px',
              'width': '32px',
              'height': '32px'
            },
            topRight: {
              'top':'-6px',
              'right':'-6px',
              'width': '32px',
              'height': '32px'
            }
          }}
          resizeHandleClasses={{
            bottomLeft: 'window-resizer-2',
            topRight: 'window-resizer-2',
            bottomRight: 'window-resizer',
            topLeft: 'window-resizer',
            bottom: 'window-resizer-3',
            top: 'window-resizer-3',
            left: 'window-resizer-4',
            right: 'window-resizer-4',
          }}
          enableResizing={{bottom: this.state.enableResize, bottomLeft: this.state.enableResize, bottomRight: this.state.enableResize, left: this.state.enableResize, right: this.state.enableResize, top: this.state.enableResize, topLeft: this.state.enableResize, topRight: this.state.enableResize }}
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
          <div>{this.props.children}</div>
      </Rnd>
    )
  }
}
export default BlankWindow
