import React, { Component } from 'react'

export class TvFeatures extends Component {
    render() {
        return (
            <div className="center">
                <h4>Tv Channel Features</h4>
                <div className="row">
                    <div className="col s6 m3">
                        <h5 style={boldText} >MTV BASE</h5>
                        <p>$30</p>
                    </div>
                    <div className="col s6 m3">
                        <h5 style={boldText}>CHANNEL O</h5>
                        <p>$30</p>
                    </div>
                    <div className="col s6 m3">
                        <h5 style={boldText}>TRACE</h5>
                        <p>$30</p>
                    </div>
                    <div className="col s6 m3">
                        <h5 style={boldText}>SOUND CITY</h5>
                        <p>$30</p>
                    </div>
                </div>
            </div>
        )
    }
}

const boldText = {
    fontWeight: 'bold'
}

export default TvFeatures
