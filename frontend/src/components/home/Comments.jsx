/* All librarys */
import React from 'react';

/* Components */
import { MDBRow, MDBView } from 'mdbreact';
import Carousel from './Carrousel/CarouselComments'

/* Images */
import fundo from '../../images/fundoDBC.jpg'

export const Comments = () => {
     return (
            <React.Fragment>
                <MDBView  id="brief" src={fundo}>
                    <MDBRow className="my-5 mb-1">
                        <Carousel />
                    </MDBRow>
                </MDBView>
            </React.Fragment>
    );
};

export default Comments;