import React, { useState } from 'react';
import { ADD_POSTS} from '../utils/mutations';
import { useMutation } from '@apollo/client';


const NewPost = () => {
    const [newPostForm, setNewPostForm] = useState({
        username: '',
        postText: ''
    }) 

    const [addPost, error] = useMutation(ADD_POSTS)
    function onChangeData(event) {
        const {name, value} = event.target
        setNewPostForm({... newPostForm, [name]: value})
    }

    async function handleSubmitButton(event) {
        event.preventDefault()
        console.log(newPostForm.postText)
        try {
            const {data} = await addPost({
                variables:{input: newPostForm.postText}
            })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <form onSubmit={handleSubmitButton}>
        <div>
            <p>Username</p>
            <input type="text" name="username" value={newPostForm.username} onChange={onChangeData}/>
            <label></label>
        </div>
        <div>
            <p>Post Text</p>
            <input type="text" name="postText" value={newPostForm.postText} onChange={onChangeData}/>
            <label></label>
        </div>
        <button onClick={handleSubmitButton}>Submit</button>
    </form>
  );
};

export default NewPost;