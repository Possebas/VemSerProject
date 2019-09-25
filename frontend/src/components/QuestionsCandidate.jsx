/* All librarys */
import React, { Component } from 'react';

/* Components */
import { Modal, Button } from 'antd';

export default class QuestionsCandidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };


  render() {
    const info = this.props.candidate;
    return (

      <div>
        <Button className="btn btn-warning btn-sm my-0 mx-0 " type="primary" onClick={this.showModal}>
          Visualizar
        </Button>
        <Modal title="Informações do candidato: " visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <p>
            <h5>Nome: {info.candidate.name}</h5>
            Nascimento: {info.candidate.birthDate}<br/>
            Endereço:<br/>
            {info.candidate.address.street}, nº {info.candidate.address.number}<br/>
            Complemento: {info.candidate.address.complement}<br/> 
            Bairro: {info.candidate.address.neighborhood.name}<br/>
            Cidade: {info.candidate.address.neighborhood.city.name}<br/><br/>
            <h5>Questionário: </h5><br/>
            1 - Está matriculado em curso relacionado a TI?<br/>
            {info.college}<br/><br/>
            2 - Se sua resposta foi "Sim", qual o curso?<br/>
            {info.course}<br/><br/>
            3 - Em qual instituição de ensino está estudando?<br/>
            {info.educationalInstitution}<br/><br/>
            4 - Em que turno está matriculado?<br/>
            {info.dayShifys}<br/><br/>
            5 - Você já participou de seleção anterior do Vem Ser nas etapas de testes técnicos e/ou testes psicológicos?<br/>
            {info.participated}<br/><br/>
            6 - Selecione os motivos pelo qual se interessou pela carreira na área de tecnologia:<br/>
            {info.reasonsForInterest}<br/><br/>
            7 - Se você respondeu "Outro", nos diga qual o motivo pelo qual se interessou pela carreira na área de tecnologia?<br/>
            {info.otherReason}<br/><br/>
            8 - Uma das nossas etapas eliminatórias de seleção será uma prova de lógica de programação, não sendo necessária a realização em tecnologia específica, mas será avaliado o raciocínio para solução de problemas. Tens conhecimento em lógica de programação?<br/>
            {info.logicalKnowledge}<br/><br/>
            9 - O estágio acontecerá no turno da tarde, das 13h30min às 17h30min, de segunda a sexta-feira e será necessária muita dedicação extra para as atividades. Tens disponibilidade de horários?<br/>
            {info.hasAvailability}<br/><br/>
            10 - A turma terá 14 alunos. O interesse da DBC é efetivar os estudantes que performarem bem após a capacitação. Tens interesse e disponibilidade para trabalhar em turno integral (manhã e tarde, 44h semanais), após o estágio, caso aprovado?<br/>
            {info.availabilityAfterTraining}<br/><br/>
            11 - Nos conte o que te inspira e motiva a fazer parte do programa de formação Vem Ser DBC: <br/>
            {info.whatMotivates}<br/><br/>
            12 - Quais são as suas referências de pessoas que você acompanha ou que o inspiram? Quais ideias elas defendem que você se identifica e considera importantes? Aqui, você pode falar de pensadores, artistas, escritores, atletas ou quaisquer pessoas importantes pra você.<br/>
            {info.referencesThatInspire}<br/><br/>
          </p>
        </Modal>
      </div>
    );
  }
}