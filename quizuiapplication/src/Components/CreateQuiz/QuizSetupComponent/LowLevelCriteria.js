import React, { Component } from 'react';
import '../CreateQuiz.css';
import Select from '../CreateSelectOption';

export class LowLevelCriteria extends Component {

    constructor(props) {
        super(props);
        this.state = {
            technologies: this.props.techData
        }

    }

    componentWillReceiveProps(newProps) {
        if (newProps.techData.length > 0) {
            this.setState({
                technologies: newProps.techData
            })
        }
    }

    render() {
        return (
            <div>
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
                            <select className="selectpicker btn btn-labeled btn-start selectId techDrop  margin-left-10">
                                <option disabled selected value>None Selected</option>
                                {this.state.technologies.length > 0 && <Select techData={this.state.technologies} />}
                            </select>
                        </div>
                        <div className="rowContent borderRight">
                            <div className="fontStyle">
                                <span>Select Questions Type</span>
                                <button type="button" className="btn btn-primary btn-sm margin-left-10 typeBtn">some Type</button>
                                <button type="button" className="btn btn-secondary btn-sm margin-left-10 typeBtn">Nothing Type</button>
                            </div>
                        </div>
                        <div className="rowContent">
                            <div className="fontStyle">
                                Number Of Questions
                                <select className="numberDropdown selectpicker btn btn-labeled btn-start selectId quesSDrop margin-left-10">
                                    <option value="">01</option>
                                    <option value="">02</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="rowContent">
                        <span className="">
                            <button type="button" className="btn btn-outline-primary btn-sm standard-btn-50">Reset</button>
                        </span>
                        <span>
                            <button type="button" className="btn btn-primary btn-sm standard-btn-50 margin-left-10">+</button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default LowLevelCriteria
