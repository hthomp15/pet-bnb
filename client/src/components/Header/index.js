import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-content-left">
            <Link to="/">
                <h1>PetBnB</h1>
            </Link>
        </div>
        <div className="header-content-right">
            <Link to="/about"> About Us</Link>
            <Link to="/login"> Login </Link>
            <Link to="/signup"> Sign Up </Link>
            <Link to="/post/:id"> New Post </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;