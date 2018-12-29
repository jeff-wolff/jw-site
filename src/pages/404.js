import React from 'react'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
    <div>
    <Helmet
      title={`⚠ Page Not Found`}
      >
    <body className="error-page"/>
    </Helmet>
        <div className="bs-wrapper">
            <div className="bs-content">
                <h1>Windows</h1>
                <p>A fatal exception 0E has occurred at 0028:C193AFC4. The current application will be terminated.</p>
                <ul>
                    <li>Press any key to terminate the current application.</li>
                    <li>Press CTRL+ALT+DEL again to restart your computer. You will lose any unsaved information in all applications.</li>
                </ul>
                <p className="text-center">Press any key to continue _</p>
            </div>
        </div>
    </div>
)

export default NotFoundPage
