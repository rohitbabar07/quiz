import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import NotFound from './NotFound';


 class Temp extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/jobs" component={NotFound} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Temp);

