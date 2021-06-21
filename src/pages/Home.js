import React, { Component } from 'react'
import Navbar from '../components/navbar/Navbar'
import HomeGallery from '../components/home/HomeGallery'
import NewsLetterForm from '../components/home/NewsLetterForm'
import Footer from '../components/footer/Footer'

export class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <HomeGallery />
                <NewsLetterForm />
                <Footer />
            </div>
        )
    }
}

export default Home
