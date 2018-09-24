import React from 'react';
import { Route, withRouter, Switch, Router} from 'react-router-dom';
import LandingScreen from '../LandingScreen/LandingScreen';
import history from '../../history';
import CreateQuiz from '../CreateQuiz/CreateQuiz';
class RedirectRoute extends React.Component {
    render() {
        return (
            <div>
                <Router history={history} >
                    <Switch>
                        <Route exact path="/jobs" component={LandingScreen} />
                        <Route exact path="/createQuiz" component={CreateQuiz}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default withRouter(RedirectRoute);

