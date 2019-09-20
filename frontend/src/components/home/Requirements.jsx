import React from 'react';

import { MDBCol, MDBRow, MDBContainer, MDBView } from 'mdbreact';
import requirements from '../../images/requirements.jpg';
import '../../css/requirements.css';

export const Requirements = () => {
    return (
        <React.Fragment>
            <MDBContainer>
                <h1 className="text-center mt-5 font-weight-bold">Pré-Requisitos</h1>
                <MDBContainer className="w-100 h-100 d-inline-block mt-5">
                    <MDBRow lg="6" md="12" sm="12">
                        <MDBCol lg="6" md="12" sm="12">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src={requirements}
                                    alt="Requirements"
                                />
                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="6" md="12" sm="12" className="my-auto">
                            <ul id="listreq"className="list-group list-group-flush">
                                <li className="list-group-item"><i className="mr-3 ml-2 my-2 fas fa-graduation-cap" aria-hidden="true"></i><span className="black-text">Possuir conhecimento em Lógica de programação</span></li>
                                <li className="list-group-item"><i className="mr-3 ml-2 my-2 fas fa-book"></i><span className="black-text">Estar matriculado em um curso de TI (técnico ou superior)</span></li>
                                <li className="list-group-item"><i className="mr-3 ml-2 my-2 fas fa-clock"></i><span className="black-text">Disponibilidade de horário durante as tardes</span></li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </MDBContainer>
        </React.Fragment>
    );
};

export default Requirements;