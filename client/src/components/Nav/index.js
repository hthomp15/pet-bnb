import React from "react"

function Navbar () {


    return(
        <header className="navbar">
            <h1><a>PetBnb</a></h1>

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
            
        </header>
    )
}
    


export default Navbar