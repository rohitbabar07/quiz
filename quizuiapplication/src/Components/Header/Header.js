import React,{ Component } from 'react';
import './Header.css';
import rezoomex_logo from '../../assets/images/rezoomex_logo.png';
import {Link} from 'react-router-dom';
import HeaderRight from './HeaderRight';
import HeaderCenter from './HeaderCenter';
class Header extends Component{
    render()
    {
        return(
                <div >
                    <div>
            <nav className="navbar navbar-dark head" >
            <Link className=" mb-1 ml-4" to={`/logo`}>
            <img src={rezoomex_logo} style={{height:'22px'}} />
            </Link>

            <HeaderCenter/>

           <HeaderRight/>
            </nav>
            
            </div>  
            <div className="row" style={{backgroundColor:'#F1F1F1',height:32,alignItems:'center'}}>
              <span className="col-sm-12 mr-10" style={ {fontWeight: 'bold',fontSize: 16,textAlign:" center"}}> Sign in to </span> 
            </div>
            </div>         
        )
    }
}
export default Header;