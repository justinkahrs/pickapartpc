import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: true,
    };
    this.toggle = this.toggle.bind(this);
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="light">
        <NavbarBrand href="/">Pick A Part PC</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/build/">Build</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    )
  }
}
