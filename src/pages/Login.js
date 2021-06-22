import React, { Component } from 'react'
import { connect } from 'react-redux';
import Form from '../components/login/Form';
import Home from './Home';

export class Login extends Component {
    render() {
        if (this.props.isAuthenticated){
            return <Home />
        }
        else return (
            <div>
                <div class="row center">
                    <h3 className="center">THE ANTISOCIAL CIRCLE</h3>
                    <div class="col s12 m6 offset-m3">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">Login</span>
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.token !== null && (state.auth.token !== undefined),
      error: state.auth.error,
      token: state.auth.token
    }
}

export default connect(mapStateToProps, null)(Login)
