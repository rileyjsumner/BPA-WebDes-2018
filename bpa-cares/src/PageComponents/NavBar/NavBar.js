import React, { Component } from 'react';
import '../../App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
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
                                <DropdownItem href="/#/ServiceLearning/Community-Service">Community Service Award</DropdownItem>
                                <DropdownItem href="/#/ServiceLearning/Environmental-Action">Environmental Action/Awareness Award</DropdownItem>
                                <DropdownItem href="/#/ServiceLearning/Safety-Awareness">Safety Awareness Award</DropdownItem>
                                <DropdownItem href="/#/ServiceLearning/Service-Learning-Individual">Service Learning Individual Award</DropdownItem>
                                <DropdownItem href="/#/ServiceLearning/Special-Olympics">Special Olympics Award</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown>
                            <DropdownToggle color="danger">Special Recognition Awards</DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem href="/#/SpecialRecognition/BPA-Marketing-and-Public-Relations">BPA Marketing & Public Relations Award</DropdownItem>
                                <DropdownItem href="/#/SpecialRecognition/BPA-Merit-Scholar">BPA Merit Scholar Award</DropdownItem>
                                <DropdownItem href="/#/SpecialRecognition/Chapter-Activities-Award-of-Excellence">Chapter Activities Award of Excellence</DropdownItem>
                                <DropdownItem href="/#/SpecialRecognition/Recruiter-of-the-Year">Recruiter of the Year Award</DropdownItem>
                                <DropdownItem href="/#/SpecialRecognition/Membership-Explosion">Membership Explosion Award</DropdownItem>
                                <DropdownItem href="/#/SpecialRecognition/Social-Media">Social Media Award</DropdownItem>
                                <DropdownItem href="/#/SpecialRecognition/Professional-Cup">Professional Cup</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown>
                            <DropdownToggle color="danger">Professional Awards</DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem href="/#/Professional/Advisor-of-the-Year">Advisor of the Year Award</DropdownItem>
                                <DropdownItem href="/#/Professional/Emerging-Advisor">Emerging Advisor of the Year Award</DropdownItem>
                                <DropdownItem href="/#/Professional/Hall-Of-Fame">Hall of Fame Award</DropdownItem>
                                <DropdownItem href="/#/Professional/Oustanding-Service-Award">Outstanding Service Award</DropdownItem>
                                <DropdownItem href="/#/Professional/Student-of-the-Year">Student of the Year Award</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
