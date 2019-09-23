import React from "react";
import { MDBCarousel,
        MDBCarouselInner,
        MDBCarouselItem,
        MDBView,
        MDBContainer
      } from "mdbreact";

import turma2 from "../../../images/turma.jpg";
import turma from "../../../images/turma2.jpg";
import timeDBC from "../../../images/timeDBC.jpg";

import '../../../css/whatIs.css'

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                id="test"
                className="d-block w-100"
                src={turma}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                id="test"
                className="d-block w-100"
                src={turma2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                id="test"
                className="d-block w-100"
                src={timeDBC}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;