import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import '../css/formQuestions.css'
import '../css/form.css';


class TemplateFormQuestions extends React.Component {
  state = {
    isCollege: "",
    course: "",
    educationalInstitution: "",
    dayShifys: "",
    isParticipated: "",
    reasonsForInterest: "",
    otherReason: "",
    isLogicalKnowledge: "",
    hasAvailability:"",
    availabilityAfterTraining: "",
    whatMotivate: "",
    referencesThatInspire:""

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
    
  console.log(event.target.value);
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
              <MDBRow required className="ml-1 mt-45 mb-4">
                <MDBInput  gap onClick={this.onClick(1)} onChange={this.changeHandler} value={this.state.isCollege} checked={this.state.radio === 1 ? true : false} label="SIM" type="radio" id="radio1" />
                <MDBInput gap onClick={this.onClick(2)} value={this.state.isCollege} checked={this.state.radio === 2 ? true : false} label="NÃO" type="radio" id="radio2" />
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
                <MDBInput gap required onClick={this.onClick(1)} value={this.state.dayShifys} checked={this.state.radio === 1 ? true : false} label="MANHÃ" type="radio" id="radio1" />
                <MDBInput gap onClick={this.onClick(2)} value={this.state.dayShifys} checked={this.state.radio === 3 ? true : false} label="TARDE" type="radio" id="radio2" />
                <MDBInput gap onClick={this.onClick(3)} value={this.state.dayShifys} checked={this.state.radio === 3 ? true : false} label="NOITE" type="radio" id="radio3" />
              </MDBRow >
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5 text-left">
            <MDBCol>
              <h5 className="white-text">5 - Você já participou de seleção anterior do Vem Ser nas etapas de testes técnicos e/ou testes psicológicos? </h5>
              <MDBRow className="ml-1 mt-5 mb-3">
                <MDBInput gap onClick={this.onClick(1)} value={this.state.isParticipated} checked={this.state.radio === 1 ? true : false} label="SIM" type="radio" id="radio1" />
                <MDBInput gap onClick={this.onClick(2)} value={this.state.isParticipated} checked={this.state.radio === 2 ? true : false} label="NÃO" type="radio" id="radio2" />
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5 text-left">
            <MDBCol>
              <h5 className="white-text">6 - Selecione os motivos pelo qual se interessou pela carreira na área de tecnologia:</h5>
              <MDBRow className="ml-1 mt-5 text-uppercase">
                <MDBInput gap onClick={this.onClick(1)} value={this.state.reasonsForInterest} checked={this.state.radio === 1 ? true : false} label="Pelo reconhecimento e valorização financeira do profissional de TI" type="radio" id="radio1" />
              </MDBRow>
              <MDBRow className="ml-1 mt-3 text-uppercase">
                <MDBInput gap onClick={this.onClick(2)} value={this.state.reasonsForInterest} checked={this.state.radio === 2 ? true : false} label="Por ajudar outras pessoas" type="radio" id="radio2" />
              </MDBRow>
              <MDBRow className="ml-1 mt-3 text-uppercase">
                <MDBInput gap onClick={this.onClick(3)} value={this.state.reasonsForInterest} checked={this.state.radio === 3 ? true : false} label="Por gostar de desafios" type="radio" id="radio3" />
              </MDBRow>
              <MDBRow className="ml-1 mt-3 text-uppercase">
                <MDBInput gap onClick={this.onClick(4)} value={this.state.reasonsForInterest} checked={this.state.radio === 4 ? true : false} label="Por gostar de resolver problemas" type="radio" id="radio4" />
              </MDBRow>
              <MDBRow className="ml-1 mt-3 mb-4 text-uppercase">
                <MDBInput gap onClick={this.onClick(5)} value={this.state.reasonsForInterest} checked={this.state.radio === 5 ? true : false} label="Outro" type="radio" id="radio5" />
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
                <MDBInput gap value={this.state.isLogicalKnowledge} onClick={this.onClick(1)} checked={this.state.radio === 1 ? true : false} label="SIM" type="radio" id="radio1" />
                <MDBInput gap value={this.state.isLogicalKnowledge} onClick={this.onClick(2)} checked={this.state.radio === 2 ? true : false} label="NÃO" type="radio" id="radio2" />
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5 text-left">
            <MDBCol>
              <h5 className="white-text">9 - O estágio acontecerá no turno da tarde, das 13h30min às 17h30min, de segunda a sexta-feira e será necessária muita dedicação extra para as atividades. Tens disponibilidade de horários?</h5>
              <MDBRow className="ml-1 mt-5 mb-3">
                <MDBInput gap onClick={this.onClick(1)} value={this.state.hasAvailability} checked={this.state.radio === 1 ? true : false} label="SIM" type="radio" id="radio1" />
                <MDBInput gap onClick={this.onClick(2)} value={this.state.hasAvailability} checked={this.state.radio === 2 ? true : false} label="NÃO" type="radio" id="radio2" />
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5 text-left">
            <MDBCol>
              <h5 className="white-text">10 - A turma terá 14 alunos. O interesse da DBC é efetivar os estudantes que performarem bem após a capacitação. Tens interesse e disponibilidade para trabalhar em turno integral (manhã e tarde, 44h semanais), após o estágio, caso aprovado?</h5>
              <MDBRow className="ml-1 mt-5 mb-3">
                <MDBInput gap onClick={this.onClick(1)} value={this.state.availabilityAfterTraining} checked={this.state.radio === 1 ? true : false} label="SIM" type="radio" id="radio1" />
                <MDBInput gap onClick={this.onClick(2)} value={this.state.availabilityAfterTraining} checked={this.state.radio === 2 ? true : false} label="NÃO" type="radio" id="radio2" />
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
                value= {this.state.whatMotivate}
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
                name= "referencesThatInspire"
                ></textarea>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-3 text-center justify-content-center">
            <MDBBtn color="black" id="button" role="button">
              <div>
                <MDBIcon icon="arrow-left" size="1x" className="mr-1" />
                <a href="/register">Voltar</a>
            </div>
            </MDBBtn>
            <MDBBtn color="black" id="button" type="submit">
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