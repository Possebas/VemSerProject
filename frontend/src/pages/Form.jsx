import React, { Component } from 'react';

import TemplateForm from '../components/TemplateForm';

import '../css/form.css';
import '../css/login.css';

export default class Form extends Component {

    render( ) {

        return  (
            <div id="container">
                <div id="form">
                    <React.Fragment>
                        <h2 id="titulo" className="pt-3 pb-2 "><span id="title" > Bem vindo ao projeto Vem Ser!</span></h2>
                        <TemplateForm />
                        <div className="pt-5 text-center" id="sMarginPadding">©2018 DBC Company — Todos os direitos reservados</div>
                    </React.Fragment>
                </div>
            </div>
        )
    }

}
