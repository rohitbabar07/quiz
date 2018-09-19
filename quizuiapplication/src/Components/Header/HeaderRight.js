import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class HeaderRight extends Component {
    
    constructor(props) {
        super(props);
    }


    render() {
        return (
            this.props.hasuserLogin ? (<div className="mr-4">
                <span style={{ marginRight: 10 }}>User</span>
                <Link className="text-danger" to={`/logo`}>
                    <span>Logout</span>
                </Link>
            </div>)
                : <span className="mr-4" />
        )
    }
}

function mapStateToProps(state) {
    return {
        hasuserLogin :  state.LoginReducer.hasUserLogIn
    }
}


export default connect(mapStateToProps) (HeaderRight);