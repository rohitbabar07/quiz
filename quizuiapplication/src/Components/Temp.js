import React from 'react';
import { Route, withRouter, Switch, Router} from 'react-router-dom';
import NotFound from './NotFound';
import history from '../history';
import CreateQuiz from './CreateQuiz/CreateQuiz';
class Temp extends React.Component {
    render() {
        return (
            <div>
                <Router history={history} >
                    <Switch>
                        <Route exact path="/jobs" component={NotFound} />
                        <Route exact path="/createQuiz" component={CreateQuiz}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default withRouter(Temp);

