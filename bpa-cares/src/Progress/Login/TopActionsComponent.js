import React, { Component } from 'react';
import { SplashPage } from '../../PageComponents/SplashPage.js';
import '../../App.css';

export class TopActionsComponent extends Component {
    render() {
        return(
            <div>
                <a href='#' onClick={() => this.props.changeAppMode('create')} className='btn btn-primary margin-bottom-1em'>Create User</a>
            </div>
        );
    }
}