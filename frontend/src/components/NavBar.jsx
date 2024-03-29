/* All librarys */
import React from 'react';

/* Components */
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
import Cover from 'react-video-cover';
import AnchorLink from 'react-anchor-link-smooth-scroll';

/* CSS */
import "../css/navbar.css"

/* Images */
import logoVemSer from '../images/logoVemSer.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      resizeNotifier: () => { },
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
    const videoOptions = {
      src: 'https://storage.coverr.co/videos/Black_Keys?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTY5MDE1MzUxfQ.pCkN9igqxBko73ziO5V3jS3JZTIUJJUXj2EkvP_JRpA',
      autoPlay: true,
      muted: true,
      loop: true,
    }
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="bg-dark" id="oi" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand className="m-0" href="/">
                <MDBContainer className="m-0">
                  <MDBRow className="mb-0 mh-0" >
                    <MDBCol lg="9" md="8" sm="7">
                      <img src={logoVemSer} text-hide="true" alt="LOGO" className="img-fluid" id="logoVemSer" />
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar className="navBar">
                <MDBNavbarNav right>
                  <MDBNavItem className="text-uppercase under mr-2 ">
                  <AnchorLink href='#whatis'><MDBNavLink>O que é?</MDBNavLink></AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem className="text-uppercase under mr-2">
                   <AnchorLink href='#requirements'><MDBNavLink>Pré-Requisitos</MDBNavLink></AnchorLink> 
                  </MDBNavItem>
                  <MDBNavItem className="text-uppercase under mr-2">
                    <AnchorLink href="#phases"><MDBNavLink >Etapas</MDBNavLink></AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem className="text-uppercase under mr-2">
                    <AnchorLink href="#technology"><MDBNavLink >Tecnologias</MDBNavLink></AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem className="text-uppercase under mr-2">
                    <AnchorLink href="#brief"><MDBNavLink >Depoimentos</MDBNavLink></AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem className="text-uppercase under mr-2">
                    <AnchorLink  href="#benefits"> <MDBNavLink>Benefícios</MDBNavLink></AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem className="text-uppercase under mr-2" >
                    <AnchorLink href="#location"><MDBNavLink >Localização</MDBNavLink></AnchorLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav className="ml-1" right style={this.specialCaseNavbarStyles}>
                  <MDBNavItem className="d-none d-md-inline">
                    <MDBIcon icon="user" className="d-inline-inline white-text" />
                    <a className="nav-link Ripple-parent d-none d-md-inline" href="/login"> ACESSAR</a>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
          <MDBView className="dbc">
            <div className="videoCover" >
              <Cover
                videoOptions={videoOptions}
                remeasureOnWindowresize
                getResizeNotifier={resizeNotifier => {
                  this.state({
                    resizeNotifier,
                  });
                }}
              />
            </div>
            <MDBContainer className="black-text text-center textVideo" id="tt">
              <h1 className="text-uppercase tracking-in-expand" id="tituloVS1">Vem</h1>
              <h1 className="text-uppercase tracking-in-expand" id="tituloVS">Ser <span id="tituloVSSpan">DBC</span></h1>
              <p className="" id="titleNav"> Curte <span id="tecnologia">tecnologia</span> ?  <br /> Gosta de <span id="desafios">desafios </span> ?  <br /> Quer aprender a <span id="desenvolver">desenvolver</span> ? <br /> Não fique de fora dessa! </p>
              <MDBBtn color="elegant" className="mb-5 mt-4"><a href="/register" className="white-text">INSCREVA-SE</a></MDBBtn>
            </MDBContainer>
          </MDBView>

        </header>

        <main>

        </main>
      </div>
    );
  }
}

export default NavBar;