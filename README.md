# Volunteer Management System

A full-stack Volunteer Management System for nonprofits, built using **React**, **Tailwind CSS**, **Node.js**, and **MongoDB**. It streamlines volunteer registrations, event scheduling, and admin coordination with a clean, responsive UI and real-time data handling.

---

## 🚀 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Tools**: Git, VS Code, Postman

---

## 📁 Project Structure

volunteer-management-system/ ├── volunteer-frontend/ │ ├── public/ │ ├── src/ │ │ ├── components/ │ │ ├── pages/ │ │ ├── App.jsx │ │ ├── index.css │ │ └── main.jsx ├── volunteer-backend/ │ ├── models/ │ ├── routes/ │ ├── controllers/ │ ├── server.js │ └── config/ ├── README.md └── .gitignore


---

## ✨ Features

- 📝 Volunteer registration with input validation
- 📅 Admin dashboard for managing events and volunteers
- 📱 Responsive UI using Tailwind CSS
- 🔗 RESTful API integration between frontend and backend
- 🔐 MongoDB for secure, real-time data storage

---

## 🔧 Setup Instructions


1. Clone the Repository
    bash

    git clone https://github.com/yourusername/volunteer-management-system.git
    cd volunteer-management-system
2. Setup Frontend
    bash

    cd volunteer-frontend
    npm install
    npm run dev
3. Setup Backend
    bash

    cd volunteer-backend
    npm install
    node server.js

    ✅ Ensure MongoDB is running locally or set your connection string in a .env file:
    MONGO_URI=mongodb://localhost:27017/volunteerDB
    PORT=5000