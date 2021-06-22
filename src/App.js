import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Marketing from './pages/Marketing';
import Feature from './pages/Feature';
import Login from './pages/Login'
import {connect} from 'react-redux'
import * as actions from './store/actions/auth'
import "react-image-gallery/styles/css/image-gallery.css";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

export class App extends Component {
      
componentDidMount() {
    this.props.onTryAutoSignup();
}
    render() {
        return (
            <div>
                <Router>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/blog' component={Blog} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/marketing' component={Marketing} />
                    <Route exact path='/feature' component={Feature} />
                    <Route exact path='/login' component={Login} />
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
