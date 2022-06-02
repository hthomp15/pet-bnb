import React, { useState } from 'react';
import { ADD_POSTS} from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';


const NewPost = () => {
  const[newPost, { error }] = useMutation(ADD_POSTS);
  const [input, setInput] = useState({
    username: '',
    dateNeeded: '',
    postText: ''
  });

  async function submitForm(e) {
    e.preventDefault();
    console.log('input', input);
    try {
      const { data } = await newPost( {
        variables: { ...input },
      });
      console.log('data', data);
    } catch (e) {
      console.error(e);
    }
  }

  function handleChange(event) {
    const newInput = { ...input };
    newInput[event.target.name] = event.target.value;
    setInput(newInput);
    console.log(newInput);
  }

  return (
    <form onSubmit={(e)=> submitForm(e)} >
        <div>
            <p>Username</p>
            <input onChange={(e)=> handleChange(e)} type="text" name="username" value={input.username}/>
            <label></label>
        </div>
        <div>
            <p>Dates Needed:</p>
            <input onChange={(e)=> handleChange(e)} type="text" name="dateNeeded" value={input.dateNeeded}/>
            <label></label>
        </div>
        <div>
            <p>Post Text</p>

            <input onChange={(e)=> handleChange(e)} type="text" name="postText" value={input.postText}/>
            <label></label>
        </div>
        <button onClick={(e)=>submitForm(e)}type="submit">Submit</button>

    </form>
  );
};

export default NewPost;


