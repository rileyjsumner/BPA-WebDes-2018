import React, { Component } from 'react';
import {TopActionsComponent} from './TopActionsComponent.js';
import {UsersTable} from './UsersTable.js';
import $ from 'jquery';
import '../../App.css';

export class ReadUserComponent extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        this.serverRequest = $.get("localhost:3000/#/RestAPI/UserCRUD/read.php", function(users) {
            this.setState({
                users: users.records
            });
        }.bind(this));
    }
    componentWillUnmount() {
        this.serverRequest.abort();
    }
    render() {
        var filteredUsers = this.state.users;
        $('.page-header  h1').text('Read Users');

        return (
            <div className="overflow-hidden loginWrapper">
                <TopActionsComponent changeAppMode={this.props.changeAppMode} />
                <UsersTable users={filteredUsers} changeAppMode={this.props.changeAppMode} />
            </div>
        );
    }
}
