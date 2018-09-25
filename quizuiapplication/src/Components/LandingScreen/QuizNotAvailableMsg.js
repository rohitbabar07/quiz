import React, { Component } from 'react'
import './LandingScreen.css';
import history from '../../history';

export class QuizNotAvailableMsg extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12 text-center marginEmptyMsgCheck">
                        <span className=""><b>Oops! its empty</b></span>
                    </div>
                    <div className="col-md-12 text-center marginEmptyMsgCheck">
                        <span className="jdNameSize">{this.props.jdName}</span>
                        <span className="forNewLine">This Job Description doesnt have Quiz yet.</span>
                        <span>Create Quiz by clicking button below.</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center ">
                        <span className="">
                            <button type="submit" className="btn btn-primary createQuizBtnSize" onClick={this.props.fetchTechnology}>Create New Quiz using question bank</button>
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

export default QuizNotAvailableMsg;
