
import React, { Component } from 'react';
import './LandingScreen.css';
import quiz from '../../assets/images/quiz.png';
import history from '../../history';
import { connect } from 'react-redux';

class LandingScreen extends Component {
    constructor(props) {
        super(props);
    }
    createQuestionBankQuiz = () => {
        history.push('/createQuiz');
    }
    render() {

        const displayJdName = this.props.isJdSelected ? (
            <span className="jdNameSize">{this.props.selectedJdName}</span>
        ) : (
                null
            )

        return (
            <div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img src={quiz} className="quizImage" alt="quiz logo" />
                    </div>
                    <div className="col-md-12 text-center marginEmptyMsgCheck">
                        <span className=""><b>Oops! its empty</b></span>
                    </div>
                    <div className="col-md-12 text-center marginEmptyMsgCheck">
                        {displayJdName}
                        <span className="forNewLine">This Job Description doesnt have Quiz yet.</span>
                        <span>Create Quiz by clicking button below.</span>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center ">
                        <span className="">
                            <button type="submit" disabled={this.props.isJdSelected ? false : true} className="btn btn-primary createQuizBtnSize" onClick={this.createQuestionBankQuiz}>Create New Quiz using question bank</button>
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
                            <button type="submit" disabled={this.props.isJdSelected ? false : true} className="btn btn-outline-primary">Create New Quiz by creating your own questions</button>
                        </span>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isJdSelected: state.UserJobs.isJdSelected,
        selectedJdName: state.UserJobs.selectedJdName
    }
}

export default connect(mapStateToProps)(LandingScreen);











