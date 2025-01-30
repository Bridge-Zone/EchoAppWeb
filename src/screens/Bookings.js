import React, { useState } from "react";
import Header from "../components/Header";
import CalendarComponent from "../components/CalenderComponent";
import "../css/Bookings.css";
import ServiceSlider from "../components/ServiceSlider";
import { PaymentMethod } from "../components/SvgGrabber";
import DownloadNow from "../components/DownloadNow";
import Footer from "../components/Footer";
const Bookings = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  return (
    <div>
      <Header />
      <div className="container-fluid p-0 screen-div mb-5">
        <h1 className="screen-title">Check-Out</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="border-div">
              <CalendarComponent />
            </div>
           <div className="mt-2">
           <label htmlFor="email" className="form-label booking-heading">
              Address
            </label>
            <input
              type="text"
              className="form-control booking-input"
              placeholder="Address"
            />
           </div>
          </div>
          <div className="col-md-1 col-"></div>
          <div className="col-md-5">
            <h5 className="booking-main-heading">Payment Details</h5>
            <form>
              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label booking-heading">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control booking-input"
                  id="email"
                  placeholder="Email"
                />
              </div>

              {/* Payment Method Selection */}
              <div className="mb-3">
                <label className="form-label booking-heading">
                  Payment Method
                </label>
                <div
                  className="payment-div gap-3"
                  role="group"
                  aria-label="Payment method"
                >
                  <div
                    className={`payment-btn ${
                      paymentMethod === "card" ? "payment-btn-active" : ""
                    }`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    <div className="payment-icon">
                      <PaymentMethod />
                    </div>
                    Debit/Credit Card
                  </div>
                  <div
                    className={`payment-btn ${
                      paymentMethod === "virtual" ? "payment-btn-active" : ""
                    }`}
                    onClick={() => setPaymentMethod("virtual")}
                  >
                    <div className="payment-icon">
                      <PaymentMethod />
                    </div>
                    Virtual Account
                  </div>
                </div>
              </div>

              {/* Card Details (only shown for card payment method) */}
              {paymentMethod === "card" && (
                <div className="mb-3">
                  <label className="form-label booking-heading">
                    Card Details
                  </label>
                  <div className="row g-3">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control booking-input"
                        placeholder="Card Number"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control booking-input"
                        placeholder="Cardholder Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control booking-input"
                        placeholder="Expiry Date"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control booking-input"
                        placeholder="CVC"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Summary */}
              <div className="mt-4">
                <h5 className="payment-encrypted">
                  Payment are secure and encrypted
                </h5>
                <table className="custom-table">
                  <tbody>
                    <tr>
                      <td>Amount</td>
                      <td className="text-end">$0,000</td>
                    </tr>
                    <tr>
                      <td>Tax</td>
                      <td className="text-end">$0,000</td>
                    </tr>
                    <tr>
                      <td>App charges</td>
                      <td className="text-end">$0,000</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <th className="text-end">$0,000</th>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pay Now Button */}
              <div className="d-grid">
                <button type="button" className="paynow-btn">
                  PAY NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ServiceSlider />
      <DownloadNow/>
      <Footer/>
    </div>
  );
};
export default Bookings;
