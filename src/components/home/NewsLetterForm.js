import React, { Component } from 'react'
import { connect } from 'react-redux';
import { subscribe } from '../../store/actions/submitApplication';

export class NewsLetterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = e => {
        this.setState(state => ({
            [e.target.name]: e.target.value
        }))
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.email !== '') {
            this.props.onSubscribe(this.state.email)
            this.setState({
                email: ''
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="center row ">
                <h3 className="col s12" >Subscribe To Our News Letter:</h3>
                <input 
                    className="col s10 m4 offset-m4 offset-s1 "
                    name='email'
                    value={this.state.email}
                    placeholder='email'
                    onChange={this.handleChange}
                    required={true}
                />
                <div className="col s12">
                    <input 
                        className=" btn waves-effect teal"
                        type="submit" 
                        value={this.props.loading ? "submitting":"submit"} 
                    />
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.submitApplication.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubscribe: email => dispatch(subscribe(email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsLetterForm)
