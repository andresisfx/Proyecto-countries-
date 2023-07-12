import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


function  Navbar() {
  return (
    <div className='nav-cont'>
     
      <div className='nav-button'>
        <Link className='nav-link' to="/"><p>Landing page</p></Link>
        <Link className='nav-link' to="/home"><p>Home</p></Link>
        <Link className='nav-link' to="/create"><p>Crear actividad</p></Link>
       
      </div> 
      
    </div>
  )
}

export default Navbar