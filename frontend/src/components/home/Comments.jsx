import React from 'react';

import { MDBRow, MDBCol, MDBContainer, MDBView, MDBBtn } from 'mdbreact';

import Carousel from './Carrousel/CarouselComments'
import fundo from '../../images/fundoColorido.png'

export const Comments = () => {
    return (
        <React.Fragment>
            <MDBView src={fundo}>
                    <MDBRow className="my-5">
                        <Carousel />
                    </MDBRow>
            </MDBView>
        </React.Fragment>
    );
};

export default Comments;