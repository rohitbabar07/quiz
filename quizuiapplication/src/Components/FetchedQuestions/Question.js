import React,{Component} from 'react';
import {Link}from 'react-router-dom'; 
class Question extends Component{
    render(){
        return(
            <article className="card-body">
            <h6 className="font-weight-bold">Question 1</h6>
            What is $scope in AngularJS?
            <Link to="#" style={{float: 'right'}}>More</Link>
            </article> 
        )
    }
}

export default Question;