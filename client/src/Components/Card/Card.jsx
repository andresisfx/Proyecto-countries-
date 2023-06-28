import React from 'react'
import "./Card.css"
const Card = ({name,id,continent}) => {
  return (
    <div className='card-cont'>
      <div className='card-tittle'>
         <h1>{name}</h1>
         <h2>{id}</h2>
         <h3>{continent}</h3>
     </div>
    </div>
    
  )
}
 
export default Card