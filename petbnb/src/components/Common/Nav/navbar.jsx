import React from "react";
import './navbar.css'

function Navbar() {
    return(
        <section className="navbar">
            <ul>
                <li>
                    <a href="/home" className="navbar-item">Home</a>
                </li>
                    
                <li>
                    <a href="/profile" className="navbar-item">Profile</a>
                </li>

                <li>
                    <a href="about" className="navbar-item">About</a>
                </li>

                <li>
                    <a href="log" className="navbar-item">Login</a>
                </li>
            </ul>
            
        </section>
    )
}

export default Navbar;