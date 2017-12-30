import React, { Component } from 'react';
import '../../App.css';
import {CreateUserComponent} from './createUser.js';
import {ReadOneUserComponent} from './get_oneUser.js';
import {UpdateUserComponent} from './updateUser.js';
import {DeleteUserComponent} from './deleteUser.js';
import {ReadUserComponent} from './getUser.js';
export class LoginSetup extends Component {
    constructor() {
        super()
        this.state = {
            currentMode: 'read',
            productId: null
        }
        this.changeAppMode = this.changeAppMode.bind(this);
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
