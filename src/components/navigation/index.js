import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const Navigation = () => (
  <Navbar>
    <NavbarBrand to="/" tag={RRNavLink}>
      Pick A Part PC
    </NavbarBrand>
    <Nav>
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
);
export default Navigation;
