import React,{useState,useEffect} from 'react';
import "./Form.css"
import axios from "axios"


function Form() {

 const [datos,stDatos] = useState({
  name:"",
  difficulty:"",
  duration:"",
  countryId:[]
 })

 const [countries,setCountries] = useState([])
 const [errors,setErrors] = useState({
  name:"",
  difficulty:"",
  duration:"",
  season:"",
  countryId:"" 
 })

const fetchCountries = async()=>{
  try {
    const response = await axios.get("http://localhost:3001/countries")
    setCountries(response.data)
  } catch (error) {
    console.error("error fetching countries ", error)
  }
}

 useEffect(()=>{
   fetchCountries();
   dispatch(getActivities())
 })


  return (
    <div className='form-cont'>
   
      <form action="" >
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Difficulty</label>
        <input type="text" /> 
        <label htmlFor="">Duration</label>
        <input type="text" />
        <label htmlFor="">Season</label>
        <input type="text" />
        <label htmlFor="">Countries</label>
        <input type="text" />
        <button>Create activity</button>
      </form>
    </div>
  )
}

export default Form