/* All librarys */
import React, { Component } from 'react';

/* Components */
import PainelNavBar from '../components/PainelNavBar';
import ProgressBar from '../components/candidateDetail/ProgressBar';
import { MDBContainer } from 'mdbreact';

/* CSS */
import '../css/painel.css';

export default class CandidateDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            candidate: this.props.location.state.detail
        }
    }

    render() {
        return (
            <React.Fragment>
                <div id="painelbackground">
                <PainelNavBar name= "VemSer"/>
                <MDBContainer className="px-3 py-5">
                    <h4 className="pt-3"> Confira seu status: </h4>
                    <ProgressBar candidate={this.state.candidate}/>
                </MDBContainer>
                </div>
            </React.Fragment>
        );
    }
}