/* All librarys */
import React, { Component } from 'react';

/* Components */
import PainelNavBar from '../components/PainelNavBar';
import SlideNavBar from '../components/adminPainel/SlideNavBar';
import Candidate from '../components/Candidate';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
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
                <MDBContainer className="px-2 py-2">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="3">
                            <SlideNavBar/>
                            </MDBCol>
                            <MDBCol md="8">
                                <Candidate/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBContainer>
                </div>
            </React.Fragment>
        );
    }
}