import React, { Component } from 'react';
import '../../App.css';
import {CreateUserComponent} from './createUser.js';
import {ReadOneUserComponent} from './get_oneUser.js';
import {UpdateUserComponent} from './updateUser.js';
import {DeleteUserComponent} from './deleteUser.js';
import {ReadUserComponent} from './getUser.js';
import {LoginUserComponent} from './loginUser.js';
export class LoginSetup extends Component {
    constructor() {
        super()
        this.state = {
            currentMode: 'read',
            userId: null
        }
        this.changeAppMode = this.changeAppMode.bind(this);
    }
    changeAppMode(newMode, userId) {
        this.setState({currentMode: newMode});
        if(userId !== undefined){
            this.setState({userId: userId});
        }
    }
    render() {
        var modeComponent = <ReadUserComponent changeAppMode={this.changeAppMode}/>;
        switch(this.state.currentMode) {
            case 'read':
                break;
            case 'readOne':
                modeComponent = <ReadOneUserComponent userId={this.state.userId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'create':
                modeComponent = <CreateUserComponent changeAppMode={this.changeAppMode}/>;
                break;
            case 'update':
                modeComponent = <UpdateUserComponent userId={this.state.userId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'delete':
                modeComponent = <DeleteUserComponent userId={this.state.userId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'login':
                modeComponent = <LoginUserComponent changeAppMode={this.changeAppMode}/>;
                break;
            default:
                break;
        }
        return modeComponent;
    }
}
