import React, { useState } from "react";
import "../css/Profile.css"; // Add custom CSS for additional styling if needed
import Header from "../components/Header";
import InitialProfileDetails from "../components/InitialProfileDetails";
import Address from "../components/AddressManagement";
import ChangePassword from "../components/ChangePassword";
import Footer from "../components/Footer";
import DownloadNow from "../components/DownloadNow";
import AddressManagement from "../components/AddressManagement";
import AddressForm from "../components/AddressForm";
import DocumentList from "../components/DocumentList";
import SavedServices from "../components/SavedServices";
import AboutUs from "../components/AboutUs";
import DeleteOrDeactivate from "../components/DeleteOrDeactivate";
import AppointmentCard from "../components/AppointmentCard";
import BookingStatus from "../components/BookingStatus";


const Profile = () => {
  // State to manage the selected section
  const [selectedSection, setSelectedSection] = useState("My Account");
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [isAppointmentCard, setIsAppointmentCard] = useState(false);

  // Function to render the component based on the selected section
  const renderContent = () => {
    switch (selectedSection) {
      case "My Account":
        return <InitialProfileDetails />;
      case "Address":
        return isAddingAddress ? (
          <AddressForm />
        ) : (
          <AddressManagement setIsAddingAddress={setIsAddingAddress} />
        );
      case "Change Password":
        return <ChangePassword />;
        case "Medical Documents":
          return <DocumentList />;
          case "Saved Services":
            return <SavedServices />;
            case "Booking":
              return isAppointmentCard ? (
                <AppointmentCard />
              ) : (
                <BookingStatus setIsAppointmentCard={setIsAppointmentCard} />
              );
            case "Close Account":
              return <DeleteOrDeactivate />;
            case "About Us":
              return <AboutUs />;
      // Add more cases for other sections as needed
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <div className="container-fluid p-0 screen-div mb-5">
        <h1 className="screen-title">{selectedSection}</h1>
      </div>
      <div className="container py-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 col-md-4 mb-4  select-choice">
            <ul className="list-item">
              {[
                "My Account",
                "Address",
                "Change Password",
                "Medical Documents",
                "Saved Services",
                "Booking",
                "Close Account",
                "About Us",
                "Logout",
              ].map((item) => (
                <li
                  key={item}
                  className={`list-group-item ${
                    selectedSection === item ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedSection(item);
                    setIsAddingAddress(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="col-lg-9 col-md-8  ps-lg-5">{renderContent()}</div>
        </div>
      </div>
      <DownloadNow/>
      <Footer/>
    </div>
  );
};

export default Profile;
