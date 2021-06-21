import React, { Component } from 'react'
import Welcome from '../components/blog/Welcome'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import ArticleCard from '../components/blog/ArticleCard'
import NewsLetterForm from '../components/home/NewsLetterForm'

export class Blog extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div style={{height: '10px'}}></div>
                <Welcome />
                <div className="row">
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div>
                <NewsLetterForm />
                <Footer />
            </div>
        )
    }
}

export default Blog
