import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import history from '../../history';
class HeaderRight extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
           this.props.hasuserLogin ? (<div className="mr-4">
                <span style={{ marginRight: 10 }}>User</span>
                <Link className="text-danger" to={'/'}>
                    <span onClick={ this.props.handleLogout}>Logout</span>
                </Link>
            </div>)
                : <span className="mr-4" />
        )
    }
}



export default HeaderRight;