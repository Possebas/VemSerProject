import React from 'react';

import { MDBRow, MDBCol, MDBContainer, MDBView, MDBBtn } from 'mdbreact';

import Carousel from './Carrousel/CarouselComments'
import fundo from '../../images/fundoColorido.png'

export const Comments = () => {
    return (
        <React.Fragment>
            <div className="dbc">
                    <MDBRow className="my-5">
                        <Carousel />
                    </MDBRow>
                    </div>
        </React.Fragment>
    );
};

export default Comments;