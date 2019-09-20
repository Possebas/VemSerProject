import * as axios from 'axios';

export default class RequestApi {
    constructor() {
        this.data = []
        this.baseUrl = `http://localhost:8080`
    }

    async reqApi( url, typeReq, id ) {
        url += typeReq ?  `${typeReq}` : ''
        url += id ? `/${id}` : ''
        axios.get(`${this.baseUrl}${url}`, { 
        })
        .then( resp => {
            this.data = resp.data
            console.log(" Chegando na api ", resp.data)
        }).catch( function ( error ) {
            console.log( "Error that's request: "+url+"  "+ error )
        })
    }

    retornaTipo(tipoRequisicao) {
        switch (tipoRequisicao) {
            case "ALL" || "GET":
                return "/"
            case "POST":
                return "/add"
            case "EDIT":
                return "/edit/"
            case "DELETE":
                return "/delete/"
            default:
                break;
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