import React, { Component } from 'react';
import { Navbar } from '../components/navbar/Navbar';
import Form from '../components/register/Form';
import Footer from '../components/footer/Footer'

export class Register extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h3 className="center teal-text" >Become a member of The Antisocial Circle</h3>
                <Form />
                <Footer />
            </div>
        )
    }
}

export default Register
