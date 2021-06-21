import React, { Component } from 'react'

export class Medium extends Component {
    render() {
        return (
            <div className='navbar-fixed'>
                <nav className="z-depth-0">
                    <div class="nav-wrapper white ">
                        <ul id="nav-mobile">
                            <li><a href="/" style={logoStyles} className="black-text">
                                THE ANTISOCIAL CIRCLE
                            </a></li>
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
    paddingRight: '30px'
}

export default Medium
