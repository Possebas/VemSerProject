import React, { Component } from 'react';
import QuestionsCandidate from './QuestionsCandidate';
import * as axios from 'axios';

export default class CandidateTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentInvite: this.props.sentInvite
    }
    this.sendInvite = this.sendInvite.bind(this);
  }

  sendInvite() {
    axios.post(`${this.baseUrl}/api/email/${this.props.email}`)
    .then(respCandidate => { 
      console.log(respCandidate.data)
      this.setState({sentInvite: true})});
  }

  render() {
    return (
      <React.Fragment>
        <tbody>
          <tr>
            <td>{this.props.name}</td>
            <td>{this.props.cpf}</td>
            <td>{this.props.email}</td>
            <td>{this.props.dateOfRegistration}</td>
            <td>{this.props.statusProcess}</td>
            <td>
              {this.state.sentInvite &&
                <button className="btn btn-light btn-sm my-0 mx-0 pl-4 pr-3"> Reenviar Convite </button>
                ||
                !this.state.sentInvite &&
                <button className="btn btn-primary btn-sm my-0 mx-0" onClick={this.sendInvite}> Enviar Convite </button>
              }
            </td>
            <td>
              <QuestionsCandidate candidate={this.props.candidate}/>
            </td>
          </tr>
        </tbody>
        <tfoot>
        </tfoot>
      </React.Fragment>
    );
  }
}