import React, { Component } from 'react';
import '../../App.css';

export class TopActionsComponent extends Component {
    render() {
        return(
            <div>
                <a href='#/Login' onClick={() => this.props.changeAppMode('create')} className='btn btn-primary margin-bottom-1em'>Create User</a>
                <a href='#/Login' onClick={() => this.props.changeAppMode('read')} className='btn btn-primary margin-bottom-1em'>Get Users</a>
                <a href='#/Login' onClick={() => this.props.changeAppMode('update')} className='btn btn-primary margin-bottom-1em'>Update User</a>
                <a href='#/Login' onClick={() => this.props.changeAppMode('delete')} className='btn btn-primary margin-bottom-1em'>Delete User</a>
            </div>
        );
    }
}
