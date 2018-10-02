import React,{Component} from 'react';
import Question from './Question';

class QuestionListDropdown extends Component{
    render()
    {
      return (
          <div>
        <div className="card border-0 cardColor">
        <header className="card-header border-0 cardColor">
        
               <div className="icon-action">
               <span className="title mr-3">3 Questions</span>
               <a href="#" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" className="">
                <i className=" fa fa-chevron-down"></i>  
                </a>
                </div>
                <a href="#" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" className="">
                <h5 className="title">Angular JS </h5>
                </a>
        </header>
        <div className="collapse show " id="collapse1">
           <Question/>
           <Question/>
           <Question/>
        </div> 
    </div> 

<div className="card border-0 cardColor">
<header className="card-header border-0 cardColor">
    <div className="icon-action">
       <span className="title mr-3">3 Questions</span>
       <a href="#" data-toggle="collapse" data-target="#collapse22" aria-expanded="false" className="">
        <i className=" fa fa-chevron-down"></i>  
        </a>
        </div>
        <a href="#" data-toggle="collapse" data-target="#collapse22" aria-expanded="false" className="">
        <h5 className="title">React JS </h5>
    </a>
</header>
<div className="collapse show cardColor" id="collapse22" >

     <Question/>
         
     <Question/>
</div> 
</div> 
</div>
      )  
    }
}

export default QuestionListDropdown;