import React, { Component } from 'react'
import blog from "../../images/blog1.jpg"

export class Welcome extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m4 center">
                    <span className="black white-text" >Our Blog</span>
                    <h3 style={{fontWeight: 'bold'}}>
                        WELCOME TO THE ANTISOCIAL CIRCLE BLOG
                    </h3>
                    <a style={{marginBottom: '10px'}} className="btn waves-effect">write an article</a>
                </div>
                <img style={imgStyles} className="col s12 m8" src={blog} />
            </div>
        )
    }
}

const imgStyles = {
    
}

export default Welcome
