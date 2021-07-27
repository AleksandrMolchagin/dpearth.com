import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import './App.css';




function App() {
  return (
   <>
   <Router>
      <Navbar />
      <Switch>
      <Route path='/projects' component={Projects} />
      </Switch>
      </Router>
  </>
  );
}

export default App;
