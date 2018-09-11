import React from 'react';
import ReactDOM from 'react-dom';
import './Include/bootstrap'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Home from './Home';

ReactDOM.render(<BrowserRouter>
    <Home />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
