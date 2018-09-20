import React from 'react';
import { connect } from 'react-redux';
import JdInDropDown from '../Header/JdInDropDown';
class SingInInstruction extends React.Component {

    render() {
        const template =
            (!this.props.hasuserLogin)
                ? (
                    <div className="row" style={{ backgroundColor: '#F1F1F1', height: 32, alignItems: 'center' }}>
                        <span className="col-sm-12 mr-10" style={{ fontWeight: 'bold', fontSize: 16, textAlign: " center" }}> Sign in to </span>
                    </div>
                )
                
                : (<JdInDropDown jobs={this.props.jobs} />
                )
        return (
            <div>
                {template}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        hasuserLogin: state.LoginReducer.hasUserLogIn,
        jobs: state.UserJobs.response
    }
}

export default connect(mapStateToProps)(SingInInstruction);

