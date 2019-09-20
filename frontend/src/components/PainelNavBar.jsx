import React, { Component } from "react";
import { 
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBCardText }
from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

export default class PainelNavBar extends Component {
state = {
  name: "Fulano",
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar id="painelNavBar" dark expand="md">
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left className="pl-2">
            <MDBNavItem active>
              <MDBNavLink to="/">
                <MDBIcon icon="home" />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav center>
            <MDBNavbarBrand>
              <strong id="dbclogo">DBC</strong>
            </MDBNavbarBrand>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <span className="pr-3" id="textobranco"> Olá, {this.state.name}! </span>
            <MDBNavItem className="pr-2">
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu right className="dropdown-default">
                  <MDBDropdownItem><a href="/">Sair</a></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}