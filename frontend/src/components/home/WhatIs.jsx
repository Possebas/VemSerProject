import React from 'react';

import Carousel from './Carrousel/CarouselWhatIs';
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';

import '../../css/whatIs.css'

export const WhatIs = () => {
    return (
        <React.Fragment>
            <MDBContainer>
                <h1 className="text-center mt-3" id="whatis">Oque é</h1>
                <MDBContainer className="w-100 h-100 d-inline-block pt-5">
                    <MDBRow lg="6" md="12" sm="12">
                        <MDBCol lg="6" md="12" sm="12">
                            <p className="text-center pt-5 purple-text" id="text-comentarios">
                                O Programa <span>Vem Ser DBC</span> é uma experiência única onde jovens são selecionados para participar do programa de capacitação, onde irão conhecer ferramentas e linguagens que são utilizadas no dia a dia dos profissionais de T.I.  
                                </p>
                        </MDBCol>
                        <MDBCol lg="6" md="12" sm="12">
                            <Carousel />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </MDBContainer>
        </React.Fragment>
    );
};

export default WhatIs;