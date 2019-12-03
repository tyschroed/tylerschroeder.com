import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>Hi, I am <strong>Tyler Schroeder</strong>.<br />
                    I am an engineering manager and<br /> full stack web developer<br /> based out of Bellingham, WA.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
