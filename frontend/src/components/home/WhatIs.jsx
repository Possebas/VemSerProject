import React from 'react';

import Carousel from './Carrousel/CarouselWhatIs';
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';

import '../../css/whatIs.css'

export const WhatIs = () => {
    return (
        <React.Fragment>
            <MDBContainer>
                <h1 className="smartphone text-center mt-5 font-weight-bold">O que é?</h1>
                <MDBContainer className="w-100 h-100 d-inline-block pt-1">
                    <MDBRow lg="6" md="12" sm="12">
                        <MDBCol lg="6" md="12" sm="12" className="mx-auto my-auto">
                            <p className="text-center pt-5 purple-text" id="text-comentarios">
                            O Programa Vem Ser DBC é uma experiência única para estudantes da área da Tecnologia da Informação! <br/> <br/> Os selecionados terão a oportunidade de aprender metodologias, ferramentas e linguagens de programação utilizadas atualmente no mercado, em uma empresa com reconhecimento <br/> Great Place to Work. <br/> <br/> A capacitação tem duração de 12 semanas e 4h diárias no turno da tarde, de segunda a sexta.
                                </p>
                        </MDBCol>
                        <MDBCol lg="6" md="12" sm="12" className="my-auto">
                            <Carousel />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <hr className="hr"></hr>
            </MDBContainer>
        </React.Fragment>
    );
};

export default WhatIs;