import React, { Component } from 'react';
import $ from 'jquery';
import '../../App.css';

export class ReadOneUserComponent extends Component {
    constructor() {
        super()
        this.state = {
            id: -1,
            member_id: -1,
            name: null,
            state: null,
            chapter: null,
            email: null,
            officer_title: null
        }
    }
    componentDidMount() {
        var userId = this.props.userId;
        this.serverRequestUser = $.get("/RestAPI/UserCRUD/read.php?id="+userId, function(user) {
            this.setState({
                id: user.id,
                member_id: user.member_id,
                name: user.name,
                state: user.state,
                chapter: user.chapter,
                email: user.email,
                officer_title: user.officer_title
            });
        }.bind(this));
        $('.page-header h1').text('Read User');
    }
    componentWillUnmount() {
        this.serverRequestUser.abort();
    }
    render() {

        return (
            <div>
                <a href="#/Login" onClick={()=> this.props.changeAppMode('read')} className='btn btn-primary margin-bottom-1em'>Read Users</a>
                <form onSubmit={this.onSave}>
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <td>Id</td>
                                <td>{this.state.id}</td>
                            </tr>
                            <tr>
                                <td>Member Id</td>
                                <td>{this.state.member_id}</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>{this.state.name}</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>{this.state.state}</td>
                            </tr>
                            <tr>
                                <td>Chapter</td>
                                <td>{this.state.chapter}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td>Officer Title</td>
                                <td>{this.state.officer_title}</td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}
