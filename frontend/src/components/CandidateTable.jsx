import React, {Component} from 'react';

export default class CandidateTable extends Component{
  constructor(props){
    super(props);
  };
  render(){
    return(
      <React.Fragment>
        <tbody>
          <tr>
            <td>{this.props.name}</td>
            <td>{this.props.cpf}</td>
            <td>{this.props.email}</td>
            <td>{this.props.dateApply}</td>
            <td>{this.props.status}</td>
            <td>
              {this.props.sentInvite &&
                <button className="btn btn-light btn-sm my-0 mx-0 pl-4 pr-3">Reenviar Convite</button>
              ||
              !this.props.sentInvite &&
                <button className="btn btn-primary btn-sm my-0 mx-0 ">Enviar Convite</button>
              }
            </td>
            <td>
              <button className="btn btn-warning btn-sm my-0 mx-0 ">Visualizar</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
        </tfoot>
      </React.Fragment>
    );
  }
}