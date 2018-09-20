import React,{Component} from 'react';

class QuestionLevelRowComponent extends Component
{
    render()
    {
        return(
            <div className="row topMargn">
                    <div className="questionRow">
                        <div className="rowContent borderRight text-center">1</div>
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
           
        )
    }
}
export default QuestionLevelRowComponent

