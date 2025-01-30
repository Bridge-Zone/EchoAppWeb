import React from "react";
import "../css/UltrasoundService.css";
import service1 from "../images/service1.png";
import service2 from "../images/service2.png";
import service3 from "../images/service3.png";
import TestimonialSlider from "./TestimonialSlider";
const UltrasoundService = () => {
  return (
    <div className="container-fluid bg-color-div pt-2 pb-4">
      <div className="container mt-4 mb-4">
        <div className="row centralized mt-4 mb-4 mx-auto">
          <h1 class="fs-custom mt-4">
            Bringing diagnostic ultrasound services
          </h1>
          <p className="fs-custom-subHeading">
            Lorem ipsum dolor sit amet consectetur. Orci quis feugia
          </p>
          <div className="col-md-4 mt-4">
            <div className="main-div">
              <img width="100%" src={service1} alt="Fruits"></img>
              <div className="sub-div">
                <h5 className="sub-div-heading">Obstetric Ultrasound</h5>
                <p className="sub-div-para">
                  Lorem ipsum dolor sit amet sectetur. Commodo sapien Lorem
                  ipsum dolor sit amet sectetur. Commodo sapien Lorem ipsum
                  dolor sit amet sectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="main-div">
              <img width="100%" src={service2} alt="Fruits"></img>
              <div className="sub-div">
                <h5 className="sub-div-heading">Abdominal Ultrasound</h5>
                <p className="sub-div-para">
                  Lorem ipsum dolor sit amet sectetur. Commodo sapien Lorem
                  ipsum dolor sit amet sectetur. Commodo sapien Lorem ipsum
                  dolor sit amet sectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="main-div">
              <img width="100%" src={service3} alt="Fruits"></img>
              <div className="sub-div">
                <h5 className="sub-div-heading">Pelvic Ultrasound</h5>
                <p className="sub-div-para">
                  Lorem ipsum dolor sit amet sectetur. Commodo sapien Lorem
                  ipsum dolor sit amet sectetur. Commodo sapien Lorem ipsum
                  dolor sit amet sectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="centralized-div">
            <p className="service-viewAll">View All</p>
        </div>
      </div>
    </div>
  );
};
export default UltrasoundService;
