/* All librarys */
import React, { Component } from 'react';
import {MDBContainer} from 'mdbreact';
import { login } from "../api/LoginAuth";

/* Components */
import TemplateLogin from '../components/TemplateLogin';

/* Styles */
import '../css/login.css';
import config from '../api/Config';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.trocaValoresState = this.trocaValoresState.bind( this )
    }

    trocaValoresState( e ) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    logar = async e => { 
        e.preventDefault();

        const { email, password } = this.state
        try {
            const response = await config.post("/login", { email, password });
            login(response.headers.authorization);
            this.props.history.push("/admin");
        }catch (err) {
            alert("Email ou senha inválida")
        }
    }

    render() {

        return (
            <MDBContainer fluid id="login" className="mh-100">
                    <h2 id="titulo" className="pt-3 pb-2"><span id="welcome" > Bem vindo, </span> Vem Ser!</h2>
                    <TemplateLogin logar={ this.logar.bind( this ) } trocaValoresState={ this.trocaValoresState } />
                    <div className="mt-5 text-center font-weight-bold">&copy; 2018 DBC Company — Todos os direitos reservados</div>
            </MDBContainer >
        )
    }

}
