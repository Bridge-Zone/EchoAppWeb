import React from 'react';
import logo from "../images/footerLogo.png";
import '../css/Footer.css'; // Add your styles here
import { InstagramIcon, SendIcon, Twitter, Web, Youtube } from './SvgGrabber';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 ">
      <div className="container ">
        <div className="row">
          {/* Logo Section */}
          <div className="col-md-4 col-sm-12 text-center text-md-start mb-3">
          <img src={logo}></img>
            <p className='footer-text mt-4 mb-1'>Copyright © 2020 Nexcent ltd.</p>
            <p className='footer-text'>All rights reserved</p>
            <div className='social-links mt-4'>
                <div className='grey-circle'>
                    <InstagramIcon/>
                </div>
                <div className='grey-circle'>
                    <Web/>
                </div>
                <div className='grey-circle'>
                    <Twitter/>
                </div>
                <div className='grey-circle'>
                    <Youtube/>
                </div>
            </div>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="#" className="text-white me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-md-2 col-sm-6 text-center text-md-start mb-3">
            <h5 className='footer-heading'>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Services</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
              <li><a href="#" className="text-white">Pricing</a></li>
              <li><a href="#" className="text-white">Testimonials</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-md-2 col-sm-6 text-center text-md-start mb-3">
            <h5 className='footer-heading'>Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Help Center</a></li>
              <li><a href="#" className="text-white">Terms of Service</a></li>
              <li><a href="#" className="text-white">Legal</a></li>
              <li><a href="#" className="text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-white">Status</a></li>
            </ul>
          </div>

          {/* Stay Updated Section */}
          <div className="col-md-4 col-sm-12 text-center text-md-start">
            <h5 className='footer-heading'>Stay up to date</h5>
            <form className="d-flex input-mobile-div">
             <div className='input-div'>
             <input
                type="email"
                className="form-control footer-input me-2"
                placeholder="Your email address"
                required
              />
             <div className='sendIcon'>
             <SendIcon/>
             </div>
             </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
