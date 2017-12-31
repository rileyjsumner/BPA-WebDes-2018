import React, { Component } from 'react';
import '../../App.css';

export class UserRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.member_id}</td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.state}</td>
                <td>{this.props.user.chapter}</td>
                <td>{this.props.user.email}</td>
                <td>{this.props.user.officer_title}</td>
                <td>
                    <a href="#/Login" onClick={()=> this.props.changeAppMode('readOne', this.props.user.id)} className="btn btn-info m-r-1em">Read One</a>
                    <a href="#/Login" onClick={()=> this.props.changeAppMode('update', this.props.user.id)} className="btn btn-primary m-r-1em">Edit</a>
                    <a href="#/Login" onClick={()=> this.props.changeAppMode('delete', this.props.user.id)} className="btn btn-danger m-r-1em">Delete</a>
                </td>
            </tr>
        );
    }
}
