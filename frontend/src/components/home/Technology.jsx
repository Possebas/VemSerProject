import React from 'react';
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import CardTechnology from './CardTechnology';
import '../../css/card.css';

export const Technology = () => {
    return (
        <React.Fragment>
            <MDBContainer className="mb-5 pb-5">
                <h1 className="smartphone text-center mt-3 pt-5 font-weight-bold">Tecnologias abordadas durante o programa de capacitação</h1>
                <MDBContainer className="w-100 h-100 d-inline-block pt-5">
                    <MDBRow lg="6" md="12" sm="12">
                        <MDBCol lg="12" md="12" sm="12">
                            <CardTechnology/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>
        </React.Fragment>
    );
};

export default Technology;