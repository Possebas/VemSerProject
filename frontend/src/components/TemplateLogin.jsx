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
  MDBInput
} from "mdbreact";

const FormPage = () => {
  return (
    <MDBContainer >
      <MDBRow>
        <MDBCol xl="6" md="6" sm="12">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3 text-center">
                   Acessar
                </h3>
              </MDBCardHeader>
              <form>
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
                <div className="font-weight-light">
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

export default FormPage;