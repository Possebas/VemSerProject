import React from 'react';
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import Carousel from './Carrousel/CarouselTechnology';

export const Technology = () => {
    return (
        <React.Fragment>
            <MDBContainer>
                <h1 className="text-center mt-5 pt-5 ">Tecnologias e ferramentas</h1>
                <MDBContainer className="w-100 h-100 d-inline-block pt-5">
                    <MDBRow lg="6" md="12" sm="12">
                        <MDBCol lg="12" md="12" sm="12">
                            <Carousel />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>
        </React.Fragment>
    );
};

export default Technology;