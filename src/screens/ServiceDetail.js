import React from "react";
import "../css/ServiceDetail.css";
import Header from "../components/Header";
import patient1 from "../images/patient1.png";
import patient2 from "../images/patient2.png";
import {
  Amex,
  Certificate,
  Coin,
  Files,
  Lock,
  Master,
  Star,
  Visa,
  WhiteTick,
  YellowTick,
} from "../components/SvgGrabber";
import QuestionSection from "../components/QuestionSection";
import UltrasoundService from "../components/UltrasoundServices";
import TestimonialSlider from "../components/TestimonialSlider";
import FAQSection from "../components/FAQSection";
import DownloadNow from "../components/DownloadNow";
import Footer from "../components/Footer";
const ServiceDetail = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-6">
            <img className="patient1" width="100%" src={patient1}></img>
            <div className="row mt-3">
              <div className="col-6">
                <img className="patient1" width="100%" src={patient2}></img>
              </div>
              <div className="col-6">
                <img className="patient1" width="100%" src={patient2}></img>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column">
           <div>
           <span className="star-rating gap-1">
              <Star /> <Star /> <Star /> <Star /> <Star />
            </span>
            <span className="ms-2 star-count">(16)</span>
           </div>
            <h1 className="serviceDetail-heading">Obstetric Ultrasound</h1>
            <p className="serviceDetail-para">
              Long-term success is ensured by the implant, Many benefits and
              solutions are available for a variety of bone problems.
            </p>
            <ul className="list-unstyled serviceDetail-AllList">
              <li className="serviceDetail-list">
                <YellowTick /> Confirm pregnancy and estimate gestational age.
              </li>
              <li className="serviceDetail-list">
                <YellowTick /> Monitor your baby’s development and detect
                abnormalities
              </li>
              <li className="serviceDetail-list">
                <YellowTick /> Check fluid levels for a safe pregnancy
              </li>
              <li className="serviceDetail-list">
                <YellowTick /> Evaluate blood flow and fetal health.
              </li>
              <li className="serviceDetail-list">
                <YellowTick /> Ensure your baby’s growth is on track.
              </li>
            </ul>
            <div className="d-flex gap-2">
              <span className="serviceDetail-price">Price:</span>
              <span className="serviceDetail-amount">$70</span>
            </div>
            <div className="row mt-3">
              <div className="col-md-7">
                <btn className="serviceDetail-btn">Book Now</btn>
              </div>
              <div className="col-md-5 Incenter">
               <div className="d-flex">
               <Lock />
               <span className="safeSecure">Safe & Secure Checkout</span>
               </div>
                <div className="d-flex gap-3 mt-3">
                  <Amex />
                  <Master />
                  <Visa />
                </div>
              </div>
            </div>
           <div className="container-fluid">
           <div className="row mt-4">
              <div className="blue-background">
              <div className="col-md-3 d-flex gap-2 align-items-center">
                  <Files />
                  <p className="receive-result">Receive your result (on day)</p>
                </div>
                <div className="col-md-3 d-flex gap-2 align-items-center">
                  <Coin />
                  <p className="receive-result">Best Price Guarantee</p>
                </div>
                <div className="col-md-3 d-flex gap-2 align-items-center">
                  <Certificate />
                  <p className="receive-result">Certificate of Authenticity</p>
                </div>
              </div>
            </div>
           </div>
            <QuestionSection/>
          </div>
        </div>
      </div>
      <UltrasoundService/>
      <TestimonialSlider/>
      <FAQSection/>
      <DownloadNow/>
      <Footer/>
    </div>
  );
};
export default ServiceDetail;
