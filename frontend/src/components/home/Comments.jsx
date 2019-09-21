import React from 'react';

import { MDBRow, MDBCol, MDBContainer, MDBView, MDBBtn } from 'mdbreact';

import Carousel from './Carrousel/CarouselComments'
import fundo from '../../images/fundoDBC.jpg'

export const Comments = () => {
     return (
    //     <React.Fragment>
    //         <div className="dbc">
    //                 <MDBRow className="my-5">
    //                     <Carousel />
    //                 </MDBRow>
    //                 </div>
    //     </React.Fragment>
    
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