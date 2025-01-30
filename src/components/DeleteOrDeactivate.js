import React, { useState } from "react";
import "../css/DeleteOrDeactivate.css"

const DeleteOrDeactivate = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="container my-5">
      <div className=" mb-4">
        <h3 className="delete-title">Delete Or Deactivate?</h3>
        <p className="delete-para">
          If you want to leave temporarily deactivate your account. If you
          choose to delete your account instead, you won’t be able to recover
          it after 30 days.
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mb-3">
          <div
            className={`p-3 rounded text-white ${
              selectedOption === "deactivate"
                ? "deactivate-account-div-selected"
                : "deactivate-account-div"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedOption("deactivate")}
          >
            <h5 className="deactivate-heading">Deactivate Account</h5>
            <p className="mb-0 deactivate-detail">
              No one can see your account, including all content that is stored
              in it. Reactivate your account and recover all content anytime.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <div
            className={`p-3 rounded ${
              selectedOption === "delete"
             ? "delete-account-div-selected"
                : "delete-account-div"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedOption("delete")}
          >
            <h5 className="delete-heading">Delete Account Permanently</h5>
            <p className="mb-0 delete detail">
              No one can see your account, including all content that is stored
              in it. Reactivate your account and recover all content anytime.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          className="delete-screen-btn mt-4"
          disabled={!selectedOption}
        >
          CONFIRM
        </button>
      </div>
    </div>
  );
};

export default DeleteOrDeactivate;
