import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignUp = () => {
    console.log(Auth)
    const [formState, setFormState] = useState({ username: '', email: '', password: '', phone: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();
        console.log('REDDD BALLLL', formState)
        // use try/catch instead of promises to handle errors
        try {
            console.log('YESSSSSSSSSS', formState)
            const { data } = await addUser({
                variables: { ...formState }
            })
            Auth.login(data.addUser.token);
            console.log('HELLLLLLO', data)
        } catch (e) {
            console.error(e);
        }

     
    };

    return (
        <main className='flex-row justify-center'>
            <div className='col-12 col-md-6'>
                <div className='card'>
                    <h4 className='card-header'>Sign Up:</h4>
                    <div className='card-body'>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className='form-input'
                                placeholder='Your name'
                                name='username'
                                type='username'
                                id='username'
                                value={formState.username}
                                onChange={handleChange}
                            />
                            <input
                                className='form-input'
                                placeholder='Your email'
                                name='email'
                                type='email'
                                id='email'
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <input
                                className='form-input'
                                placeholder='******'
                                name='password'
                                type='password'
                                id='password'
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <input
                                className='form-input'
                                placeholder='(***)-***-****'
                                name='phone'
                                type='phone'
                                id='phone'
                                value={formState.phone}
                                onChange={handleChange}
                            />
                            <button className='' type='submit'>
                                Submit
                            </button>
                        </form>
                        {error && <div>Sign up failed</div>}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SignUp;