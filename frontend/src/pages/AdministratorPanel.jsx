/* All librarys */
import React, { Component } from 'react';
import RequestApi from '../api/RequestApi';

/* Components */

export default class CandidateDetail extends Component {

    constructor(props){
        super(props)
        this.backData = new RequestApi()
        this.state = {
            list: []
        }
    } 

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                list: this.backData.requestCountry("ALL")
            })
        }, 2000)
    }

    render() {
        return (
            <div>
                <h1 className="text-center"> PAINEL DE ADMININASTRO! </h1>
            </div>
        );
    }
}