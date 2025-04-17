// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Volunteer System</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/register" className="hover:underline">Register</a></li>
          <li><a href="/login" className="hover:underline">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
