import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBInputGroup } from "mdbreact";


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
          <MDBRow>
            <MDBCol>
              <MDBInput className="white-text colorLabel"
                value={this.state.name}
                name="name"
                onChange={this.changeHandler}
                type="text"
                label="Nome completo"
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
                required
              >
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
                type="text"
                name="number"
                label="Número"
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
                required
              >
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol >
              <MDBInputGroup
                inputs={
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                    />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                      Choose file
                    </label>
                  </div>
                }
              />
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