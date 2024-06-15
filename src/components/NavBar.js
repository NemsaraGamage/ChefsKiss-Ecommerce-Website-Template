import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles.css';
import chefLogo from '../components/pics/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-logo">
        <img src={chefLogo} alt="Chef's Kiss Logo" className="logo-img" />
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/plan" className="nav-link">Plans</Link>
      </div>
      <div className="auth-buttons">
        <Link to="/" className="auth-button login">Login</Link>
        <Link to="/" className="auth-button signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default NavBar;
