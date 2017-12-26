import React, { Component } from 'react';
import '../../App.css';
import { NavItem } from './NavItem.js';

export class NavBar extends Component {
    generateItem(item) {
        return <NavItem url={item.url} text={item.text} submenu={item.submenu}/>;
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
