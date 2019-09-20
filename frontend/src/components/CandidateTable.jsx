import React, {Component} from 'react';

export default class CandidateTable extends Component{
  constructor(props){
    super(props);
  };
  render(){
    return(
      <table id="dt-basic-checkbox" class="table table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
          <tr>
            <th class="th-sm">Nome completo
            </th>
            <th class="th-sm">CPF
            </th>
            <th class="th-sm">Email
            </th>
            <th class="th-sm">Data da inscrição
            </th>
            <th class="th-sm">Status inscrição
            </th>
            <th class="th-sm">
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.name}</td>
            <td>{this.props.cpf}</td>
            <td>{this.props.email}</td>
            <td>{this.props.dateApply}</td>
            <td>{this.props.status}</td>
            <td>
              <button>Enviar Convite</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
        </tfoot>
      </table>
    );
  }
}