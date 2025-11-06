// src/useUsers.js
import { useState, useEffect } from 'react';

// This is the mock data that the hook will "fetch"
// const mockUserData = [
//   { id: 1, name: "Joel Navarro", title: "Senior Software Engineer", imageURL: "https://media.licdn.com/dms/image/v2/D4D03AQGEXSL5SvT2yg/profile-displayphoto-shrink_200_200/B4DZb55M21HEAY-/0/1747949245642?e=1763596800&v=beta&t=-hEoeB1dfrelajxEkZXr-pT-wVikcVyVNb5Zr9nDVCk" },
//   { id: 2, name: "Jane Doe", title: "UI/UX Designer", imageURL: "https://via.placeholder.com/150/28a745/ffffff?text=JD" },
//   { id: 3, name: "Alex Johnson", title: "Project Manager", imageURL: "https://via.placeholder.com/150/ffc107/333333?text=AJ" },
//   { id: 4, name: "Maria Garcia", title: "Data Analyst", imageURL: "https://via.placeholder.com/150/17a2b8/ffffff?text=MG" },
// ];
const API_URL = 'https://jsonplaceholder.typicode.com/users'
const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Add state for tracking errors
// Define the Custom Hook function
// const useUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

  // Data fetching logic (copied from App.jsx)
  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      setUsers(mockUserData); 
      setIsLoading(false); 
    }, 1500);

    // The empty array [] ensures this runs only once
  }, []); 

  // The hook returns the state variables needed by the component
  return { users, isLoading };
};

export default useUsers;