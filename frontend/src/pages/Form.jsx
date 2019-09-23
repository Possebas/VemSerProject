import React, { Component } from 'react';

import TemplateForm from '../components/TemplateForm';

import '../css/form.css';
import '../css/login.css';

export default class Form extends Component {
    constructor(props){
        super(props);
    }
    render( ) {
        return  (
            <div id="container">
                <div id="form">
                    <React.Fragment>
                        <h2 id="titulo" className="pt-3 pb-2"><span id="title" > Bem-vindo ao projeto Vem Ser!</span></h2>
                        <h4 className="title">Preencha as informações abaixo:</h4>
                        <TemplateForm  history={this.props.history}/>
                        <div className="pt-5 pb-3 text-center font-weight-bold" id="sMarginPadding">&copy; {new Date().getFullYear()} DBC Company — Todos os direitos reservados</div>
                    </React.Fragment>
                </div>
            </div>
        )
    }

}
