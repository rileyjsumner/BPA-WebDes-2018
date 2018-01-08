import React, { Component } from 'react';
import $ from 'jquery';
import '../../App.css';

export class LoginUserComponent extends Component {
    constructor() {
        super()
        this.state = {
            id: -1,
            member_id: -1,
            name: null,
            state: null,
            chapter: null,
            email: null,
            password: null,
            officer_title: null
        }
        this.onSave = this.onSave.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }
    componentDidMount() {
        $('.page-header h1').text('Login');
    }
    componentWillUnmount() {

    }
    onEmailChange(e) {
        this.setState({email: e.target.value});
    }
    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }
    onSave(e) {
        var form_data={
            email: this.state.email,
            password: this.state.password
        }
        $.ajax(({
            url: "http://rileysumner.com/bpa-cares/RestAPI/UserCRUD/login.php",
            type: "POST",
            contentType: 'application/json',
            data: JSON.stringify(form_data),
            success: function(response) {
                this.setState({loginSuccess: response['message']})
                console.log(response['row']);
            }.bind(this),
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
                alert(xhr.responseText);
            }
        }));
        e.preventDefault();
    }
    render() {

        return (
            <div>
                <a href="#/Login" onClick={()=> this.props.changeAppMode('read')} className='btn btn-primary margin-bottom-1em'>Read Users</a>
                <form>
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <td>Email</td>
                                <td><input type='text' name='email' className='form-control' required onChange={this.onEmailChange}/></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td><input type='password' name='password' className='form-control' required onChange={this.onPasswordChange}/></td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button className="btn btn-primary" onClick={this.onSave}>Login</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}
