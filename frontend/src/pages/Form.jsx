import React, { Component } from 'react';

import TemplateForm from '../components/TemplateForm';

import '../css/form.css';
import '../css/login.css';

export default class Form extends Component {

    render( ) {

        return  (
            <div className="form">
                <React.Fragment>
                    <h2 id="titulo" className="pt-3 pb-2 "><span id="welcome black" > Bem vindo, </span> Vem Ser!</h2>
                    <TemplateForm />
                    <div className="my-5 text-center">©2018 DBC Company — Todos os direitos reservados</div>
                </React.Fragment>
            </div>
        )
    }

}
