import React, { Component } from 'react';
import './Header.css';
import rezoomex_logo from '../../assets/images/rezoomex_logo.png';
import { Link } from 'react-router-dom';
import HeaderRight from './HeaderRight';
import HeaderCenter from './HeaderCenter';
import SignInInstruction from './SingInInstruction';
import { connect } from 'react-redux';
import { logoutUser } from '../LoginComponent/Action';
class Header extends Component {
    constructor(props) {
        super(props);
    }
    handleLogout =()=>{
        console.log('hi');
        this.props.logoutUser();
    }
    render() {
        return (
            <div >
                <div>
                    <nav className="navbar navbar-dark head" >
                    <div className=" mb-1 ml-4 pb-1">
                        <img src={rezoomex_logo}    style={{ height: '22px'}} />
                        </div>
                        <HeaderCenter hasuserLogin={this.props.hasuserLogin} />
                        <HeaderRight 
                        hasuserLogin={this.props.hasuserLogin}
                        handleLogout={this.handleLogout}
                        />
                    </nav>

                </div>
                <SignInInstruction />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        hasuserLogin :  state.LoginReducer.hasUserLogIn,
        clickedLogout: state.LoginReducer.logoutRequest
    }
}
function mapDispatchToProps(dispatch) {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Header);
