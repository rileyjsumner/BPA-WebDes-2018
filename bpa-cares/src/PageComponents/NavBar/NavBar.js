import React, { Component } from 'react';
import '../../App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
export class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log("toggle");
    }
    render() {
        return (
            <Navbar color="faded" light expand="md">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" vertical>
                        <UncontrolledDropdown>
                            <DropdownToggle color="danger">Service Learning Awards</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Community Service Award</DropdownItem>
                                <DropdownItem>Environmental Action/Awareness Award</DropdownItem>
                                <DropdownItem>Safety Awareness Award</DropdownItem>
                                <DropdownItem>Service Learning Individual Award</DropdownItem>
                                <DropdownItem>Special Olympics Award</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown>
                            <DropdownToggle color="danger">Special Recognition Awards</DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem>BPA Marketing & Public Relations Award</DropdownItem>
                                <DropdownItem>BPA Merit Scholar Award</DropdownItem>
                                <DropdownItem>Chapter Activities Award of Excellence</DropdownItem>
                                <DropdownItem>Recruiter of the Year Award</DropdownItem>
                                <DropdownItem>Membership Explosion Award</DropdownItem>
                                <DropdownItem>Social Media Award</DropdownItem>
                                <DropdownItem>Professional Cup</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown>
                            <DropdownToggle color="danger">Professional Awards</DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem>Advisor of the Year Award</DropdownItem>
                                <DropdownItem>Emerging Advisor of the Year Award</DropdownItem>
                                <DropdownItem>Hall of Fame Award</DropdownItem>
                                <DropdownItem>Outstanding Service Award</DropdownItem>
                                <DropdownItem>Student of the Year Award</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
