import React, {Component} from "react";
import { MDBProgress } from 'mdbreact';

export default class ProgressBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            status: this.props.candidate.statusProcess
        }
    }

    render() {
        return(
            <div className="pt-3">
            {this.state.status === "INVITATION_SENT" && 
                <MDBProgress value={100} className="my-2" height= "35px" color="success">
                    Parabéns! Você foi selecionado para a próxima etapa! :)
                </MDBProgress>
            }
            {this.state.status === "REJECTED" &&
                <MDBProgress value={100} className="my-2" height= "35px" color="warning">
                    Infelizmente você não foi selecionado! :'(
                </MDBProgress>}
            {this.state.status === "PEENDING" &&
                <MDBProgress value={50} className="my-2" height= "35px" color="info">
                    Estamos avaliando seu cadastro. Aguarde!
                </MDBProgress>
            }        
            </div>
        );
    }
}