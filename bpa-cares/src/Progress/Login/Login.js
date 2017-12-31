import React, { Component } from 'react';
import {SplashPage} from '../../PageComponents/SplashPage.js';
import { LoginSetup } from './LoginSetup.js';
import '../../App.css';

export class Login extends Component {
    render() {
        return (
            <div className="Page">
                <LoginSetup/>
            </div>
        );
    }
}
