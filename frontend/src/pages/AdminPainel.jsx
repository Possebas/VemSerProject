/* All librarys */
import React, { Component } from 'react';

/* Components */
import PainelNavBar from '../components/PainelNavBar';
import Candidate from '../components/Candidate';
import { MDBContainer } from "mdbreact";
import RequestApi from '../api/RequestApi';


/* CSS */
import '../css/painel.css';

export default class AdminPainel extends Component {
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
            <React.Fragment>
                <div id="painelbackground">
                <PainelNavBar/>
                <MDBContainer className="py-1">
                    <Candidate/>
                </MDBContainer>
                </div>
            </React.Fragment>
        );
    }
}