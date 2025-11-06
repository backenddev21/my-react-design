// src/HomePage.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import ProfileCard from './ProfileCard'; 
import useUsers from './useUsers'; // 1. Import the Custom Hook
//test
function HomePage() {
  
  const { users, isLoading } = useUsers(); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  // The filtering logic remains the same
  const filteredUsers = users.filter(user => {
    return user.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="app-container">
      <h1>Searchable User Profiles</h1>
      <input type="text"placeholder="Search users by name..." className="search-input" value={searchTerm} onChange={handleSearchChange} disabled={isLoading}/>
      <div className="profile-list-container">
        {isLoading ? ( <h2 style={{ color: '#007bff' }}>Loading user data...</h2>) : (
        filteredUsers.map(user => (
        <Link to={`/user/${user.id}`} key={user.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ProfileCard name={user.name} title={user.title} imageURL={user.imageURL} />
        </Link>)))}
      </div>
    </div>
  );
}

export default HomePage;