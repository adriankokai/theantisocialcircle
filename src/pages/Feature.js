import React, { Component } from 'react'
import Socials from '../components/marketing/Socials'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

export class Feature extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Socials />
                <Footer />
            </div>
        )
    }
}

export default Feature
