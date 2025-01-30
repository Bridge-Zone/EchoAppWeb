import React from "react";
import "../css/AppointmentCard.css";
import service1 from "../images/service1.png"

const AppointmentCard = () => {
  return (
    <div className="appointment-card">
      <div className="row">
        <div className="col-md-4">
        <h5 className="appointment-title">Obstetric Ultrasound</h5>
          <img
            src={service1}
            alt="Obstetric Ultrasound"
            className="w-100 h-100 apointmentCard-detail"
          />
        </div>
        <div className="col-md-8">
          <div className="appointment-card-body">
            <div className="d-flex justify-content-between align-items-center">
             
              <span className="appointment-badge">Upcoming</span>
            </div>
            <p className="appointment-price">Price: $70</p>
            <p className="appointment-time">
              15 September, 2024 at 11 AM
            </p>
            <p className="appointment-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
              metus nec libero commodo lacinia.
            </p>
            <div className="appointment-profile">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
              />
              <span className="appointment-profile-name">Michael Jordon</span>
            </div>
            <div className="appointment-actions">
              <button className="appointment-button cancel">Cancel</button>
              <button className="appointment-button reschedule">
                Re-Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
