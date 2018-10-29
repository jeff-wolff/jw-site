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
            <div className="home-container">
              {/*<div className={classNames('home-lockup', this.state.hover ? 'hover' : '')} onClick={this.handleClick}>*/}
                <p>User Interface Designer & Web Developer</p>
              {/*</div>*/}
              <Button to="/work/">View My Work</Button>
            </div>
        );
    }
}

export default HomeInfo
