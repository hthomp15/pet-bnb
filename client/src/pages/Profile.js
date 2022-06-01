import React from "react";

import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { Link } from "react-router-dom";

import PetList from "../components/PetList";

import Auth from "../utils/auth";
import UserPosts from "../components/UserPosts";


function Profile(props) {
    const { username: userParam } = useParams();
    const { loading, data } = useQuery( QUERY_USER, {
        variables: { username: userParam },
    });
    console.log(data, "data.pets");
    if(loading){
        return <p>Loading...</p>
    }
    const username = data.user.username
    const email = data.user.email
    const userData = data.user
    
    return(
        <main className="profile">
            <div className="profile-main-container"> 
                <div className="profile-content">
                    <div className="user">
                        <h2 className="username">{username}</h2>
                    </div>
                    <article>
                        <h3>About Me:</h3>
                        <span className="email">Email: {email}</span>
                    </article>
                </div>
                <div className="add-pets"> 
                    <button className="add-pet-btn" type="submit"> Add Pets</button>
                </div>
                <PetList pets={data.user}></PetList>
            </div>
            <div>
                <UserPosts posts={data.user} />
            </div>
        </main>
    );
}


export default Profile;