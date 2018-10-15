import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames';
import Button from '../Button/button.js'
import './home-info.css'

class HomeInfo extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            hover: false
        };
    }

    handleClick() {
       this.setState({
            hover: !this.state.hover
       });
    }

    render() {
        return (
            <div className="home-container centered-container">
              <div className={classNames('home-lockup', this.state.hover ? 'hover' : '')} onClick={this.handleClick}>
                <h1 className="home-logo">Jeff Wolff</h1>
                <p>User Interface Engineer + Web Developer</p>
              </div>
              {/*<div className="home-btn-tray"><Button small to="/work/" className="home-btn">Work</Button><Button small to="/posts/" className="home-btn">Posts</Button></div>*/}
            </div>
        );
    }
}

export default HomeInfo
