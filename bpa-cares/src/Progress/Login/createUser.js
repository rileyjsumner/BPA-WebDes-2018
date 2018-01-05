import React, { Component } from 'react';
import $ from 'jquery';
import '../../App.css';

export class CreateUserComponent extends Component {
    constructor() {
        super()
        this.state = {
            id: -1,
            member_id: -1,
            name: "",
            state: "",
            chapter: "",
            email: "",
            password: "",
            officer_title: ""
        };
        this.onMemberIdChange = this.onMemberIdChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onStateChange = this.onStateChange.bind(this);
        this.onChapterChange = this.onChapterChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    componentDidMount() {
        this.serverRequest = $.get("http://www.rileysumner.com/bpa-cares/RestAPI/UserCRUD/read.php", function(users) {
            this.setState({
                users: users.records
            });
        }.bind(this));
    }
    componentWillUnmount() {
        this.serverRequest.abort();
    }
    onMemberIdChange(e) {
        this.setState({member_id: e.target.value});
    }
    onNameChange(e) {
        this.setState({name: e.target.value});
    }
    onStateChange(e) {
        this.setState({state: e.target.value});
    }
    onChapterChange(e) {
        this.setState({chapter: e.target.value});
    }
    onEmailChange(e) {
        this.setState({email: e.target.value});
    }
    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }
    onTitleChange(e) {
        this.setState({officer_title: e.target.value});
    }
    onSave(e) {
        var form_data={
            member_id: this.state.member_id,
            name: this.state.name,
            state: this.state.state,
            chapter: this.state.chapter,
            email: this.state.email,
            password: this.state.password,
            officer_title: this.state.officer_title
        };
        $.ajax({
            url: "http://www.rileysumner.com/bpa-cares/RestAPI/UserCRUD/create.php",
            type: "POST",
            contentType: 'application/json',
            data: JSON.stringify(form_data),
            success: function(response) {
                this.setState({successCreation: response['message']});

                this.setState({member_id:-1});
                this.setState({name:""});
                this.setState({state:""});
                this.setState({chapter:""});
                this.setState({email:""});
                this.setState({password:""});
                this.setState({officer_title:""});
            }.bind(this),
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });
        e.preventDefault();
    }
    render() {
        return (
            <div>
                {
                    this.state.successCreation === "User Was Created" ?
                        <div className="alert alert-success">
                            User Was Saved
                        </div>
                        :null
                }
                {
                    this.state.successCreation === "Unable to Create User" ?
                        <div className="alert alert-danger">
                            Unable to Save User. Please Try Again.
                        </div>
                        :null
                }
                <a href="#/Login" onClick={()=>this.props.changeAppMode('read')} className='btn btn-primary margin-bottom-1em'>Read</a>
                <form>
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <td>Member ID</td>
                                <td><input type='text' className='form-control' value={this.state.member_id} required onChange={this.onMemberIdChange}/></td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td><input type='text' className='form-control' value={this.state.name} required onChange={this.onNameChange}/></td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td><input type='text' className='form-control' value={this.state.state} required onChange={this.onStateChange}/></td>
                            </tr>
                            <tr>
                                <td>Chapter</td>
                                <td><input type='text' className='form-control' value={this.state.chapter} required onChange={this.onChapterChange}/></td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td><input type='text' className='form-control' value={this.state.email} required onChange={this.onEmailChange}/></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td><input type='password' className='form-control' value={this.state.password} required onChange={this.onPasswordChange}/></td>
                            </tr>
                            <tr>
                                <td>Officer Title</td>
                                <td><input type='text' className='form-control' value={this.state.officer_title} required onChange={this.onTitleChange}/></td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button className="btn btn-primary" onClick={this.onSave}>Save</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}
