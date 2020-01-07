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
import Footer from './components/Footer'

function App() {


  return (
    <div className="container-fluid bg-light" id="container" >
      <Router> 
        <div className="row">
          <Menu/>
        </div>
        <div className="row justify-content-center mb-5 mt-5">
          <h1 className="display-2">Heppaset</h1>
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
      <div id="footer" className="row mb-0 w-100 mt-5">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
