import React from "react";
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="stars"></div> {/* Add the stars element */}
      <div className="home-content">
        <h1>Welcome to Our Landing Page</h1>
        <p>This is the home page of our awesome site.</p>
      </div>
    </div>
  );
};

export default Home;
