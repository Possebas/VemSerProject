import React, {Component} from 'react';
import { Modal, Button } from 'antd';
import * as axios from 'axios';

export default class QuestionsCandidate extends Component{
  constructor(props){
    super(props);
    this.state = { 
      visible: false
    };
  };

  showModal = () => {
    axios.get(`http://localhost:8080/api/question/`)
    .then(respUsuario => {
        console.log("resp",respUsuario.data);
        this.setState({
          visible: true
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
        </Modal>
      </div>
    );
  }
}