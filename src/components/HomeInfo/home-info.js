import React from 'react'
import Link from 'gatsby-link'
import Typist from 'react-typist';

import './home-info.css'

class HomeInfo extends React.Component {
  render() {
    return (
      <div className="home-container container">
        <h2 className="latest-info h3">
          <Typist 
          startDelay={2500}
          avgTypingDelay={65}
          cursor={{
              
          }}
          >
            Front-end website developer based in San Diego, CA.  <Link to="/about/">About Me &rarr;</Link>&nbsp;
            <Typist.Backspace count={64} delay={10000} />
            I just launched a new site. <Link to="/welcome/">Read Post &rarr;</Link>&nbsp;
            <Typist.Backspace count={40} delay={10000} />
            Check out my latest websites. <Link to="/work/">Work &rarr;</Link>&nbsp;
            <Typist.Backspace count={37} delay={10000} />
            Front-end website developer based in San Diego, CA.  <Link to="/about/">About Me &rarr;</Link>&nbsp;
            <Typist.Backspace count={64} delay={10000} />
            I just launched a new site. <Link to="/welcome/">Read Post &rarr;</Link>&nbsp;
            <Typist.Backspace count={40} delay={10000} />
            Check out my latest websites. <Link to="/work/">Work &rarr;</Link>&nbsp;
          </Typist>
        </h2>
        <div className="home-logo">
          <h1 className="title">
            <Typist 
            startDelay={1000}
            avgTypingDelay={130}
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
