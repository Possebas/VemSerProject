import React, { Component } from 'react';
import sendmail from "../api/sendmail";

export default class CandidateTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentInvite: this.props.sentInvite
    }
    this.sendInvite = this.sendInvite.bind(this);
  };

  sendInvite() {
    const { email } = this.props.email
    this.setState({ sentInvite: true })
    sendmail({
      from: 'vemserdbc@gmail.com',
      to: email,
      subject: 'test sendmail',
      html: 'Mail of test sendmail ',
    }, function (err, reply) {
      console.log("entrando aqui")
      console.log(err && err.stack);
      console.dir(reply);
    });
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
              <button className="btn btn-warning btn-sm my-0 mx-0 "> Visualizar </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
        </tfoot>
      </React.Fragment>
    );
  }
}