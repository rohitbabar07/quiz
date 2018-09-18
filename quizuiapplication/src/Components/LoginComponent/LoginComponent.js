import React from 'react';
import { connect } from 'react-redux';
import { withRouter,Link } from "react-router-dom";
import './Login.css'
class LoginComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            UserName: '',
            password: ''
        }
    }

    handleClick(event) {
        event.preventDefault();
        var bodyJson = {
            "username": this.state.UserName,
            "password": this.state.password
        }
    }

    render() {
        return (
            <div className="row" style={{marginTop:60}}>
                <div className="col-sm-4 offset-sm-4 text-center">
                
                <span className="textGradientStyle" style={ {color: '#320555',fontWeight: 'bold',fontSize: 56,fontFamily: 'Nunito'}}>QUIZ</span>
         
                    <div className="info-form" style={{marginTop:40}}>
                    <form>
                     <div className="input-group border border-primary">
                   
                    <div className="input-group-prepend">
                     <span class="input-group-text" style={{backgroundColor:'white'}}><i class="fa fa-envelope-o fa-fw"></i></span>
                    </div>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
                    </div>

                    <div class="input-group border border-primary" style={{marginTop:32,marginBottom:16}}>
                    <div className="input-group-prepend">
                     <span class="input-group-text" style={{backgroundColor:'white'}}><i class="fa fa-envelope-o fa-key"></i></span>
                    </div>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>

                    <small className=" mb-1 mt-1"><Link  to={`#`}>Forget Password?</Link></small>
                    <button type="submit" style={ {fontWeight: 'bold',marginTop:10}}className="btn btn-primary btn-block">Login</button> 

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(LoginComponent);