import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { jdNameChange } from './GetJobs';

class JdInDropDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: this.props.jobs
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.jobs) {
            this.setState({
                jobs: newProps.jobs
            })
        }
    }

    listOfJd(jdList) {
        if ((jdList.length === 0) && (jdList !== undefined)) {
            return (
                null
            )
        }
        else {
            return jdList.content.map((jd) =>
                <option key={jd.id} value={jd.jdName}>{jd.jdName} </option>

            );
        }
    }

    handleChange(e) {
        this.props.jdNameChange(e.target.value);
    }
    render() {
        return (
            <div className="row rez-header-row">
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
                <div className="col-md-6 jdAlignRigt">
                    <span className="jdLablePadd">Job Description</span>
                    <span>
                        <select value={this.state.jdName} onChange={this.handleChange} id="selectJob" className="selectpicker btn btn-labeled btn-start selectId jdSelectBoxMargin ">
                            <option disabled selected value>None Selected</option>
                            {this.listOfJd(this.state.jobs)}
                        </select>
                    </span>
                </div>
            </div>
        );
    }
}

export default connect(null, { jdNameChange })(JdInDropDown);

