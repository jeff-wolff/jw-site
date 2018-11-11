import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames';
// import Button from '../Button/button.js'
import './home-info.css'

class HomeInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-container container">
                <p>I create websites that expand multiple devices, engage the audience, and are easy-to-use.</p>
                <p>I'm a Website Developer based in San Diego, CA</p>
            </div>
        );
    }
}

export default HomeInfo
