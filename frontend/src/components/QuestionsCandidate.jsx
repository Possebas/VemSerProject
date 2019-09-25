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
          {info.candidate.name}<br />
          {info.candidate.birthDate}<br />

          Endereço:<br />
          {info.candidate.address.street},
          {info.candidate.address.number}<br />
          {info.candidate.address.complement} <br />
          {info.candidate.address.neighborhood.name}<br />
          {info.candidate.address.neighborhood.city.name}<br />
          Questionário: <br />
          {info.availabilityAfterTraining}<br />
          {info.college}<br />
          {info.course}<br />
          {info.dayShifys}<br />
          {info.educationalInstitution}<br />
          {info.hasAvailability}<br />
          {info.logicalKnowledge}<br />
          {info.otherReason}<br />
          {info.participated}<br />
          {info.reasonsForInterest}<br />
          {info.referencesThatInspire}<br />
          {info.whatMotivates}<br />

        </Modal>
      </div>
    );
  }
}