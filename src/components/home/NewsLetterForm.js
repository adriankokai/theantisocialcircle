import React, { Component } from 'react'

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
                />
                <div className="col s12">
                    <input 
                        className=" btn waves-effect teal"
                        type="submit" 
                        value="submit" 
                    />
                </div>
            </form>
        )
    }
}

export default NewsLetterForm
