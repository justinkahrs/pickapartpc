import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
export default class Navigation extends Component {

  state = {
    open: true,
  };

  render() {
    return (
      <Navbar color="faded" toggleable>
        <NavbarBrand href="/">Pick a Part PC</NavbarBrand>
        <Collapse isOpen={this.state.open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem><NavLink><Link to="/">Home</Link></NavLink></NavItem>
            <NavItem><NavLink><Link to="/build">Build</Link></NavLink></NavItem>
            <NavItem><NavLink><Link to="/contact">Contact</Link></NavLink></NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
