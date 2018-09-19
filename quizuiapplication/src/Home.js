import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Header from './Components/Header/Header';

class Home extends React.Component {
    render() {
        const rootPath = "/"; 
        return (
            <div className="container-fluid">
            <Switch>
                <Route path={rootPath} component={App}/>
            </Switch>
            </div>
        )
    }
}

export default Home