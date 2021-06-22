import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo'
import Packages from './Packages'
import {connect} from 'react-redux'
import { submitApplication } from '../../store/actions/submitApplication'

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            email: '',
            facebook: '',
            instagram: '',
            twitter: '',
            category: '',
            package: ''
        }
        
        this.select = this.select.bind("this")
    }

    select = card => {
        this.setState({
            package: card
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = () => {
        if (
            this.state.firstName !== 
            '' && this.state.email !==
             '' && this.state.package !== '' 
        ) {
            this.props.onSubmitApplication(
                this.state.firstName,
                this.state.lastName,
                this.state.address,
                this.state.email,
                this.state.facebook,
                this.state.instagram,
                this.state.twitter,
                this.state.category,
                this.state.package
            )
            this.setState({
                firstName: '',
                lastName: '',
                address: '',
                email: '',
                facebook: '',
                instagram: '',
                twitter: '',
                category: '',
                package: ''
            })
        } else {
            console.log("missing fields")
        }

    }

    render() {
        return (
            <div>
                <PersonalInfo 
                    handleChange={this.handleChange} 
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    address={this.state.address}
                    email={this.state.email}
                    facebook={this.state.facebook}
                    instagram={this.state.instagram}
                    twitter={this.state.twitter}
                    category={this.state.category}
                    package={this.state.package}
                />
                <h3 className="center" >Select a Package</h3>
                <Packages 
                    select={this.select}
                    package={this.state.package}
                />
                <div className="center" style={{paddingBottom: '30px'}}>
                    <a 
                        className="btn waves-effect center"
                        onClick={this.handleSubmit}
                    >
                        {
                            this.props.loading ?
                            "submitting application..."
                            :
                            "submit application"
                        }
                    </a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.submitApplication.loading ? true : false
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitApplication: (
            firstName,
            lastName,
            address,
            email,
            facebook,
            instagram,
            twitter,
            category,
            PACKAGE
        ) => dispatch(submitApplication(
            firstName,
            lastName,
            address,
            email,
            facebook,
            instagram,
            twitter,
            category,
            PACKAGE
        ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
