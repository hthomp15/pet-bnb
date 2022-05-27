import React from "react";
import Posts from "./Posts/index";
import AddPets from "./AddPets/index"
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from '../../utils/queries'

function Home () {
    const { loading, data } = useQuery( QUERY_POSTS)
    const posts = data?.posts || [];
    console.log(posts)
    return(
        <main className="dashboard">
            <div className="profile-main-container"> 
                <div className="profile-content">
                    <div className="user">
                        <h2 className="username">Hthompson</h2>
                    </div>
                    <article>
                        <h3>About Me:</h3>
                        <span className="email">Email: hthompson@gmail.com</span>
                        <span className="phone">Phone: (518) 637-7689</span>
                        <span className="address">Address: 139 Skillman Ave Brooklyn Ny, 11211</span>
                    </article>
                </div>
                <div className="add-pets"> 
                    <button className="add-pet-btn" type="submit"> Add Pets</button>
                    <button className="add-post-btn" type="submit"> New Post</button>
                </div>
                <AddPets></AddPets>
            </div>
           
    
                {loading ? (
                    <div>Loading...</div> 
                ) : (
                    <Posts posts={posts} title="Sitters In Need:"></Posts>
                )}

           
        </main>
    )
}

export default Home;