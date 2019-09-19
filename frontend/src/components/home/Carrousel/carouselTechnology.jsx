import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

import docker from "../../../images/carouselTechnology/docker.jpg";
import intellij from "../../../images/carouselTechnology/intellij.png";
import reactJS from "../../../images/carouselTechnology/reactJS.png";
import springBoot from "../../../images/carouselTechnology/springBoot.png";
import visualStudio from "../../../images/carouselTechnology/visualStudio.png";
import js from "../../../images/carouselTechnology/js.jpeg";
import '../../../css/carousel.css'
const CarouselTechnology = () => {
  return (
    <MDBContainer >
      <MDBCarousel
        activeItem={5}
        length={6}
        showControls={true}
        showIndicators={false}
        className=" "
        slide
      >
        <MDBCarouselInner className="imgcarousel">
          <MDBCarouselItem itemId="1">
            <MDBView >
              <img
                className="d-block w-100"
                src={springBoot}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={reactJS}
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
                src={intellij}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img
                className="d-block w-100"
                src={docker}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
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