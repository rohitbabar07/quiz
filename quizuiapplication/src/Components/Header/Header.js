import React, { Component } from 'react';
import './Header.css';
import rezoomex_logo from '../../assets/images/rezoomex_logo.png';
import { Link } from 'react-router-dom';
import HeaderRight from './HeaderRight';
import HeaderCenter from './HeaderCenter';
import SignInInstruction from './SingInInstruction';
import { connect } from 'react-redux';
import { logoutUser } from '../LoginComponent/Action';
import { resetStateOfJdName } from './GetJobs';
class Header extends Component {
    constructor(props) {
        super(props);
    }
    handleLogout = () => {
        this.props.logoutUser();
        this.props.resetStateOfJdName();
    }
    render() {
        return (
            <div >  
                <nav class="navbar navbar-light navbar-expand-sm justify-content-center">
                        <div className="navbar-brand d-flex w-50 mr-auto">
                            <img src={rezoomex_logo} style={{ height: '22px' }} />
                        </div>               
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
                        <ul class="navbar-nav w-100 justify-content-center">
                        <li class="nav-item"> <HeaderCenter hasuserLogin={this.props.hasuserLogin} /></li>
                        </ul>
                        <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                        <li class="nav-item"> <HeaderRight
                            hasuserLogin={this.props.hasuserLogin}
                            handleLogout={this.handleLogout}
                        />
                        </li>
                        </ul>
                        </div>
                    </nav>   
                <SignInInstruction />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        hasuserLogin: state.LoginReducer.hasUserLogIn,
        clickedLogout: state.LoginReducer.logoutRequest
    }
}
// function mapDispatchToProps(dispatch) {
//     return {
//         logoutUser: () => dispatch(logoutUser())
//     }
// }

export default connect(mapStateToProps, { logoutUser, resetStateOfJdName })(Header);
