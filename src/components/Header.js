import React from 'react';
import logo from "../images/logo.png";
import '../css/Header.css';
import { BlueArrow, WhiteArrow } from './SvgGrabber';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const Header = () => {
  const navigate = useNavigate(); // Get navigate function

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };
  const handleSignUpClick = () => {
    navigate('/signUp'); // Navigate to the login page
  };
  return (
    <div className='header'>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container d-flex align-items-center">
          {/* Logo on the left */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
          </Link>

          {/* Hamburger Button for Mobile */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Centered Navigation Links */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactUs">Contact Us</Link>
              </li>
              <div className="d-flex d-sm-flex align-items-center ms-auto d-lg-none gap-2 mt-4">
                <div onClick={handleLoginClick} className='login-btn-mobile'>
                  <p className=" me-4 m-0" to="/logins">LOG IN</p>
                  <div className='white-arrow-mobile'>
                    <WhiteArrow/>
                  </div>
                </div>
                <div onClick={handleSignUpClick} className='login-btn-mobile'>
                  <p className=" me-4 m-0" to="/signUp">SIGN UP</p>
                  <div className='white-arrow-mobile'>
                    <BlueArrow/>
                  </div>
                </div>
              </div>
            </ul>
          </div>

          {/* Login and Signup on the right */}
          <div className="d-lg-flex  d-none gap-3">
            <div onClick={handleLoginClick} className='login-btn'>
              <p className=" me-4 m-0" to="/login">LOG IN</p>
              <div className='white-arrow'>
                <WhiteArrow/>
              </div>
            </div>
            <div onClick={handleSignUpClick} className='login-btn'>
              <p className=" me-4 m-0" to="/signUp">SIGN UP</p>
              <div className='white-arrow'>
                <BlueArrow/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
