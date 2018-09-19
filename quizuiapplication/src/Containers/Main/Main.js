import React from 'react';
import { Route, Redirect } from 'react-router';
import LoginComponent from '../../Components/LoginComponent/LoginComponent';
import { LOGIN_REDIRECT_URL } from './../../Constants/AppConstants';
import Temp from '../../Components/Temp';
import Loading from '../../Components/Loader/Loading';
import NotFound from '../../Components/NotFound';
import { connect } from 'react-redux';


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            hasUserLogIn: false,
            dataFetched: false,
            isFetching: false,
        }
    }

    render() {
        const template =
            !this.props.hasUserLogIn
                ? (
                    <Route path="/" render={(props) => <LoginComponent />} />
                ) : ( this.props.isFetching 
                        ? <Loading />
                    :(
                        (this.props.hasUserLogIn)
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


function mapStateToProps(state) {
    return {
        hasUserLogIn : state.LoginReducer.hasUserLogIn,
        isFetching: state.LoginReducer.isFetching,
        
    }
}

export default connect(mapStateToProps) (Main);
