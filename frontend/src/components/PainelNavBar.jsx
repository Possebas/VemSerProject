<<<<<<< HEAD
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBCardText } from "mdbreact";
=======
import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBContainer,
  MDBView,
  MDBIcon,
  MDBRow,
  MDBCol,
} from 'mdbreact';
>>>>>>> devGustavo
import { BrowserRouter as Router } from 'react-router-dom';

export default class PainelNavBar extends Component {
state = {
  nome: "Fulano",
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

<<<<<<< HEAD
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
            <span className="pr-3" id="textobranco"> Olá, {this.state.nome}! </span>
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
=======
  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="bg-dark" id="oi" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand className="m-0" href="/">
                <MDBContainer className="m-0">
                  <MDBRow className="mb-0 mh-0" >
                    <MDBCol lg="9" md="8" sm="7">
                      <img src={logoVemSer} alt="LOGO" className="img-fluid" id="logoVemSer" />
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar >
                <MDBNavbarNav className="ml-1" right style={this.specialCaseNavbarStyles}>
                  <MDBNavItem className="d-none d-md-inline">
                    <MDBIcon icon="user" className="d-inline-inline white-text" />
                    <a className="nav-link Ripple-parent d-none d-md-inline" href="/"> Sair</a>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
        </header>
        <MDBView src={background} id="imgPainel">
        </MDBView>
      </div>
>>>>>>> devGustavo
    );
  }
}