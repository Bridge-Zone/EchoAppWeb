import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import leftMachine from "../images/leftMachine.png";
import "../css/HomePage.css";

import ResponsiveCards from "../components/ResponsiveCards";
import Footer from "../components/Footer";
import TestimonialSlider from "../components/TestimonialSlider";
import DownloadNow from "../components/DownloadNow";
import HowItWorks from "../components/HowItWorks";
import HowItWorksMobile from "../components/HowItWorksMobile";
import WhoWeAre from "../components/WhoWeAre";

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1400);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1400);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Header />
      <Banner />

     {  isMobile ? <HowItWorksMobile /> : <HowItWorks />}
    <WhoWeAre/>
      <ResponsiveCards/>
      <div className="container-fluid p-0 ">
        <div className="row p-0 m-0">
          <div className="col-md-6 p-0">
            <img width="100%" height="100%" src={leftMachine}></img>
          </div>
          <div className="col-md-6 text-div">
            <div className="text-div-img">
              <h1 className="fs-custom-sub">Emotive Headline For About Us</h1>
              <h5 className="img-sub-para">
                Lorem ipsum dolor sit amet consectetur
              </h5>
              <p className="img-text">
                Welcome to our service app! We're dedicated to revolutionizing
                the way you experience convenience. With a commitment to
                excellence, we strive to simplify your life by providing
                seamless solutions tailored to your needs.
              </p>
              <p className="img-text">
                {" "}
                Our team is passionate about innovation and driven by a desire
                to exceed your expectations. Whether it's streamlining tasks or
                enhancing your lifestyle, we're here to make it happen. Join us
                on this journey towards efficiency and empowerment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TestimonialSlider/>
     <DownloadNow/>
      <Footer/>
    </div>
  );
};
export default Homepage;
