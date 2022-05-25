import React from "react";
import "./header.css";
import { Navbar } from '..'

import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../../../utils/queries';

function Header() {

    const { loading, data } = useQuery(QUERY_USERS);
    console.log(data)
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