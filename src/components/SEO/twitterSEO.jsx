import React from 'react'
import Helmet from 'react-helmet'

const TwitterSEO = ({username}) => (
  <Helmet>
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:site" content={username}/>
    <meta name="twitter:creator" content={username}/>
  </Helmet>
)

export default TwitterSEO