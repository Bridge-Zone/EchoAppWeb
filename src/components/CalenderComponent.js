import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CalenderComponent.css"; // Custom styles for alignment and design

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const times = [
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  return (
    <div className=" mt-4">
      <h5 className="mb-3 selectDate">Select Date</h5>
      <div className=" calender-div">
        <Calendar onChange={setDate} value={date} />
      </div>
      <h5 className="mt-4 mb-3">Select Time</h5>
      <div className="d-flex flex-wrap gap-4 align-items-center">
        {times.map((time, index) => (
          <button
            key={index}
            className={`time-btn ${
              selectedTime === time ? "calender-active" : ""
            }`}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalendarComponent;
