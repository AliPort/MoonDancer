import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import Icon from '../assets/moondancericon.png';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
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
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand
            tag={RouterNavLink}
            to="/"
            exact
            activeClassName="router-link-exact-active">
            <div id="icon"><img src={Icon} alt="moondancer icon" width="80px"/></div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="item">
                <NavLink
                  tag={RouterNavLink}
                  to="/about"
                  exact
                  activeClassName="router-link-exact-active">
                  <h3>About</h3>
                </NavLink>
              </NavItem>
              <NavItem className="item">
                <NavLink
                  tag={RouterNavLink}
                  to="/booking"
                  exact
                  activeClassName="router-link-exact-active">
                  <h3>Charters & Tours</h3>
                </NavLink>
              </NavItem>
              <NavItem className="item">
                <NavLink
                  tag={RouterNavLink}
                  to="/fish"
                  exact
                  activeClassName="router-link-exact-active">
                  <h3>Fish Index</h3>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
);
};
}
