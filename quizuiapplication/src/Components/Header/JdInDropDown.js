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
                <div className="col-md-4"></div>
                <div className="col-md-4 justify-content-center align-self-center " style={{textAlign:'center'}}><span className="border-bottom border-dark" style={{fontSize:'12px'}}>All Changes are saved on rezoomex cloud</span></div>
                <div className="col-md-4 jdAlignRigt">
                    <span className="jdLablePadd">Job Description</span>
                    <span>
                        <select value={this.state.jdName} id="selectJob" className="selectpicker btn btn-labeled btn-start selectId jdSelectBoxMargin ">
                            <option disabled selected value>None Selected</option>
                            {this.listOfJd(this.state.jobs)}
                        </select>
                    </span>
                </div>
            </div>
        );
    }
}

