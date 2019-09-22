import React, { Component } from 'react';

import TemplateFormQuestions from '../components/TemplateFormQuestions';

import '../css/form.css';
import '../css/login.css';

export default class Form extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return  (
            <div id="container">
                <div id="form">
                    <React.Fragment>
                        <h2 id="titulo" className="pt-3 pb-2 "><span id="title" > Questões!</span></h2>
                        <TemplateFormQuestions />
                        <div className="pt-5 pb-3 text-center font-weight-bold" id="sMarginPadding">©2018 DBC Company — Todos os direitos reservados</div>
                    </React.Fragment>
                </div>
            </div>
        )
    }

}
