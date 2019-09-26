/* All librarys */
import React, { Component } from "react";

/* Components */
import { MDBFormInline, MDBInput } from "mdbreact";

class InputAdmin extends Component {

    state = {
        radio: "Todos"
    }

    onClick = nr => () => {
        this.setState({
            radio: nr
        });
        this.props.getTypes(nr)
    }

    render() {
        return (
            <MDBFormInline>
                <MDBInput gap onClick={this.onClick("Todos")} checked={this.state.radio === "Todos" ? true : false} label="Todos"
                    valueDefault type="radio" id="todos" />
                <MDBInput gap onClick={this.onClick("Pendente")} checked={this.state.radio === "Pendente" ? true : false} label="Pendente"
                    type="radio" id="pendente" />
                <MDBInput gap onClick={this.onClick("ConviteEnviado")} checked={this.state.radio === "ConviteEnviado" ? true : false} label="Convite enviado"
                    type="radio" id="conviteenviado" />
                <MDBInput gap onClick={this.onClick("PresencaConfirmada")} checked={this.state.radio === "PresencaConfirmada" ? true : false} label="Presença confirmada"
                    type="radio" id="presencaconfirmada" />
                <MDBInput gap onClick={this.onClick("Rejeitado")} checked={this.state.radio === "Rejeitado" ? true : false} label="Rejeitado"
                    type="radio" id="rejeitado" />
            </MDBFormInline>
        );
    }
}

export default InputAdmin;