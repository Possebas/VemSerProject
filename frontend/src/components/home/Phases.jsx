import React from 'react';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import "../../css/phases.css";
import web from '../../images/phases/web.png'
import group from '../../images/phases/group.png'
import neurology from '../../images/phases/neurology.png'
import interview from '../../images/phases/job-interview.png'
import code from '../../images/phases/binary-code.png'

export const Phases = () => {
    return (
        <React.Fragment>
            <div className="pt-4 pb-4 color-change-2x ">
                <h1 className="smartphone text-center mt-5 font-weight-bold">Etapas do processo seletivo</h1>
                <MDBContainer className="w-100 h-100 pt-5 mb-5">

                    <MDBRow className="mt-1 mb-5">
                        <MDBCol size="4" className="text-center" >
                            <img className="iconWeb" src={group}></img>
                            <div className="mt-2">
                                <h5 className="smartphoneH5">1 - Inscrições online</h5>
                            </div>
                        </MDBCol>
                        <MDBCol size="4" className="text-center" >
                            <img className="iconWeb" src={web}></img>
                            <div className="mt-2">
                                <h5 className="smartphoneH5">2 - Formulário de <br/> perguntas online</h5>
                            </div>
                        </MDBCol>
                        <MDBCol size="4" className="text-center" >
                            <img className="iconWeb" src={code}></img>
                            <div className="mt-2">
                                <h5 className="smartphoneH5">3 - Prova de lógica <br/> de programação</h5>
                            </div>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="mt-5 mb-5">
                        <MDBCol size="6" className="text-center my-auto mx-autov" >
                            <img className="iconWeb" src={neurology}></img>
                            <div className="mt-2">
                                <h5 className="smartphoneH5">4 - Avaliação psicológica</h5>
                            </div>
                        </MDBCol>
                        <MDBCol size="6" className="text-center my-auto mx-auto" >
                            <img className="iconWeb" src={interview}></img>
                            <div className="mt-2">
                                <h5 className="smartphoneH5">5 - Entrevistas presenciais</h5>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </React.Fragment>
    );
};

export default Phases;