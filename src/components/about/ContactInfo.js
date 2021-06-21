import React, { Component } from 'react'
import ContactCard from './ContactCard'

export class ContactInfo extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m5 center">
                    <h3>Contact</h3>
                    <hr className=" black" style={{width: '40px'}} />
                </div>
                <div className="col s12 m7">
                    <div className="row">
                        <ContactCard 
                            city="Harare"
                            line1Address="14th ave CBD"
                            phone="0456788"
                        />
                        <ContactCard 
                            city="Bulawayo"
                            line1Address="14th ave CBD"
                            phone="0456788"
                        />
                        <ContactCard 
                            city="Hwange"
                            line1Address="14th ave CBD"
                            phone="0456788"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactInfo
