import React from 'react';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header/index.js';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SinglePost from './pages/SinglePost';
import Profile from './pages/Profile';
import Signup from './pages/SignUp';

import NewPost from './pages/NewPost.js';


// import Navbar from './components/Nav';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="page-container">
        <div className='content-wrap'>
      <Router>
        <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/post/:id" element={<SinglePost />} />
              <Route path="/newpost" element={<NewPost />} />

              <Route path="*" element={<NoMatch />} />
            </Routes>
        <Footer />
      </Router>
      </div>
      </div>
      
    </ApolloProvider>
  );
}

export default App;
