import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTechnology } from '../CreateQuiz/FetchTechnologiesAction';
import { QuizNotAvailableMsg } from './QuizNotAvailableMsg';
import { LandingImage } from './LandingImage';
import { SelectJdInfoComponent } from './SelectJdInfoComponent';

class LandingScreen extends Component {
    constructor(props) {
        super(props);

    }
    createQuestionBankQuiz = () => {
        this.props.fetchTechnology(this.props.token);
    }
    render() {
        const displayQuizNotAvailableMsgComponent = this.props.isJdSelected ? (
            <QuizNotAvailableMsg jdName={this.props.selectedJdName} fetchTechnology={this.createQuestionBankQuiz.bind(this)} />
        ) : (
                <SelectJdInfoComponent />
            )
        return (
            <div>
                <LandingImage />
                {displayQuizNotAvailableMsgComponent}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isJdSelected: state.UserJobs.isJdSelected,
        selectedJdName: state.UserJobs.selectedJdName,
        token: state.LoginReducer.response.access_token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTechnology: (token) => dispatch(fetchTechnology(token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);











