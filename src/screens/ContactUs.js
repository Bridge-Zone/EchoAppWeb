import React from "react";
import Header from "../components/Header";
import "../css/ContactUs.css";
import { AtTheRate, LocationIcon, Phone } from "../components/SvgGrabber";
import DownloadNow from "../components/DownloadNow";
import Footer from "../components/Footer";
const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid p-0 screen-div ">
        <h1 className="screen-title">Check-Out</h1>
      </div>
      <div className="container py-5">
        <form className="row g-3">
          {/* First Name */}
          <div className="col-md-6">
            <input
              type="text"
              className="form-control contactUs-input"
              id="firstName"
              placeholder="First Name"
            />
          </div>

          {/* Last Name */}
          <div className="col-md-6">
            <input
              type="text"
              className="form-control contactUs-input"
              id="lastName"
              placeholder="Last Name"
            />
          </div>

          {/* Email */}
          <div className="col-md-6">
            <input
              type="email"
              className="form-control contactUs-input"
              id="email"
              placeholder="Email"
            />
          </div>

          {/* Phone Number */}
          <div className="col-md-6">
            <input
              type="tel"
              className="form-control contactUs-input"
              id="phone"
              placeholder="Phone No."
            />
          </div>

          {/* Message */}
          <div className="col-12">
            <label htmlFor="message" className="form-label contactUs-label">
              Message
            </label>
            <textarea
              className="form-control contactUs-input-message"
              id="message"
              rows="4"
              placeholder="Write Something"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-12 text-center">
            <button type="submit" className="contactUs-btn">
              Submit
            </button>
            <p className="mt-2 small-text">
              We'll get back to you within 1-2 days
            </p>
          </div>
        </form>

        {/* Contact Information */}
        <div className="row mt-5 ">
          <div className="col-12 col-md-4 d-flex gap-3 align-items-center">
            <AtTheRate />
            <div>
              <p className="mb-1 contactUs-bottom-text">
                <strong>Email:</strong>
              </p>
              <p className="contactUs-detail">hello@wewriteit.co.uk</p>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex gap-3 align-items-center">
            <Phone />
            <div>
              <p className="mb-1 contactUs-bottom-text">
                <strong>Call:</strong>
              </p>
              <p className="contactUs-detail">+44 7911 123456</p>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex gap-3 align-items-center">
            <LocationIcon />
            <div>
              <p className="mb-1 contactUs-bottom-text">
                <strong>Address:</strong>
              </p>
              <p className="contactUs-detail">Lees Hill Nr, Walton, UK</p>
            </div>
          </div>
        </div>
      </div>
      <DownloadNow/>
      <Footer/>
    </div>
  );
};
export default ContactUs;
