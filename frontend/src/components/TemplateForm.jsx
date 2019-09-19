import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from "mdbreact";

import '../css/form.css';


class TemplateForm extends React.Component {
  state = {
    name: "",
    birthDate: "",
    cpf: "",
    zipCode: "",
    address: "",
    number: "",
    complement: "",
    city: "",
    district: "",
    state: "",
    parents: "",
    education: "",
    email: "",
    password: "",
    confirmPassword: "",

  };

  getPickerValue = (value) => {
    console.log(value);
  }

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form
          className="needs-validation white-text"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow className="mt-5">
            <MDBCol>
              <MDBInput className="white-text colorLabel"
                value={this.state.name}
                name="name"
                onChange={this.changeHandler}
                type="text"
                label="Nome completo"
                pattern="[a-z\s]+$"
                required
              >
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol >
              <MDBInput className="white-text colorLabel"
                value={this.state.birthDate}
                name="birthDate"
                onChange={this.changeHandler}
                type="date"
                label="Data de Nascimento"
                pattern="(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}"
                required
              >
                <MDBIcon />
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol >
              <MDBInput className="white-text colorLabel"
                value={this.state.cpf}
                onChange={this.changeHandler}
                type="text"
                name="cpf"
                label="CPF"
                required
                pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
              >
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol >
              <MDBInput className="white-text colorLabel"
                value={this.state.zipCode}
                onChange={this.changeHandler}
                type="text"
                name="zipCode"
                label="CEP"

                required
              >
                <div className="invalid-tooltip">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol >
              <MDBInput className="white-text colorLabel"
                value={this.state.address}
                onChange={this.changeHandler}
                type="text"
                name="address"
                label="Endereço"
                required
              >
                <div className="invalid-tooltip">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol >
              <MDBInput className="white-text colorLabel"
                value={this.state.number}
                onChange={this.changeHandler}
                type="number"
                name="number"
                label="Número"
                pattern="[a-z\s]+$"
                required
              >
                <div className="invalid-tooltip">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol >
              <MDBInput className="white-text colorLabel"
                value={this.state.complement}
                onChange={this.changeHandler}
                type="text"
                name="complement"
                label="Complemento"

                required
              >
                <div className="invalid-tooltip">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol >
              <MDBInput className="white-text colorLabel"
                value={this.state.city}
                onChange={this.changeHandler}
                type="text"
                name="city"
                label="Cidade"
                pattern="[a-z\s]+$"
                required
              >
                <div className="invalid-tooltip">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol >
              <MDBInput className="white-text colorLabel"
                value={this.state.district}
                onChange={this.changeHandler}
                type="text"
                name="district"
                label="Bairro"
                pattern="[a-z\s]+$"
                required
              >
                <div className="invalid-tooltip">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol >
              <MDBInput className="white-text colorLabel"
                value={this.state.state}
                onChange={this.changeHandler}
                type="text"
                name="state"
                label="Estado"
                pattern="[a-z\s]+$"
                required
              >
                <div className="invalid-tooltip">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol >
              <MDBInput className="white-text colorLabel"
                value={this.state.parents}
                onChange={this.changeHandler}
                type="text"
                name="parents"
                label="País"
                pattern="[a-z\s]+$"
                required
              >
                <div className="invalid-tooltip">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol >
              <MDBInput className="white-text colorLabel"
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                name="email"
                label="Seu email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
              >
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol >
              <MDBInput className="white-text colorLabel"
                value={this.state.password}
                onChange={this.changeHandler}
                type="password"
                name="password"
                pattern=".{6,}" title="Mínimo 6 caracteres"
                label="Senha"
                required
              >
                <div className="invalid-tooltip">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol >
              <MDBInput className="white-text colorLabel"
                value={this.state.confirmPassword}
                onChange={this.changeHandler}
                type="password"
                name="confirmPassword"
                label="Confirme sua senha"
                required
              >
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol >
              <MDBInput className="white-text colorLabel"
                value={this.state.education}
                onChange={this.changeHandler}
                type="text"
                name="education"
                label="Instituição de ensino"
                pattern="[a-z\s]+$"
                required
              >
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol >
              <form class="md-form">
                <div class="ml-5 file-field medium">
                  <div class="btn btn-rounded ">
                    <MDBIcon far icon="file-pdf" size="2x" className="mr-3 ml-2" />
                    <input type="file" />
                  </div>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
          <MDBBtn color="black" id="button" type="submit">
            <div>
              <MDBIcon icon="arrow-left" size="1x" className="mr-1" />
              Voltar
            </div>
          </MDBBtn>
          <MDBBtn color="black" id="button" type="submit">
            <div>
              <MDBIcon far icon="paper-plane" size="1x" className="mr-1" />
              Enviar
            </div>
          </MDBBtn>

        </form>
      </div>
    );
  }
}

export default TemplateForm;