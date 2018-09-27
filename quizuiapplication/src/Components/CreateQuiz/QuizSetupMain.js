import React from 'react';
import './CreateQuiz.css';
import { connect } from 'react-redux';
import LowLevelCriteria from './QuizSetupComponent/LowLevelCriteria';
import MidLevelCriteria from './QuizSetupComponent/MidLevelCriteria';
import HighLevelCriteria from './QuizSetupComponent/HighLevelCriteria';

class QuizSetupMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            technologies: this.props.technologies
        }
    }

    componentWillReceiveProps(newProps) {
        console.log("QuizSetUp", newProps);
        if (newProps.technologies.length > 0) {
            this.setState({
                technologies: newProps.technologies
            })
        }
    }

    render() {
        return (

            <div >
                {/* -------------------low level difficulty criteria--------------------------- */}

                {this.state.technologies.length > 0 ? <LowLevelCriteria techData={this.state.technologies} /> : null}

                {/* -------------------------Medium level difficulty criteria---------------------------- */}

                {this.state.technologies.length > 0 ? <MidLevelCriteria techData={this.state.technologies} /> : null}

                {/* ----------------High level difficulty criteria-------------------------- */}

                {/*<HighLevelCriteria techData={this.state.technologies} />*/}

                {this.state.technologies.length > 0 ? <HighLevelCriteria techData={this.state.technologies} /> : null}

                <div className="fetchBtnDiv mx-auto">
                    <button className="btn btn-primary fetchBtnSize">Fetch Questions</button>
                </div>

            </div >
        );
    }
}


function mapStateToProps(state) {
    console.log("state", state);
    return {
        technologies: state.Technologies.response
    }
}


export default connect(mapStateToProps, null)(QuizSetupMain);
