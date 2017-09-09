import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';

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
      <div>
        <Navbar color="faded">
          <NavbarBrand><Link to="/">Pick A Part PC</Link></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to='/build'>Build</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                <Link to="/contact">Contact</Link>
                </NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    )
  }
}
