import React, { Component } from 'react';
import '../../App.css';
import { NavLink } from './NavLink.js';
import { NavBar } from './NavBar.js';

export class NavItem extends Component {
    generateLink() {
        return <NavLink url={this.props.url} text={this.props.text}/>;
    }
    generateSubMenu() {
        return <NavBar items={this.props.submenu} />;
    }
    generateContent() {
        var content = [this.generateLink()];
        if(this.props.submenu) {
            content.push(this.generateSubMenu());
        }
        return content;
    }
    render() {
        var content = this.generateContent();
        return (
                <li>{content}</li>
        );
    }
}
