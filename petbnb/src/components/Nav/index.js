import React from "react";

function Nav(props) {
    const {
      categories = [],
      setCurrentCategory,
      currentCategory,
      contactSelected,
      setContactSelected
    } = props;
    
    return (
      <header className="flex-row px-1">
          <div>
            <a data-testid="link" href="/">
                <h1>PetBnB</h1>
                <p> Welcome to PetBnB!</p>
            </a>
          </div>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a data-testid="register" href="#register">
                Register
              </a>
            </li>
            <li className="mx-2">
              <a data-testid="login" href="#login">
                Login
              </a>
            </li>
            <li className="mx-2">
              <a data-testid="register" href="#register">
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Nav;