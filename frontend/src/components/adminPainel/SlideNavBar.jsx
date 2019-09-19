import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBCardText } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

export default class SlideNavBar extends Component {
state = {
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#">
                Candidatos
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active>
              <MDBNavLink to="#">
                Candidatos
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active>
              <MDBNavLink to="#">
                Candidatos
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active>
              <MDBNavLink to="#">
                Candidatos
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active>
              <MDBNavLink to="#">
                Candidatos
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
    </Router>
    );
  }
}