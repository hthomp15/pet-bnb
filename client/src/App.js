import React from 'react';
import './App.css';
// import LandingPage from './components/LandingPage/index'
import Footer from './components/Footer/index'
import Dashboard from './components/Dashboard/index'

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Navbar from './components/Nav';

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
      <Navbar></Navbar>
      {/* <div className='App'> */}
      {/* <LandingPage></LandingPage> */}
      <Dashboard></Dashboard>
      <Footer></Footer>
      {/* </div> */}
    </ApolloProvider>
  );
}

export default App;
