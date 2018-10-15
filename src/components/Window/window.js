import React from 'react'
import { Link, graphql } from 'gatsby'
import Rnd from 'react-rnd';
import classNames from 'classnames';

import './window.css'

const windowGlobal = typeof window !== 'undefined' && window;

var globalZIndex = 1;
var positions = [];

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
      bgColor: this.props.bgColor ? this.props.bgColor : "var(--bg)",
      titleColor: this.props.titleColor ? this.props.titleColor : "var(--window)",
      borderColor: this.props.borderColor ? this.props.borderColor : "var(--window)"
    }

    this.collision = this.collision.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  collision() {
      var x = Math.floor(Math.random() * Math.floor((windowGlobal.innerWidth - this.state.width))),
          y = Math.floor(Math.random() * Math.floor((windowGlobal.innerHeight - this.state.height - 103)));
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

  componentDidMount() {
    this.collision();
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
            backgroundColor: this.state.bgColor,
            borderColor: 'rgb('+this.state.borderColor+')',
            zIndex: globalZIndex
          }}
          bounds='.wrapper'
          minWidth={this.props.minWidth ? this.props.minWidth : 200}
          minHeight={!this.state.isCollapsed ? (this.props.minHeight ? this.props.minHeight : 86) : 56}
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
            bottomRight: 'window-resizer'
          }}
          resizeHandleStyles={{
            bottom: {'display':'none'},
            bottomLeft: {'display':'none'},
            bottomRight: {
              'width':'26px',
              'height':'26px',
              'bottom':'0px',
              'right':'0px',
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
          }}
          onDragStart={(e, d) => { 
            globalZIndex = globalZIndex+1;
            this.setState({ dragging: true })
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
          onResizeStop={() => { this.setState({ resizing: false }) }}
      >
          <div className="window-title"
              style={{
                  color: 'rgb('+this.state.titleColor+')'
              }}
          >
            <div className="content">
              {this.props.title}  - <small>{Math.round(this.state.width)}x{Math.round(this.state.height)}</small>
            </div>
            <label 
              htmlFor={this.props.id}
              className="window-collapse"
              style={{
                // borderLeft: '2px solid rgba('+this.state.borderColor+',1)',
                // backgroundColor: this.state.bgColor,
                color: this.state.borderColor
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
          </div>
          <div className="window-resizer-icon" style={{ color: 'rgb('+this.state.titleColor+')' }}>&#9499;</div>
          <div className="window-content"
          >
            {this.props.children}
          </div>
      </Rnd>
    )
  }
}
export default Window
