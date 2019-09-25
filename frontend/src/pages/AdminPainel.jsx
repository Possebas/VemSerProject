/* All librarys */
import React, { Component } from 'react';
import * as axios from 'axios';

/* Components */
import PainelNavBar from '../components/PainelNavBar';
import Candidate from '../components/Candidate';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

/* CSS */
import '../css/painel.css';
import InputAdmin from '../components/InputAdmin';

export default class AdminPainel extends Component {
    constructor(props) {
        super(props);
        this.baseUrl = `http://localhost:8080`;
        this.state = {
            oldList: [],
            list: [],
            radio: "Todos"
        }

    }

    componentDidMount() {
        //Pega o token do navegador.
        const config = { headers: { Authorization: localStorage.getItem("Authorization") } }
        axios.get(`${this.baseUrl}/api/question/`, (config))
            .then(resp => {
               this.setState({
                    oldList: resp.data,
                    list: resp.data
                })
            })
    }

    searchInput = (evt) => {
        const listCandidates = this.state.list
        const config = { headers: { Authorization: localStorage.getItem("Authorization") } }
        const pesquisa = evt.target.value
        if (pesquisa) {
            const filter = listCandidates.filter(a => a.candidate.name.toUpperCase().includes(pesquisa.toUpperCase()))
            this.setState({
                oldList: this.state.list,
                list: filter
            })
        } else {
            axios.get(`${this.baseUrl}/api/question/`, (config))
                .then(resp => {
                    this.setState({ list: resp.data })
                })
        }
    }

    parseRadio = typePT => {
        switch (typePT) {
            case "Pendente":
                return "PEENDING"
            case "ConviteEnviado":
                return "INVITATION_SENT"
            case "Rejeitado":
                return "REJECTED"
            case "PresencaConfirmada":
                return "CONFIRMED_PRESENCE"
            case "Todos":
                return "ALL"
            default:
                break;
        }
    }

    getTypes = type => {
        let listCandidates = this.state.list
        const config = { headers: { Authorization: localStorage.getItem("Authorization") } }

        const translate = this.parseRadio(type)

        if (translate == "ALL") {
            axios.get(`${this.baseUrl}/api/question/`, (config))
                .then(resp => {
                    this.setState({ 
                        list: resp.data,
                        oldList: resp.data,
                    })
                })

        } else if (translate) {
            axios.get(`${this.baseUrl}/api/question/`, (config))
            .then(resp => {
                listCandidates = resp.data

                const filter = listCandidates.filter(a => a.candidate.statusProcess.toUpperCase().includes(translate.toUpperCase()))
                if (filter) {
                    this.setState({
                        oldList: this.state.list,
                        list: filter
                    })
                }
            })
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <div id="painelbackground">
                    <PainelNavBar name="RH" />
                    <MDBContainer className="py-2">
                        <MDBRow className="my-3">
                            <MDBCol xl="5" lg="5" md="6" sm="12">
                                <input id="searchcandidates" type="search" className="form-control"
                                    placeholder="Pesquisar nome" onChange={this.searchInput.bind(this)} aria-controls="dt_candidates">
                                </input>
                            </MDBCol>
                            <MDBCol className="my-auto pr-3" xl="2" lg="2" md="6" sm="12">
                                <span>Selecione por status de inscrição: </span>
                            </MDBCol>
                            <MDBCol xl="5" lg="5" md="6" sm="12">
                                <InputAdmin getTypes={this.getTypes.bind(this)} />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="row align-items-start">
                            <Candidate list={this.state.list !== null ? this.state.list : ''} />
                        </MDBRow>
                    </MDBContainer>
                </div>
            </React.Fragment>
        );
    }
}