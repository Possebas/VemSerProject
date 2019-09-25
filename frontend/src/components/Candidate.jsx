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
          <table id="dt_candidates" className="table table-striped table-bordered" cellSpacing="0">
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
                <th className="th-sm">
                </th>
              </tr>
            </thead>
            
            {this.props.list.map((item) =>{
              return(
                <CandidateTable key= {item.candidate.id}
                                name= {item.candidate.name}
                                cpf= {item.candidate.cpf} 
                                email= {item.candidate.email} 
                                dateOfRegistration= {item.candidate.dateOfRegistration} 
                                statusProcess= {item.candidate.statusProcess}
                                sentInvite= {false}
                                sentReject= {false}
                                candidate={item}
                />
              )})
            }
          </table>
        </MDBCol>
      </React.Fragment>
    );
  };
}