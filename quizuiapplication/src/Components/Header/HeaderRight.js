import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
class HeaderRight extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
           this.props.hasuserLogin ? (<div className="mr-2">
                <span style={{ marginRight: 10,fontSize: '14px' }}>{localStorage.getItem('user')}</span>
                <Link className="text-danger" to={'/'}>
                    <span onClick={ this.props.handleLogout} style={{fontSize: '9.6px'}}>Logout</span>
                </Link>
            </div>)
                : <span className="mr-4" />
        )
    }
}



export default HeaderRight;