import React from 'react';
import { Route, Redirect } from 'react-router';
import LoginComponent from '../../Components/LoginComponent/LoginComponent';
import { LOGIN_REDIRECT_URL } from './../../Constants/AppConstants';
import Temp from '../../Components/Temp';
import Loading from '../../Components/Loader/Loading';
import NotFound from '../../Components/NotFound';


export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            hasUserLogedIn: false,
            dataFetched: false,
            isFetching: false,
        }
    }

    render() {
        const template =
            !this.props.hasUserLogedIn
                ? (
                    <Route path="/" render={(props) => <LoginComponent />} />
                ) : ( this.props.isFetching 
                        ? <Loading />
                    :(
                        (this.props.dataFetched &&  this.props.response.access_token)
                         ? <Temp />
                         :<NotFound/>
                    )
                )

        return (
            <div>
                {template}
            </div>
        )
    }
}

