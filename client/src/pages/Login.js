import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);
  
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
        console.log("haha", event.target.email.value, event.target.password.value)
      try {
        const { data } = await login({
          variables: { ...formState }
        });

        console.log(data);
      
        Auth.login(data.login.token);
      } catch (e) {
        console.error("hello", e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };
  
    return (
      <main className='login-main-container'>
          <div className='login-form'>
            <h4 className='login-header'>Log In</h4>
            <div className='login-body'>
              <form onSubmit={handleFormSubmit}>
                <input
                  className='login-input'
                  placeholder='Your email'
                  name='email'
                  type='email'
                  id='email'
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className='login-input'
                  placeholder='******'
                  name='password'
                  type='password'
                  id='password'
                  value={formState.password}
                  onChange={handleChange}
                />
                <button className='login-button' type='submit'>
                  Submit
                </button>
              </form>
              {error && <div className="login-fail">Login failed. Please try again.</div>}
            </div>
          </div>
      </main>
    );
};

export default Login;