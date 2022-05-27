import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// import Navbar from './components/Nav';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      {/* <Navbar></Navbar> */}
      {/* <div className='App'> */}
        {/* <Header /> */}
        <Login />
        <Register />
      {/* </div> */}
    </ApolloProvider>
  );
}

export default App;
