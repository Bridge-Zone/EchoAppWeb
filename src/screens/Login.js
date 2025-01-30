import React, { useState } from "react";
import Header from "../components/Header";
import doctor from "../images/doctor.png";
import "../css/Login.css";
import DownloadNow from "../components/DownloadNow";
import Footer from "../components/Footer";
import { AppleIcon, GoogleIcon, LoginIcon, PasswordIcon } from "../components/SvgGrabber";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div>
        <Header/>
      <div className="container-fluid p-0 d-flex">
        <div className="d-none d-lg-block col-md-5">
          <img className="img-fluid full-height" src={doctor} alt="Doctor" />
        </div>
        <div className="d-none d-lg-block col-lg-1"></div>
        <div className="col-12 col-lg-5 login-main-div p-2">
            <div className="" style={{ width: "100%" }}>
              <h2 className=" mb-3 login-heading">Login</h2>
              <p className="login-subtext">
                Sign in your account to proceed
              </p>
              <form>
                {/* Username */}
                <div className="form-group mb-3 login-div">
                  <div className="login-icon">
                    <LoginIcon />
                  </div>
                  <input
                    type="text"
                    className="form-control login-input"
                    placeholder="Username"
                    required
                  />
                </div>
                {/* Password */}
                <div className="form-group mb-3 login-div">
                <div className="login-icon">
                    <PasswordIcon />
                  </div>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="form-control login-input"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-link position-absolute"
                    style={{
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                    }}
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <FaRegEye size={22} color=" rgba(102, 102, 102, 1)" />
                    ) : (
                      <FaRegEyeSlash size={22} color="rgba(102, 102, 102, 1)" />
                    )}
                  </button>
                </div>
                {/* Submit */}
                <div className="form-group">
                  <button className="signIn-btn" type="submit">
                    SIGN IN
                  </button>
                </div>
              </form>
              <div className="border-login-div">
                <div className="border-line"></div>
                <div className="or-text">OR</div>
                <div className="border-line"></div>
              </div>
           
              {/* Social Login */}
              <div className="d-flex justify-content-center gap-3 login-icon-div">
                <button className="apple-div"><AppleIcon/></button>
                <button className="apple-div"><GoogleIcon/></button>
              </div>
              <p className="text-center mt-5 signUp-text">
                Don’t have an account? <a className="signUp-navigate" href="/signup">Signup</a>
              </p>
            </div>
      
        </div>
      </div>
      <DownloadNow />
      <Footer />
    </div>
  );
};
export default Login;
