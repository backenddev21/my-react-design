// src/App.jsx - The Main Router Component

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';

function App() {
  return (
    // 1. BrowserRouter wraps the entire app to enable routing
    <BrowserRouter>
      {/* 2. Simple Navigation Bar */}
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Home (User List)</Link>
        <Link to="/details">Test Detail Page</Link>
      </nav>

      {/* 3. Routes defines the component to render for each path */}
      <Routes>
        {/* Route 1: Displays HomePage when the path is exactly '/' */}
        <Route path="/" element={<HomePage />} />
        
        {/* Route 2: Displays DetailPage when the path is exactly '/details' */}
        <Route path="/details" element={<DetailPage />} />
        
        {/* Optional: Add a catch-all 404 route */}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;