import { useState, useEffect }from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Header() {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  const profile = Auth.getProfile().data.username
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(profile);
  }, [profile]);

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-content-left">
            <Link to="/">
                <h1>PetBnB</h1>
            </Link>
        </div>
        <nav className="header-content-right">
            <Link to="/about"> About Us</Link>
            {Auth.loggedIn() ? (
            <>
              <Link to={`/profile/${user}`}>Me</Link>
              {/* <a href="/" onClick={logout}>
                Logout
              </a> */}
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
            <Link to="/newpost"> New Post </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;