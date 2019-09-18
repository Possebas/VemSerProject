import React from 'react';

import Carousel from './Carousel';
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
                            <p id="text-comentarios">
                                O Programa <span>Vem Ser DBC</span> é uma capacitação de 12 semanas. É um programa completo, que estimula o desenvolvimento pessoal e profissional. Você poderá se candidatar no programa caso seja estudante em algum curso na área de Tecnologia de Informação e tenha conhecimento acadêmico em Lógica de Programação.
                                <br></br>Venha fazer parte do programa de Capacitação da DBC que forma profissionais nas tecnologias que mais empregam no mercado de trabalho!
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