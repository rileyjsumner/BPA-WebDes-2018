import React, { Component } from 'react';
import '../../App.css';
import { NavItem } from './NavItem.js';

export class NavBar extends Component {
    generateItem() {
        return <NavItem url={items.url} text={items.text} submenu={items.submenu}/>;
    }
    render() {
        var items = this.props.items.map(this.generateItem);
        return (
            <ul className="menu">
                {items}
            </ul>
        );
    }
}
