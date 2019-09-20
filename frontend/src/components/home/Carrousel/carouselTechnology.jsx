import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

import docker from "../../../images/carouselTechnology/docker.jpg";
import eclipse from "../../../images/carouselTechnology/eclipse.png";
import intelij from "../../../images/carouselTechnology/intelij.png";
import ReactJS from "../../../images/carouselTechnology/ReactJS.png";
import springBoot from "../../../images/carouselTechnology/springBoot.png";
import visualStudio from "../../../images/carouselTechnology/visualStudio.png";
import js from "../../../images/carouselTechnology/js.jpeg";
import '../../../css/carousel.css';

const CarouselTechnology = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={7}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100 imageo"
                src={springBoot}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={ReactJS}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={visualStudio}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src={intelij}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img
                className="d-block w-100"
                src={eclipse}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
            <MDBView>
              <img
                className="d-block w-100"
                src={docker}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="7">
            <MDBView>
              <img
                className="d-block w-100"
                src={js}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselTechnology;