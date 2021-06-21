import React, { Component } from 'react'
import WorkingHours from '../components/about/WorkingHours'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import rap from '../images/rap.jpeg'
import Bio from '../components/about/Bio'
import ContactInfo from '../components/about/ContactInfo'

export class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div style={containerStyles} >
                    <img src={rap} style={imageStyles} />
                    <h2 style={imageTextStyles} className="blue-text  z-depth-3" >
                        THE ANTISOCIAL CIRCLE
                    </h2>
                </div>
                <ContactInfo />
                <WorkingHours />
                <Bio />
                <Footer />
            </div>
        )
    }
}

const imageStyles = {
    width: '100%',
    maxHeight: '100vh',
    objectFit: 'cover'
}

const containerStyles = {
    position: 'relative',
    textAlign: 'center',
    color: 'white'
}

const imageTextStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

export default About
