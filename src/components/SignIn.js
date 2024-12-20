import React, { useState } from "react";

const SignInModal = ({ onClose, setIsLoggedIn, setUserName }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/users"
      );
      const users = await response.json();

      // Find user matching email and password
      const user = users.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (user) {
        console.log("User found!", user);
        setIsLoggedIn(true);
        setUserName(user.name);
        localStorage.setItem("userId", user.id);
        onClose();
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="modal-content">
          <h2 className="modal-title">Welcome Back!</h2>
          <p className="modal-subtitle">
            Sign in to discover and register for JIHC Events.
          </p>

          <form onSubmit={handleFormSubmit} className="modal-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
