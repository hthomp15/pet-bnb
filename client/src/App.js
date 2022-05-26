import React from 'react';
import './App.css';
import { Header, Navbar } from './components/Common';
import Login from './components/Login';
import Register from './components/Register';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from './utils/queries';

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
      {/* <div className='App'> */}
        <Header />
        {/* <Login /> */}
        <Register />
      {/* </div> */}
    </ApolloProvider>
  );
}

export default App;
