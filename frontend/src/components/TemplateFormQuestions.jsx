import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import '../css/formQuestions.css'
import '../css/form.css';


class TemplateFormQuestions extends React.Component {
  state = {
    radio: "",
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

  onClick = nr => () => {
    this.setState({
      radio: nr
    });
  }

  render() {
    return (
      <div>
        <form
          className="needs-validation white-text"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow className="mt-5 text-left">
            <MDBCol>
              <h5 className="white-text">1 - Está matriculado em curso relacionado a TI?</h5>
              <MDBFormInline className="mt-45 mb-4">
                <MDBInput gap onClick={this.onClick(1)} checked={this.state.radio === 1 ? true : false} label="SIM" type="radio" id="radio1" />
                <MDBInput gap onClick={this.onClick(2)} checked={this.state.radio === 2 ? true : false} label="NÃO" type="radio" id="radio2" />
              </MDBFormInline>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-3 text-left">
            <MDBCol>
              <h5 className="white-text">2 - Se sua resposta foi "Sim", qual o curso?</h5>
              <MDBInput className="white-text" type="text" >
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-45 text-left">
            <MDBCol>
              <h5 className="white-text">3 - Em qual instituição de ensino está estudando?</h5>
              <MDBInput className="white-text" type="text" >
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-45 text-left">
            <MDBCol>
              <h5 className="white-text">4 - Em que turno está matriculado?</h5>
              <MDBFormInline className="mt-5">
                <MDBInput gap onClick={this.onClick(1)} checked={this.state.radio === 1 ? true : false} label="MANHÃ" type="radio" id="radio1" />
                <MDBInput gap onClick={this.onClick(2)} checked={this.state.radio === 2 ? true : false} label="TARDE" type="radio" id="radio2" />
                <MDBInput gap onClick={this.onClick(3)} checked={this.state.radio === 3 ? true : false} label="NOITE" type="radio" id="radio3" />
              </MDBFormInline>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5 text-left">
            <MDBCol>
              <h5 className="white-text">5 - Você já participou de seleção anterior do Vem Ser nas etapas de testes técnicos e/ou testes psicológicos? </h5>
              <MDBFormInline className="mt-5 mb-3">
                <MDBInput gap onClick={this.onClick(1)} checked={this.state.radio === 1 ? true : false} label="SIM" type="radio" id="radio1" />
                <MDBInput gap onClick={this.onClick(2)} checked={this.state.radio === 2 ? true : false} label="NÃO" type="radio" id="radio2" />
              </MDBFormInline>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5 text-left">
            <MDBCol>
              <h5 className="white-text">6 - Selecione os motivos pelo qual se interessou pela carreira na área de tecnologia:</h5>
              <MDBFormInline className="mt-5 text-uppercase">
                <MDBInput gap onClick={this.onClick(1)} checked={this.state.radio === 1 ? true : false} label="Pelo reconhecimento e valorização financeira do profissional de TI" type="radio" id="radio1" />
              </MDBFormInline>
              <MDBFormInline className="mt-3 text-uppercase">
                <MDBInput gap onClick={this.onClick(2)} checked={this.state.radio === 2 ? true : false} label="Por ajudar outras pessoas" type="radio" id="radio2" />
              </MDBFormInline>
              <MDBFormInline className="mt-3 text-uppercase">
                <MDBInput gap onClick={this.onClick(3)} checked={this.state.radio === 3 ? true : false} label="Por gostar de desafios" type="radio" id="radio3" />
              </MDBFormInline>
              <MDBFormInline className="mt-3 text-uppercase">
                <MDBInput gap onClick={this.onClick(4)} checked={this.state.radio === 4 ? true : false} label="Por gostar de resolver problemas" type="radio" id="radio4" />
              </MDBFormInline>
              <MDBFormInline className="mt-3 mb-4 text-uppercase">
                <MDBInput gap onClick={this.onClick(5)} checked={this.state.radio === 5 ? true : false} label="Outro" type="radio" id="radio5" />
              </MDBFormInline>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-3 text-left">
            <MDBCol>
              <h5 className="white-text">7 - Se você respondeu "Outro", nos diga qual o motivo pelo qual se interessou pela carreira na área de tecnologia? </h5>
              <MDBInput className="white-text" type="text" >
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5 text-left">
            <MDBCol>
              <h5 className="white-text">8 - Uma das nossas etapas eliminatórias de seleção será uma prova de lógica de programação, não sendo necessária a realização em tecnologia específica, mas será avaliado o raciocínio para solução de problemas. Tens conhecimento em lógica de programação? </h5>
              <MDBFormInline className="mt-5 mb-3">
                <MDBInput gap onClick={this.onClick(1)} checked={this.state.radio === 1 ? true : false} label="SIM" type="radio" id="radio1" />
                <MDBInput gap onClick={this.onClick(2)} checked={this.state.radio === 2 ? true : false} label="NÃO" type="radio" id="radio2" />
              </MDBFormInline>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5 text-left">
            <MDBCol>
              <h5 className="white-text">9 - O estágio acontecerá no turno da tarde, das 13h30min às 17h30min, de segunda a sexta-feira e será necessária muita dedicação extra para as atividades. Tens disponibilidade de horários?</h5>
              <MDBFormInline className="mt-5 mb-3">
                <MDBInput gap onClick={this.onClick(1)} checked={this.state.radio === 1 ? true : false} label="SIM" type="radio" id="radio1" />
                <MDBInput gap onClick={this.onClick(2)} checked={this.state.radio === 2 ? true : false} label="NÃO" type="radio" id="radio2" />
              </MDBFormInline>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5 text-left">
            <MDBCol>
              <h5 className="white-text">10 - A turma terá 14 alunos. O interesse da DBC é efetivar os estudantes que performarem bem após a capacitação. Tens interesse e disponibilidade para trabalhar em turno integral (manhã e tarde, 44h semanais), após o estágio, caso aprovado?</h5>
              <MDBFormInline className="mt-5 mb-3">
                <MDBInput gap onClick={this.onClick(1)} checked={this.state.radio === 1 ? true : false} label="SIM" type="radio" id="radio1" />
                <MDBInput gap onClick={this.onClick(2)} checked={this.state.radio === 2 ? true : false} label="NÃO" type="radio" id="radio2" />
              </MDBFormInline>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-3 text-left">
            <MDBCol>
              <h5 className="white-text">11 - Nos conte o que te inspira e motiva a fazer parte do programa de formação Vem Ser DBC:</h5>
              <div class="form-group mt-4">
                <textarea class="form-control" id="exampleFormControlTextarea3" rows="5"></textarea>
              </div>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-3 text-left">
            <MDBCol>
              <h5 className="white-text">12 - Quais são as suas referências de pessoas que você acompanha ou que o inspiram? Quais ideias elas defendem que você se identifica e considera importantes? Aqui, você pode falar de pensadores, artistas, escritores, atletas ou quaisquer pessoas importantes pra você.</h5>
              <div class="form-group mt-4">
                <textarea class="form-control" id="exampleFormControlTextarea3" rows="8"></textarea>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-3 text-center justify-content-center">
            <MDBBtn color="black" id="button" type="submit">
              <div>
                <MDBIcon far icon="paper-plane" size="1x" className="mr-1" />
                <a href="/registerQuestions"> Próximo</a>
              </div>
            </MDBBtn>
          </MDBRow>


        </form>
      </div>
    );
  }
}

export default TemplateFormQuestions;