import React, { Component } from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { loginActionCreater } from '../../Actions/LoginActions/LoginActionCreater';
import { connect } from 'react-redux';
import './login.css';
import history from '../../history';
import { bindActionCreators } from 'redux';
import { fetchListOfJobs } from '../../Actions/FetchJdActions/FetchJdActionCreater';

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "milind.joshi@synerzip.com",
      password: "abc123"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      sessionStorage.setItem('auth_token', nextProps.token);
      var myToken = sessionStorage.getItem('auth_token');
      console.log('in login component after sesstion set token new', myToken);
      this.props.fetchListOfJobs(nextProps.token)
      // .then(function () {
      history.push('/HeaderComponents');
      // })
    }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    console.log('values..', event.target.value);
  }

  handleSubmit() {
    this.props.loginActionCreater(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="Login">
        <form>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            {this.props.error && <span className="text-danger"> {this.props.error} </span>}
            {this.props.jdListError && <span className="text-danger"> {this.props.jdListError} </span>}
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />

          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            onClick={this.handleSubmit.bind(this)}
          >
            Login
          </Button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    error: state.login.error,
    token: state.login.token,
    jdListError: state.jdList.error,
    jdList: state.jdList.content
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginActionCreater, fetchListOfJobs }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);