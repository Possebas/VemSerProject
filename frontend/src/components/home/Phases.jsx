import React from 'react';

import { MDBContainer, MDBRow, MDBCol, MDBBadge, MDBIcon } from 'mdbreact';
import "../../css/phases.css";


export const Phases = () => {
    return (
        <React.Fragment>
            <MDBContainer>
                <h1 className="text-capitalize text-center mt-5 font-weight-bold">Etapas do processo seletivo</h1>
                <MDBContainer className="w-100 h-100 d-inline-block pt-5 mb-5">
                   
                        <MDBRow className="mt-1 mb-5">
                            <MDBCol size="4" className="text-center" >
                                <MDBBadge className="phasesmini" pill color="purple">
                                    <MDBIcon icon="users" size="2x" />
                                </MDBBadge>
                                <div className="phasesmini">
                                    <p>Inscrições online</p>
                                </div>
                            </MDBCol>
                            <MDBCol size="4" className="text-center" >
                                <MDBBadge className="phasesmini" pill color="purple">
                                    <MDBIcon icon="users" size="2x" />
                                </MDBBadge>
                                <div className="phasesmini">
                                    <p>Formulário de perguntas online</p>
                                </div>
                            </MDBCol>
                            <MDBCol size="4" className="text-center" >
                                <MDBBadge className="phasesmini" pill color="purple">
                                    <MDBIcon icon="pencil-alt" size="2x" />
                                </MDBBadge>
                                <div className="phasesmini">
                                    <p>Prova de lógica de programação</p>
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className="mt-5 mb-5">
                            <MDBCol size="6" className="text-center my-auto mx-autov" >
                                <MDBBadge className="phasesmini" pill color="purple">
                                    <MDBIcon icon="users" size="2x" />
                                </MDBBadge>
                                <div className="phasesmini">
                                    <p>Avaliação psicológica</p>
                                </div>
                            </MDBCol>
                            <MDBCol size="6" className="text-center my-auto mx-auto" >
                                <MDBBadge className="phasesmini" pill color="purple">
                                    <MDBIcon far icon="comments" size="2x" />
                                </MDBBadge>
                                <div className="phasesmini">
                                    <p>Entrevistas presenciais</p>
                                </div>
                            </MDBCol>
                        </MDBRow>
                </MDBContainer>
            </MDBContainer>
        </React.Fragment>
    );
};

export default Phases;