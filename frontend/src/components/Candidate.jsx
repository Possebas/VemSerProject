import React, {Component} from 'react';
import CandidateTable from './CandidateTable';
import {MDBCol} from "mdbreact";

export default class Candidate extends Component{
  constructor(props){
    super(props);
    this.state = {
      list: this.props.list
    }
  };
  render(){
    return(
      <React.Fragment>
        <MDBCol className="col-sm">
          <table id="dt_candidates" class="table table-striped table-bordered" cellspacing="0">
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
                <th class="th-sm">
                </th>
              </tr>
            </thead>
            {this.state.list.map((item) =>{
              return(
                <CandidateTable name= {item.name}
                                cpf= {item.cpf} 
                                email= {item.email} 
                                dateApply= {item.dateApply} 
                                status= {item.status}
                                sentInvite= {item.sentInvite}
                />
              )})
            }
          </table>
        </MDBCol>
      </React.Fragment>
    );
  };
}