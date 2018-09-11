import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import LoginComponent from './Components/loginComponent/LoginComponent';


class Home extends React.Component {
    render() {
        const rootPath = "/"; 
        return (
            <Switch>
                <Route path={rootPath} component={App}/>
            </Switch>
        )
    }
}

export default Home