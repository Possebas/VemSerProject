import React, {Component} from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBContainer, MDBRow, MDBCol  } from 'mdbreact';

export default class Candidate extends Component{
  render(){
    return(
      <MDBRow>
        <MDBCol className="elegant-color mr-1" md="2">
          <a href="#">Testando</a><br/>
          <a href="#">Testando</a><br/>
          <a href="#">Testando</a><br/>
          <a href="#">Testando</a><br/>
          <a href="#">Testando</a><br/>
          <a href="#">Testando</a>
        </MDBCol>
        <MDBCol className="default-color" md="9">
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
        </MDBCol>
      </MDBRow>
    );
  };
}