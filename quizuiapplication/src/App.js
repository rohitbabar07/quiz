import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Main from './Containers/Main/Main';
import Header from '../src/Components/Header/Header';
import configureStore from './AppStore'


const store = configureStore()

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div >
                    <Header />
                    <Main />
                </div>
            </Provider>
        )
    }
}

export default App