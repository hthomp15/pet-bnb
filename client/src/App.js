import React from 'react';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Header from './components/Header/index.js';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SinglePost from './pages/SinglePost';
import Profile from './pages/Profile';
import Signup from './pages/SignUp';

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
      <Header />
      <div className="container">
        <Home />
      </div>
      <Footer></Footer>
    </ApolloProvider>
  );
}

export default App;
