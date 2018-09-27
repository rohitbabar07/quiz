import React from 'react';
import QuestionInstructions from './QuestionInstructions';
import DifficultyLevelButton from './DifficultyLevelButton';
import './FetchQuestion.css';
class FetchedQuestionComponent extends React.Component {
    render() {
        return (
        <div>
            <QuestionInstructions/>
            <DifficultyLevelButton/>
            <div className="row mt-2" style={{minHeight:' 440px'}}>

            <div className="col-md-6 border-right" >
         
<div className="card border-0 cardColor">
	<header className="card-header border-0 cardColor">
		<a href="#" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" className="">
           <div className="icon-action">
           <span className="title">3 Questions</span>
			<i className=" fa fa-chevron-down"></i>  
            </div>
         
			<h5 className="title">Angular JS </h5>
            
		</a>
	</header>
	<div className="collapse show " id="collapse1">
		<article className="card-body">
        <h6 className="font-weight-bold">Question 1</h6>
        What is $scope in AngularJS?
		</article> 
        <article className="card-body">
        <h6 className="font-weight-bold">Question 2</h6>
        How to implement routing in AngularJS?
		</article> 
        <article className="card-body">
        <h6 className="font-weight-bold">Question 3</h6>
        How many types of data binding in AngularJS?	
		</article> 
	</div> 
</div> 

<div className="card border-0 cardColor">
	<header className="card-header border-0 cardColor">
		<a href="#" data-toggle="collapse" data-target="#collapse22" aria-expanded="false" className="">
        <div className="icon-action">
           <span className="title">3 Questions</span>
			<i className=" fa fa-chevron-down"></i>  
            </div>
			<h5 className="title">React JS </h5>
		</a>
	</header>
	<div className="collapse show cardColor" id="collapse22" >
    
		<article className="card-body">
        <h6 className="font-weight-bold">Question 1</h6>
        What are the limitations of React?
		</article> 
        
        <article className="card-body">
        <h6 className="font-weight-bold">Question 2</h6>
        Why can’t browsers read JSX?
		</article> 
	</div> 
</div> 

            </div>
           
            <div className="col-md-6">
            hiiiiiiiii
            </div>

            </div>
      </div>
        )
    }
}
export default FetchedQuestionComponent;

