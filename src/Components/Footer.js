import React, { Component } from 'react'

const Footer = (props) => {

  var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

  return(
    <div>
    <div className="footer">
      <div className="container">
        <h1>Made with Love and React.js by Roman Mulladzhanov</h1>
      </div>
    </div>
    </div>
  )
}

export default Footer;
