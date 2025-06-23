// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/courses" className="nav-item">Courses</Link>
      <Link to="/languages" className="nav-item">Languages</Link>
      <Link to="/contact" className="nav-item">Contact</Link>
      <Link to="/hobbies" className="nav-item">Hobbies</Link>
    </nav>
  );
};

export default Navbar;
