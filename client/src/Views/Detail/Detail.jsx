import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
const Detail = ({match}) => {
   
  const [country,setCountry] = useState({});
  const [isLoading,setIsLoading] = useState(true);
  const [errors,setErrors] = useState(null);


  useEffect(()=>{
    const getCountry = async()=>{
      try {
        const response = await axios.get(`http://localhost:3001/countries/${match.params.id}`)
          setCountry(response.data)
          setIsLoading(false)
        
      } catch (error) {
        setErrors(error.message)
      }
    }
    getCountry()
  },[match.params.id]);

  if(isLoading){
    return <div>Loading.....</div>
  }
  if(errors){
    return <div>Error: {errors}</div>
  }
 
  return (
    <div>
      <div>
      
      <img src={country.name} alt="flag image" />
      </div>
      <h5>Name: {country.name}</h5>
      <h5>Id: {country.name}</h5>
      <h5>Continent:{country.continents}</h5>
      <h5>Capital: {country.capital}</h5>
      <h5>Subregion:{country.subregion}</h5>
      <h5>Area: {country.area}</h5>
      <h5>Population:{country.population}</h5>
      <h5>Activities</h5>
      {country.activities? country.activities.map((activity)=>{
        <ul key={activity.id}>{activity.name}</ul>
      }):null}
      
      <div>
        <Link to="/home">
         <button>Back to home</button>
        </Link>
        <Link to="/create">
         <button>Create activity</button>
        </Link>
      </div>
    </div>
  )
}

export default Detail