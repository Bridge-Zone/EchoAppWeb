import React from "react";
import "../css/AppointmentCard.css";
import service1 from "../images/service1.png";
import { LocationIconBlue } from "./SvgGrabber";
import testimonial1 from "../images/testimonial1.png";

const AppointmentCard = () => {
  return (
    <div className="appointment-card">
      <div className="row p-0">
        <div className="col-md-12 d-flex justify-content-between mb-2">
          <h5 className="appointment-title">Obstetric Ultrasound</h5>
          <div className="d-flex justify-content-between align-items-center">
            <span className="appointment-badge">Upcoming</span>
          </div>
        </div>
        <div className="row p-0">
          <div className="col-md-5">
            <img
              src={service1}
              alt="Obstetric Ultrasound"
              className="w-100 h-100 apointmentCard-detail"
            />
          </div>
          <div className="col-md-7 p-0">
            <div className="appointment-card-body">
              <div className="d-flex justify-content-between">
                <p className="appointment-price">
                  Price:<span className="appointment-amount"> 70$</span>
                </p>
                <p className="appointment-time">
                  15 September,{" "}
                  <span className="appointment-date">2024 at 11 AM</span>
                </p>
              </div>
              <p className="appointment-description">
                Elementum augue ornare enim nulla tristique. Maecenas quis
                sapien fringilla eget lacus fusce at convallis. Fringilla
                integer diam nulla lectus feugiat blandit integer. Scelerisque
                turpis hendrerit et lectus habitant montes ultricies. Leo mattis
                tortor ultricies est eu viverra a libero.nulla lectus feugiat
                blandit integer. Scelerisque turpis hendrerit et lectus habitant
                montes ultricies. Leo mattis tortor ultricies est eu viverra a
                libero.
              </p>
              <div className="appointment-profile">
                <div>
                  <img src={testimonial1} alt="Profile" />
                  <span className="appointment-profile-name">
                    Michael Jordon
                  </span>
                </div>
                <LocationIconBlue />
              </div>
              <div className="row">
                <div className="col-6">
                  <button className="appointment-button cancel">Cancel</button>
                </div>
                <div className="col-6">
                  <button className="appointment-button reschedule">
                    Re-Schedule
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
