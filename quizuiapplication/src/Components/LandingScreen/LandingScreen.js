
import React, { Component } from 'react';
import './LandingScreen.css';
import quiz from '../../assets/images/quiz.png';
import history from '../../history';
class LandingScreen extends Component {
    constructor(props) {
        super(props);
    }
    createQuestionBankQuiz=()=>{
        history.push('/createQuiz');
    }
    render() {
        return (
           <div>
<div className="row">
<div className="col-md-12 text-center">
    <img src={quiz} className="quizImage" alt="quiz logo" />
</div>
<div className="col-md-12 text-center marginEmptyMsgCheck">
    <span style={{fontSize:'18px'}}><b>Oops! its empty</b></span>
</div>
<div className="col-md-12 text-center marginEmptyMsgCheck">
    <span><b className="jdNameSize">BU 6 Lead JAVA</b></span><br /><br />
    <span className="descriptionStyle">This Job Description doesnt have Quiz yet. </span><br />
   < span className="descriptionStyle">Create Quiz by clicking button below.</span> 
</div>
</div>
<div className="row">
    <div className="col-md-12 text-center ">
        <span className="">
            <button type="submit" className="btn btn-primary createQuizBtnSize" onClick={this.createQuestionBankQuiz}>Create New Quiz using question bank</button>
        </span>
    </div>
</div>
<div className="row">
    <div className="col-md-12 text-center marginForOrOption">
        <span>or</span>
    </div>
</div>
<div className="row">
    <div className="col-md-12 text-center">
        <span className="">
            <button type="submit" className="btn btn-outline-primary">Create New Quiz by creating your own questions</button>
        </span>
    </div>
</div>

</div>
        )
    }
}


export default LandingScreen;











