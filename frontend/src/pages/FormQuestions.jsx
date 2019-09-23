import React, { Component } from 'react';

import TemplateFormQuestions from '../components/TemplateFormQuestions';

import '../css/form.css';
import '../css/login.css';

export default class FormQuestions extends Component {
    constructor(props){
        super(props);
        this.state = {
            idCandidate: this.props.location.state.detail
        }
    }
    render() {
        return  (
            <div id="container">
                <div id="form">
                    <React.Fragment>
                        <h2 id="titulo" className="pt-3 pb-2 "><span id="title" > Bem-vindo ao projeto Vem Ser!</span></h2>
                        <h4 className="title">Complete sua inscrição:</h4>
                        <TemplateFormQuestions history={this.props.history} idCandidate={this.state.idCandidate} />
                        <div className="pt-5 pb-3 text-center font-weight-bold" id="sMarginPadding">&copy; {new Date().getFullYear()} DBC Company — Todos os direitos reservados</div>
                    </React.Fragment>
                </div>
            </div>
        )
    }

}
