import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Homepage from './pages/Homepage';
function App() {
  const [toggle, setToggle] = useState(false); // Track the toggle state (false for login, true for signup)

  const handleToggle = () => {
    setToggle(!toggle); // Toggle between true and false
  };

  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
        {/* Toggle Button
        <button
          onClick={handleToggle}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
            margin: '20px',
          }}
        >
          {toggle ? 'Go to Login' : 'Go to Sign Up'}
        </button> */}
      </div>

  );
}

export default App;
