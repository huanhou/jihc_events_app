import React, { useState } from "react";

const SignUpModal = ({ onClose, setIsLoggedIn, setUserName }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userType: "Student",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setIsLoggedIn(true);
        setUserName(data.name);
        localStorage.setItem("userId", data.id);
        onClose();
      } else {
        alert(data.message || "Sign-up failed. Please try again.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
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
          <h2 className="modal-title">Create an Account</h2>
          <p className="modal-subtitle">
            Join our community of event-goers and explore amazing events!
          </p>

          <form onSubmit={handleFormSubmit} className="modal-form">
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

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

            <div className="input-group">
              <label htmlFor="userType">User Type</label>
              <select
                name="userType"
                id="userType"
                value={formData.userType}
                onChange={handleInputChange}
                required
              >
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
