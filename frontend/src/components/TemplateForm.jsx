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
      name: "Fulaninho",
      birthDate: "1994-10-04",
      cpf: "84191304003",
      zipCode: "94470100",
      street: "",
      number: "700",
      complement: "",
      city: "",
      district: "",
      state: "",
      parents: "",
      education: "Faculdade",
      email: "teste@teste.com",
      password: "12345",
      confirmPassword: "12345"
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
          this.setState({
            zipCode: json.cep,
            city: json.localidade,
            street: json.logradouro,
            district: json.bairro,
            state: json.uf,
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
    const { name,
            birthDate,
            cpf,
            zipCode,
            street,
            number,
            complement,
            city,
            district,
            state,
            parents,
            education,
            email,
            password
          } = this.state
    const data = new Date()
    data.toISOString().substring(0,10)

    let addressCandidate = {
      country: {name: parents},
      uf: {name: state, country: ''},
      city: {name: city, uf: ''},
      neighborhood: {name: district, city: ''},
      address: {
        street: street,
        number: number,
        complement:complement,
        zipCode: zipCode,
        neighborhood: ''
      },
    }

    let candidateInfos = {
      name: name,
      email: email,
      password: password,
      cpf: cpf,
      birthDate: birthDate,
      statusProcess:"PEENDING",
      dateOfRegistration: data,
      educationalInstitution: education,
      beenConfirmed: "false",
      address: ''
     }

    try {
      axios.post(`${this.baseUrl}/api/country/add`, addressCandidate.country)
        .then(respCountry => {
            addressCandidate.uf.country = respCountry.data
            axios.post(`${this.baseUrl}/api/state/add`, addressCandidate.uf)
            .then(respUF => {
              addressCandidate.city.uf = respUF.data
              axios.post(`${this.baseUrl}/api/city/add`, addressCandidate.city)
              .then(respCity => {
                addressCandidate.neighborhood.city = respCity.data
                axios.post(`${this.baseUrl}/api/neighborhood/add`, addressCandidate.neighborhood)
                .then(respNeighborhood => {
                  addressCandidate.address.neighborhood = respNeighborhood.data
                  axios.post(`${this.baseUrl}/api/address/add`, addressCandidate.address)
                  .then(respAddress => {
                    candidateInfos.address = respAddress.data
                    axios.post(`${this.baseUrl}/api/candidate/add`, candidateInfos)
                    .then(respCandidate => {
                      console.log(respCandidate.data)
                      this.props.history.push({
                        pathname: '/questions',
                        state: { detail: respCandidate.data }
                      })
                  }).catch(function (error) {console.log("Error that's request: " + error)})
                }).catch(function (error) {console.log("Error that's request: " + error)})
              }).catch(function (error) {console.log("Error that's request: " + error)})
            }).catch(function (error) {console.log("Error that's request: " + error)})
          }).catch(function (error) {console.log("Error that's request: " + error)})
        }).catch(function (error) {console.log("Error that's request: " + error)}
    )} catch (erro) {console.log("Erro na tentativa de salvar")}
    event.target.className += "was-validated";
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
          </MDBRow>
          <MDBRow>
            <MDBCol>
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
            <MDBCol>
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
            <MDBCol>
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
            <MDBCol>
              <MDBInput className="white-text colorLabel"
                value={this.state.street}
                onChange={this.changeHandler}
                type="text"
                name="strees"
                label="Logradouro"
                required
              >
                <div className="invalid-tooltip">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol>
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
            <MDBCol>
              <MDBInput className="white-text colorLabel"
                value={this.state.complement}
                onChange={this.changeHandler}
                type="text"
                name="complement"
                label="Complemento"
              >
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
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
            <MDBCol>
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
          </MDBRow>
          <MDBRow>
            <MDBCol>
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
            <MDBCol>
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
            <MDBCol>
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
          </MDBRow>
          
          {/* Password */}
          <MDBRow>  
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
            <MDBCol>
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
            <MDBCol>
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
          </MDBRow>

          {/* Upload de arquivo */}
          <MDBRow>
            <MDBCol>
              <div className="md-form">
                <div className="file-field meddium">
                  <div className="my-auto">
                    <MDBIcon far icon="file-pdf" size="2x" className="mr-3 ml-2" />
                    <input type="file" />
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow>

          {/*Botões*/}
          <MDBRow>
            <MDBCol>
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
            </MDBCol>
          </MDBRow>
        </form>
      </div>
    );
  }
}

export default TemplateForm;