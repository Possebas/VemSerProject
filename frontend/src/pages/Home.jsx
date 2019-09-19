/* All librarys */
import React, { Component } from 'react';


import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';

/* Components */
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import WhatIs from '../components/home/WhatIs';
import Technology from '../components/home/Technology';
import Phases from '../components/home/Phases';
import Benefits from '../components/home/Benefits';
import Comments from '../components/home/Comments';



export default class Home extends Component {

    /* constructor(props){
        super(props)
    } */

    render() {
        return (
            <React.Fragment>
                    <NavBar/>
                    <WhatIs />
                    <Technology />
                    <MDBContainer className="w-100 h-100 pt-5">
                        <MDBRow lg="6" md="12" sm="12">
                            <MDBCol lg="6" md="12" sm="12">
                                <Phases />
                            </MDBCol>
                            <MDBCol lg="6" md="12" sm="12">
                                <Benefits />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <Comments />
                    <Footer />
            </React.Fragment>
        )
    }
}