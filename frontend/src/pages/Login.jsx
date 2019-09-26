/* All librarys */
import React, { Component } from 'react';
import RequestApi from '../api/RequestApi';
import { login } from "../api/LoginAuth";
import * as axios from 'axios';

/* Components */
import TemplateLogin from '../components/TemplateLogin';
import { MDBContainer } from 'mdbreact';

/* CSS */
import '../css/login.css';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.backData = new RequestApi()
        this.baseUrl = `http://localhost:8080`
        this.state = {
            email: '',
            password: '',
            erro:false
        }
        this.trocaValoresState = this.trocaValoresState.bind( this )
    }

    erro(){
        return(
          <div>
            {
              this.state.erro && (
                <div>
                <div className="erro text-center pt-2">
                    <h4 className="white-text red">Login ou senha invalida</h4>
                </div>
                </div>
              )
            }
          </div>
        )
      }

    trocaValoresState( e ) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    verificaTipoUsuario( email ){
        const dominio = email.split( "@" )[1]
        if(dominio === 'dbccompany.com.br') {
            return "admin";
         }else{
            return "candidate";
         }
    }    

    logar = async e => { 
        e.preventDefault();
        const { email, password } = this.state
        const tipoUsuario = this.verificaTipoUsuario( email );
        let usuario = {
            email:email,
            password:password
        }
        
        try {
            axios.post( `${this.baseUrl}/api/${tipoUsuario}/login`, usuario )
                .then(respUsuario => {
                    (console.log("aki",usuario = respUsuario.data));
                    if((usuario === undefined) || (usuario === "") || (usuario === null)){
                        console.log("consegui");
                    }else{
                        if(tipoUsuario === "admin"){
                            axios.post(`${this.baseUrl}/login`, { email, password }).then(resp => {
                                login(resp.headers.authorization);
                                this.props.history.push({
                                    pathname: '/admin'})
                            }
                            )
                        }else{
                            this.props.history.push({
                            pathname: `/candidateDetail/${usuario.id}`,
                            state: { detail: respUsuario.data }
                            })
                        }
                    }
                    

                }).catch(this.setState({erro:true}),function (error) {
                    console.log("Error in login =>", error)
                }
        )} catch (erro) {

        }
    }
    render() {

        return (
            <MDBContainer fluid id="login" className="mh-100">
                    <h2 id="titulo" className="pt-3 pb-2"><span id="welcome" > Bem vindo, </span> Vem Ser!</h2>
                    <TemplateLogin logar={ this.logar.bind( this ) } trocaValoresState={ this.trocaValoresState } />
                    {this.erro()}
                    <div className="mt-5 text-center font-weight-bold">&copy; {new Date().getFullYear()} DBC Company — Todos os direitos reservados</div>
            </MDBContainer >
        )
    }

}
