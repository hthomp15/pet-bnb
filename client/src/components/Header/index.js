import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-content-left">
          <h1>PetBnB</h1>
        </div>
        <div className="header-content-right">
          <a href="/">About</a>
          <a href="/">Login</a>
          <a href="/">Sign Up</a>
          <a href="/">New Post</a>
        </div>
      </div>
    </header>
  );
}

export default Header;