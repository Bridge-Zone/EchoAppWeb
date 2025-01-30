import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home, HomeIcon, LocationIconBlue, OtherIcon } from "./SvgGrabber";
import "../css/AddressManagement.css"

const AddressManagement = ({ setIsAddingAddress }) => {
  const addresses = [
    { type: "Home", address: "Washington, D.C Street 32 SA Block" },
    { type: "Other", address: "Washington, D.C Street 32 SA Block" },
    { type: "Home", address: "Washington, D.C Street 32 SA Block" },
    { type: "Other", address: "Washington, D.C Street 32 SA Block" },
  ];

  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col-md-8">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 style={{cursor:"pointer"}} onClick={() => setIsAddingAddress(true)} className="mb-0">+ Add Address</h5>
        <button className="btn btn-link p-0">
          <LocationIconBlue />
        </button>
      </div>
      <div className="">
        {addresses.map((item, index) => (
          <div
            key={index}
            className="list-group-item-address d-flex justify-content-between align-items-center border-0 border-bottom"
          >
            <div className="d-flex align-items-center">
              {
                <div className="me-3">
                  {item.type === "Home" ? <HomeIcon /> : <OtherIcon />}
                </div>
              }
              <div>
                <h6 className="mb-1 item-name">{item.type}</h6>
                <p className="mb-0 item-address">{item.address}</p>
              </div>
            </div>
            <button className="btn btn-link p-0">
              <i className="bi bi-three-dots-vertical"></i>
            </button>
          </div>
        ))}
      </div>
      <button className="btn btn-primary btn-block w-100 mt-4 save-changes-btn">
        SAVE CHANGES
      </button>
      </div>
    </div>
    </div>
  );
};

export default AddressManagement;
