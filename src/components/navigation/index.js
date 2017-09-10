// @flow
import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const Navigation = () => (
  <div>
    <Navbar color="light">
      <NavbarBrand to="/" tag={RRNavLink}>
        Pick A Part PC
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/build" tag={RRNavLink}>
            Build
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" tag={RRNavLink}>
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);
export default Navigation;
