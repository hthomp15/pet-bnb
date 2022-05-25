import React from 'react';
import './App.css';
import { Header, Navbar } from './components/Common'

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from './utils/queries';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});



// console.log(client)



function App() {

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  // const { loading, data } = useQuery(QUERY_USERS);
  return (
    <ApolloProvider client={client}>
      {/* <div className='App'> */}
        <Header />

      {/* </div> */}
    </ApolloProvider>
  );
}

export default App;
