import React from "react";
import "../css/Banner.css"; // Custom styles
import machine from "../images/machine.png"
import { HandArrow, Star, WhiteTick } from "./SvgGrabber";

const Banner = () => {
  return (
    <div className="container-fluid banner-container text-white py-5">
     <div className="container">
     <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 col-md-12 text-center text-lg-start">
          {/* Header */}
          <div className="">
            <span className="star-rating gap-2"><Star/> <Star/> <Star/> <Star/> <Star/></span>
            <span className="ms-2 review-text">Based on <span className="fw-bold">385</span> reviews by scorch users</span>
          </div>

          {/* Main Headline */}
          <h1 className="banner-heading">
            Clear, Fast, Reliable Imaging Your {" "}
            <span className="highlight">Trusted Ultrasound</span> Solution!
          </h1>

          {/* Subtext */}
          <p className=" banner-subtext">
            Lorem ipsum dolor sit amet consectetur. Atcu scelerisque laoreet enim eu accumsan non ultrices cum aliquam.
            Aliquam in convallis interdum placerat magna imperdiet.
          </p>

          {/* Features List */}
          <ul className="list-unstyled banner-text">
            <li>
           <WhiteTick/> Accurate results for better decisions.
            </li>
            <li>
              <WhiteTick/> Easy-to-use technology for all needs.
            </li>
            <li>
              <WhiteTick/> Trusted by experts worldwide.
            </li>
          </ul>

          {/* Call-to-action Button */}
          <button className=" banner-btn">
            GET EXPERT TODAY <span className="ms-2"><HandArrow/></span>
          </button>
        </div>

        {/* Right Image */}
        <div className="col-lg-6 col-md-12 text-center mt-4 mt-lg-0">
          <img
          width="100%" height="100%"
            src={machine}
            alt="Ultrasound Machine"
            className="img-fluid"
          />
        </div>
      </div>
     </div>
    </div>
  );
};

export default Banner;
