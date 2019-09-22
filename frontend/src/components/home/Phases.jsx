import React from 'react';

import { MDBContainer, MDBRow, MDBCol, MDBBadge, MDBIcon } from 'mdbreact';
import "../../css/phases.css";


export const Phases = () => {
    return (
        <React.Fragment>
            <MDBContainer>
                <h1 className="text-center mt-5 font-weight-bold">Etapas do processo seletivo</h1>
                <MDBContainer className="w-100 h-100 d-inline-block pt-5 mb-5">
                   
                        <MDBRow className="mt-1 mb-5">
                            <MDBCol size="4" className="text-center" >
                                <MDBBadge className="phasesmini" pill color="purple">
                                    <MDBIcon icon="users" size="2x" />
                                </MDBBadge>
                                <div className="phasesmini">
                                    <h5>Inscrições online</h5>
                                </div>
                            </MDBCol>
                            <MDBCol size="4" className="text-center" >
                                <MDBBadge className="phasesmini" pill color="purple">
                                    <MDBIcon icon="users" size="2x" />
                                </MDBBadge>
                                <div className="phasesmini">
                                    <h5>Formulário de perguntas online</h5>
                                </div>
                            </MDBCol>
                            <MDBCol size="4" className="text-center" >
                                <MDBBadge className="phasesmini" pill color="purple">
                                    <MDBIcon icon="pencil-alt" size="2x" />
                                </MDBBadge>
                                <div className="phasesmini">
                                    <h5>Prova de lógica de programação</h5>
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className="mt-5 mb-5">
                            <MDBCol size="6" className="text-center my-auto mx-autov" >
                                <MDBBadge className="phasesmini" pill color="purple">
                                    <MDBIcon icon="users" size="2x" />
                                </MDBBadge>
                                <div className="phasesmini">
                                    <h5>Avaliação psicológica</h5>
                                </div>
                            </MDBCol>
                            <MDBCol size="6" className="text-center my-auto mx-auto" >
                                <MDBBadge className="phasesmini" pill color="purple">
                                    <MDBIcon far icon="comments" size="2x" />
                                </MDBBadge>
                                <div className="phasesmini">
                                    <h5>Entrevistas presenciais</h5>
                                </div>
                            </MDBCol>
                        </MDBRow>
                </MDBContainer>
            </MDBContainer>
        </React.Fragment>
    );
};

export default Phases;