/* All librarys */
import React, { Component } from 'react';

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
        this.state = {
            list: [
                {name:"Fulano", cpf: "00000000000", email: "test@test.com.br", dateApply: "20/09/2019", status: "Pendente", sentInvite: false},
                {name:"Fulano", cpf: "00000000000", email: "test@test.com.br", dateApply: "20/09/2019", status: "Pendente", sentInvite: true},
                {name:"Fulano", cpf: "00000000000", email: "test@test.com.br", dateApply: "20/09/2019", status: "Pendente", sentInvite: false}
            ]
        }
    } 

    //componentDidMount(){
    //    setTimeout(() => {
    //        this.setState({
    //            list: this.backData.requestCountry("ALL")
    //        })
    //    }, 2000)
    //}

    render() {
        return (
            <React.Fragment>
                <div id="painelbackground">
                <PainelNavBar/>
                <MDBContainer className="py-2">
                    <MDBCol className="col-sm-4 mx-0 px-0 my-3">
                        <input type="search" class="form-control" 
                            placeholder="Pesquisar" aria-controls="dt_candidates"
                        />
                    </MDBCol>
                    <MDBRow className="row align-items-start">
                        <Candidate list={this.state.list}/>
                    </MDBRow>
                </MDBContainer>
                </div>
            </React.Fragment>
        );
    }
}