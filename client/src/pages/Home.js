import React from "react";
import PostList from "../components/PostList";
// import PostForm from "../components/PostForm";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from '../utils/queries'

function Home () {
    const { loading, data } = useQuery( QUERY_POSTS)
    const posts = data?.posts || [];
    console.log(posts)
    return(
        <main className="dashboard">
                {loading ? (
                    <div>Loading...</div> 
                ) : (
                    <PostList posts={posts} title="Sitters In Need:"></PostList>
                )}
        </main>
    )
}

export default Home;