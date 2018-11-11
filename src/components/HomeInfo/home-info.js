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
                <p>Website developer based in San Diego, CA.</p>
            </div>
        );
    }
}

export default HomeInfo
