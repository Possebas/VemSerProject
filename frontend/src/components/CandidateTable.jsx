import React, { Component } from 'react';
import QuestionsCandidate from './QuestionsCandidate';
import * as axios from 'axios';

export default class CandidateTable extends Component {
  constructor(props) {
    super(props);
    this.baseUrl = `http://localhost:8080`
    this.state = {
      sentInvite: this.props.sentInvite,
      sentReject: this.props.sentReject,
      statusProcess: this.props.candidate.candidate.statusProcess,
      candidate: this.props.candidate.candidate
    }
    this.sendInvite = this.sendInvite.bind(this);
    this.sendReject = this.sendReject.bind(this);
  }

  async sendInvite() {
    let state = this.state;
    let config = { headers: { Authorization: localStorage.getItem("Authorization") } }
    await axios.post(`${this.baseUrl}/api/email/${this.props.email}`)
      .then( ()  => {
        state.sentInvite = true;
        state.candidate.statusProcess = "INVITATION_SENT";
        this.setState(state
        );
      })

    await axios.put(`${this.baseUrl}/api/candidate/edit/${this.state.candidate.id}`, this.state.candidate, (config))
      .then(respStatus => {
        this.setState({statusProcess: respStatus.data.statusProcess});
      })
  }
 
  async sendReject() {
    let state = this.state;
    let config = { headers: { Authorization: localStorage.getItem("Authorization") } }
    await axios.post(`${this.baseUrl}/api/email/reject/${this.props.email}`)
      .then( ()  => {
        state.sentReject = true;
        state.candidate.statusProcess = "REJECTED";
        this.setState(state
        );
      })
    await axios.put(`${this.baseUrl}/api/candidate/edit/${this.state.candidate.id}`, this.state.candidate, (config))
      .then(respStatus => {
        this.setState({statusProcess: respStatus.data.statusProcess});
      })
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
            <td>{this.state.statusProcess}</td>
            <td>
              {this.state.statusProcess === "INVITATION_SENT" &&
                <button className="btn btn-light btn-sm my-0 mx-0 pl-4 pr-3" onClick={this.sendInvite}> Reenviar Convite </button>
                ||
                !this.state.sentInvite &&
                <button className="btn btn-primary btn-sm my-0 mx-0" onClick={this.sendInvite}> Enviar Convite </button>
              }
            </td>
            <td>
              {this.state.statusProcess === "REJECTED" &&
                <button className="btn btn-light btn-sm my-0 mx-0 pl-4 pr-3" onClick={this.sendReject}> Candidato Rejeitado </button>
              ||
              !this.state.sentReject &&
                <button className="btn btn-primary btn-sm my-0 mx-0" onClick={this.sendReject}> Rejeitar </button>
              }
            </td>
            <td>
              <QuestionsCandidate candidate={this.props.candidate} />
            </td>
          </tr>
        </tbody>
        <tfoot>
        </tfoot>
      </React.Fragment>
    );
  }
}