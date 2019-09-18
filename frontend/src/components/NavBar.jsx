import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBView,
  MDBIcon,
  MDBRow,
  MDBCol
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

/* Image and css */
import "../css/navbar.css"
import background from "../images/background.jpg";
import logoVemSer from '../images/logoVemSer.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  specialCaseNavbarStyles = {
    WebkitBoxOrient: "horizontal",
    flexDirection: "row"
  };

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }




  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="bg-dark" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <MDBContainer className="mt-1">
                  <MDBRow className="mb-2 mh-100" >
                    <MDBCol lg="9" md="8" sm="7">
                      <img src={logoVemSer} text-hide alt="LOGO" className="img-fluid" />
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar >
                <MDBNavbarNav  right >
                  <MDBNavItem className="pr-4">
                    <MDBNavLink to="#">O que é?</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="pr-4">
                    <MDBNavLink to="#">Conhecimento</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="pr-4">
                    <MDBNavLink to="#">Fases</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="pr-4">
                    <MDBNavLink to="#">Ensinamentos</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="pr-4">
                    <MDBNavLink to="#">Depoimentos</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="pr-4" >
                    <MDBNavLink to="#">Localização</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav className="ml-1" right style={this.specialCaseNavbarStyles}>
                  <MDBNavItem className="d-none d-md-inline">
                    <MDBIcon icon="user" className="d-inline-inline" />
                    <a className="nav-link Ripple-parent d-none d-md-inline" href="/login"> Acessar</a>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>

            </MDBNavbar>
          </Router>

          <MDBView src={background}>

          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

{/* <MDBMask className="flex-center flex-column text-white text-center">
  <h2>This Navbar is fixed</h2>
  <h5>It will always stay visible on the top, even when you scroll down</h5>
  <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
  <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
</MDBMask> */}

export default NavBar;