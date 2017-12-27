import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import AdvisorOTY from './Awards/Professional/AdvisorOTY';

const Routes = (props) => (
    <Router {...props}>
        <Route path='/' component = {App}/>
        <Route path='/Professional/Advisor-of-the-Year' component = {AdvisorOTY}/>
    </Router>
)
export default Routes;
