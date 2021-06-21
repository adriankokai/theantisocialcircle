import React, { Component } from 'react'

export class ContactCard extends Component {
    render() {
        return (
            <div className="col s6">
                <div class="row">
                    <div class="col s12">
                        <div class="card z-depth-0">
                            <div class="card-content black-text">
                            <span class="card-title ">{this.props.city}</span>
                            <p>{this.props.line1Address} </p>
                            <p>{this.props.phone} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactCard
