import React from 'react';

import { MDBContainer } from 'mdbreact';


export const Phases = () => {
    return (
        <React.Fragment>
            <MDBContainer>
                <h1 className="text-center mt-5 pt-5 font-weight-bold">Etapas</h1>
                <MDBContainer className="w-100 h-100 d-inline-block pt-5">
                    <h3>A seleção é feita em 3 partes</h3>
                    <ul>
                        <p><h4>Primeiro passo ONLINE</h4></p>
                        <li><a href="">Inscreva-se</a> dentro do praso</li>
                        <li>Responda o Formulário de perguntas</li>
                        <p><h4>Segundo passo PRESENCIAL</h4></p>
                        <li>Prova de lógica de programação</li>
                        <li>Avaliação psicológica</li>
                        <p><h4>Terceiro e último</h4></p>
                        <li>Entrevistas presenciais</li>
                        <li>Teste em equipe</li>
                    </ul>
                </MDBContainer>
            </MDBContainer>
        </React.Fragment>
    );
};

export default Phases;