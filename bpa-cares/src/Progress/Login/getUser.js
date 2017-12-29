import React, { Component } from 'react';
import { SplashPage } from '../../PageComponents/SplashPage.js';
import '../../App.css';

export class Login extends Component {
    getInitialState() {
        return {
            users: []
        };
    },
    componentDidMount() {
        this.serverRequest = $.get("localhost:3000/#/RestAPI/UserCRUD/read.php", function(products) {
            this.setState({
                users: users.records
            });
        }.bind(this));
    },
    componentWillUnmount() {
        this.serverRequest.abort();
    },
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
