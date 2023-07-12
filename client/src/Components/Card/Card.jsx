import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
const Card = ({flags,name,id, continents,}) => {
 
  return (
    <Link to={`/detail/${id}`}>
    <div className='card-cont'>
      <div className='card-tittle'>
         <h1>Name: {name}</h1>
         <h2>Id: {id}</h2>
         <h3>Continent: {continents}</h3>
     </div>
     <div>
     <img src={flags} alt="flag" />
     </div>
    </div>
  </Link>
  )
}
 
export default Card