import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import history from '../../history';
class HeaderRight extends Component {
    
    constructor(props) {
        super(props);
    }


    render() {

        const logout = {
            color : "#FB4C2F"
        }

        return (
            
           this.props.hasuserLogin ? ( 
                <li class="nav-item"><span style={{ marginRight: 10 }}>{localStorage.getItem('user')}</span>
               <Link className="text-danger" to={'/'}>
                    <span style={logout} onClick={ this.props.handleLogout}>Logout</span>
                </Link></li>
            )
                : <span className="mr-4" />
        )
    }
}



export default HeaderRight;