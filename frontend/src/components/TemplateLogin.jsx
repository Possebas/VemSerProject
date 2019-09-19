import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
  MDBIcon
} from "mdbreact";

const TemplateLogin = () => {
  return (
    <MDBContainer >
      <MDBRow>
        <MDBCol md="8" xl="6" sm="12" className="mr-auto ml-auto">
          <MDBCard >
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3 text-center">
                <MDBIcon icon="user" className="d-inline-inline mr-1" />{" "}Acessar
                </h3>
              </MDBCardHeader>
              <form id="formu">
                <div className="grey-text">
                  <MDBInput
                    label="Digite seu email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="invalido"
                    success="right"
                  />
                  <MDBInput
                    label="Digite sua senha"
                    icon="lock"
                    group
                    type="password"
                    validate

                  />
                </div>

                <div className="text-center mt-4">
                  <MDBBtn
                    color="light-blue"
                    className="mb-3"
                    type="submit">
                    Entrar
                  </MDBBtn>
                </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light text-decoration-none">
                  <p>Recuperar <a href="/">senha </a></p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default TemplateLogin;