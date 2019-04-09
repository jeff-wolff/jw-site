import React from 'react'
import Link from 'gatsby-link'
import Typist from 'react-typist';

// import Button from '../Button/button.js'
import './home-info.css'

class HomeInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="home-container container">
                <h2 className="latest-info h3">
                    <Typist 
                    startDelay={3000}
                    avgTypingDelay={60}
                    cursor={{
                        
                    }}
                    >
                        Front-end website developer based in San Diego, CA.  <Link to="/about/">About &rarr;</Link>&nbsp;
                        <Typist.Backspace count={61} delay={6000} />
                        I just launched a new site. <Link to="/welcome/">Read &rarr;</Link>&nbsp;
                        <Typist.Backspace count={36} delay={6000} />
                        Check out my latest websites. <Link to="/work/">Work &rarr;</Link>&nbsp;
                        <Typist.Backspace count={37} delay={6000} />
                        Front-end website developer based in San Diego, CA.  <Link to="/about/">About &rarr;</Link>&nbsp;
                        <Typist.Backspace count={61} delay={6000} />
                        I just launched a new site. <Link to="/welcome/">Read &rarr;</Link>&nbsp;
                        <Typist.Backspace count={36} delay={6000} />
                        Check out my latest websites. <Link to="/work/">Work &rarr;</Link>&nbsp;
                    </Typist>
                </h2>
                <div className="home-logo">
                  <h1 className="title">
                    <Typist 
                    startDelay={1000}
                    avgTypingDelay={150}
                    cursor={{
                        blink: false,
                        element: '_'
                    }}>
                        JEFF WOLFF
                    </Typist>
                  </h1>
                </div>
            </div>
        );
    }
}

export default HomeInfo
