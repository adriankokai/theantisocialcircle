import React, { Component } from 'react'

export class Large extends Component {
    render() {
        return (
            <div className='navbar-fixed'>
                <nav className="z-depth-0">
                    <div class="nav-wrapper white ">
                        <ul id="nav-mobile" class="left hide-on-med-and-down">
                            <li><a href="/" style={logoStyles} class="black-text">THE ANTISOCIAL CIRCLE</a></li>
                            <li><a href="blog" className="black-text">Blog</a></li>
                            <li><a href="feature" className="black-text">Feature</a></li>
                            <li><a href="marketing" className="black-text">Marketing</a></li>
                            <li><a href="about" className="black-text">About</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const logoStyles = {
    fontWeight: 'bold',
    paddingRight: '20px',
}

export default Large
