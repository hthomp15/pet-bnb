import React from "react";
import "./header.css";
import { Navbar } from '../../Common'

function Header() {
    return (
        <section className="header">
           <section className="header-top">
               <section className="header-top_logo">
                   <a href="/" className="header-logo">LOGO</a>
               </section>
               <section className="header-top_navbar">
                   <Navbar />
               </section>
           </section>
        </section>
    )
}

export default Header