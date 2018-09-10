import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Switch, Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import rootReducer from './Reducer/index';
import history from './history';
import LoginComponent from './Components/loginComponent/LoginComponent';
import HeaderComponent from './Components/HeaderComponents/HeaderComponents';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <Router history={history} >
            <div>
                <Switch>
                    <Route exact path="/" component={LoginComponent} />
                    <Route exact path="/HeaderComponent" component={HeaderComponent} />

                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
