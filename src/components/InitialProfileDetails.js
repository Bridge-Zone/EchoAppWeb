import React, { useState } from "react";
import selectProfile from "../images/selectProfile.jpg";
import "../css/InitialProfileDetail.css";
import { CalenderIcon, Camera, Gender, GoodIcon, LoginIcon, Mail } from "./SvgGrabber";
const InitialProfileDetails = () => {
  const [image, setImage] = useState("");
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // Set the uploaded image preview
      };
      reader.readAsDataURL(file);
    }
  };
  const triggerFileInput = () => {
    document.getElementById("profile-image-input").click(); // Trigger the file input click
  };
  return (
    <div className="pl-5">
      <div className="text-center mb-4">
        <div
          className="profile-image-container position-relative"
          onClick={triggerFileInput}
          style={{ cursor: "pointer" }}
        >
          <img
            src={image ? image : selectProfile}
            width="100%"
            height="100%" // Display the selected image
            alt="Profile"
            className="rounded-circle img-thumbnail selectedImage"
          />
          <div className="upload-icon position-absolute">
            <Camera /> {/* Bootstrap icon */}
          </div>
          <input
            type="file"
            id="profile-image-input"
            style={{ display: "none" }} // Hidden input
            accept="image/*" // Allow only image files
            onChange={handleImageChange}
          />
        </div>
      </div>

      {/* Form */}
      <form>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="form-group mb-3 initialProfile-div">
              <div className="initialProfile-icon">
                <LoginIcon />
              </div>
              <input
                type="text"
                className="form-control initialProfile-input"
                placeholder="Username"
                required
              />
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-group mb-3 initialProfile-div">
              <div className="initialProfile-icon">
                <CalenderIcon />
              </div>
              <input
                type="date"
                id="dob"
                className="form-control initialProfile-input"
              />
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-group mb-3 initialProfile-div">
              <div className="initialProfile-icon">
                <Mail />
              </div>
              <input
                type="text"
                className="form-control initialProfile-input"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="col-md-6 mb-3">
          <div className="mb-3 initialProfile-div">
              <div className="initialProfile-icon">
                <Gender />
              </div>
              <select id="gender" className="form-select initialProfile-input">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="input-group">
              <span className="input-group-text">+1</span>
              <input
                type="text"
                id="phone"
                className="form-control initialProfile-input"
                placeholder="123456789"
              />
            </div>
          </div>
        </div>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
        
          <button type="submit" className="btn btn-primary px-4 save-changes-btn">
            Save Changes
          </button>
      
        </div>
      </div>
      </form>
    </div>
  );
};
export default InitialProfileDetails;
