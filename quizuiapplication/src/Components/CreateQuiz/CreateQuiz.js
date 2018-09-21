import React, { Component } from 'react';
import './CreateQuiz.css';
class CreateQuiz extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div >
                {/* -------------------low level difficulty criteria--------------------------- */}

                <div className="questionLevelIndication">
                    <span className="levelIndicatorBtn backgroundColorForLow">
                        1
                    </span>
                    <label className="levelIndicationLabel">
                        Low Difficulty Level - Maximum 6 questions
                    </label>
                </div>
                <div className="row topMargn">
                    <div className="questionRow">
                        <div className="rowContent borderRight text-center ">1</div>
                        <div className="rowContent fontStyle borderRight">
                            <label type="text">Select Technology</label>
                            <select value="" onChange="" className="selectpicker btn btn-labeled btn-start selectId techDrop  margin-left-10">
                                <option value="">None Selected</option>
                                <option value="">Java </option>
                                <option value="">Python </option>
                            </select>
                        </div>
                        <div className="rowContent borderRight">
                            <div className="fontStyle">
                                <span>Select Questions Type</span>
                                <button type="button" class="btn btn-primary btn-sm margin-left-10 typeBtn">some Type</button>
                                <button type="button" class="btn btn-secondary btn-sm margin-left-10 typeBtn">Nothing Type</button>
                            </div>
                        </div>
                        <div className="rowContent">
                            <div className="fontStyle">
                                Number Of Questions
                                <select value="" onChange="" className="numberDropdown selectpicker btn btn-labeled btn-start selectId quesSDrop margin-left-10">
                                    <option value="">01</option>
                                    <option value="">02</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="rowContent">
                        <span className="">
                            <button type="button" class="btn btn-outline-primary btn-sm standard-btn-50">Reset</button>
                        </span>
                        <span>
                            <button type="button" class="btn btn-primary btn-sm standard-btn-50 margin-left-10">+</button>
                        </span>
                    </div>
                </div>

                {/* -------------------------Medium level difficulty criteria---------------------------- */}

                <div className="questionLevelIndication">
                    <span className="levelIndicatorBtn backgroundColorForMedium">
                        2
                    </span>
                    <label className="levelIndicationLabel">
                        Medium Difficulty Level - Maximum 7 questions
                    </label>
                </div>
                <div className="row topMargn">
                    <div className="questionRow">
                        <div className="rowContent borderRight text-center ">1</div>
                        <div className="rowContent fontStyle borderRight">
                            <label type="text">Select Technology</label>
                            <select value="" onChange="" className="selectpicker btn btn-labeled btn-start selectId techDrop  margin-left-10">
                                <option value="">None Selected</option>
                                <option value="">Java </option>
                                <option value="">Python </option>
                            </select>
                        </div>
                        <div className="rowContent borderRight">
                            <div className="fontStyle">
                                <span>Select Questions Type</span>
                                <button type="button" class="btn btn-primary btn-sm margin-left-10 typeBtn">some Type</button>
                                <button type="button" class="btn btn-secondary btn-sm margin-left-10 typeBtn">Nothing Type</button>
                            </div>
                        </div>
                        <div className="rowContent">
                            <div className="fontStyle">
                                Number Of Questions
                                <select value="" onChange="" className="numberDropdown selectpicker btn btn-labeled btn-start selectId quesSDrop margin-left-10">
                                    <option value="">01</option>
                                    <option value="">02</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="rowContent">
                        <span className="">
                            <button type="button" class="btn btn-outline-primary btn-sm standard-btn-50">Reset</button>
                        </span>
                        <span>
                            <button type="button" class="btn btn-primary btn-sm standard-btn-50 margin-left-10">+</button>
                        </span>
                    </div>
                </div>

                {/* ----------------High level difficulty criteria-------------------------- */}

                <div className="questionLevelIndication">
                    <span className="levelIndicatorBtn backgroundColorForHigher">
                        3
                    </span>
                    <label className="levelIndicationLabel">
                        Higher Difficulty Level - Maximum 7 questions
                    </label>
                </div>
                <div className="row topMargn">
                    <div className="questionRow">
                        <div className="rowContent borderRight text-center ">1</div>
                        <div className="rowContent fontStyle borderRight">
                            <label type="text">Select Technology</label>
                            <select value="" onChange="" className="selectpicker btn btn-labeled btn-start selectId techDrop  margin-left-10">
                                <option value="">None Selected</option>
                                <option value="">Java </option>
                                <option value="">Python </option>
                            </select>
                        </div>
                        <div className="rowContent borderRight">
                            <div className="fontStyle">
                                <span>Select Questions Type</span>
                                <button type="button" class="btn btn-primary btn-sm margin-left-10 typeBtn">some Type</button>
                                <button type="button" class="btn btn-secondary btn-sm margin-left-10 typeBtn">Nothing Type</button>
                            </div>
                        </div>
                        <div className="rowContent">
                            <div className="fontStyle">
                                Number Of Questions
                                <select value="" onChange="" className="numberDropdown selectpicker btn btn-labeled btn-start selectId quesSDrop margin-left-10">
                                    <option value="">01</option>
                                    <option value="">02</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="rowContent">
                        <span className="">
                            <button type="button" class="btn btn-outline-primary btn-sm standard-btn-50">Reset</button>
                        </span>
                        <span>
                            <button type="button" class="btn btn-primary btn-sm standard-btn-50 margin-left-10">+</button>
                        </span>
                    </div>
                </div>
                <div className="fetchBtnSize mx-auto">
                    <button className="btn btn-primary">Fetch Questions</button>
                </div>
            </div >
        );
    }
}

export default CreateQuiz;
