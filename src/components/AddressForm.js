import React from 'react';
import  "../css/AddressForm.css"
const AddressForm = () => {
  return (
    <div className="container mt-4">
   <div className='row'>
    <div className='col-md-8'>
    <form className="p-3 ">
        <div className="row mb-3">
          <div className="col-6">
            <input
              type="text"
              className="form-control addressForm-input"
              placeholder="Postal Code"
            />
          </div>
          <div className="col-6">
            <button type="button" className="location-btn">
              Use My Location
            </button>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6">
            <input
              type="text"
              className="form-control addressForm-input"
              placeholder="Province"
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control addressForm-input"
              placeholder="City"
            />
          </div>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control addressForm-input"
            placeholder="Address"
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control addressForm-input"
            placeholder="Label (e.g. Home, Office)"
          />
        </div>

        <button type="submit" className="addressForm-save-btn">
          Continue
        </button>
      </form>
    </div>
   </div>
    </div>
  );
};

export default AddressForm;
