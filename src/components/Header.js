import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <img class="image avatar" src={avatar} alt="Tyler Schroeder avatar" />
          <h1>
            Hi, I am <strong>Tyler Schroeder</strong>.<br />
            I am a tech lead &amp;
            <br />
            web application developer
            <br /> based out of Bellingham, WA.
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
