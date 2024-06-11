import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles.css';

const NavBar = () => {
  return (
    <>
    <div className="navbar">
      <Link to="/" className="logo">MovieBlocks</Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <div className="genre-dropdown">
          <Link to="#" className="nav-link">Genre</Link>
          <div className="dropdown-menu">
            <Link to="/" className="dropdown-item">Comedy</Link>
            <Link to="#" className="dropdown-item">Horror</Link>
            <Link to="#" className="dropdown-item">Adventure</Link>
            <Link to="#" className="dropdown-item">Action</Link>
            <Link to="#" className="dropdown-item">Thriller</Link>
            <Link to="#" className="dropdown-item">Mystery</Link>
            <Link to="#" className="dropdown-item">Crime</Link>
            <Link to="#" className="dropdown-item">Family</Link>
            <Link to="#" className="dropdown-item">Drama</Link>
            <Link to="#" className="dropdown-item">War</Link>
          </div>
        </div>
        <Link to="/" className="nav-link">Top Picks</Link>
        <Link to="/" className="nav-link">TV Shows</Link>
      </div>
    </div>
    </>
  );
}

export default NavBar;