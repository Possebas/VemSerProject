/* All librarys */
import React from "react";
import RequestApi from '../api/RequestApi';
import * as axios from 'axios';

/* Components */
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import PasswordStrengthMeter from './PasswordStrengthMeter';

/* CSS */
import '../css/form.css';

/* Image */
import '../components/PasswordStrengthMeter/PasswordStrengthMeter.css';


class TemplateForm extends React.Component {
  constructor(props) {
    super(props);
    this.backData = new RequestApi()
    this.zipCodeUrl = `http://viacep.com.br/ws`
    this.baseUrl = `http://localhost:8080`
    this.state = {
      name: "Fulaninho",
      birthDate: "2012-12-12",
      cpf: "86569813072",
      zipCode: "94858540",
      street: "",
      number: "600",
      complement: "casa",
      city: "",
      district: "",
      state: "",
      parents: "",
      education: "escola",
      email: "teste@teste.com",
      password: "1234",
      confirmPassword: "",
      erro: false
    }
  };

  erro(){
    return(
      <div>
        {
          this.state.erro && (
            <div>
                <h4 className="white-text red">Erro ao tentar cadastrar, verifique seus dados</h4>
            </div>
          )
        }
      </div>
    )
  }
  

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

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";

    if ((this.state.password === this.state.confirmPassword) !== undefined) {
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
      data.toISOString().substring(0, 10)

      let addressCandidate = {
        country: { name: parents },
        uf: { name: state, country: '' },
        city: { name: city, uf: '' },
        neighborhood: { name: district, city: '' },
        address: {
          street: street,
          number: number,
          complement: complement,
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
        statusProcess: "PEENDING",
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
                                this.props.history.push({
                                  pathname: '/questions',
                                  state: { detail: respCandidate.data }
                                })
                              }).catch(this.setState({erro:true}),function (error) { console.log("Error that's request: " + error) })
                          }).catch(function (error) { console.log("Error that's request: " + error) })
                      }).catch(function (error) { console.log("Error that's request: " + error) })
                  }).catch(function (error) { console.log("Error that's request: " + error) })
              }).catch(function (error) { console.log("Error that's request: " + error) })
          }).catch(function (error) { console.log("Error that's request: " + error) }
          )
      } catch (erro) { console.log("Erro na tentativa de salvar") }
    }
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { password } = this.state;
    return (
      <div>
        <form
          className="needs-validation white-text"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol className="text-uppercase">
              <MDBInput className="white-text colorLabel"
                value={this.state.name}
                name="name"
                onChange={this.changeHandler}
                type="text"
                label="Nome completo"
                required
              >
                <div className="invalid-tooltip " id="fonte-invalid">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="text-uppercase">
              <MDBInput className="white-text colorLabel"
                value={this.state.birthDate}
                name="birthDate"
                onChange={this.changeHandler}
                type="date"
                label="Data de Nascimento"
                required
              >
                <div className="invalid-tooltip" id="fonte-invalid">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol className="text-uppercase">
              <MDBInput className="white-text colorLabel"
                value={this.state.cpf}
                onChange={this.changeHandler}
                type="text"
                name="cpf"
                label="CPF"
                required
              >
                <div className="invalid-tooltip" id="fonte-invalid">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="text-uppercase">
              <MDBInput className="white-text colorLabel"
                value={this.state.zipCode}
                onChange={this.changeHandler}
                onBlur={this.reqZipCodeData}
                type="text"
                name="zipCode"
                label="CEP"
                required
              >
                <div className="invalid-tooltip" id="fonte-invalid">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol className="text-uppercase">
              <MDBInput className="white-text colorLabel"
                value={this.state.street}
                onChange={this.changeHandler}
                type="text"
                name="strees"
                label="Logradouro"
                required
              >
                <div className="invalid-tooltip" id="fonte-invalid">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol className="text-uppercase">
              <MDBInput className="white-text colorLabel"
                value={this.state.number}
                onChange={this.changeHandler}
                type="number"
                name="number"
                label="Número"
                required
              >
                <div className="invalid-tooltip" id="fonte-invalid">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol className="text-uppercase">
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
            <MDBCol className="text-uppercase">
              <MDBInput className="white-text colorLabel"
                value={this.state.city}
                onChange={this.changeHandler}
                type="text"
                name="city"
                label="Cidade"
                required
              >
                <div className="invalid-tooltip" id="fonte-invalid">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol className="text-uppercase">
              <MDBInput className="white-text colorLabel"
                value={this.state.district}
                onChange={this.changeHandler}
                type="text"
                name="district"
                label="Bairro"
                required
              >
                <div className="invalid-tooltip" id="fonte-invalid">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="text-uppercase">
              <MDBInput className="white-text colorLabel"
                value={this.state.state}
                onChange={this.changeHandler}
                type="text"
                name="state"
                label="Estado"
                required
              >
                <div className="invalid-tooltip" id="fonte-invalid">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol className="text-uppercase">
              <MDBInput className="white-text colorLabel"
                value={this.state.parents}
                onChange={this.changeHandler}
                type="text"
                name="parents"
                label="País"
                required
              >
                <div className="invalid-tooltip" id="fonte-invalid">
                  Campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol className="text-uppercase">
              <MDBInput className="white-text colorLabel"
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                name="email"
                label="Seu email"
                required
              >
                <div className="invalid-tooltip" id="fonte-invalid">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>

          {/* Password */}
          <MDBRow>
            <MDBCol className="text-uppercase">
              <MDBInput
                className="white-text colorLabel" autoComplete="off"
                value={this.state.password}
                onChange={this.changeHandler}
                type="password"
                name="password"
                label="Senha"
                id="password"
                required
              >
                <div className="invalid-tooltip" id="fonte-invalid">
                  Campo obrigatório.
                </div>
              </MDBInput>
              <PasswordStrengthMeter password={password} />
            </MDBCol>
            <MDBCol className="text-uppercase">
              <MDBInput className="white-text colorLabel"
                value={this.state.confirmPassword}
                onChange={this.changeHandler}
                type="password"
                name="confirmPassword"
                label="Confirme sua senha"
                required
              >
                <div className="invalid-tooltip" id="fonte-invalid">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol className="text-uppercase">
              <MDBInput className="white-text colorLabel"
                value={this.state.education}
                onChange={this.changeHandler}
                type="text"
                name="education"
                label="Instituição de ensino"
                required
              >
                <div className="invalid-tooltip" id="fonte-invalid">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>

          {/* Upload de arquivo */}
          {/* <MDBRow>
            <MDBCol>
              <div className="md-form">
                <div className="file-field meddium">
                  <span className="text-uppercase">Adicione seu currículo</span>
                  <div className="my-auto">
                    <MDBIcon far icon="file-pdf" size="2x" className="mr-3 ml-2" />
                    <input type="file"/>
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow> */}
          {this.erro()}
          {/*Botões*/}
          <MDBRow>
            <MDBCol>
              <MDBBtn color="elegant" role="button">
                <div>
                  <MDBIcon icon="arrow-left" size="1x" className="mr-3" />
                  <a className="white-text" href="/">Voltar</a>
                </div>
              </MDBBtn>
              <MDBBtn color="elegant" id="button" type="submit">
                <div>
                  Próximo
                  <MDBIcon icon="arrow-right" size="1x" className="ml-3" />
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