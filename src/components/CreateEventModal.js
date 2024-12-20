import React, { useState } from "react";

const CreateEventModal = ({ onClose, onEventCreated }) => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    date: "",
    location: "",
    price: "",
    deadline: "",
    audience: "Student",
    description: "",
    image: "",
    maxAttendees: 50,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("User ID is missing. Please log in again.");
      return;
    }

    const eventDataWithOrganizer = {
      ...formData, // Corrected from eventData to formData
      organizerId: parseInt(userId), // Save userId as the organizer
    };

    try {
      const response = await fetch(
        "https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/events",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(eventDataWithOrganizer),
        }
      );

      if (response.ok) {
        const newEvent = await response.json();
        alert("Event created successfully!");
        onEventCreated(newEvent); // Send the created event back to Profile.js
        onClose(); // Close the modal
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to create the event.");
      }
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal create-event-modal">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal-title">Create New Event</h2>
        <div className="modal-content">
          <form onSubmit={handleFormSubmit} className="create-event-form">
            <div className="form-section">
              <div className="form-column">
                <div className="input-group">
                  <label htmlFor="title">Event Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="type">Event Type</label>
                  <input
                    type="text"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-column">
                <div className="input-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="deadline">Registration Deadline</label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="audience">Audience</label>
                  <select
                    id="audience"
                    name="audience"
                    value={formData.audience}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="All">All</option>
                  </select>
                </div>
                <div className="input-group">
                  <label htmlFor="maxAttendees">Max Attendees</label>
                  <input
                    type="number"
                    id="maxAttendees"
                    name="maxAttendees"
                    value={formData.maxAttendees}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-buttons">
              <button type="button" className="cancel-btn" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEventModal;
