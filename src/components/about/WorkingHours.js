import React, { Component } from 'react'
import whrs from '../../images/whrs.jpg'

export class WorkingHours extends Component {
    render() {
        return (
            <div className="row">
                <img className="col s12 m7" src={whrs} />
                <div className="col s12 m5" style={{paddingTop: '11vh'}} >
                    <span>working hours</span>
                    <div className="row ">
                        <h3 className="col blue-text">
                            mon-fri
                        </h3>
                        <h3 className="col " >0930 - 1700</h3>
                    </div>
                    <div className="row">
                        <h3 className="col blue-text">
                            sat & sun
                        </h3>
                        <h3 className="col " >0930 - 1400</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkingHours
