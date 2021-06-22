import React, { Component } from 'react'
import Large from './Large';
import Medium from './Medium';
import Small from './Small';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/auth'

export class Navbar extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this)
    }

    logout = () => {
        this.props.onLogout()
    }
    render() {
        return (
            <div>
                <div className="hide-on-med-and-down">
                    <Large 
                        logout={this.logout} 
                        isAuthenticated={this.props.isAuthenticated}
                    />
                </div>
                <div className="hide-on-small-only hide-on-large-only row green darken-4">
                    <Medium 
                        logout={this.logout} 
                        isAuthenticated={this.props.isAuthenticated}
                    />
                </div>
                <div className="hide-on-med-and-up ">
                    <Small 
                        logout={this.logout} 
                        isAuthenticated={this.props.isAuthenticated}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.token !== null && (state.auth.token !== undefined),
      error: state.auth.error,
      loading: state.auth.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
