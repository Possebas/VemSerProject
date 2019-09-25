import React, {Component} from 'react';
import { Modal, Button } from 'antd';
import * as axios from 'axios';

export default class QuestionsCandidate extends Component{
  constructor(props){
    super(props);
    this.state = { 
      visible: false,
      detailOfCandidate: {}
    };
  };

  showModal = () => {
    axios.get(`http://localhost:8080/api/question/`)
    .then(respUsuario => {
        this.setState({
          visible: true,
          detailOfCandidate: respUsuario.data
        });
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };


  render() {
    return (
      <div>
        <Button className="btn btn-warning btn-sm my-0 mx-0 " type="primary" onClick={this.showModal}>
          Visualizar
        </Button>
        <Modal title="Informações do candidato: " visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
          {this.props.candidate.name}<br/>
          {this.props.candidate.birthDate}<br/>
          
          Endereço:<br/>
          {this.props.candidate.address.street}, 
          {this.props.candidate.address.number}<br/>
          {this.props.candidate.address.complement} -
          {this.props.candidate.address.neighborhood.name}<br/>
          {this.props.candidate.address.neighborhood.city.name}
          
          {console.log(this.state.detailOfCandidate)}

          {//this.state.detailOfCandidate.map((item) =>{
             // if(item.cpf === this.props.candidate.cpf) {
               // return(
                 // <>
                  // Questionário: 
                  //  {item.detailOfCandidate.availabilityAfterTraining}
                  //  {item.detailOfCandidate.college}
                  //  {item.detailOfCandidate.course}
                  //  {item.detailOfCandidate.dayShifys}
                  //  {item.detailOfCandidate.educationalInstitution}
                  //  {item.detailOfCandidate.hasAvailability}
                  //  {item.detailOfCandidate.logicalKnowledge}
                  //  {item.detailOfCandidate.otherReason}
                  //  {item.detailOfCandidate.participated}
                  //  {item.detailOfCandidate.reasonsForInterest}
                  //  {item.detailOfCandidate.referencesThatInspire}
                  //  {item.detailOfCandidate.whatMotivates}
                  //</>
              //);}
            //})
          }

        </Modal>
      </div>
    );
  }
}