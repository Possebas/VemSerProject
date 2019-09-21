import React from "react";
import * as axios from 'axios';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import RequestApi from '../api/RequestApi';
import '../css/form.css';

class TemplateForm extends React.Component {
  constructor(props) {
    super(props);
    this.backData = new RequestApi()
    this.zipCodeUrl = `http://viacep.com.br/ws`
    this.baseUrl = `http://localhost:8080`
    this.state = {
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
      confirmPassword: ""
    }
  };


  reqZipCodeData = async event => {
    event.preventDefault()
    const id = event.target.value;
    if (id) {
      let url = `/${id}/json/`
      axios.get(`${this.zipCodeUrl}${url}`)
        .then(resp => {
          let json = resp.data
          console.log(" Chegando na api ", resp.data)
          this.setState({
            zipCode: json.cep,
            city: json.localidade,
            address: json.logradouro,
            district: json.bairro,
            parents: "Brasil"
          })
        }).catch(function (error) {
          console.log("Error that's request: " + url + "  " + error)
        })
    }
  };

  getPickerValue = value => {
    console.log(value);
  };

  submitHandler = event => {
    event.preventDefault();
    const { name, birthDate, cpf, zipCode, address, number, complement, city, district, state, parents, education, email, password } = this.state
    // console.log(name, birthDate, cpf, zipCode, address, number, complement, city, district, state, parents, education, email, password)
    /* "name": "teste",
    "email": "test@123.com",
    "password": "594559d58b2984e23099ea0d90810e33",
    "cpf": "00745155006",
    "birthDate": "1985-10-02",
    "statusProcess": "PEENDING",
    "dateOfRegistration": "2017-10-02",
    "educationalInstitution": "ipa",
    "beenConfirmed": false */
    const data = new Date()
    data.toISOString().substring(0,10)
    let candidateInfos = {
     name: name,
     birthDate: birthDate,
     cpf: cpf, 
     educationalInstitution: education,
     email: email,
     password: password, 
     dateOfRegistration: data,
     statusProcess:"PEENDING",
     beenConfirmed: false, 
    }
    try {
      axios.post(`http://localhost:8080/api/candidate/add`, candidateInfos)
        .then(resp => {
          console.log(" Chegando na api ", resp.data)
        }).catch(function (error) {
          console.log("Error that's request: " + error)
        })
      console.log("CANDIDATO ...", candidateInfos)
      this.props.history.push("/registerQuestions");
    } catch (erro) {
      console.log("Erro na tentativa de salvar")
    }

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
                onBlur={this.reqZipCodeData}
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
              <div className="md-form">
                <div className="ml-5 file-field medium">
                  <div className="my-auto">
                    <MDBIcon far icon="file-pdf" size="2x" className="mr-3 ml-2" />
                    <input type="file" />
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBBtn color="black" role="button">
            <div>
              <MDBIcon icon="arrow-left" size="1x" className="mr-1" />
              <a href="/">Voltar</a>
            </div>
          </MDBBtn>
          <MDBBtn color="black" id="button" type="submit">
            <div>
              <MDBIcon far icon="paper-plane" size="1x" className="mr-1" />
              Próximo
            </div>
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default TemplateForm;