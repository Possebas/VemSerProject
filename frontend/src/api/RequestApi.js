import * as axios from 'axios';

export default class RequestApi {
    constructor() {
        this.data = []
        this.baseUrl = `http://localhost:8080`
        this.zipCodeUrl = `http://viacep.com.br/ws`
    }

    async reqApi( url, typeReq, id ) {
        url += typeReq ?  `${typeReq}` : ''
        url += id ? `/${id}` : ''
        axios.get(`${this.baseUrl}${url}`)
        .then( resp => {
            this.data = resp.data
        }).catch( function ( error ) {
            console.log( "Error that's request: "+url+"  "+ error )
        })
    }

    async reqZipCode( id ) {
        let url = `/${id}/json/`
        axios.get(`${this.zipCodeUrl}${url}`)
        .then( resp => {
            this.data = resp.data
        }).catch( function ( error ) {
            console.log( "Error that's request: "+url+"  "+ error )
        })
    }

    returnType(typeRequest) {
        switch (typeRequest) {
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

    requestAddress(typeRequest) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/address', reqs )
    }

    requestAddressID(typeRequest, id) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/address', reqs, id )
    }

    requestAdmin(typeRequest) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/admin', reqs )
    }

    requestAdminID(typeRequest, id) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/admin', reqs, id )
    }

    requestCandidate(typeRequest) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/candidate/', reqs )
    }
    
    requestCandidateID(typeRequest, id) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/candidate/', reqs, id )
    }

    requestCity(typeRequest) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/city', reqs )
    }

    requestCityID(typeRequest, id) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/city', reqs, id )
    }

    requestCountry(typeRequest) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/country', reqs )
    }

    requestCountryID(typeRequest, id) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/country', reqs, id )
    }

    requestFileStorage(typeRequest) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/fileStorage', reqs )
    }

    requestFileStorageID(typeRequest, id) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/fileStorage', reqs, id)
    }

    requestNeighborhood(typeRequest) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/neighborhood', reqs )
    }

    requestNeighborhoodID(typeRequest, id) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/neighborhood', reqs, id )
    }

    requestQuestion(typeRequest) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/question', reqs )
    }

    requestQuestionID(typeRequest, id) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/question', reqs, id )
    }

    requestState(typeRequest) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/state', reqs )
    }

    requestStateID(typeRequest, id) {
        var reqs = this.returnType(typeRequest)
        this.reqApi( '/api/state', reqs, id )
    }

    requestZipCode(id) {
        this.reqZipCode(id)
    }

    get zipCode() {
        return this.data;
    }

}