import React from 'react'
import "./Card.css"
const Card = ({flags,name,id, continents}) => {
  return (
    <div className='card-cont'>
      <div className='card-tittle'>
         <h1>Name: {name}</h1>
         <h2>Id: {id}</h2>
         <h3>Continent: {continents}</h3>
     </div>
     <div>
     <img src={flags} alt="bandera" />
     </div>
    </div>
    
  )
}
 
export default Card