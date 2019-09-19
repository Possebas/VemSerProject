/* All librarys */
import React, { Component } from 'react';

/* Components */
import PainelNavBar from '../components/PainelNavBar';
import ProgressBar from '../components/candidateDetail/ProgressBar';
import Footer from '../components/Footer';
import { MDBContainer } from 'mdbreact';

export default class CandidateDetail extends Component {

    /* constructor(props){
        super(props)
    } */

    render() {
        return (
            <React.Fragment>
                <PainelNavBar/>
                <MDBContainer className="px-3 py-5">
                    <h4> Confira seu status: </h4>
                    <ProgressBar/>
                </MDBContainer>
                <Footer/>
            </React.Fragment>
        );
    }
}