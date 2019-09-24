/* All librarys */
import React, { Component } from 'react';
import {MDBContainer} from 'mdbreact';
import { login } from "../api/LoginAuth";
import RequestApi from '../api/RequestApi';
import * as axios from 'axios';

/* Components */
import TemplateLogin from '../components/TemplateLogin';

/* Styles */
import '../css/login.css';
import config from '../api/Config';
import { jsxClosingElement } from '@babel/types';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.backData = new RequestApi()
        this.baseUrl = `http://localhost:8080`
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

    verificaTipoUsuario(email){
        const dominio = email.split("@")[1]
        if(dominio === 'dbccompany.com.br') {
            return "admin";
         }else{
            return "candidate";
         }
    }    

    logar = async e => { 
        e.preventDefault();
        const { email, password } = this.state
        const tipoUsuario = this.verificaTipoUsuario(email);
        let usuario = {
            email:email,
            password:password
        }
        
        try {
            axios.post(`${this.baseUrl}/api/${tipoUsuario}/login`, usuario)
                .then(respUsuario => {
                    console.log("resp",usuario = respUsuario.data);
                    //const response = axios.post("/login", { email, password })
                    //login(response.headers.authorization);
                    console.log("aki");
                    if(tipoUsuario === "admin"){
                        this.props.history.push({
                            pathname: '/admin',
                          })
                    }else{
                        this.props.history.push("/candidateDetail/", { ...response })
                    }

                }).catch(function (error) {
                    
                }
        )} catch (erro) {

        }
    }
    render() {

        return (
            <MDBContainer fluid id="login" className="mh-100">
                    <h2 id="titulo" className="pt-3 pb-2"><span id="welcome" > Bem vindo, </span> Vem Ser!</h2>
                    <TemplateLogin logar={ this.logar.bind( this ) } trocaValoresState={ this.trocaValoresState } />
                    <div className="mt-5 text-center font-weight-bold">&copy; {new Date().getFullYear()} DBC Company — Todos os direitos reservados</div>
            </MDBContainer >
        )
    }

}
