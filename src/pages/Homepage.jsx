import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

function Home() {
  return (
    
    <div className="home-container">
        <div className="title">
        <h2>Welcome to BlueAltair</h2>
        <img className = 'balogo' src="../hi.png" alt="BlueAltair Logo" />
        
        </div>
      
      <div className='buttonContainer'>
        {/* Link to Login page */}
        <Link className = 'button' to="/login">
          Login
        </Link>

        {/* Link to Signup page */}
        <Link className= 'button' to="/signup">
          Sign Up
        </Link>
        </div>
      </div>
      
    
  );
}


export default Home;
