import React, { Component } from 'react';
import '../../App.css';

export class NavLink extends Component {
    render() {
        return (
                <a href={this.props.url}>{this.props.text}</a>
        );
    }
}
