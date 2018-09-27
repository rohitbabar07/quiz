import React from 'react';
import './CreateQuiz.css';
import { connect } from 'react-redux';
import { LowLevelCriteria } from './QuizSetupComponent/LowLevelCriteria';
import { MidLevelCriteria } from './QuizSetupComponent/MidLevelCriteria';
import { HighLevelCriteria } from './QuizSetupComponent/HighLevelCriteria';
import QuizInstructions from '../Header/QuizInstructions';
import history from '../../history';
class QuizSetupMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            technologies: this.props.technologies
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.technologies.length > 0) {
            this.setState({
                technologies: newProps.technologies
            })
        }
    }

    render() {
        return (

            <div >
                <QuizInstructions />
                {/* -------------------low level difficulty criteria--------------------------- */}

                <LowLevelCriteria techData={this.state.technologies} />

                {/* -------------------------Medium level difficulty criteria---------------------------- */}

                <MidLevelCriteria techData={this.state.technologies} />

                {/* ----------------High level difficulty criteria-------------------------- */}

                <HighLevelCriteria techData={this.state.technologies} />

                <div className="fetchBtnDiv mx-auto">
                    <button className="btn btn-primary fetchBtnSize" onClick={()=>history.push("FetchedQuestionComponent")}>Fetch Questions</button>
                </div>

            </div >
        );
    }
}


function mapStateToProps(state) {
    return {
        technologies: state.Technologies.response
    }
}


export default connect(mapStateToProps, null)(QuizSetupMain);
