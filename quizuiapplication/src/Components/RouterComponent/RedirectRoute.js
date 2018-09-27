import React from 'react';
import { Route, withRouter, Switch, Router } from 'react-router-dom';
import LandingScreen from '../LandingScreen/LandingScreen';
import history from '../../history';
import QuizSetupMain from '../CreateQuiz/QuizSetupMain';
import FetchedQuestionComponent from '../FetchedQuestion/FetchedQuestionComponent';
class RedirectRoute extends React.Component {
    render() {
        return (
            <div>
                <Router history={history} >
                    <Switch>
                        <Route exact path="/jobs" component={LandingScreen} />
                        <Route exact path="/QuizSetupMain" component={QuizSetupMain} />
                        <Route exact path="/FetchedQuestionComponent" component={FetchedQuestionComponent} />
                    </Switch>
                </Router>
            </div>
        )
    }   
}

export default withRouter(RedirectRoute);

