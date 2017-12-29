import React, { Component } from 'react';
import { SplashPage } from '../../PageComponents/SplashPage.js';
import '../../App.css';

export class Login extends Component {
    getInitialState() {
        return {
            currentMode: 'read',
            userId: null
        };
    }
    changeAppMode(newMode, productId) {
        this.setState({currentMode: newMode});
        if(productId !== undefined){
            this.setState({productId: productId});
        }
    }
    render() {
        var modeComponent = <ReadUserComponent changeAppMode={this.changeAppMode}/>;
        switch(this.state.currentMode) {
            case 'read':
                break;
            case 'readOne':
                modeComponent = <ReadOneUserComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'create':
                modeComponent = <CreateUserComponent changeAppMode={this.changeAppMode}/>;
                break;
            case 'update':
                modeComponent = <UpdateUserComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'delete':
                modeComponent = <DeleteUserComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            default:
                break;
        }
        return modeComponent;
    }
}
