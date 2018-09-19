import React from 'react';
import { Route, withRouter, Switch, Router} from 'react-router-dom';
import NotFound from './NotFound';
import history from '../history';

class Temp extends React.Component {
    render() {
        return (
            <div>
                <Router history={history} >
                    <Switch>
                        <Route exact path="/jobs" component={NotFound} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default withRouter(Temp);

