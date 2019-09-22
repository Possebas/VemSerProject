import React from 'react';

import { MDBRow, MDBView } from 'mdbreact';

import Carousel from './Carrousel/CarouselComments'
import fundo from '../../images/fundoDBC.jpg'

export const Comments = () => {
     return (
            <React.Fragment>
                <MDBView src={fundo}>
                    <MDBRow className="my-5 mb-1">
                        <Carousel />
                    </MDBRow>
                </MDBView>
            </React.Fragment>
    );
};

export default Comments;