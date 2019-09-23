import React from 'react';

import { MDBIcon, MDBRow, MDBContainer, MDBCol, MDBView } from 'mdbreact';
import "../../css/benefits.css"

export const Benefits = () => {
    return (
        <React.Fragment>
            <MDBView className="photo">
                <MDBContainer className="textPhoto">
                    <h1 className="smartphone text-center mt-4 pt-5 white-text font-weight-bold">Benefícios</h1>
                    <MDBContainer className="w-100 h-100 pt-5 pb-5">
                        <MDBRow className="text-center mb-5">
                            <MDBCol>
                                <MDBIcon className="smartphoneP white-text pr-3 mb-3 mt-3" size="5x" icon="piggy-bank" />
                                <p>Bolsa auxílio mensal de R$800,00 durante a capacitação.</p>
                            </MDBCol>

                            <MDBCol>
                                <MDBIcon className="smartphoneP white-text pr-3 mb-3 mt-3" size="5x" icon="bus-alt" />
                                <p>Vale-transporte para comparecer aos treinamentos.</p>
                            </MDBCol>

                            <MDBCol>
                                <MDBIcon className="smartphoneP white-text pr-3 mb-3 mt-3" size="5x" icon="briefcase" />
                                <p>Possibilidade de ser efetivado após o treinamento e trabalhar em uma empresa com reconhecimento <br /> Great Place to Work.</p>
                            </MDBCol>

                            <MDBCol >
                                <MDBIcon className="smartphoneP white-text pr-3 mb-3 mt-3" size="5x" icon="coffee" />
                                <p>Café à vontade para você programar melhor!</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBContainer>
            </MDBView>
        </React.Fragment>
    );
};

export default Benefits;