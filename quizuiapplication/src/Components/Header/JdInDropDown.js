import React, { Component } from 'react';
import './Header.css';

export default class JdInDropDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: this.props.jobs
        }

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
                <option key={jd.id} value={jd.id}>{jd.jdName} </option>

            );
        }
    }

    render() {
        return (
            <div className="row rez-header-row">
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
                <div className="col-md-6 jdAlignRigt">
                    <span className="jdLablePadd">Job Description</span>
                    <span>
                        <select value={this.state.jdName} id="selectJobs" className="selectpicker btn btn-labeled btn-start selectId jdSelectBoxMargin ">
                            <option value="">Select The Job</option>
                            {this.listOfJd(this.state.jobs)}
                        </select>
                    </span>
                </div>
            </div>
        );
    }
}

