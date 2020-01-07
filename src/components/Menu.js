import {
    BrowserRouter as Router,
    Route, Link, 
  } from 'react-router-dom'
  import React from 'react'
  
  const Menu = () => {
  
    return (
    <>
      <nav className="navbar navbar-light bg-dark w-100 p-4">
   
            
                <Link to ='/home'  className="nav-link text-light">Etusivu</Link>

                <Link to='/about'  className="nav-link text-light">Tietoa meistä</Link>
     
                <Link to='/contact'  className="nav-link text-light">Ota Yhteyttä</Link>

      </nav>
    </>
    )
  }

  export default Menu;