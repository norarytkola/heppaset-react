import {
    BrowserRouter as Router,
    Route, Link, 
  } from 'react-router-dom'
  import React from 'react'
  
  const Menu = () => {
  
    return (
    <>
      <nav className="navbar navbar-light" >
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to ='/home'  className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to='/about'  className="nav-link">About</Link>
            </li>
            <li className="nav-item">
                <Link to='/contact'  className="nav-link">Contact</Link>
            </li>
        </ul>
      </nav>
    </>
    )
  }

  export default Menu;