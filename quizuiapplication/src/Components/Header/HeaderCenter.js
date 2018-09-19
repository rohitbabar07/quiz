import React, { Component } from 'react';
import './Header.css';
import synerzip_logo from '../../assets/images/synerzip.png';
import { Link } from 'react-router-dom';
class HeaderCenter extends Component {

    render() {
        return (
            true ?
                <div >
                    <Link className=" mb-1" to={`#`}>
                        <img src={synerzip_logo} style={{ height: '32px', marginTop: '3px', marginLeft: "36px" }} />
                    </Link>
                </div>
                : <div></div>
        )
    }
}
export default HeaderCenter;