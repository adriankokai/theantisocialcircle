import React, { Component } from 'react';
import smb from '../../images/smb.jpg';

export class SocialMediaBoost extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m5 center" style={{paddingTop:'11vh'}}>
                    <h3>Social Media Boost</h3>
                    <hr className=" black" style={{width: '40px'}} />
                    <h2 className='teal-text' >USD5 or RTGS500</h2>
                    <div className="row center">
                        <p className="col s4 ">twitter</p>
                        <p className="col s4 ">facebook</p>
                        <p className="col s4">instagram</p>
                    </div>
                </div>
                <img src={smb} className="col s12 m7" />
            </div>
        )
    }
}

export default SocialMediaBoost
