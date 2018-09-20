import React, { Component } from 'react';
import './Header.css';
import synerzip_logo from '../../assets/images/synerzip.png';
import { Link } from 'react-router-dom';
class HeaderCenter extends Component {

    render() {
        return (
            this.props.hasuserLogin ?
                <div className=" mb-1">  
                        <img src={synerzip_logo}  style={{ height: '32px', marginLeft: "36px" }} />
                </div>
                : <div></div>
        )
    }
}
export default HeaderCenter;