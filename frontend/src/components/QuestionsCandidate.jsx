import React, {Component} from 'react';
import { Modal, Button } from 'antd';

export default class QuestionsCandidate extends Component{
  constructor(props){
    super(props);
    this.state = { 
      visible: false,
      candidate: this.props.candidate
    };
  };

  showModal = () => {
    this.setState({
      visible: true
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
          {console.log(this.state)}
        </Modal>
      </div>
    );
  }
}