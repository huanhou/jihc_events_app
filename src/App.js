import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import SignUp from "./components/SignUp";
import UpdateEvent from "./components/UpdateEvent";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const handleLogin = (id) => {
    setUserId(id);
    setIsLoggedIn(true);
    localStorage.setItem("userId", id);
  };

  const handleLogout = () => {
    setUserId(null);
    setIsLoggedIn(false);
    localStorage.removeItem("userId");
  };

  // Load the user's login state from localStorage
  useEffect(() => {
    const savedUserId = localStorage.getItem("userId");
    if (savedUserId) {
      setUserId(savedUserId);
      setIsLoggedIn(true);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile userId={userId} />} />
        <Route
          path="/sign-in"
          element={<SignIn onClose={handleCloseModal} />}
        />
        <Route
          path="/sign-up"
          element={<SignUp onClose={handleCloseModal} />}
        />
        <Route path="/update-event/:eventId" element={<UpdateEvent />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
