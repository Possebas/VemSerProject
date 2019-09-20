import React, {Component} from 'react';
import CandidateTable from './CandidateTable';

export default class Candidate extends Component{
  constructor(props){
    super(props);
    this.state = {
      list: this.props.list
    }
  };
  render(){
    return(
      <div>
        {this.state.list.map((item) =>{
          return(
            <CandidateTable name= {item.name}
                            cpf= {item.cpf} 
                            email= {item.email} 
                            dateApply= {item.dateApply} 
                            status= {item.status}
            />
          )})
        }
      </div>
    );
  };
}