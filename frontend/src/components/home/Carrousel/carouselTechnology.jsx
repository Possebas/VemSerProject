import React from "react";
import { MDBContainer, MDBCol, MDBCardImage, MDBCard,
  MDBCardBody, MDBCardText, MDBRow } from
"mdbreact";

import docker from "../../../images/carouselTechnology/docker.png";
import oracle from "../../../images/carouselTechnology/oracle.jpg";
import react from "../../../images/carouselTechnology/react.png";
import spring from "../../../images/carouselTechnology/spring.png";
import js from "../../../images/carouselTechnology/js.jpg";
import java from "../../../images/carouselTechnology/java.png";
import '../../../css/carousel.css';

const CarouselTechnology = () => {
  return (
    <MDBContainer >
      
          <MDBRow className="mt-4">
              <MDBCol className="mt-2" md="4" sm="5" lg="4" xl="2">
                <MDBCard className="mb-2 h-100">
                  <MDBCardImage className="img-fluid imgcard" src={java}/>
                  <MDBCardBody>
                      <MDBCardText>
                        Conceitos sobre Orientação a Objetos com aplicação na linguagem Java.
                      </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
          
              <MDBCol className="mt-2" md="4" sm="5" lg="4" xl="2">
                <MDBCard className="mb-2 h-100">
                  <MDBCardImage className="img-fluid imgcard" src={js}/>
                  <MDBCardBody>
                      <MDBCardText>
                        Introdução Web Front End HTML, CSS e JS.
                      </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol className="mt-2" md="4" sm="5" lg="4" xl="2">
                <MDBCard className="mb-2 h-100">
                  <MDBCardImage className="img-fluid imgcard" src={react}/>
                  <MDBCardBody>
                      <MDBCardText>
                        Uma biblioteca JavaScript, eficiente e flexível para a criação de interfaces de usuário.
                      </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol className="mt-2" md="4" sm="5" lg="4" xl="2">
                <MDBCard className="mb-2 h-100">
                  <MDBCardImage className="img-fluid imgcard" src={oracle}/>
                  <MDBCardBody className="">
                      <MDBCardText>
                        Sistema Gerenciador de Banco de Dados, um software que permite a administração de dados.
                      </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol className="mt-2" md="4" sm="5" lg="4" xl="2">
                <MDBCard className="mb-2 h-100">
                  <MDBCardImage className="img-fluid imgcard" src={spring}/>
                  <MDBCardBody>
                      <MDBCardText>
                        Framework criado com o objetivo de simplificar a programação em Java.
                      </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol className="mt-2" md="4" sm="5" lg="4" xl="2">
                <MDBCard className="mb-2 h-100">
                  <MDBCardImage className="img-fluid imgcard" src={docker}/>
                  <MDBCardBody>
                      <MDBCardText>
                        Plataforma de código aberto que garante maior facilidade na criação e administração de ambientes.
                      </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
          </MDBRow>
    </MDBContainer>
  );
}

export default CarouselTechnology;