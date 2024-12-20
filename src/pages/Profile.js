import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateEventModal from "../components/CreateEventModal";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [userEvents, setUserEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [eventToUpdate, setEventToUpdate] = useState(null);
  const navigate = useNavigate();

  // Get userId from localStorage
  const userId = localStorage.getItem("userId");

  // Redirect to home if userId is not available
  useEffect(() => {
    if (!userId) {
      console.warn("UserId is null, redirecting to home page...");
      navigate("/");
    }
  }, [userId, navigate]);

  // Fetch user data and events
  useEffect(() => {
    if (!userId) return;

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/users/${userId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data.");
        }

        const userData = await response.json();
        setUserData(userData);

        const allEventsResponse = await fetch(
          `https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/events`
        );
        const allEventsData = await allEventsResponse.json();
        const userOrganizedEvents = allEventsData.filter(
          (event) => event.organizerId === parseInt(userId)
        );
        setUserEvents(userOrganizedEvents);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  // Open/close modals
  const handleOpenCreateModal = () => setIsModalOpen(true);
  const handleCloseCreateModal = () => setIsModalOpen(false);
  const handleOpenUpdateModal = (event) => {
    setEventToUpdate(event);
    setIsUpdateModalOpen(true);
  };
  const handleCloseUpdateModal = () => setIsUpdateModalOpen(false);

  // Handle new event creation
  const handleEventCreated = (newEvent) => {
    if (newEvent) {
      setUserEvents((prevEvents) => [...prevEvents, newEvent]); // Add the new event to the existing list
    } else {
      console.warn("No event data returned from CreateEventModal.");
    }
  };

  // Handle event update
  const handleEventUpdated = (updatedEvent) => {
    if (updatedEvent) {
      setUserEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === updatedEvent.id ? updatedEvent : event
        )
      );
    }
  };

  // Handle event deletion
  const handleDeleteEvent = async (eventId) => {
    try {
      const response = await fetch(
        `https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/events/${eventId}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        alert("Event deleted successfully!");
        setUserEvents((prev) => prev.filter((event) => event.id !== eventId));
      } else {
        alert("Failed to delete event.");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("An error occurred while trying to delete the event.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="profile-page">
      <h1>Welcome, {userData.name}!</h1>

      {userData.userType === "Teacher" && (
        <button onClick={handleOpenCreateModal}>Create Event</button>
      )}

      {isModalOpen && (
        <CreateEventModal
          onClose={handleCloseCreateModal}
          onEventCreated={handleEventCreated}
        />
      )}

      {isUpdateModalOpen && (
        <CreateEventModal
          onClose={handleCloseUpdateModal}
          onEventCreated={handleEventUpdated}
          existingEvent={eventToUpdate}
        />
      )}

      <h2>Your Created Events</h2>
      {userEvents.length > 0 ? (
        userEvents.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p>Location: {event.location}</p>
            <p>Date: {event.date}</p>
            <button onClick={() => handleOpenUpdateModal(event)}>Update</button>
            <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>You have not created any events yet.</p>
      )}
    </div>
  );
};

export default Profile;
