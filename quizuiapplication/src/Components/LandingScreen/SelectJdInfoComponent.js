import React, { Component } from 'react'
import './LandingScreen.css';
export class SelectJdInfoComponent extends Component {

    render() {
        return (
            <div className="col-md-12 text-center marginEmptyMsgCheck">
                <span className="selectJdMsg alert alert-info">Please select the Job Description to create the quiz..!</span>
            </div>
        )
    }
}

export default SelectJdInfoComponent;
