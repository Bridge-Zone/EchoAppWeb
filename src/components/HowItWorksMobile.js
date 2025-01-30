import React from "react";
import { Calender, Dotted, Location, Notes } from "../components/SvgGrabber";
import "../css/HowItWorks.css"
const HowItWorksMobile=()=>{
    return(
        <div className="container">
        <div className="row mt-5 mb-5 align-items-center justify-content-center text-center ">
          <h1 className="circle-heading">How it Works</h1>
          <p className="circle-subText">From Booking to Results – A Seamless Ultrasound Experience.</p>

          <div className="col-12 col-md-4 p-lg-0 mt-4 circle-mobile d-flex justify-content-center flex-column align-items-center">
            <div className="work-circle rounded-circle">
              <Calender />
              <span className="circle-number">1</span>
            </div>
            <h5 className="bellow-circle-heading">Book Your Appointment</h5>
            <p className="bellow-circle-subText">Choose your preferred time and date through the app, website, or phone.</p>
          </div>
         
          <div className="col-12 col-md-4  p-lg-0 mt-4 circle-mobile d-flex justify-content-center flex-column align-items-center">
            <div className="work-circle rounded-circle">
              <Location />
              <span className="circle-number">2</span>
            </div>
            <h5 className="bellow-circle-heading">Track Your Technician</h5>
            <p className="bellow-circle-subText">Get real-time updates on their arrival.</p>
          </div>
         
          <div className="col-12 col-md-4  p-lg-0 mt-4 circle-mobile d-flex justify-content-center flex-column align-items-center">
            <div className="work-circle rounded-circle">
              <Notes />
              <span className="circle-number">3</span>
            </div>
            <h5 className="bellow-circle-heading">Receive Your Results</h5>
            <p className="bellow-circle-subText">Access secure reports via the app post-scan.</p>
          </div>
        </div>
      </div>
    )
}
export default HowItWorksMobile