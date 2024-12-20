import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useState({
    title: "",
    type: "",
    location: "",
    date: "",
  });
  const eventTypes = [
    "Workshop",
    "Seminar",
    "Training",
    "Exhibition",
    "Fair",
    "Bootcamp",
  ];
  const locations = [
    "Hybrid",
    "Online",
    "Campus Auditorium",
    "City Hall",
    "Innovation Center",
    "Main Auditorium",
    "Wellness Center",
    "Tech Park",
  ];

  // Fetch all events on page load
  useEffect(() => {
    fetch(
      "https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/events"
    )
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  // Handle search functionality
  const handleSearch = () => {
    const filteredEvents = events.filter((event) => {
      const matchesTitle =
        searchParams.title === "" ||
        event.title.toLowerCase().includes(searchParams.title.toLowerCase());
      const matchesType =
        searchParams.type === "" ||
        event.type.toLowerCase().includes(searchParams.type.toLowerCase());
      const matchesLocation =
        searchParams.location === "" ||
        event.location
          .toLowerCase()
          .includes(searchParams.location.toLowerCase());
      const matchesDate =
        searchParams.date === "" || event.date === searchParams.date;

      return matchesTitle && matchesType && matchesLocation && matchesDate;
    });

    setEvents(filteredEvents);
  };
  const [registeredEvents, setRegisteredEvents] = useState(() => {
    const storedEvents = localStorage.getItem("registeredEvents");
    return storedEvents ? JSON.parse(storedEvents) : [];
  });
  useEffect(() => {
    fetch(
      "https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/events"
    )
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  // Function to handle event registration
  const handleRegister = async (eventId) => {
    try {
      const userId = 1; // Placeholder: Replace with actual logged-in user ID
      const response = await fetch(
        "https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/eventregistrations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ eventId, userId }),
        }
      );

      if (response.ok) {
        setRegisteredEvents((prev) => [...prev, eventId]); // Update the registered events list
        alert("You have successfully registered for the event!");
      } else {
        const errorData = await response.json();
        alert(errorData.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error registering for the event:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-title">Welcome to JIHC Events</h1>
        <p className="hero-subtitle">Discover, learn, and connect.</p>
      </div>

      {/* Search Section */}
      <div className="search-section">
        {/* Event Title */}
        <input
          type="text"
          name="title"
          value={searchParams.title}
          onChange={handleInputChange}
          placeholder="Enter event name"
          className="search-input"
        />

        {/* Event Type Dropdown */}
        <select
          name="type"
          value={searchParams.type}
          onChange={handleInputChange}
          className="filter-dropdown"
        >
          <option value="">Select Event Type</option>
          {eventTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        {/* Location Dropdown */}
        <select
          name="location"
          value={searchParams.location}
          onChange={handleInputChange}
          className="filter-dropdown"
        >
          <option value="">Select Location</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>

        {/* Event Date */}
        <input
          type="date"
          name="date"
          value={searchParams.date}
          onChange={handleInputChange}
          className="search-input"
        />

        {/* Search Button */}
        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>

      {/* Events Section */}
      <div className="events-container">
        {events.map((event) => {
          const isRegistered = registeredEvents.includes(event.id);
          const progressPercent = (event.attendees / event.maxAttendees) * 100;

          return (
            <div key={event.id} className="event-card">
              {/* Image with Badge */}
              <img
                src={event.image}
                alt={event.title}
                className="event-image"
              />
              <div className="image-badge">{event.price}</div>

              {/* Event Details */}
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>

                {/* Inline Date and Location */}
                <div className="event-inline">
                  <div className="event-date">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    {event.date}
                  </div>
                  <div className="event-location">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    {event.location}
                  </div>
                </div>

                <div className="event-audience">{event.audience}</div>

                {/* Progress Bar */}
                <div className="progress-bar-container">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${progressPercent}%`,
                    }}
                  ></div>
                </div>
                <p className="progress-info">
                  {event.attendees}/{event.maxAttendees} Attendees
                </p>

                {/* Register Button */}
                {isRegistered ? (
                  <button className="register-button registered" disabled>
                    Registered
                  </button>
                ) : (
                  <button
                    className="register-button"
                    onClick={() => handleRegister(event.id)}
                    disabled={event.attendees >= event.maxAttendees}
                  >
                    {event.attendees >= event.maxAttendees
                      ? "Event Full"
                      : "Register Now"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
