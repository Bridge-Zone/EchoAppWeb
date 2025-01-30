import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UploadDocumentsModal from "./UploadDocumentModal";
import "../css/DocumentList.css";
import { DeleteIcon, NotesCopy } from "./SvgGrabber";

const DocumentList = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const documents = [
    { name: "Medical Document PDF" },
    { name: "Medical Document PDF" },
    { name: "Medical Document PDF" },
    { name: "Medical Document PDF" },
    { name: "Medical Document PDF" },
    { name: "Medical Document PDF" },
  ];

  return (
    <>
      {/* Document List */}
      <div className="container my-4">
        <div className="row">
          <div className="col-md-8">
            <div className="list-group">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="list-group-item-documentList d-flex justify-content-between align-items-center  mb-4"
                >
                  <div className="d-flex align-items-center">
                    <NotesCopy />
                    <span className="ms-4">{doc.name}</span>
                  </div>
                  <button className="btn">
                    <DeleteIcon />
                  </button>
                </div>
              ))}
            </div>

            {/* Add Document Button */}
            <div className="text-center mt-4">
              <Button
                className="signIn-btn"
                variant="primary"
                size="lg"
                onClick={toggleModal}
              >
                Add Document
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={toggleModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Upload Documents</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UploadDocumentsModal />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={toggleModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DocumentList;
