/* All librarys */
import React, { Component } from 'react';

/* Components */
import PainelNavBar from '../components/PainelNavBar';
import ProgressBar from '../components/candidateDetail/ProgressBar';
import { MDBContainer } from 'mdbreact';

/* CSS */
import '../css/painel.css';

export default class CandidateDetail extends Component {

    /* constructor(props){
        super(props)
    } */

    render() {
        return (
            <React.Fragment>
                <div id="painelbackground">
                <PainelNavBar/>
                <MDBContainer className="px-3 py-5">
                    <h4 className="pt-3"> Confira seu status: </h4>
                    <ProgressBar/>
                </MDBContainer>
                </div>
            </React.Fragment>
        );
    }
}