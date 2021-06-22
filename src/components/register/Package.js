import React, { Component } from 'react'

export class Package extends Component {
    render() {
        return (
            <a onClick={() => this.props.select(this.props.name)}>
                <div class="col s6 m4">
                    <div 
                        class=
                        {
                            this.props.selected ? 
                            "card blue-grey lighten-2" 
                            : 
                            "card blue-grey darken-1"
                        }
                    >
                        <div class="card-content white-text">
                            <span class="card-title center">{this.props.name}</span>
                            <p className="center">
                                <p>{this.props.line1} </p>
                                <p>{this.props.line2} </p>
                                <p>{this.props.line3} </p>
                                <p>{this.props.line4} </p>
                                <p>{this.props.line5} </p>
                                <p>{this.props.line6} </p>
                                <p>{this.props.line7} </p>
                                <p>{this.props.line8} </p>
                                <p>{this.props.line9} </p>
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}

export default Package
