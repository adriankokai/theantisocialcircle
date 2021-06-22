import React, { Component } from 'react';
import ho from '../../images/ho.jpg';

export class PersonalInfo extends Component {
    render() {
        return (
            <div className="row">
                <img src={ho} className="col s12 m12 l7" />
                <div className="col s12 m12 l5" style={{paddingTop: '11vh'}}>
                    <div className="row" style={{padding: '5px'}}>
                        <h4>Enter your details below:</h4>
                        <input 
                            name="firstName"
                            value={this.props.firstName}
                            onChange={this.props.handleChange}
                            placeholder="first name"
                            className="col s12 m5"
                        />
                        <input 
                            name="lastName"
                            value={this.props.lastName}
                            onChange={this.props.handleChange}
                            placeholder="last name"
                            className="col s12 m6 right"
                        />
                        <input 
                            name="address"
                            value={this.props.address}
                            onChange={this.props.handleChange}
                            placeholder="address"
                            className="col s12"
                        />
                        <input 
                            name="email"
                            value={this.props.email}
                            onChange={this.props.handleChange}
                            placeholder="email"
                            className="col s12"
                        />
                        <input 
                            name="facebook (optional)"
                            value={this.props.facebook}
                            onChange={this.props.handleChange}
                            placeholder="facebook name"
                            className="col s12 m5"
                        />
                        <input 
                            name="instagram (optional)"
                            value={this.props.instagram}
                            onChange={this.props.handleChange}
                            placeholder="instagram handle"
                            className="col s12 m6 right"
                        />
                        <input 
                            name="twitter (optional)"
                            value={this.props.twitter}
                            onChange={this.props.handleChange}
                            placeholder="twitter handle"
                            className="col s12"
                        />
                        <input 
                            name="category"
                            value={this.props.category}
                            onChange={this.props.handleChange}
                            placeholder="category (e.g Artist, Dancer e.t.c)"
                            className="col s12 "
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalInfo
