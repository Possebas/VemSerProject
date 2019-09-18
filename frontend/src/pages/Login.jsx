/* All librarys */
import React, { Component } from 'react';
import {MDBContainer} from 'mdbreact';

/* Components */
import TemplateLogin from '../components/TemplateLogin';

/* Styles */
import '../css/login.css';

export default class Login extends Component {

    render() {

        return (
            <MDBContainer fluid id="login" className="mh-100">
                    <h2 id="titulo" className="pt-3 pb-2"><span id="welcome" > Bem vindo, </span> Vem Ser!</h2>
                    <TemplateLogin />
                    <div className="mt-5 text-center font-weight-bold">&copy; 2018 DBC Company — Todos os direitos reservados</div>
            </MDBContainer >
        )
    }

}
