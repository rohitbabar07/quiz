import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class LoginComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            UserName: '',
            password: ''
        }
    }

    handleClick(event) {
        event.preventDefault();
        var bodyJson = {
            "username": this.state.UserName,
            "password": this.state.password
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="row">
                    <div className="">
                                  
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(LoginComponent);