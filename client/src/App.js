import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// ApolloProvider - special component that will provide data to all the other components 
// ApolloClient - constructor function to help initialize the connection to GraphQL API server 
// InMemoryCache - enables Apollo Client to cache API response data 
// createHttpLink - control how Apollo Client makes a request (middleware for outbound network requests)

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path='/'
                element={<Home />}
              />
              <Route
                path='/login'
                element={<Login />}
              />
              <Route 
                path='/signup'
                element={<Signup />}
              />
              <Route path= "/profile">
                <Route path=":username" element={<Profile />} />
                <Route path="" element={<Profile />} />
              </Route>
                
              <Route 
                path="/thought/:id"
                element={<SingleThought />}
              />
              <Route
                path='*'
                element={<NoMatch />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
