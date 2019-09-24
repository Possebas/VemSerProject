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
        this.baseUrl = `http://localhost:8080`;
        this.state = {
            details : this.props.location.state
        }
    }

    componentDidMount() {
        axios.get(`${this.baseUrl}/api/candidate/${this.state.details}`)
        .then(respCandidate => {
            console.log("resp",respCandidate);
        });
    }

    render() {
        return (
            <React.Fragment>
                <div id="painelbackground">
                <PainelNavBar name= "VemSer"/>
                <MDBContainer className="px-3 py-5">
                    <h4 className="pt-3"> Confira seu status: </h4>
                    <ProgressBar/>
                </MDBContainer>
                </div>
            </React.Fragment>
        );
    }
}