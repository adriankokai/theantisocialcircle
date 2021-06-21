import React, { Component } from 'react'
import ig from '../../images/ig.jpg'
import tw from '../../images/tw.png'
import fb from '../../images/fb.jpg'
import yt from '../../images/yt.png'

export class Socials extends Component {
    render() {
        return (
            <div className="center">
                <p>follow us</p>
                <hr className=" black" style={{width: '40px'}} />
                <div className="row">
                    <img src={ig} className="col s2 m1 offset-s2 offset-m4 materialboxed" />
                    <img src={tw} className="col s2 m1 materialboxed" />
                    <img src={fb} className="col s2 m1 materialboxed" />
                    <img src={yt} className="col s2 m1 materialboxed" />
                </div>
            </div>
        )
    }
}

export default Socials
