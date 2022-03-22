import React from 'react';
import { Routes , Route, userNavigate, Router } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';

const App = () => {
  return (
  <Router>
     <Route path="login" element={<Login />} />
     <Route path="/*" element={<Home />} />
  </Router>
  )
};

export default App;
