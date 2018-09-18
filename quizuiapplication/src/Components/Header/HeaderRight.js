import React,{ Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
class HeaderRight extends Component{
    state={
        showRightHeader : true
    }
    render()
    {
        return(
            this.state.showRightHeader ? ( <div className="mr-4">
            <span style={{marginRight:10}}>User</span>
            <Link className="text-danger" to={`/logo`}>
            <span>Logout</span>
            </Link>
        </div>)
        :<span className="mr-4"/>
        )
    }
}
export default HeaderRight;


