// src/ProfileCard.jsx
// We need to import the 'useState' Hook from React
import { useState } from 'react'; 

function ProfileCard({ name, title, imageURL }) {
  
  // 1. Initialize State for the Online/Offline status
  // 'isOnline' is the current value (e.g., true/false)
  // 'setIsOnline' is the function we use to change the value
  const [isOnline, setIsOnline] = useState(false); // Start the state as 'false' (Offline)

  // Define a function to handle the button click
  const handleStatusToggle = () => {
    // 2. Use the setter function (setIsOnline) to flip the current state
    setIsOnline(!isOnline); 
  };
  
  // Define content based on the current state value
  const statusText = isOnline ? 'Online' : 'Offline';
  const statusClass = isOnline ? 'status-online' : 'status-offline';

  const defaultImage = "https://via.placeholder.com/150";

  return (
    <div className="card">
      <img src={imageURL || defaultImage} alt={`${name || defaultName} Profile Avatar`} className="avatar"/>
      <h2>{name || defaultName}</h2> 
      <p>{title || "No Title Provided"}</p>
      
      {/* 3. Display the status based on the 'isOnline' state */}
      <p className={statusClass}>Status: **{statusText}**</p>
      <button className="btn primary" onClick={handleStatusToggle}>Toggle Status</button>
      {/* <button className="btn secondary">Contact</button> */}
    </div>
  );
}

export default ProfileCard;