import React, { useState } from "react";
import "../css/BookingStatus.css"; // Your custom styles
import service1 from "../images/service1.png"

const BookingStatus = () => {
  const [activeTab, setActiveTab] = useState("all");

  const appointments = [
    { type: "Obstetric Ultrasounds", date: "16 June, 2024", status: "Pending" },
    { type: "Abdominal Ultrasound", date: "16 June, 2024", status: "Upcoming" },
    { type: "Pelvic Ultrasound", date: "16 June, 2024", status: "Completed" },
    { type: "Obstetric Ultrasounds", date: "16 June, 2024", status: "Cancelled" },
    { type: "Obstetric Ultrasounds", date: "16 June, 2024", status: "Cancelled" },
  ];

  const statusClasses = {
    Pending: "badge-pending",
    Upcoming: "badge-upcoming",
    Completed: "badge-completed",
    Cancelled: "badge-cancelled",
  };

  const filteredAppointments =
    activeTab === "all"
      ? appointments
      : appointments.filter((app) => app.status.toLowerCase() === activeTab);

  return (
    <div className="appointments-wrapper">
      {/* Tabs */}
      <div className="tabs-container status-tab">
        {["All", "Pending", "Upcoming", "Completed", "Cancelled"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${
              activeTab === tab.toLowerCase() ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Appointment Cards */}
      <div className="cards-container">
        {filteredAppointments.map((appointment, index) => (
          <div className="custom-card" key={index}>
            <div className="card-content-status">
              <img
                src={service1}
                alt="icon"
                className="card-image-status"
              />
              <div className="card-info-status">
                <h6 className="card-title-status">{appointment.type}</h6>
                <p className="card-date">{appointment.date}</p>
              </div>
              <span className={`badge ${statusClasses[appointment.status]}`}>
                {appointment.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingStatus;
