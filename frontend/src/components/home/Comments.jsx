import React from 'react';

import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';

import Carousel from './Carrousel/CarouselComments'

export const Comments = () => {
    return (
        <React.Fragment>
            <MDBContainer className="w-100">
                <MDBRow className="my-5">
                    
                    <Carousel />
                </MDBRow>
            </MDBContainer>
        </React.Fragment>
    );
};

export default Comments;