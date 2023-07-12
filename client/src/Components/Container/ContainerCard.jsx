import React from 'react'
import Card from '../Card/Card'
import "./ContainerCard.css"


function ContainerCard({countries}) {
  return (
    <div className="container-cont">
      {countries.map((country)=>{
       return (     
         <Card 
           key={country.id}
          id={country.id}
          name={country.name}
          flags={country.flags}
          continents={country.continents}
          
          />
          
        )    
     })}
   
    </div>
  )
}

export default ContainerCard