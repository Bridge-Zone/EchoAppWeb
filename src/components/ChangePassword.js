import React, { useState } from "react";
import { GoodIcon, LoginIcon, PasswordIcon } from "./SvgGrabber";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const ChangePassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <form>
              {/* Username */}
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
              <div className="form-group mb-3 login-div">
                <div className="login-icon">
                  <PasswordIcon />
                </div>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="form-control login-input"
                  placeholder="New Password"
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
              {/* Password */}
              <div className="form-group mb-3 login-div">
                <div className="login-icon">
                  <PasswordIcon />
                </div>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="form-control login-input"
                  placeholder="Confirm New Password"
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
                  Continue
                </button>
              </div>
            </form>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChangePassword;
