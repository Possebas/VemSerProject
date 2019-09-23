import React from 'react';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Stepper from 'react-stepper-horizontal';
import "../../css/dates.css";


export const Dates = () => {
    return (
        <React.Fragment>
            <MDBContainer>
                <MDBRow className="text-center">
                    <MDBCol className="mt-5 ">
                    <h1 className="smartphone font-weight-bold">Atenção aos prazos!</h1>
                    </MDBCol>
                   
                </MDBRow>
            <div>
            <Stepper titleFontSize={20} size={75} circleFontSize={35} circleTop={80} completeColor="#a32769"
             steps={[{title: 'Inscrições abertas', }, {title: 'Processo seletivo'}, {title: 'Início da capacitação'}] } activeStep={ 4 } />
            </div>
            <MDBContainer >
            <MDBRow  className="text-center mt-1 mb-5 pb-4 ">
                <MDBCol><h5 className="textDates">23/09/2019 à 22/10/2019</h5></MDBCol>
                <MDBCol><h5 className="textDates">23/10/2019 à 31/10/2019</h5></MDBCol>
                <MDBCol><h5 className="textDates">18/11/2019</h5></MDBCol>
            </MDBRow>
            </MDBContainer>
            
            </MDBContainer>
            
        </React.Fragment>
    );
};

export default Dates;