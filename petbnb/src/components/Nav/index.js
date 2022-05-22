import React, { useState } from 'react';

function Nav() {
return (
<header className="flex-row px-1">
    <h2>
    <span>Petbnb</span>
    </h2>
    <nav>
        <ul className="flex-row">
            <li className="mx-2">
            Home 
            </li>
            <li>
            Dashboard 
            </li>
            <li>
            Profile 
            </li>
            <li>
            Login  
            </li>
        </ul>
    </nav>
</header>
);
}


export default Nav