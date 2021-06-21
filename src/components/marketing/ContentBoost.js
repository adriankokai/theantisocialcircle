import React, { Component } from 'react';
import cb from '../../images/cb.jpg';

export class ContentBoost extends Component {
    render() {
        return (
            <div className="row">
                <img src={cb} className="col s12 m7" />
                <div className="col s12 m5 center" style={{paddingTop: '11vh'}}>
                    <h3>Content Boost</h3>
                    <hr className=" black" style={{width: '40px'}} />
                    <h2 className="teal-text" >USD5 or RTGS500</h2>
                    <div className="row">
                        <p className="col s4">YouTube</p>
                        <p className="col s4">Apple Music</p>
                        <p className="col s4">Spotify</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentBoost
