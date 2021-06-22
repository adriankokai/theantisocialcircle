import React, { Component } from 'react'

export class Large extends Component {
    render() {
        return (
            <div className='navbar-fixed'>
                <nav className="z-depth-0">
                    <div class="nav-wrapper white ">
                        <ul id="nav-mobile" class="left hide-on-med-and-down">
                            <li><a href="/" style={logoStyles} class="black-text">THE ANTISOCIAL CIRCLE</a></li>
                            {
                                this.props.isAuthenticated ?

                                <React.Fragment>
                                    <li><a href="blog" className="black-text">Blog</a></li>
                                    <li><a href="feature" className="black-text">Feature</a></li>
                                    <li><a href="marketing" className="black-text">Marketing</a></li>
                                    <li><a href="about" className="black-text">About</a></li>
                                </React.Fragment>

                                :

                                null
                            }
                        </ul>
                        <ul id="nav-mobile" className="right">
                            {
                                this.props.isAuthenticated ?

                                <React.Fragment>
                                    <li><a onClick={this.props.logout} className="btn waves-effect" >
                                        {
                                            this.props.loading ?

                                            "loadin..."

                                            :

                                            "logout"
                                        }
                                    </a> </li>
                                </React.Fragment>

                                :

                                <React.Fragment>
                                    <li><a href='login' className="btn waves-effect">login</a> </li>
                                    <li><a href='register' className="btn waves-effect">register</a> </li>
                                </React.Fragment>
                            }
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
