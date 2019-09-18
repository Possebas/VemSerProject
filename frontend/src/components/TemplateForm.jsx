import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBFileInput   } from "mdbreact";


import '../css/form.css';


class TemplateForm extends React.Component {
  state = {
    name: "",
    birthDate: "",
    cpf: "",
    zipCode:"",
    address:"",
    number:"",
    complement:"",
    city: "",
    district:"",
    state: "",
    parents:"",
    education:"",
    email:"",
    password:"",
    confirmPassword:"",
    
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
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.name}
                name="name"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="Nome completo"
                required
              >
              <div className="invalid-tooltip">
                campo obrigatório.
              </div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.birthDate}
                name="birthDate"
                onChange={this.changeHandler}
                type="date"
                id="materialFormRegisterDataNascimento"
                label="Data de Nascimento"
                required
              >
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.cpf}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterCpf"
                name="cpf"
                label="CPF"
                required
              >
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="2">
              <MDBInput
                value={this.state.zipCode}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterCep"
                name="zipCode"
                label="CEP"
                required
              >
                <div className="invalid-tooltip">
                Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
            <MDBInput
                value={this.state.address}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterEndereço"
                name="address"
                label="Endereço"
                required
              >
                <div className="invalid-tooltip">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="2">
              <MDBInput
                value={this.state.number}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNumero"
                name="number"
                label="Numero"
                required
              >
                <div className="invalid-tooltip">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
            <MDBInput
                value={this.state.complement}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterComplemento"
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
            <MDBCol md="3">
            <MDBInput
                value={this.state.city}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterCidade"
                name="city"
                label="Cidade"
                required
              >
                <div className="invalid-tooltip">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="3">
            <MDBInput
                value={this.state.district}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterBairro"
                name="district"
                label="Bairro"
                required
              >
                <div className="invalid-tooltip">
                Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="3">
            <MDBInput
                value={this.state.state}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterEstado"
                name="state"
                label="Estado"
                required
              >
                <div className="invalid-tooltip">
                Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="3">
            <MDBInput
                value={this.state.parents}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPais"
                name="parents"
                label="País"
                required
              >
                <div className="invalid-tooltip">
                Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol md="6">
              <MDBInput
                value={this.state.education}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterInstituicao"
                name="education"
                label="Instituição de ensino"
                required
              >
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="6">
              <div className="input-group" id="file">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupFileAddon01">
                    Upload
                  </span>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                  />
                  <label className="custom-file-label" htmlFor="inputGroupFile01">
                    Arquivo CV
                  </label>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol md="4">
              <MDBInput
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="materialFormRegisterEmail"
                name="email"
                label="Seu email"
                required
              >
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.password}
                onChange={this.changeHandler}
                type="password"
                id="materialFormRegisterPassword"
                name="password"
                label="Senha"
                required
              >
                <div className="invalid-tooltip">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.confirmPassword}
                onChange={this.changeHandler}
                type="password"
                id="materialFormRegisterConfirmPassword"
                name="confirmPassword"
                label="confirme sua senha"
                required
              >
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBBtn color="success" id="button" type="submit">
            Salvar
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default TemplateForm;