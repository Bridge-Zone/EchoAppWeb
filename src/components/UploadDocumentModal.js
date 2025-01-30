import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const UploadDocumentsModal = () => {
  const files = [
    { name: "Ultrasound Report PDF", progress: 47 },
    { name: "Medical Report PDF", progress: 35 },
    { name: "Ultrasound Report PDF", progress: 56 },
    { name: "Medical Report PDF", progress: 52 },
  ];

  return (
    <div className="upload-documents-container d-flex w-100 upload-documents-modal custom-modal-width">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="upload-documents-box-container mb-3 text-center">
              <div className="upload-documents-box text-center p-4">
                <i className="bi bi-upload upload-documents-icon"></i>
                <p className="upload-documents-text mb-0">Choose File</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <ul className="upload-documents-list list-group">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="upload-documents-list-item list-group-item d-flex justify-content-between align-items-center"
                >
                  <span className="upload-documents-file-name">
                    {file.name}
                  </span>
                  <ProgressBar
                    now={file.progress}
                    label={`${file.progress}%`}
                    className="upload-documents-progress w-50 me-2"
                  />
                  <button className="upload-documents-remove-btn btn btn-sm btn-danger">
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocumentsModal;
