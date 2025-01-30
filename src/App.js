import logo from "./logo.svg";
import "./App.css";
import Homepage from "./screens/HomePage";
import ServiceDetail from "./screens/ServiceDetail";
import Services from "./screens/Services";
import Bookings from "./screens/Bookings";
import ContactUs from "./screens/ContactUs";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Profile from "./screens/Profile";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/serviceDetail" element={<ServiceDetail />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
