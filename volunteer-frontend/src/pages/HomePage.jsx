// src/pages/HomePage.jsx
import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto text-center mt-10">
        <h2 className="text-4xl font-bold">Welcome to the Volunteer System</h2>
        <p className="mt-4">Manage your volunteer events and registrations</p>
      </div>
    </div>
  );
};

export default HomePage;
