import React from 'react';
import { connect } from 'react-redux';
import { fetchToken } from './Action';
import { withRouter, Link } from "react-router-dom";
import ErrorComponent from '../LoginFailed/LoginError';
import './login.css';
class LoginComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: '',
            isloading: this.props.clickedLogin
        }
    }

    handleClick(event) {
        event.preventDefault();
        var bodyJson = {
            "username": this.state.userName,
            "password": this.state.passWord
        }
        this.props.fetchToken(bodyJson);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.clickedLogin) {
            this.setState({
                isloading: newProps.clickedLogin
            });
        }
    }

    render() {
        return (
            <div className="row" style={{ marginTop: 60 }}>
                <div className="col-sm-4 offset-sm-4 text-center">

                    <span className="textGradientStyle" style={{ color: '#320555', fontWeight: 'bold', fontSize: 56, fontFamily: 'Nunito' }}>QUIZ</span>

                    <div className="info-form" style={{ marginTop: 40 }}>
                        <form>
                            {this.props.error && <ErrorComponent />}
                            <div className="input-group border border-primary">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{ backgroundColor: 'white' }}><i className="fa fa-envelope-o fa-fw"></i></span>
                                </div>
                                <input type="email"
                                    className="form-control"
                                    id="userName"
                                    aria-describedby="emailHelp"
                                    placeholder="Email address"
                                    onChange={(event, newValue) => this.setState({ userName: event.target.value })} />
                            </div>

                            <div className="input-group border border-primary" style={{ marginTop: 32, marginBottom: 16 }}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{ backgroundColor: 'white' }}><i className="fa fa-envelope-o fa-key"></i></span>
                                </div>
                                <input type="password"
                                    className="form-control"
                                    id="passWord"
                                    placeholder="Password"
                                    onChange={(event, newValue) => this.setState({ passWord: event.target.value })} />
                            </div>

                            <small className=" mb-1 mt-1"><Link to={`#`}>Forget Password?</Link></small>
                            <button type="submit"
                                style={{ fontWeight: 'bold', marginTop: 10 }}
                                className="btn btn-primary btn-block"
                                onClick={(event) => this.handleClick(event)}>
                                { this.state.isloading && <i class="fa fa-spinner fa-spin"></i>}
                                Login
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchToken: (bodyJson) => dispatch(fetchToken(bodyJson)),
    }
}

function mapStateToProps(state) {
    return {
        error: state.LoginReducer.error,
        clickedLogin: state.LoginReducer.loginRequest
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);