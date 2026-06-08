// src/App.js
import './App.css'
import React, { useState, useEffect } from "react";

function App() {
  // 1. State for user's name
  const [userName, setUserName] = useState("Guest");

  // 2. State for fetched user data
  const [userData, setUserData] = useState(null);

  // 3. Update document title whenever userName changes
  useEffect(() => {
    document.title = `Welcome, ${userName}`;
  }, [userName]);

  // 4. Fetch data once on component mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      })
      .catch(error => console.error("Error fetching user:", error));
  }, []);

  // 5. Set up window click listener & cleanup on unmount
  useEffect(() => {
    const handleWindowClick = () => {
      console.log("Window was clicked!");
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <div style={{ margin: "2rem" }}>
      <h1>Hello, {userName}!</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {userData && (
        <div style={{ marginTop: "1rem" }}>
          <h2>User Info</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;