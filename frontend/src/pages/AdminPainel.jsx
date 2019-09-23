/* All librarys */
import React, { Component } from 'react';
import * as axios from 'axios';

/* Components */
import PainelNavBar from '../components/PainelNavBar';
import Candidate from '../components/Candidate';
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";
import RequestApi from '../api/RequestApi';


/* CSS */
import '../css/painel.css';

export default class AdminPainel extends Component {
    constructor(props){
        super(props)
        this.backData = new RequestApi()
        this.baseUrl = `http://localhost:8080`
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        //Pega o token do navegador.
        const config = {headers:{ Authorization : localStorage.getItem("Authorization")}}
        axios.get(`${this.baseUrl}/api/candidate/`, (config))
        .then(resp => {
            this.setState({list: resp.data})
            console.log(resp.data)
        })
    }

    render() {
        return (
            <React.Fragment>
                <div id="painelbackground">
                <PainelNavBar name= "RH"/>
                <MDBContainer className="py-2">
                    <MDBCol className="col-sm-4 mx-0 px-0 my-3">
                        <input type="search" className="form-control" 
                            placeholder="Pesquisar" aria-controls="dt_candidates"
                        />
                    </MDBCol>
                    <MDBRow className="row align-items-start">
                        <Candidate list={this.state.list !== null ? this.state.list : ''}/>
                    </MDBRow>
                </MDBContainer>
                </div>
            </React.Fragment>
        );
    }
}