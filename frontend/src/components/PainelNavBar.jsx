import React, { Component } from "react";
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

export default class PainelNavBar extends Component {
constructor(props){
  super(props);
  this.state = {
    name: this.props.name,
    isOpen: false
  }
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