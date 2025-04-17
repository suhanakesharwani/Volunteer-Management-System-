// src/pages/RegisterPage.jsx
import React from "react";
import VolunteerForm from "../components/VolunteerForm";

const RegisterPage = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold">Volunteer Registration</h1>
      <VolunteerForm />
    </div>
  );
};

export default RegisterPage;
