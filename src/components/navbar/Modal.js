import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {
    componentDidMount() {
        const options = {
            onOpenStart: () => {
                console.log("Open Start");
            },
            onOpenEnd: () => {
                console.log("Open End");
            },
            onCloseStart: () => {
                console.log("Close Start");
            },
            onCloseEnd: () => {
                console.log("Close End");
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: "0%",
            endingTop: "0%"
        };
        M.Modal.init(this.Modal, options);
    }

    render() {
        return (
            <>
                <div
                    ref={Modal => {
                        this.Modal = Modal;
                    }}
                    id="navmodal"
                    className="modal"
                    style={modalStyles}
                >
                <div className="modal-content">
                    <a 
                        style={closeBtnStyles} 
                        className="modal-close waves-effect waves-green btn-flat right">
                        <i className='material-icons'>close</i>
                    </a>
                    <a href="/" style={logoStyles} className="black-text" >THE ANTISOCIAL CIRCLE</a>

                    {
                        this.props.isAuthenticated ?

                        <ul className="row">
                            <li className="col s12">
                                <a href="blog" className="black-text center-align">Blog</a>
                            </li>
                            <li className="col s12">
                                <a href="feature" className="black-text center-align">Feature</a>
                            </li>
                            <li className="col s12">
                                <a href="marketing" className="black-text center-align">Marketing</a>
                            </li>
                            <li className="col s12">
                                <a href="about" className="black-text center-align">About</a>
                            </li>
                            <li className="col s12">
                                <a 
                                    onClick={this.props.logout} 
                                    className="black-text center-align modal-close" 
                                >
                                    logout 
                                </a> 
                            </li>

                        </ul>
                    
                        :

                        <ul className="row">
                            <li className="col s12"><a href='login' className="black-text center-align">login</a> </li>
                            <li className="col s12"><a href='register' className="black-text center-align">register</a> </li>
                        </ul>                        
                    }
                </div>
                <div class="modal-footer">
                   
                </div>
                </div>
            </>
        );
    }
}

const modalStyles = {
    width: '100%',
    height: '100vh'
}

const closeBtnStyles = {
    marginRight: '-20px'
}

const logoStyles = {
    fontWeight: 'bold',
    marginLeft: '-11px'
}

export default Modal;