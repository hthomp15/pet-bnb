import React from "react";

import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { Link } from "react-router-dom";

import PetList from "../components/PetList";

import Auth from "../utils/auth";


function Profile() {
    const { id: userId } = useParams();
    const ID = Auth.getProfile().data._id;
    const { loading, data } = useQuery( QUERY_USER, {
        variables: { id: ID }
        }); 
    const user = data?.me || {};
    console.log("user", user);
    if(loading){
        return <p>Loading...</p>
    }

    // Navigate to Profile if you are logged in 
    // if (Auth.loggedIn() && Auth.getProfile().data._id === ID) {
    //     return <Navigate to="/profile:id" />;
    //   }
    
    //   if (loading) {
    //     return <div>Loading...</div>;
    //   }
    
    //   if (!user?._id) {
    //     return (
    //       <h4>
    //         You need to be logged in to see this. Use the navigation links above to
    //         sign up or log in!
    //       </h4>
    //     );
    //   }

    return(
        <div className="profile-card">
            <div className="profile-card-header">
                <h3 className="profile-card-header-title">Profile</h3>
            </div>
            <div className="profile-card-body">
                <PetList />
            </div>
        </div>
    );
}


export default Profile;