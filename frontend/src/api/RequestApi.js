import * as axios from 'axios';

export default class RequestApi {
    constructor() {
        this.data = []
        this.baseUrl = `http://localhost:8080/`
    }

    async reqApi( url, typeReq, id ) {
        url += typeReq ?  `${typeReq}` : ''
        console.log("URL 1", url)
        url += id ? `:${id}` : ''
        console.log("URL 2", url)
        axios.get(`${this.baseUrl}${url}`, { 
        })
        .then( resp => {
            this.data = resp.data
            console.log(this.data)
        }).catch( function ( error ) {
            console.log( "Error that's request: "+url+"  "+ error )
        })
    }

    retornaTipo(tipoRequisicao) {
        if(tipoRequisicao == "ALL"){
            return "/"
        }
        if(tipoRequisicao == "POST"){
            return "/add"
        }
        if(tipoRequisicao == "EDIT"){
            return "/edit/"
        }
        if(tipoRequisicao == "DELETE"){
            return "/delete/"
        }
    }

    requestAddress(tipoRequisicao) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/address', reqs )
    }

    requestAddressID(tipoRequisicao, id) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/address', reqs, id )
    }

    requestAdmin(tipoRequisicao) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/admin', reqs )
    }

    requestAdminID(tipoRequisicao, id) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/admin', reqs, id )
    }

    requestCandidate(tipoRequisicao) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/candidate', reqs )
    }
    
    requestCandidateID(tipoRequisicao, id) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/candidate', reqs, id )
    }

    requestCity(tipoRequisicao) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/city', reqs )
    }

    requestCityID(tipoRequisicao, id) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/city', reqs, id )
    }

    requestCountry(tipoRequisicao) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/country', reqs )
    }

    requestCountryID(tipoRequisicao, id) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/country', reqs, id )
    }

    requestFileStorage(tipoRequisicao) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/fileStorage', reqs )
    }

    requestFileStorageID(tipoRequisicao, id) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/fileStorage', reqs, id)
    }

    requestNeighborhood(tipoRequisicao) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/neighborhood', reqs )
    }

    requestNeighborhoodID(tipoRequisicao, id) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/neighborhood', reqs, id )
    }

    requestQuestion(tipoRequisicao) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/question', reqs )
    }

    requestQuestionID(tipoRequisicao, id) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/question', reqs, id )
    }

    requestState(tipoRequisicao) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/state', reqs )
    }

    requestStateID(tipoRequisicao, id) {
        var reqs = this.retornaTipo(tipoRequisicao)
        this.reqApi( '/api/state', reqs, id )
    }

}