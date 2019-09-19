import React, { Fragment } from 'react';
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
  MDBCol,
  MDBBtn
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

/* Image and css */
import "../css/navbar.css"
import background from "../images/fundoDBC.jpg";
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
            <MDBNavbar color="bg-dark" id="oi" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand className="m-0" href="/">
                <MDBContainer className="m-0">
                  <MDBRow className="mb-0 mh-0" >
                    <MDBCol lg="9" md="8" sm="7">
                      <img src={logoVemSer} text-hide alt="LOGO" className="img-fluid" id="logoVemSer" />
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
                    <MDBNavLink to="#">Tecnologias abordadas</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="pr-4">
                    <MDBNavLink to="#">Etapas</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="pr-4">
                    <MDBNavLink to="#">não se sabe</MDBNavLink>
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
                    <MDBIcon icon="user" className="d-inline-inline white-text" />
                    <a className="nav-link Ripple-parent d-none d-md-inline" href="/login"> Acessar</a>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
          <MDBView src={background}>
            <MDBContainer className="text-center" id="tt">
              <h1 className="white-text font-weight-bold" id="tituloVS">Vem Ser DBC</h1> 
              <p className="" id="titleNav">Não fique de fora dessa<br></br> <a href="/register">inscreva-se</a> agora!! </p>            
              <MDBBtn gradient="aqua"><a href="/register" className="white-text">INSCREVA-SE</a></MDBBtn>
            </MDBContainer>
          </MDBView>
          
        </header>

        <main>
          
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