import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateEvent = () => {
  const { eventId } = useParams(); // Get the event ID from the URL
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the current event data using the event ID
    const fetchEvent = async () => {
      try {
        const response = await fetch(
          `https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/events/${eventId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch event data.");
        }

        const data = await response.json();
        setEventData(data);
      } catch (error) {
        console.error("Error fetching event data:", error);
        setError("Failed to load event data.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/events/${eventId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(eventData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update event.");
      }

      alert("Event updated successfully!");
      navigate("/profile"); // Redirect back to the profile page
    } catch (error) {
      console.error("Error updating event:", error);
      alert("Failed to update the event. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="update-event-page">
      <h1>Update Event</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            value={eventData.type}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            value={eventData.price}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Update Event</button>
      </form>
    </div>
  );
};

export default UpdateEvent;
