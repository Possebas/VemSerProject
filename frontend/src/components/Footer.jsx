/* All librarys */
import React from "react";

/* Components */
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

/* CSS */
import "../css/footer.css"

const Footer = () => {
  return (
    <MDBFooter color="bg-dark" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="4" xl="6" className="mx-auto mt-3">
            <MDBRow>
              <MDBCol>
                <h6 className="text-uppercase mb-4 font-weight-bold colorH6">
                  Sobre
                </h6>
                <p>
                  O Programa Vem Ser DBC é um programa de capacitação completo que estimula
                  o crescimento profissional e pessoal de estudantes na área de tecnologia da informação.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12" lg="12" xl="12" className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold colorH6">Contato</h6>
                <p>
                  <i className="fa fa-home mr-3" /> Porto Alegre, RS, Brasil
                </p>
                <p>
                  <i className="fa fa-envelope mr-3" /> vemser@dbccompany.com.br
                </p>
                <p>
                  <i className="fa fa-phone mr-3" /> (51) 3092-8400
                </p>
                <p>
                  <i className="fab fa-facebook-messenger mr-3" />
                  <a href="https://www.messenger.com/t/VemSerDBC">Messenger</a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="2" lg="4" xl="6" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold colorH6">Conheça a DBC</h6>
            <iframe id="video" title="player" width="560" height="315" src="https://www.youtube.com/embed/D4TGd-RJt10"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </MDBCol>
        </MDBRow>
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.dbccompany.com.br/"> DBCCOMPANY.com.br</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.facebook.com/dbccompany.com.br/">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://twitter.com/dbccompany">
                    <i className="fab fa-twitter" />
                  </a>
                  </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.instagram.com/dbc.company/">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.linkedin.com/company/dbc-company/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.youtube.com/channel/UCjTW7OUdu4WdNH-Fu27I2VQ">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;