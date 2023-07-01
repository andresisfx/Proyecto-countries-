import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import Searchbar from '../Searchbar/Searchbar'

function  Navbar({onSearch}) {
  return (
    <div className='nav-cont'>
      <div className={""}>
          <Searchbar onSearch={onSearch} />
      </div>
      <div className='nav-button'>
        <Link className='nav-link' to="/"><p>Landing page</p></Link>
        <Link className='nav-link' to="/home"><p>Home</p></Link>
        <Link className='nav-link' to="/create"><p>Crear actividad</p></Link>
        <Link className='nav-link' to="/detail/:id"><p>Detail </p></Link>
      </div> 
      
    </div>
  )
}

export default Navbar