import React from 'react';

import { MDBCol, MDBRow, MDBContainer} from 'mdbreact';
import "../../css/location.css";

export const Location = () => {
    return (
        <React.Fragment>
            <MDBContainer>
                <h1 className="smartphone text-center mt-5 font-weight-bold">Local da qualificação</h1>
                <MDBContainer className="w-100 h-100 mt-4 mb-5">
                    <MDBRow xl="6" lg="6" md="6" sm="6">
                        <MDBCol xl="8" lg="8" md="12" sm="12" className="mt-4">
                            <iframe id="map" className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3454.735128886662!2d-51.168754!3d-30.015761000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sus!4v1568953807747!5m2!1spt-BR!2sus"
                                title="maps"
                               
                                frameBorder="0"
                                allowFullScreen="">
                            </iframe>
                        </MDBCol>
                        <MDBCol xl="4" lg="4" md="12" sm="12" className="my-auto">
                            <p className="text-center pt-5 black-text" id="comments">
                            <i className="fas fa-road mr-3"></i>Av. Andaraí, 531 – Bairro Passo D’Areia<br/>
                                <br/>
                                <i className="fas fa-city mr-3"></i>Porto Alegre, RS – CEP: 91350-110<br/>
                                <br/>
                                <i className="fas fa-phone mr-3"></i>Telefone: +55 (51) 3330.7777<br/>
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </MDBContainer>
        </React.Fragment>
    );
};

export default Location;