import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions  from '../../store/actions/auth'

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onLogin(this.state.email, this.state.password);
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="email"
                        className="blue-grey white-text"
                        style={{borderRadius: '5px'}}
                    />
                    <input 
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="password"
                        className="blue-grey white-text"
                        style={{borderRadius: '5px'}}
                    />
                    {
                        this.props.error != null ?

                        <p className="teal">please try again</p>

                        :

                        <p></p>
                    }
                    <input 
                        type="submit" 
                        value=
                        {
                            this.props.loading ?

                            "loading..."

                            :

                            "login"
                        }
                        className="btn waves-effect" 
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.token !== null || undefined,
      error: state.auth.error,
      token: state.auth.token,
      loading: state.auth.loading
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      onLogin: (email, password) => dispatch(actions.authLogin(
        email, password
      ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
