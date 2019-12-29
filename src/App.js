import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, 
} from 'react-router-dom'
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Welcome from './components/Welcome';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center pt-5">
        <h1>Testing Page</h1>
      </div>
      <Router>
        <div className="row">
          <div className="col-12">
            <Menu/>
          </div>
        </div>
        <Route exact path="/" render={() =>  
          <Welcome />}/>
        <Route path="/home" render={() =>  
          <Home />}/>
        <Route path="/about" render={() =>  
          <About/>}/>
        <Route path="/contact" render={() =>  
          <Contact/>}/>
      </Router>
    </div>
  );
}

export default App;
