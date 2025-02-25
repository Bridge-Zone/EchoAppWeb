import React from "react";
import "../css/WhoWeAre.css"
import medicalTeam from "../images/medicalTeam.jpg"
import { FaHeartbeat, FaMicroscope, FaUserMd } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={medicalTeam}
              alt="Medical Team"
              className="img-fluid rounded shadow-lg"
            />
          </div>

          {/* Right Side: Content */}
          <div className="col-lg-6">
            <h2 className="whoWeAre-heading text-white">Who We Are</h2>
            <p className="text-light">
              We are a trusted provider of high-quality medical tests, specializing in 
              **ultrasound** and other diagnostic services. Our experienced professionals 
              ensure accurate results using state-of-the-art technology.
            </p>

            {/* Feature Cards */}
            <div className="row">
              <div className="col-md-4">
                <div className="feature-card">
                  <FaHeartbeat className="feature-icon" />
                  <p>Accurate Results</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-card">
                  <FaMicroscope className="feature-icon" />
                  <p>Advanced Technology</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-card">
                  <FaUserMd className="feature-icon" />
                  <p>Expert Professionals</p>
                </div>
              </div>
            </div>

            {/* Call to Action Button */}
            <a href="/about" className="btn-custom mt-4">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
