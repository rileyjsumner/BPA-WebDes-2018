import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Route } from 'react-router-dom';
import { AdvisorOTY } from './Awards/Professional/AdvisorOTY';

ReactDOM.render(
    (
        <HashRouter>
            <div>
                <Route exact path="/" component={App}/>
                <Route exact path="/Professional/Advisor-of-the-Year" component={AdvisorOTY}/>
            </div>
        </HashRouter>
    ), document.getElementById('root'));
registerServiceWorker();
