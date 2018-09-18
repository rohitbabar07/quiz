import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Main from './Containers/Main/Main';
import configureStore from './AppStore'


const store = configureStore()

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div >
                    <Main />
                </div>
            </Provider>
        )
    }
}

export default App