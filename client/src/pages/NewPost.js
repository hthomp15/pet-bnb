import React, { useState } from 'react';
import { ADD_POSTS} from '../utils/mutations';
import { useMutation } from '@apollo/client';


const NewPost = () => {
    const [formState, setFormState] = useState({ username: '', postText: '' });
const [login, { error }] = useMutation(ADD_POSTS);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
        console.log("haha", event.target.username.value, event.target.postText.value, event.target.dateNeeded.value)
      try {
        const { data } = await ADD_POSTS({
          variables: {input:{ ...formState }}
        });

        console.log(data);
    
      } catch (e) {
        console.error("hello", e);
      }
  
      // clear form values
      setFormState({
        username: '',
        dateNeeded: '',
        postText: '',
      });
    };

  return (
    <form >
        <div>
            <p>Username</p>
            <input type="text" name="username" value={formState.username} onChange={handleChange}/>
            <label></label>
        </div>
        <div>
            <p>Dates Needed:</p>
            <input type="text" name="dateNeeded" value={formState.dateNeeded} onChange={handleChange}/>
            <label></label>
        </div>
        <div>
            <p>Post Text</p>
            <input type="text" name="postText" value={formState.postText} onChange={handleChange}/>
            <label></label>
        </div>
        <button onSubmit={handleFormSubmit}>Submit</button>
    </form>
  );
};

export default NewPost;

