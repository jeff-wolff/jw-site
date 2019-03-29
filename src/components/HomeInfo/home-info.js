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
                <h2>Website developer based in San Diego, CA.  <Link to="/work/">Work &rarr;</Link></h2>
                {/*<h2>I just launched a new site. <Link to="/new-site/">Read &rarr;</Link></h2>*/}

                <div className="home-logo">
                  <h1 className="title">JEFF WOLFF_</h1>
                </div>
            </div>
        );
    }
}

export default HomeInfo
