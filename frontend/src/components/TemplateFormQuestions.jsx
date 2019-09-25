/* All librarys */
import React from "react";
import RequestApi from '../api/RequestApi';
import * as axios from 'axios';

/* Components */
import { MDBRow, MDBCol, MDBInput, MDBIcon, MDBBtn } from "mdbreact";

/* CSS */
import '../css/formQuestions.css'
import '../css/form.css';

class TemplateFormQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.backData = new RequestApi()
    this.baseUrl = `http://localhost:8080`
    this.candidate = this.props.idCandidate
    this.state = {
      isCollege: "",
      course: "",
      educationalInstitution: "",
      dayShifys: "",
      isParticipated: "",
      reasonsForInterest: "",
      otherReason: "",
      isLogicalKnowledge: "",
      hasAvailability: "",
      availabilityAfterTraining: "",
      whatMotivate: "",
      referencesThatInspire: ""
    }
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onClick = nr => (evt) => {
    this.setState({
      [evt.target.name]: nr
    });
  }

  submitHandler = event => {
    event.preventDefault();
    const { isCollege,
      course,
      educationalInstitution,
      dayShifys,
      isParticipated,
      reasonsForInterest,
      otherReason,
      isLogicalKnowledge,
      hasAvailability,
      availabilityAfterTraining,
      whatMotivate,
      referencesThatInspire
    } = this.state

    let questionsCandidate = {
      isCollege: isCollege,
      course: course,
      educationalInstitution: educationalInstitution,
      dayShifys: dayShifys,
      isParticipated: isParticipated,
      reasonsForInterest: reasonsForInterest,
      otherReason: otherReason,
      isLogicalKnowledge: isLogicalKnowledge,
      hasAvailability: hasAvailability,
      availabilityAfterTraining: availabilityAfterTraining,
      whatMotivate: whatMotivate,
      referencesThatInspire: referencesThatInspire,
      candidate: this.candidate
    }

    try {
      axios.post(`${this.baseUrl}/api/question/add`, questionsCandidate)
        .then(respQuestions => {
          questionsCandidate = respQuestions.data
          this.props.history.push("/");
        }).catch(function (error) { 
          console.log("Error that's request: " + error) }
        )
    } catch (erro) { console.log("Erro na tentativa de salvar") }
    event.target.className += "was-validated";
  };

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
              <MDBRow required className="ml-1 mt-45 mb-4">
                <MDBInput gap onClick={this.onClick(true)} value={this.state.isCollege} name="isCollege" checked={this.state.isCollege === true ? true : false} label="SIM" type="radio" id="radio1" />
                <MDBInput gap onClick={this.onClick(false)} value={this.state.isCollege} name="isCollege" checked={this.state.isCollege === false ? true : false} label="NÃO" type="radio" id="radio1" />
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-3 text-left">
            <MDBCol>
              <h5 className="white-text">2 - Se sua resposta foi "Sim", qual o curso?</h5>
              <MDBInput
                className="white-text"
                required
                type="text"
                value={this.state.course}
                onChange={this.changeHandler}
                name="course"
              >
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-45 text-left">
            <MDBCol>
              <h5 className="white-text">3 - Em qual instituição de ensino está estudando?</h5>
              <MDBInput
                className="white-text"
                required
                type="text"
                value={this.state.educationalInstitution}
                onChange={this.changeHandler}
                name="educationalInstitution"
              >
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-45 text-left">
            <MDBCol>
              <h5 className="white-text">4 - Em que turno está matriculado?</h5>
              <MDBRow className="ml-1 mt-5">
                <MDBInput gap required onClick={this.onClick("MANHÃ")} value={this.state.dayShifys} name="dayShifys" checked={this.state.dayShifys === "MANHÃ" ? true : false} label="MANHÃ" type="radio" id="radio3" />
                <MDBInput gap onClick={this.onClick("TARDE")} value={this.state.dayShifys} name="dayShifys" checked={this.state.dayShifys === "TARDE" ? true : false} label="TARDE" type="radio" id="radio4" />
                <MDBInput gap onClick={this.onClick("NOITE")} value={this.state.dayShifys} name="dayShifys" checked={this.state.dayShifys === "NOITE" ? true : false} label="NOITE" type="radio" id="radio5" />
              </MDBRow >
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5 text-left">
            <MDBCol>
              <h5 className="white-text">5 - Você já participou de seleção anterior do Vem Ser nas etapas de testes técnicos e/ou testes psicológicos? </h5>
              <MDBRow className="ml-1 mt-5 mb-3">
                <MDBInput gap onClick={this.onClick(true)} value={this.state.isParticipated} name="isParticipated" checked={this.state.isParticipated === true ? true : false} label="SIM" type="radio" id="radio6" />
                <MDBInput gap onClick={this.onClick(false)} value={this.state.isParticipated} name="isParticipated" checked={this.state.isParticipated === false ? true : false} label="NÃO" type="radio" id="radio7" />
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5 text-left">
            <MDBCol>
              <h5 className="white-text">6 - Selecione os motivos pelo qual se interessou pela carreira na área de tecnologia:</h5>
              <MDBRow className="ml-1 mt-5 text-uppercase">
                <MDBInput gap onClick={this.onClick("Pelo reconhecimento e valorização financeira do profissional de TI")} value={this.state.reasonsForInterest} name="reasonsForInterest" checked={this.state.reasonsForInterest === "Pelo reconhecimento e valorização financeira do profissional de TI" ? true : false} label="Pelo reconhecimento e valorização financeira do profissional de TI" type="radio" id="radio1" />
              </MDBRow>
              <MDBRow className="ml-1 mt-3 text-uppercase">
                <MDBInput gap onClick={this.onClick("Por ajudar outras pessoas")} value={this.state.reasonsForInterest} name="reasonsForInterest" checked={this.state.reasonsForInterest === "Por ajudar outras pessoas" ? true : false} label="Por ajudar outras pessoas" type="radio" id="radio2" />
              </MDBRow>
              <MDBRow className="ml-1 mt-3 text-uppercase">
                <MDBInput gap onClick={this.onClick("Por gostar de desafios")} value={this.state.reasonsForInterest} name="reasonsForInterest" checked={this.state.reasonsForInterest === "Por gostar de desafios" ? true : false} label="Por gostar de desafios" type="radio" id="radio3" />
              </MDBRow>
              <MDBRow className="ml-1 mt-3 text-uppercase">
                <MDBInput gap onClick={this.onClick("Por gostar de resolver problemas")} value={this.state.reasonsForInterest} name="reasonsForInterest" checked={this.state.reasonsForInterest === "Por gostar de resolver problemas" ? true : false} label="Por gostar de resolver problemas" type="radio" id="radio4" />
              </MDBRow>
              <MDBRow className="ml-1 mt-3 mb-4 text-uppercase">
                <MDBInput gap onClick={this.onClick("Outros")} value={this.state.reasonsForInterest} name="reasonsForInterest" checked={this.state.reasonsForInterest === "Outros" ? true : false} label="Outro" type="radio" id="radio5" />
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-3 text-left">
            <MDBCol>
              <h5 className="white-text">7 - Se você respondeu "Outro", nos diga qual o motivo pelo qual se interessou pela carreira na área de tecnologia? </h5>
              <MDBInput
                className="white-text"
                required
                type="text"
                value={this.state.otherReason}
                onChange={this.changeHandler}
                name="otherReason"
              >
                <div className="invalid-tooltip">
                  campo obrigatório.
                </div>
              </MDBInput>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5 text-left">
            <MDBCol>
              <h5 className="white-text">8 - Uma das nossas etapas eliminatórias de seleção será uma prova de lógica de programação, não sendo necessária a realização em tecnologia específica, mas será avaliado o raciocínio para solução de problemas. Tens conhecimento em lógica de programação? </h5>
              <MDBRow className="ml-1 mt-5 mb-3">
                <MDBInput gap onClick={this.onClick(true)} value={this.state.isLogicalKnowledge} name="isLogicalKnowledge" checked={this.state.isLogicalKnowledge === true ? true : false} label="SIM" type="radio" id="radio1" />
                <MDBInput gap onClick={this.onClick(false)} value={this.state.isLogicalKnowledge} name="isLogicalKnowledge" checked={this.state.isLogicalKnowledge === false ? true : false} label="NÃO" type="radio" id="radio2" />
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5 text-left">
            <MDBCol>
              <h5 className="white-text">9 - O estágio acontecerá no turno da tarde, das 13h30min às 17h30min, de segunda a sexta-feira e será necessária muita dedicação extra para as atividades. Tens disponibilidade de horários?</h5>
              <MDBRow className="ml-1 mt-5 mb-3">
                <MDBInput gap onClick={this.onClick(true)} value={this.state.hasAvailability} name="hasAvailability" checked={this.state.hasAvailability === true ? true : false} label="SIM" type="radio" id="radio1" />
                <MDBInput gap onClick={this.onClick(false)} value={this.state.hasAvailability} name="hasAvailability" checked={this.state.hasAvailability === false ? true : false} label="NÃO" type="radio" id="radio2" />
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5 text-left">
            <MDBCol>
              <h5 className="white-text">10 - A turma terá 14 alunos. O interesse da DBC é efetivar os estudantes que performarem bem após a capacitação. Tens interesse e disponibilidade para trabalhar em turno integral (manhã e tarde, 44h semanais), após o estágio, caso aprovado?</h5>
              <MDBRow className="ml-1 mt-5 mb-3">
                <MDBInput gap onClick={this.onClick(true)} value={this.state.availabilityAfterTraining} name="availabilityAfterTraining" checked={this.state.availabilityAfterTraining === true ? true : false} label="SIM" type="radio" id="radio1" />
                <MDBInput gap onClick={this.onClick(false)} value={this.state.availabilityAfterTraining} name="availabilityAfterTraining" checked={this.state.availabilityAfterTraining === false ? true : false} label="NÃO" type="radio" id="radio2" />
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-3 text-left">
            <MDBCol>
              <h5 className="white-text">11 - Nos conte o que te inspira e motiva a fazer parte do programa de formação Vem Ser DBC:</h5>
              <div className="form-group mt-4">
                <textarea
                  required
                  className="form-control"
                  id="exampleFormControlTextarea3"
                  rows="5"
                  value={this.state.whatMotivate}
                  onChange={this.changeHandler}
                  name="whatMotivate"
                ></textarea>
              </div>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-3 text-left">
            <MDBCol>
              <h5 className="white-text">12 - Quais são as suas referências de pessoas que você acompanha ou que o inspiram? Quais ideias elas defendem que você se identifica e considera importantes? Aqui, você pode falar de pensadores, artistas, escritores, atletas ou quaisquer pessoas importantes pra você.</h5>
              <div className="form-group mt-4">
                <textarea
                  required
                  className="form-control"
                  id="exampleFormControlTextarea3"
                  rows="8"
                  value={this.state.referencesThatInspire}
                  onChange={this.changeHandler}
                  name="referencesThatInspire"
                ></textarea>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-3 text-center justify-content-center">
            <MDBBtn color="elegant" id="button" role="button">
              <div>
                <MDBIcon icon="arrow-left" size="1x" className="mr-1" />
                <a className="white-text" href="/register">Voltar</a>
              </div>
            </MDBBtn>
            <MDBBtn color="elegant" id="button" type="submit">
              <div>
                <MDBIcon far icon="paper-plane" size="1x" className="mr-1" />
                Enviar
              </div>
            </MDBBtn>
          </MDBRow>
        </form>
      </div>
    );
  }
}

export default TemplateFormQuestions;