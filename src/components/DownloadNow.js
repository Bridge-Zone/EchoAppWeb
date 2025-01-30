import React from "react";
import "../css/DownloadNow.css"; // Custom styles
import apple from "../images/apple.png";
import playstore from "../images/playstore.png";

const DownloadNow = () => {
    return (
        <div className="container-fluid p-0 download-div">
        <div className="container mt-5 mb-5 download-div-icons">
          <h1 className="download-heading">Download Now</h1>
          <div className="align-img">
            <img className="responsive-img" src={apple} alt="Apple Store" />
            <img className="responsive-img" src={playstore} alt="Play Store" />
          </div>
        </div>
      </div>
    )
}
    export default DownloadNow;