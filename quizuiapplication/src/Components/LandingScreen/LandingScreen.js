
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { QuizNotAvailableMsg } from './QuizNotAvailableMsg';
import { LandingImage } from './LandingImage';
import { SelectJdInfoComponent } from './SelectJdInfoComponent';

class LandingScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const displayQuizNotAvailableMsgComponent = this.props.isJdSelected ? (
            <QuizNotAvailableMsg jdName={this.props.selectedJdName} />
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
        selectedJdName: state.UserJobs.selectedJdName
    }
}

export default connect(mapStateToProps)(LandingScreen);











