/* All librarys */
import React, { Component } from 'react';
import * as axios from 'axios';

/* Components */
import PainelNavBar from '../components/PainelNavBar';
import ProgressBar from '../components/candidateDetail/ProgressBar';
import { MDBContainer } from 'mdbreact';

/* CSS */
import '../css/painel.css';

export default class CandidateDetail extends Component {
    constructor(props){
        super(props);
        this.baseUrl = `http://localhost:8080`
        this.state = {
            sendConfirm: this.props.location.state.detail.beenConfirmed,
            candidate: this.props.location.state.detail,
            statusProcess: this.props.location.state.detail.statusProcess
        }
        this.confirm = this.confirm.bind(this);
        console.log("ini",this.state.candidate)
    }

    async confirm() {
        let state = this.state;
        state.candidate.statusProcess = "CONFIRMED_PRESENCE";
        state.candidate.beenConfirmed = true;
        this.setState(state);
        console.log(this.state.candidate)
        await axios.put(`${this.baseUrl}/api/candidate/edit/${this.state.candidate.id}`, this.state.candidate)
          .then(respStatus => {
              console.log("resp",respStatus.data)
            this.setState({statusProcess: respStatus.data.statusProcess});
          })
      }

    render() {
        return (
            <React.Fragment>
                <div id="painelbackground">
                <PainelNavBar name= "VemSer"/>
                <MDBContainer className="px-3 py-5">
                    <h4 className="pt-3 green-text"> Confira seu status: </h4>
                    <ProgressBar candidate={this.state.candidate}/>
                    {this.state.statusProcess === "INVITATION_SENT" &&
                    <button className="btn btn-primary btn-sm my-0 mx-0" onClick={this.confirm}> Confirmar Presença </button>
                    }
                    {this.state.statusProcess === "CONFIRMED_PRESENCE" &&
                    <div className="text-center pt-2">
                        <h5 className="green-text">Parabéns estamos te aguardando! Fique atento á data da próxima etapa <a className="blue-text" href="/#phases"> clicando aqui! </a></h5>
                    </div>
                    }
                </MDBContainer>
                </div>
            </React.Fragment>
        );
    }
}