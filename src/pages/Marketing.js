import React, { Component } from 'react';
import ContentBoost from '../components/marketing/ContentBoost';
import SocialMediaBoost from '../components/marketing/SocialMediaBoost';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import TvFeatures from '../components/marketing/TvFeatures';

export class Marketing extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <SocialMediaBoost />
                <ContentBoost />
                <TvFeatures />
                <Footer />
            </div>
        )
    }
}

export default Marketing
