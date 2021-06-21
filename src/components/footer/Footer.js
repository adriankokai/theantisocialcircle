import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="page-footer white z-depth-3">
                    <div class="container">
                        <div class="row">
                            <div class="col l6 s12">
                                <h5 class="black-text">THE ANTISOCIAL CIRCLE</h5>
                                <p class="black-text text-lighten-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor 
                                </p>
                            </div>
                            <div class="col l4 offset-l2 s12">
                                <h5 class="black-text">Links</h5>
                                <ul>
                                    <li><a class="black-text text-lighten-3" href="#!">Blog</a></li>
                                    <li><a class="black-text text-lighten-3" href="#!">Feature</a></li>
                                    <li><a class="black-text text-lighten-3" href="#!">Marketing</a></li>
                                    <li><a class="black-text text-lighten-3" href="#!">About</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container black-text">
                            © 2021 The Antisocial Circle
                            <a class="black-text text-lighten-4 right" href="#!">Terms of Use</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
