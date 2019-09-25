/* All librarys */
import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

/* Components */
import { 
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon }
from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { logout } from "../api/LoginAuth";

export default class PainelNavBar extends Component {
constructor(props){
  super(props);
  this.state = {
    name: this.props.name,
    isOpen: false
  }
};

log_out() {
  logout();
}

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
            <MDBNavItem>
              <a href="/">
                <MDBIcon icon="home" />
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav>
            <MDBNavbarBrand>
              <strong id="dbclogo">Painel VemSer - DBC</strong>
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
                  <MDBDropdownItem><a href="/" onClick={this.log_out}>Sair</a></MDBDropdownItem>
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