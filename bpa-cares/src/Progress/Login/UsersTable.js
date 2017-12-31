import React, { Component } from 'react';
import {UserRow} from './UsersRow.js';
import '../../App.css';

export class UsersTable extends Component {
    render() {
        var rows = this.props.users.map(function(user, i) {
            return (
                <UserRow key={i} user={user} changeAppMode={this.props.changeAppMode} />
            );
        }.bind(this));
        return (
            !rows.length ?
                <div className='alert alert-danger'>No Users Found</div>
                :
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Member_id</th>
                            <th>Name</th>
                            <th>State</th>
                            <th>Chapter</th>
                            <th>Email</th>
                            <th>Officer Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
        )
    }
}
