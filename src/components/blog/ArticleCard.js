import React, { Component } from 'react'
import js from '../../images/tn.jpg'

export class ArticleCard extends Component {
    render() {
        return (
            <div className="col s12 m3">
                <div class="row">
                    <div class="col s12">
                        <div class="card">
                            <div class="card-image">
                                <img src={js}  />
                                <span class="card-title"></span>
                            </div>
                            <div class="card-content">
                                <p style={{fontWeight: 'bold'}} >TINASHE REALEASES 'PASADENA' FEATURING BUDDY</p>
                            </div>
                            <div class="card-action">
                                <a href="#" className="white-text btn teal">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleCard
