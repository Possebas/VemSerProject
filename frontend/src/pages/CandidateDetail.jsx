/* All librarys */
import React, { Component } from 'react';

/* Components */
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ProgressBar from '../components/candidateDetail/ProgressBar';

export default class CandidateDetail extends Component {

    /* constructor(props){
        super(props)
    } */

    render() {
        return (
            <React.Fragment>
                    <NavBar/>
                    <ProgressBar/>
                    <Footer />
            </React.Fragment>
        )
    }
}