import React from 'react';
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import CardTechnology from './CardTechnology';

export const Technology = () => {
    return (
        <React.Fragment>
            <MDBContainer>
                <h1 className="text-center mt-3 pt-5 font-weight-bold">Tecnologias abordadas durante o programa de capacitação</h1>
                <MDBContainer className="w-100 h-100 d-inline-block pt-5">
                    <MDBRow lg="6" md="12" sm="12">
                        <MDBCol lg="12" md="12" sm="12">
                            <CardTechnology/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <hr className="hr"></hr>
            </MDBContainer>
        </React.Fragment>
    );
};

export default Technology;