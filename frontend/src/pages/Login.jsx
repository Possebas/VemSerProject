/* All librarys */
import React, { Component } from 'react';

/* Components */
import TemplateLogin from '../components/TemplateLogin';

/* Styles */
import '../css/login.css';

export default class Login extends Component {

    render( ) {

        return  (
            <div id="login">
                <React.Fragment>
                    <h2 id="titulo" className="pt-3 pb-2"><span id="welcome" > Bem vindo, </span> Vem Ser!</h2>
                    <TemplateLogin />
                    <div className="my-5 text-center">©2018 DBC Company — Todos os direitos reservados</div>
                </React.Fragment>
            </div>
        )
    }

}
