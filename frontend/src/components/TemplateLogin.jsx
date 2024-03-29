/* All librarys */
import React, {Component} from "react";

/* Components */
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
  MDBIcon} from "mdbreact";

export default class TemplateLogin extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <MDBContainer >
        <MDBRow>
          <MDBCol md="8" xl="6" sm="12" className="mr-auto ml-auto">
            <MDBCard >
              <MDBCardBody>
                <MDBCardHeader className="mb-5 form-header deep-blue-gradient rounded">
                  <h3 className="my-3 text-center">
                  <MDBIcon icon="user" className="d-inline-inline mr-1" />{" "}Acessar
                  </h3>
                </MDBCardHeader>
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Digite seu email"
                      icon="envelope"
                      group
                      type="email"
                      name="email" id="emaillogin"
                      validate
                      onChange={this.props.trocaValoresState}
                      error="invalido"
                      success="right"
                    />
                    <MDBInput
                      label="Digite sua senha"
                      icon="lock"
                      name="password" id="passwordlogin"
                      group
                      onChange={this.props.trocaValoresState}
                      type="password"
                      validate
                      success="right"
                    />
                  </div>
  
                  <div className="text-center mt-4">
                    <MDBBtn
                      color="dark"
                      onClick={this.props.logar}
                      className="mb-3"
                      type="submit">
                      Entrar
                    </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };
}