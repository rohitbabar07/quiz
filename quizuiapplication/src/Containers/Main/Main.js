import React from 'react';
import { Route, Redirect } from 'react-router';
import LoginComponent from '../../Components/LoginComponent/LoginComponent';
import { LOGIN_REDIRECT_URL  } from './../../Constants/AppConstants';


export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            hasUserLogedIn: false
        }
    }

    render() {
        const template =
            !this.props.hasUserLogedIn
                ? (
                    <Route path="/" render={(props) => <LoginComponent />}/> 
                ) : (
                    <span>After login </span>
                )

        return (
            <div>
                {template}
            </div>
        )
    }
}

