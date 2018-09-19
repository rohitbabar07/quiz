import React, { Component } from 'react';
import './Header.css';
import rezoomex_logo from '../../assets/images/rezoomex_logo.png';
import { Link } from 'react-router-dom';
import HeaderRight from './HeaderRight';
import HeaderCenter from './HeaderCenter';
import SignInInstruction from './SingInInstruction';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div >
                <div>
                    <nav className="navbar navbar-dark head" >
                        <Link className=" mb-1 ml-4" to={`/logo`}>
                            <img src={rezoomex_logo} style={{ height: '22px' }} />
                        </Link>

                        <HeaderCenter />

                        <HeaderRight />
                    </nav>

                </div>
                <SignInInstruction />
            </div>
        )
    }
}

export default Header;