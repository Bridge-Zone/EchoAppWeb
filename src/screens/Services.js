import React from "react";
import FilterSection from "../components/FilterSection";
import Header from "../components/Header";
import "../css/Services.css";
import ServiceCard from "../components/ServiceCard";
import HowItWorks from "../components/HowItWorks";
import DownloadNow from "../components/DownloadNow";
import Footer from "../components/Footer";
import { SearchIcon } from "../components/SvgGrabber";
const Services = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid p-0 screen-div mb-5">
        <h1 className="screen-title">Abdominal</h1>
      </div>
      <div className="container">
        <div className="row">
        
          <div className="col-md-3">
            <FilterSection />
          </div>
          <div className="col-md-9">
          <div className="search-div">
            <div className="search-adjustment">
              <div className="search-icon">
                <SearchIcon />
              </div>
              <input placeholder="Search" className="search-input"></input>
            </div>
          </div>
            <ServiceCard />
          </div>
        </div>
        <HowItWorks />
      </div>
      <DownloadNow />
      <Footer />
    </div>
  );
};
export default Services;
