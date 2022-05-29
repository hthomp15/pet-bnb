import React, { useState } from 'react';
import { ADD_POSTS} from '../utils/mutations';
import { useMutation } from '@apollo/client';


const newPost = () => {
    const [ newPostForm, setNewPostForm ] = useState({
        username: '',
        postText: ''
    }) 
    const [addPost, {error}] = useMutation(ADD_POSTS)
    function onChangeData(event) {
        const {name, value} = event.target
        setNewPostForm({... newPostForm, [name]: value})
    }

    async function handleSubmitButton(event) {
        event.preventDefault()
        try {
            const {data} = await addPost({
                variables:{input:{... newPostForm}}
            })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <form >
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
        <button>Submit</button>
    </form>
  );
};

export default newPost;