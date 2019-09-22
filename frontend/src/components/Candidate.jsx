import React, {Component} from 'react';
import CandidateTable from './CandidateTable';
import {MDBCol} from "mdbreact";

export default class Candidate extends Component{
  constructor(props){
    super(props);
  };
  render(){
    return(
      <React.Fragment>
        <MDBCol className="col-sm">
          <table id="dt_candidates" className="table table-striped table-bordered" cellspacing="0">
            <thead>
              <tr>
                <th className="th-sm">Nome completo
                </th>
                <th className="th-sm">CPF
                </th>
                <th className="th-sm">Email
                </th>
                <th className="th-sm">Data da inscrição
                </th>
                <th className="th-sm">Status inscrição
                </th>
                <th className="th-sm">
                </th>
                <th className="th-sm">
                </th>
              </tr>
            </thead>
            {this.props.list.map((item) =>{
              return(
                <CandidateTable name= {item.name}
                                cpf= {item.cpf} 
                                email= {item.email} 
                                dateOfRegistration= {item.dateOfRegistration} 
                                statusProcess= {item.statusProcess}
                                sentInvite= {false}
                />
              )})
            }
          </table>
        </MDBCol>
      </React.Fragment>
    );
  };
}