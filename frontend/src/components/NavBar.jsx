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
                    <MDBIcon icon="user" className="d-inline-inline white-text" />
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
            <p className="" id="titleNav">
              <span className="" id="size">O </span>
              Programa <span>Vem Ser DBC</span> é um programa de capacitação completo, que estimula o crescimento profissional e pessoal de estudantes na área de tecnologia da informação.
            <br></ br>
            Não fique de fora dessa, e <a href="">inscreva-se</a> agora!! </p>            
            <MDBBtn gradient="aqua"><a href="" className="white-text">INSCREVA-SE</a></MDBBtn>
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