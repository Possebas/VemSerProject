import React from 'react';

import { MDBBtn, MDBContainer } from 'mdbreact';

export const Benefits = () => {
    return (
        <React.Fragment>
            <MDBContainer>
                <h1 className="text-center mt-5 pt-5 font-weight-bold">Benefícios</h1>
                <MDBContainer className="w-100 h-100 d-inline-block pt-5">
                    <h3>Participando do programa vc ganha</h3>
                    <ul>
                        <li>Oportunidade de entrar no mercado de trabalhado</li>
                        <li>Bolsa auxilio mensal</li>
                        <li>Vale-transporte</li>
                        <li>Café a vontade</li>
                    </ul>
                    <MDBBtn gradient="aqua"><a href="/register" className="white-text">INSCREVA-SE</a></MDBBtn>
                </MDBContainer>
            </MDBContainer>
        </React.Fragment>
    );
};

export default Benefits;